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
Popular cryptocurrencies include :contentReference[oaicite:1]{index=1} (BTC), :contentReference[oaicite:2]{index=2} (ETH), and :contentReference[oaicite:3]{index=3}.

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
`
    },
    {
      title: "Setting up Crypto Wallets",
      content: `
**What is a Wallet**
A :contentReference[oaicite:5]{index=5} stores your private keys (digital passwords) and allows you to send, receive, and hold cryptocurrencies.

**Types of Wallets**
- **Hot Wallets** (online): Apps like :contentReference[oaicite:6]{index=6}, :contentReference[oaicite:7]{index=7} — convenient but less secure
- **Cold Wallets** (offline): Hardware like :contentReference[oaicite:8]{index=8} or :contentReference[oaicite:9]{index=9} — very secure but less convenient

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
- Choose the correct network (:contentReference[oaicite:10]{index=10} uses BTC network, :contentReference[oaicite:11]{index=11} uses ERC20, :contentReference[oaicite:12]{index=12} uses BEP20)
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
`
    },
    {
      title: "Trading vs Investing",
      content: `
**:contentReference[oaicite:13]{index=13}**
- Buying and selling crypto frequently (daily or weekly)
- Goal: profit from short-term price changes
- Requires constant monitoring and analysis
- Higher risk, higher reward

**:contentReference[oaicite:14]{index=14}**
- Buying crypto and holding long-term (months or years)
- Goal: grow wealth over time
- Requires patience, less frequent action
- Lower risk, lower reward
`
    },
    {
      title: "How Crypto Trading Works",
      content: `
**Market Types**
- **Spot Market** — buy and sell actual coins
- **Futures Market** — speculate on future prices using contracts

