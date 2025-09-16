export const lessons = {
  novice: [
    {
      title: "What is Cryptocurrency",
      content: `Cryptocurrency is a digital form of money designed to work as a medium of exchange without relying on banks or governments. 
It uses cryptography (complex mathematical algorithms) to secure transactions, control the creation of new coins, and verify transfers.

🔑 Key Points:
- Works on peer-to-peer networks
- Uses decentralized ledgers called blockchains
- Examples: Bitcoin, Ethereum, Solana
- Not printed like paper money; exists only digitally

💡 Why It Matters:
Cryptocurrencies enable fast, borderless payments and give people control of their own money without needing permission from banks.`
    },
    {
      title: "How Blockchain Works",
      content: `A blockchain is a digital ledger or database that stores data in blocks linked together chronologically.

Each block contains:
- A list of recent transactions
- A timestamp
- A reference (hash) of the previous block

Once added, blocks are nearly impossible to change. This makes the blockchain tamper-proof and transparent to everyone.

💡 Example:
If Alice sends Bob 1 BTC, this transaction is verified by many computers (nodes) and added permanently to the blockchain, visible to anyone.`
    },
    {
      title: "Setting up Wallets",
      content: `A crypto wallet is a tool that lets you store, send, and receive cryptocurrencies.

There are two main types:
- **Hot Wallets:** Connected to the internet (mobile/web wallets like :contentReference[oaicite:1]{index=1} or :contentReference[oaicite:2]{index=2}). Easy to use but less secure.
- **Cold Wallets:** Offline devices like hardware wallets (e.g. :contentReference[oaicite:3]{index=3}, :contentReference[oaicite:4]{index=4}). Very secure but less convenient.

⚠️ Always write down and store your 12/24-word recovery seed phrase safely. If lost, you lose access forever.`
    },
    {
      title: "Sending & Receiving Crypto",
      content: `To send crypto:
1. Copy the recipient’s wallet address
2. Paste it in your wallet's "Send" field
3. Enter the amount
4. Select the correct blockchain network (very important!)
5. Confirm the transaction

To receive crypto:
- Copy your wallet's receiving address and share it with the sender.

⚡ Tips:
- Always double-check the wallet address.
- Never mix blockchain networks (e.g. don’t send :contentReference[oaicite:5]{index=5} from ERC-20 to :contentReference[oaicite:6]{index=6}).`
    },
    {
      title: "Crypto Safety and Scams",
      content: `Crypto is powerful but also attracts scammers. Stay safe by following best practices:

✅ Do:
- Enable 2FA on all accounts
- Use strong unique passwords
- Keep your seed phrase offline
- Use trusted and verified exchanges/wallets

❌ Don’t:
- Share your private keys
- Fall for "too good to be true" investment promises
- Click suspicious links or unknown airdrops

Remember: In crypto, you are your own bank. If you lose your keys, no one can recover them.`
    },
    {
      title: "Trading vs Investing",
      content: `**Trading** means buying and selling crypto frequently (daily or weekly) to make short-term profits from price fluctuations. It requires continuous monitoring and analysis.

**Investing** means buying and holding crypto for months or years, expecting long-term growth. It’s less stressful and focuses on strong projects with good fundamentals.

📝 Summary:
- Traders chase short-term gains, take quick profits/losses.
- Investors hold through ups and downs, aiming for bigger future gains.

Both can be profitable, but each needs different skills and mindsets.`
    },
    {
      title: "How Trading Works",
      content: `Crypto trading happens on exchanges like :contentReference[oaicite:7]{index=7}, :contentReference[oaicite:8]{index=8}, and :contentReference[oaicite:9]{index=9}. These platforms connect buyers and sellers using an order book.

⚙️ How It Works:
- You place a buy or sell order.
- When a matching order is found, the trade executes.
- Price goes up when more people buy (demand) and down when more people sell (supply).

📈 Common strategies:
- Buy low, sell high (spot trading)
- Use stop-loss to limit losses
- Use charts to analyze price trends

Trading requires discipline, planning, and constant learning.`
    },
  ],

  intermediate: [
    {
      title: "Trading Basics (Spot vs Futures)",
      content: `**Spot Trading:** Buy and own the actual asset (e.g. buying :contentReference[oaicite:10]{index=10} at $20k and selling at $25k for profit).

**Futures Trading:** Trade contracts that bet on price direction without owning the asset. You can profit from price going up or down.

💡 Futures are riskier because they allow leverage (borrowing funds to trade larger amounts). Beginners should master spot trading first.`
    },
    {
      title: "Market Analysis (Fundamental & Technical)",
      content: `**Fundamental Analysis (FA):**
- Studies the real value of a project
- Check use case, team, partnerships, tokenomics, community

**Technical Analysis (TA):**
- Studies price movements using charts, indicators, and patterns
- Helps predict future price trends

💡 Successful traders often combine both FA and TA for better decision-making.`
    },
    {
      title: "Risk Management & Psychology",
      content: `Risk management is the backbone of profitable trading.

📌 Golden Rules:
- Risk only 1–2% of your capital per trade
- Always set stop-losses
- Don’t trade with borrowed money
- Control greed and fear

Emotions kill traders. Use logic, not feelings. Have a plan, stick to it, and accept losses as part of the game.`
    },
    {
      title: "Using Exchanges",
      content: `Exchanges are platforms where you buy/sell crypto. Examples: :contentReference[oaicite:11]{index=11}, :contentReference[oaicite:12]{index=12}, :contentReference[oaicite:13]{index=13}.

⚡ Tips:
- Use only well-known and regulated exchanges
- Understand order types (market, limit, stop)
- Verify fees and withdrawal limits
- Enable security features (2FA, whitelist addresses)

Practice on demo accounts before using real money.`
    },
    {
      title: "Stablecoins and DeFi Basics",
      content: `**Stablecoins** are cryptocurrencies pegged to stable assets like the US Dollar (e.g. :contentReference[oaicite:14]{index=14}, :contentReference[oaicite:15]{index=15}). They help avoid volatility.

**DeFi (Decentralized Finance)** lets you lend, borrow, earn interest, and trade without banks.

Popular DeFi tools:
- Decentralized exchanges (:contentReference[oaicite:16]{index=16})
- Lending platforms (:contentReference[oaicite:17]{index=17})
- Yield farming & staking

DeFi gives you full control, but comes with smart contract and market risks.`
    }
  ],

  professional: [
    {
      title: "Advanced Technical Analysis",
      content: `Advanced TA uses tools like:
- Fibonacci retracements (measure pullbacks)
- Elliott waves (predict wave patterns)
- Volume analysis (confirm trends)
- Divergences (RSI vs price)

Mastering these takes time and practice on real charts.`
    },
    {
      title: "Leverage and Margin Trading",
      content: `**Leverage** lets you control a large position with small capital.  
E.g. 10x leverage means $100 can open a $1,000 trade.

⚠️ Risk: If price moves slightly against you, you can lose everything. Always use stop-loss and low leverage as a professional.`
    },
    {
      title: "On-chain Analysis",
      content: `This studies real-time blockchain data such as:
- Wallet flows (whale buying/selling)
- Supply held by long-term holders
- Exchange inflows/outflows
- Gas fees and network activity

On-chain analysis shows what big players are doing behind the scenes.`
    },
    {
      title: "Algorithmic Trading",
      content: `Algorithmic trading uses bots and programs to automate trades based on pre-set strategies.

Pros:
- Trade 24/7
- Remove emotions
- React instantly to market conditions

Cons:
- Requires coding or bot setup
- Needs constant monitoring

Popular tools: :contentReference[oaicite:18]{index=18} + :contentReference[oaicite:19]{index=19} + custom scripts.`
    },
    {
      title: "Portfolio Building & Risk Allocation",
      content: `Building a portfolio means spreading your investment across multiple assets to reduce risk.

📌 Strategy:
- Mix large-cap, mid-cap, and small-cap coins
- Allocate only what you can afford to lose
- Rebalance regularly based on market trends
- Keep emergency cash aside

Diversification protects you from market crashes.`
    }
  ]
};

