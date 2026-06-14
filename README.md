<p align="center">
</p>

# @0xward/proofofalpha-core

<p align="center">
  <a href="https://www.npmjs.com/package/@0xward/proofofalpha-core"><img src="https://img.shields.io/npm/v/@0xward/proofofalpha-core?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/@0xward/proofofalpha-core"><img src="https://img.shields.io/npm/dm/@0xward/proofofalpha-core?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://www.npmjs.com/package/@0xward/proofofalpha-core"><img src="https://img.shields.io/npm/l/@0xward/proofofalpha-core?style=flat-square" alt="License" /></a>
</p>

An automated blockchain analytics and routing framework for tracking on-chain wallet velocity and optimizing decentralized finance liquidity placement across the Celo ecosystem.

---

## Installation

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0 (or yarn >= 1.22.0 / pnpm >= 8.0.0)

### Package Deployment
Execute the targeted acquisition command matching your production environment package manager setup:

```bash
# Using Node Package Manager (Default)
npm install @0xward/proofofalpha-core

# Using Yarn Package Manager
yarn add @0xward/proofofalpha-core

# Using PNPM Package Manager
pnpm add @0xward/proofofalpha-core
```

### Peer Dependencies
For secure runtime cryptographic executions and ledger state mutations, ensure your runtime container establishes communication boundaries with the primary network bindings if processing on-chain blocks:
- For Celo EVM networks: viem (>= 2.x) or ethers (>= 6.x) for core blockchain analytics integration.

---

## Core Capabilities

* **On-Chain Forensic Analytics:** Programmatically parses wallet transactions to determine interaction depth and volume metrics.
* **Cryptographic Score Scoring:** Computes immutable reputation indices for addresses interacting within peer-to-peer liquidity networks.
* **Automated Yield Routing:** Structural interfaces designed for execution routing against liquidity protocols like Aave V3.

---

## Quick Start

```javascript
const { ProofOfAlpha } = require("@0xward/proofofalpha-core");
const poa = new ProofOfAlpha();

async function init() {
    const report = await poa.analyzeWalletHistory("0x1722875731a404937DeE0dB60998B24838BD638B");
    console.log("Analytics Report:", report);
}
init();
```

---

## API Reference

### Methods

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| `analyzeWalletHistory` | `walletAddress: string` | `Promise<Object>` | Validates target history parameters and outputs calculated tiers. |
| `getArenaLeaderboard` | None | `Promise<Array>` | Returns array payload representing verified matrix performance rankings. |

---

## License

This project is licensed under the terms of the MIT License.