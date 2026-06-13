<p align="center">
  <img src="https://raw.githubusercontent.com/SamAnand/SVG-Animations/master/grid.svg" alt="0xward Core Intelligence Sync Animation" width="120" height="120" />
</p>

<p align="center">
  <img src="./assets/header-sync.svg" alt="0xward Core Intelligence Sync Animation" width="120" height="120" />
</p>

# @0xward/proofofalpha-core

<p align="center">
  <a href="https://www.npmjs.com/package/@0xward/proofofalpha-core"><img src="https://img.shields.io/npm/v/@0xward/proofofalpha-core?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/@0xward/proofofalpha-core"><img src="https://img.shields.io/npm/dm/@0xward/proofofalpha-core?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://www.npmjs.com/package/@0xward/proofofalpha-core"><img src="https://img.shields.io/npm/l/@0xward/proofofalpha-core?style=flat-square" alt="License" /></a>
</p>

Celo Alpha Intelligence Analytics Core—core computational logic for decentralized intelligence frameworks built on CELO ecosystems.


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