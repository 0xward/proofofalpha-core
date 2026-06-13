# @0xward/proofofalpha-core

[![NPM Version](https://img.shields.io/npm/v/@0xward/proofofalpha-core)](https://www.npmjs.com/package/@0xward/proofofalpha-core)
[![NPM Downloads](https://img.shields.io/npm/dm/@0xward/proofofalpha-core)](https://www.npmjs.com/package/@0xward/proofofalpha-core)
[![License](https://img.shields.io/npm/l/@0xward/proofofalpha-core)](https://opensource.org/licenses/MIT)

The @0xward/proofofalpha-core library acts as an automated blockchain analytics and routing framework for tracking on-chain wallet velocity and optimizing decentralized finance liquidity placement across the Celo ecosystem.

---

## Installation

```bash
npm install @0xward/proofofalpha-core
```

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