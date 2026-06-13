const { ProofOfAlpha } = require("../index.js");
const poa = new ProofOfAlpha();
console.log("🕵️ Analyzing on-chain intelligence data on Celo...");
poa.analyzeWalletHistory("0x1722875731a404937DeE0dB60998B24838BD638B").then(res => console.log("Result:", res));
console.log("✅ [proofofalpha-core] Demo running successfully!");