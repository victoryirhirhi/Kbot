export const LESSONS = {
  "Novice": [
    {
      title: "What is Cryptocurrency",
      content: `
**Introduction**
:contentReference[oaicite:0]{index=0} is a form of digital money that exists only online and uses cryptography (advanced math) to secure transactions. Unlike traditional currencies (like USD or NGN), no central bank or government controls it. It operates on decentralized networks called blockchains.

**Key Features**
- 💻 Digital — exists only online
- 🏦 Decentralized — no central authority
- 🔐 Secure — protected by cryptography
- 🌍 Global — can be sent anywhere instantly

**Examples**
Popular cryptocurrencies include :contentReference[oaicite:1]{index=1} (BTC), :contentReference[oaicite:2]{index=2} (ETH), and :contentReference[oaicite:3]{index=3} (BNB).

**Why It Matters**
- Enables fast, low-cost cross-border payments
- Provides access to financial tools for the unbanked
- Offers alternative investment opportunities
`
    },
    {
      title: "How Blockchain Works",
      content: `
**Introduction**
:contentReference[oaicite:4]{index=4} is the technology that powers cryptocurrencies. It is like a public digital ledger stored across thousands of computers worldwide.

**How It Works**
- New transactions are grouped into blocks
- Each block is verified by many computers (nodes)
- Verified blocks are linked together in a chain

**Key Properties**
- 🔒 Immutable — data can’t be changed once added  
- 🌐 Distributed — everyone has a copy  
- 👁️ Transparent — anyone can view it  
- ⚡ Secure — uses cryptography

**Analogy**
Imagine a shared :contentReference[oaicite:5]{index=5} file where every entry must be approved by all before it’s saved. That’s how blockchain keeps data honest.
`
    },
    {
      title: "Setting up Crypto Wallets",
      content: `
**What is a Wallet**
A :contentReference[oaicite:6]{index=6} stores your private keys (digital passwords) and allows you to send, receive, and hold cryptocurrencies.

**Types of Wallets**
- **Hot Wallets** (online): Apps like :contentReference[oaicite:7]{index=7}, :contentReference[oaicite:8]{index=8} — convenient but less secure
- **Cold Wallets** (offline): Hardware like :contentReference[oaicite:9]{index=9} or :contentReference[oaicite:10]{index=10} — very secure but less convenient

**Setting One Up**
1. Download a trusted wallet app
2. Backup your recovery phrase (seed phrase) securely
3. Never share your seed phrase
4. Add funds by buying or receiving from others
`
    },
    {
      title: "Sending & Receiving Crypto",
      content: `
**Sending**
- Get the recipient’s public wallet address
- Choose the correct network (:contentReference[oaicite:11]{index=11} uses BTC network, :contentReference[oaicite:12]{index=12} uses ERC20, :contentReference[oaicite:13]{index=13} uses BEP20)
- Enter amount and confirm

**Receiving**
- Copy your own public address and send to the sender
- Wait for the network to confirm the transaction

**Safety Tips**
- Always double-check addresses
- Use QR codes to avoid errors
- Start with small test amounts
- Always pick the correct network
`
    },
    {
      title: "Crypto Safety and Scams",
      content: `
**Common Scams**
- Fake airdrops and giveaways
- Phishing websites
- Ponzi or pyramid schemes
- Fake support agents on social media

**Safety Rules**
- Never share your seed phrase
- Enable 2FA (two-factor authentication)
- Use only official links and exchanges
- Be wary of "guaranteed profits"

**Security Tools**
- Use cold wallets for large funds
- Keep your apps updated
- Use antivirus and a VPN when possible
`
    },
    {
      title: "Trading vs Investing",
      content: `
**:contentReference[oaicite:14]{index=14}**
- Buying and selling crypto frequently (daily or weekly)
- Goal: profit from short-term price changes
- Requires constant monitoring and analysis
- Higher risk, higher reward

**:contentReference[oaicite:15]{index=15}**
- Buying crypto and holding long-term (months or years)
- Goal: grow wealth over time
- Requires patience, less frequent action
- Lower risk, lower reward

**Summary**
- Traders focus on *timing the market*
- Investors focus on *time in the market*
`
    },
    {
      title: "How Crypto Trading Works",
      content: `
**Market Types**
- **Spot Market** — buy and sell actual coins
- **Futures Market** — speculate on future prices using contracts

**Key Concepts**
- Exchanges act like marketplaces (e.g. :contentReference[oaicite:16]{index=16}, :contentReference[oaicite:17]{index=17})
- Traders use charts to analyze trends
- Prices change based on supply and demand
- Profit comes from buying low and selling high

**Risks**
- Volatility: crypto prices can change rapidly
- Leverage: borrowing to trade increases risk
- Emotional decisions can cause losses
`
    }
  ],

  "NoviceQuiz": [
    {
      q: "Which of these is a feature of cryptocurrency?",
      options: ["Centralized", "Government controlled", "Decentralized", "Paper-based"],
      answer: 2
    },
    {
      q: "What does blockchain store?",
      options: ["Bank notes", "Digital transaction records", "Physical coins", "Passwords"],
      answer: 1
    },
    {
      q: "What does a crypto wallet actually store?",
      options: ["Coins", "Private keys", "Public addresses only", "Bank accounts"],
      answer: 1
    },
    {
      q: "Which wallet is safer for large funds?",
      options: ["Hot wallet", "Cold wallet", "Mobile wallet", "Exchange wallet"],
      answer: 1
    },
    {
      q: "What is essential to send crypto?",
      options: ["Bank account number", "Private key", "Public wallet address", "Phone number"],
      answer: 2
    },
    {
      q: "What should you never share?",
      options: ["Seed phrase", "Public key", "Exchange link", "QR code"],
      answer: 0
    },
    {
      q: "What is a common crypto scam?",
      options: ["Airdrops", "Ponzi schemes", "Hardware wallets", "VPN"],
      answer: 1
    },
    {
      q: "Trading is mainly for:",
      options: ["Long-term holding", "Short-term profit", "Buying goods", "Mining"],
      answer: 1
    },
    {
      q: "Investing is mainly for:",
      options: ["Short-term profit", "Long-term growth", "Daily trades", "Mining"],
      answer: 1
    },
    {
      q: "Which is riskier, trading or investing?",
      options: ["Investing", "Trading", "Both same", "Neither"],
      answer: 1
    },
    {
      q: "Where do traders buy/sell crypto?",
      options: ["Wallets", "Banks", "Exchanges", "VPN"],
      answer: 2
    },
    {
      q: "What moves crypto prices?",
      options: ["Random", "Government decree", "Supply and demand", "VPNs"],
      answer: 2
    },
    {
      q: "What market involves real coin ownership?",
      options: ["Spot market", "Futures market", "Options", "Banks"],
      answer: 0
    },
    {
      q: "What makes crypto risky?",
      options: ["Volatility", "Stable prices", "Insurance", "Regulation"],
      answer: 0
    },
    {
      q: "What mindset causes losses?",
      options: ["Patience", "Emotional trading", "Risk control", "Learning"],
      answer: 1
    }
  ]
};