**Key Concepts**
- Exchanges act like marketplaces (e.g. :contentReference[oaicite:15]{index=15}, :contentReference[oaicite:16]{index=16})
- Traders use charts to analyze trends
- Prices change based on supply and demand
- Profit comes from buying low and selling high
`
    }
  ],

  "NoviceQuiz": [
    { q: "Which of these is a feature of cryptocurrency?", options: ["Centralized","Government controlled","Decentralized","Paper-based"], answer: 2 },
    { q: "What does blockchain store?", options: ["Bank notes","Digital transaction records","Physical coins","Passwords"], answer: 1 },
    { q: "What does a crypto wallet actually store?", options: ["Coins","Private keys","Public addresses","Bank accounts"], answer: 1 },
    { q: "Which wallet is safer for large funds?", options: ["Hot","Cold","Mobile","Exchange"], answer: 1 },
    { q: "What is essential to send crypto?", options: ["Bank account","Private key","Public wallet address","Phone number"], answer: 2 },
    { q: "What should you never share?", options: ["Seed phrase","Public key","Exchange link","QR code"], answer: 0 },
    { q: "What is a common crypto scam?", options: ["Airdrops","Ponzi schemes","Hardware wallets","VPN"], answer: 1 },
    { q: "Trading is mainly for:", options: ["Long-term","Short-term profit","Buying goods","Mining"], answer: 1 },
    { q: "Investing is mainly for:", options: ["Short-term","Long-term growth","Daily trades","Mining"], answer: 1 },
    { q: "Which is riskier?", options: ["Investing","Trading","Both","Neither"], answer: 1 },
    { q: "Where do traders buy/sell crypto?", options: ["Wallets","Banks","Exchanges","VPN"], answer: 2 },
    { q: "What moves crypto prices?", options: ["Random","Government","Supply and demand","VPN"], answer: 2 },
    { q: "What market involves real coins?", options: ["Spot","Futures","Options","Banks"], answer: 0 },
    { q: "What makes crypto risky?", options: ["Volatility","Stable prices","Insurance","Regulation"], answer: 0 },
    { q: "What mindset causes losses?", options: ["Patience","Emotional trading","Risk control","Learning"], answer: 1 }
  ],

  "Intermediate": [
    { title: "Technical Analysis Basics", content: "Support, resistance, trends, and indicators." },
    { title: "Candlestick Patterns", content: "Learn bullish, bearish, and reversal candlesticks." },
    { title: "Risk Management", content: "Position sizing, stop loss, risk/reward ratio." },
    { title: "Trading Psychology", content: "Avoid fear and greed. Stick to your plan." },
    { title: "Understanding Market Cycles", content: "Accumulation, markup, distribution, markdown." },
    { title: "Using TradingView", content: "Setting up charts and drawing trendlines." },
    { title: "Intro to Futures & Leverage", content: "How leverage works and its risks." }
  ],

  "IntermediateQuiz": [
    { q: "What shows support levels?", options: ["Price floor","Price ceiling","Volume","Trendline"], answer: 0 },
    { q: "A doji indicates?", options: ["Strong trend","Indecision","Reversal","Bull run"], answer: 1 },
    { q: "Risk per trade should be?", options: ["50%","20%","1-2%","10%"], answer: 2 },
    { q: "Trading psychology is about?", options: ["News","Emotions","Indicators","Tax"], answer: 1 },
    { q: "Market cycle phase after markup?", options: ["Accumulation","Distribution","Markdown","Breakout"], answer: 1 },
    { q: "Tool for charting?", options: ["","","Excel","Word"], answer: 0 },
    { q: "Leverage does what?", options: ["Increases profit/loss","Reduces risk","Slows trades","Adds funds"], answer: 0 },
    { q: "Stop loss is for?", options: ["Max gain","Limit loss","Double profits","Alerts"], answer: 1 },
    { q: "Candlestick shows?", options: ["Price action","Volume","Mining","Wallets"], answer: 0 },
    { q: "Trendline helps?", options: ["Predict trends","Send crypto","Hack wallets","Hold coins"], answer: 0 },
    { q: "Greed leads to?", options: ["Profit","Loss","More trades","Patience"], answer: 1 },
    { q: "Accumulation means?", options: ["Buy phase","Sell phase","Crash","Pump"], answer: 0 },
    { q: "Distribution means?", options: ["Buy","Sell","Wait","Short"], answer: 1 },
    { q: "High leverage risk?", options: ["More profit","More loss","Safer trades","Lower margin"], answer: 1 },
    { q: "Best risk/reward?", options: ["1:1","1:2+","1:0.5","2:1"], answer: 1 }
  ],

  "Professional": [
    { title: "Advanced Technical Indicators", content: "RSI, MACD, Bollinger Bands." },
    { title: "On-chain Analysis", content: "Tracking whale wallets and blockchain data." },
    { title: "Fundamental Analysis", content: "Evaluating projects, teams, tokenomics." },
    { title: "Algorithmic & Bot Trading", content: "Automated strategies and APIs." },
    { title: "Portfolio Diversification", content: "Balancing assets to reduce risk." },
    { title: "Advanced Futures & Options", content: "Hedging and complex strategies." },
    { title: "Building a Trading Plan", content: "Goals, journaling, review." }
  ],

  "ProfessionalQuiz": [
    { q: "RSI measures?", options: ["Volume","Momentum","Trend","Market cap"], answer: 1 },
    { q: "MACD shows?", options: ["Momentum","Supply","Team","Wallets"], answer: 0 },
    { q: "Bollinger bands show?", options: ["Volatility","Profit","Fees","Hacks"], answer: 0 },
    { q: "On-chain looks at?", options: ["Price charts","Blockchain data","Media","News"], answer: 1 },
    { q: "Tokenomics means?", options: ["Economics of token","Mining","Marketing","Trading"], answer: 0 },
    { q: "Bots do?", options: ["Automate trades","Hold wallets","Make charts","Mine"], answer: 0 },
    { q: "Diversification does?", options: ["Increases risk","Reduces risk","Removes risk","Adds fees"], answer: 1 },
    { q: "Options are for?", options: ["Speculation","Hedging","Both","Mining"], answer: 2 },
    { q: "Plan helps?", options: ["Control emotions","Skip rules","More risk","More leverage"], answer: 0 },
    { q: "MACD stands for?", options: ["Moving Average Convergence Divergence","Market Average Coin Data","Mining and Crypto Deals","Main Asset Chart Data"], answer: 0 },
    { q: "Best use of RSI?", options: ["Overbought/oversold","Volume","Trends","News"], answer: 0 },
    { q: "Whale wallets show?", options: ["Big traders","Scams","News","Exchanges"], answer: 0 },
    { q: "Portfolio means?", options: ["Your holdings","Your gains","Your losses","Your debt"], answer: 0 },
    { q: "Hedging reduces?", options: ["Risk","Profits","Volume","Fees"], answer: 0 },
    { q: "Reviewing trades helps?", options: ["Improve","Forget","Lose","Copy"], answer: 0 }
  ]
};
