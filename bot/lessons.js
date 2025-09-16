export const LESSONS = {
  Novice: [
    {
      title: "What is Cryptocurrency",
      parts: [
`📍 *Part 1: Introduction to Cryptocurrency*

Cryptocurrency is a form of digital money that exists only online. It uses cryptography to secure transactions and control the creation of new units. The most famous cryptocurrency is **Bitcoin**, launched in 2009.`,
`📍 *Part 2: Key Features of Crypto*

- *Decentralized*: No single authority (like a bank) controls it.
- *Global*: Move value across borders quickly.
- *Programmable*: Some blockchains support smart contracts (automated code).`,
`📍 *Part 3: Why Cryptos Matter*

Cryptocurrencies enable financial access, fast cross-border payments, and new kinds of applications (DeFi, NFTs). They are volatile and experimental, so learn before you invest.`
      ],
      quiz: []
    },
    {
      title: "How Blockchain Works",
      parts: [
`🔗 *Part 1: Blockchain Overview*

A blockchain is a shared, chronological ledger. Transactions are collected into blocks, and each block references the previous block, making tampering very difficult.`,
`🔗 *Part 2: Verification Process*

When you broadcast a transaction, network nodes validate it. Depending on the chain, miners or validators process and confirm transactions, add blocks, and secure the network.`,
`🔗 *Part 3: Why It’s Secure*

Thanks to cryptography and decentralization, changing past data requires controlling most of the network—which is extremely hard for large public chains.`
      ],
      quiz: []
    },
    {
      title: "Setting up Wallets",
      parts: [
`👛 *Part 1: What is a Wallet?*

A crypto wallet stores the private keys that give you access to your funds. It is *not* the same as your balance; the blockchain holds balances, while your keys prove ownership.`,
`👛 *Part 2: Hot vs Cold Wallets*

- *Hot wallets*: Apps connected to the internet (MetaMask, Trust Wallet). Convenient but more exposed.
- *Cold wallets*: Hardware devices (Ledger, Trezor). Much safer for large amounts.`,
`👛 *Part 3: Setup & Safety*

When creating a wallet write down the seed phrase and store it offline. Never share it. Use device security, backups, and official wallet sources.`
      ],
      quiz: []
    },
    {
      title: "Sending & Receiving Crypto",
      parts: [
`📤 *Part 1: Sending Basics*

To send crypto you need the recipient’s public address. Paste it exactly, choose the correct network, enter the amount, and confirm the transaction. Fees (gas) apply.`,
`📥 *Part 2: Receiving & Confirmations*

To receive, share your wallet address or QR. After sending, transactions require confirmations by the network; times depend on the blockchain.`,
`📎 *Part 3: Safety Tips*

Always test with a small amount first, double-check addresses, and pick the right token standard (ERC-20, BEP-20, etc.) to avoid loss.`
      ],
      quiz: []
    },
    {
      title: "Crypto Safety and Scams",
      parts: [
`🛡️ *Part 1: Common Scams*

Phishing sites, fake giveaways, impersonation, and rug-pulls are common. Scammers often ask for seed phrases or request you to 'verify' by sending funds.`,
`🛡️ *Part 2: Practical Safety*

Never share your seed phrase. Enable 2FA on exchanges. Use hardware wallets for large holdings. Verify links and use bookmarks for official sites.`,
`🛡️ *Part 3: How to Recover and Report*

If you lose funds due to a scam, report to the exchange and local authorities. Use block explorers to track transactions and gather evidence.`
      ],
      quiz: []
    }
  ],

  Intermediate: [],
  Professional: []
};
