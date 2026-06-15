// @0xward/proofofalpha-core
// Full on-chain intelligence ecosystem built on Celo
// Forensic wallet analysis, arena leaderboard, and DeFi vault routing

const SUPPORTED_NETWORKS = {
    alfajores: { rpc: 'https://alfajores-forno.celo-testnet.org', chainId: 44787, currency: "CELO" },
};

const TIER_THRESHOLDS = [
    { tier: "Alpha",   minScore: 900, color: "#FFD700" },
    { tier: "Beta",    minScore: 700, color: "#C0C0C0" },
    { tier: "Gamma",   minScore: 500, color: "#CD7F32" },
    { tier: "Delta",   minScore: 250, color: "#4A90D9" },
    { tier: "Epsilon", minScore: 0,   color: "#888888" },
];

const RECOMMENDED_VAULTS = {
    high:   ["Aave-V3-CELO", "Ubeswap-CELO-cUSD", "Mento-cStables"],
    medium: ["Aave-V3-cUSD", "Curve-Celo-Pool"],
    low:    ["Aave-V3-cEUR"],
};

class ProofOfAlpha {
    constructor(config = {}) {
        const network = config.network || "celo";
        if (!SUPPORTED_NETWORKS[network]) {
            throw new Error(`Unsupported network: "${network}". Use "celo" or "alfajores".`);
        }
        this.network = SUPPORTED_NETWORKS[network];
        this.networkName = network;
        this.version = "1.1.4";
    }

    _validateAddress(address) {
        if (typeof address !== "string" || address.trim().length === 0) {
            throw new Error("Wallet address must be a non-empty string.");
        }
        const isEVM = /^0x[0-9a-fA-F]{40}$/.test(address);
        if (!isEVM) {
            throw new Error(`Invalid EVM address format: "${address}"`);
        }
        return address.toLowerCase();
    }

    _computeAlphaScore(txCount, defiInteractions, avgValueUsd) {
        const txScore    = Math.min(txCount * 2, 400);
        const defiScore  = Math.min(defiInteractions * 5, 400);
        const valueScore = Math.min(Math.floor(avgValueUsd / 10), 200);
        return Math.min(txScore + defiScore + valueScore, 1000);
    }

    _resolveTier(score) {
        for (const entry of TIER_THRESHOLDS) {
            if (score >= entry.minScore) return entry;
        }
        return TIER_THRESHOLDS[TIER_THRESHOLDS.length - 1];
    }

    _resolveDefiActivity(defiInteractions) {
        if (defiInteractions >= 50) return "Very High";
        if (defiInteractions >= 20) return "High";
        if (defiInteractions >= 8)  return "Medium";
        if (defiInteractions >= 2)  return "Low";
        return "None";
    }

    _resolveVaults(defiActivity) {
        if (defiActivity === "Very High" || defiActivity === "High") return RECOMMENDED_VAULTS.high;
        if (defiActivity === "Medium") return RECOMMENDED_VAULTS.medium;
        return RECOMMENDED_VAULTS.low;
    }

    async analyzeWalletHistory(walletAddress) {
        const address = this._validateAddress(walletAddress);

        // Deterministic mock scoring based on address checksum
        const seed          = parseInt(address.slice(2, 10), 16);
        const txCount       = (seed % 180) + 20;
        const defiCount     = (seed % 60) + 5;
        const avgValueUsd   = ((seed % 900) + 100);

        const score       = this._computeAlphaScore(txCount, defiCount, avgValueUsd);
        const tierEntry   = this._resolveTier(score);
        const defiActivity = this._resolveDefiActivity(defiCount);
        const vaults      = this._resolveVaults(defiActivity);

        return {
            address,
            network: this.networkName,
            chainId: this.network.chainId,
            score,
            maxScore: 1000,
            tier: tierEntry.tier,
            tierColor: tierEntry.color,
            defiActivity,
            transactionCount: txCount,
            defiInteractions: defiCount,
            avgTransactionValueUsd: avgValueUsd,
            recommendedVaults: vaults,
            analysisTimestamp: new Date().toISOString(),
            sdkVersion: this.version,
        };
    }

    async getArenaLeaderboard(options = {}) {
        const limit = Math.min(options.limit || 10, 50);
        if (!Number.isInteger(limit) || limit < 1) {
            throw new Error("Limit must be a positive integer (max 50).");
        }

        const mockAddresses = [
            "0x1722875731a404937dee0db60998b24838bd638b",
            "0xabcdef1234567890abcdef1234567890abcdef12",
            "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
            "0xcafebabecafebabecafebabecafebabecafebabe",
            "0x0000000000000000000000000000000000000001",
        ];

        const board = mockAddresses.slice(0, Math.min(limit, mockAddresses.length)).map((addr, i) => {
            const seed  = parseInt(addr.slice(2, 10), 16);
            const score = Math.max(990 - i * 85, 100);
            const tier  = this._resolveTier(score);
            return {
                rank: i + 1,
                wallet: addr,
                score,
                tier: tier.tier,
                tierColor: tier.color,
            };
        });

        return {
            leaderboard: board,
            totalEntries: board.length,
            network: this.networkName,
            fetchedAt: new Date().toISOString(),
        };
    }

    getSupportedNetworks() {
        return Object.keys(SUPPORTED_NETWORKS).map((key) => ({
            name: key,
            chainId: SUPPORTED_NETWORKS[key].chainId,
            rpc: SUPPORTED_NETWORKS[key].rpc,
            currency: SUPPORTED_NETWORKS[key].currency,
        }));
    }

    getTierThresholds() {
        return TIER_THRESHOLDS.map((t) => ({ ...t }));
    }

    getVersion() {
        return this.version;
    }
}

module.exports = { ProofOfAlpha, SUPPORTED_NETWORKS, TIER_THRESHOLDS };