export const quizzes = {
  novice: [
    { q: "What does cryptocurrency run on?", options: ["Banks","Blockchain","Central server","ATM network"], correct: 1 },
    { q: "Which wallet is offline?", options: ["Hot wallet","Cold wallet","Exchange account","Mobile wallet"], correct: 1 },
    { q: "Trading is usually for?", options: ["Long term","Short term","Saving","Spending"], correct: 1 },
    { q: "Which is safer to share?", options: ["Private key","Seed phrase","Wallet address","Password"], correct: 2 }
  ],
  intermediate: [
    { q: "Spot trading means?", options: ["Buying future contracts","Buying/selling instantly","Holding long term","Mining crypto"], correct: 1 },
    { q: "TA stands for?", options: ["Technical Analysis","Token Allocation","Trade Account","Trust Algorithm"], correct: 0 },
    { q: "Max risk per trade?", options: ["10%","1–2%","20%","50%"], correct: 1 }
  ],
  professional: [
    { q: "Leverage increases?", options: ["Safety","Gains and losses","Security","Taxes"], correct: 1 },
    { q: "On-chain analysis studies?", options: ["Bank data","Blockchain data","Usernames","Exchange UI"], correct: 1 },
    { q: "Diversifying your portfolio helps to?", options: ["Increase risk","Eliminate profits","Manage risk","Lower income"], correct: 2 }
  ]
};
