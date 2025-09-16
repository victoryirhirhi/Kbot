export const LESSONS = {
  "Novice": [
    {
      title: "What is Cryptocurrency",
      content: [
        "📍 *Part 1: Introduction*\n\nCryptocurrency is digital money that uses cryptography to secure transactions. It operates on decentralized networks called blockchains — meaning no government or bank controls it.",
        "📍 *Part 2: Key Features*\n\n- Digital and global\n- Decentralized (no central authority)\n- Limited supply (prevents inflation)\n- Secured by cryptography",
        "📍 *Part 3: Why It Matters*\n\n- Enables fast cross-border payments\n- Offers financial access to the unbanked\n- Creates new investment opportunities"
      ],
      quiz: [
        {
          q: "Which best describes cryptocurrency?",
          options: ["Digital money using cryptography", "Central bank money", "Physical gold coins", "Mobile banking app"],
          answer: 0
        },
        {
          q: "Who controls cryptocurrencies?",
          options: ["Central banks", "Governments", "No one (decentralized)", "Commercial banks"],
          answer: 2
        },
        {
          q: "Which of these is NOT a cryptocurrency?",
          options: ["Bitcoin", "Ethereum", "Binance Coin", "PayPal"],
          answer: 3
        }
      ]
    },
    {
      title: "How Blockchain Works",
      content: [
        "📍 *Part 1: The Concept*\n\nA blockchain is a public digital ledger shared across many computers. Every transaction is grouped into blocks and linked together — forming a secure chain.",
        "📍 *Part 2: Features*\n\n- Immutable (can’t be changed)\n- Transparent (anyone can see)\n- Distributed (many computers hold copies)\n- Secure (uses cryptography)",
        "📍 *Part 3: Example*\n\nLike a shared Google Sheet: everyone can see new entries, and they must all agree it’s valid before it’s saved."
      ],
      quiz: [
        {
          q: "What does blockchain store?",
          options: ["Banknotes", "Transaction records", "Usernames", "Passwords"],
          answer: 1
        },
        {
          q: "What happens once data is on blockchain?",
          options: ["It can be edited", "It is permanent", "It is deleted later", "It disappears after 24 hours"],
          answer: 1
        },
        {
          q: "Which is a feature of blockchain?",
          options: ["Centralized", "Transparent", "Offline", "Hidden"],
          answer: 1
        }
      ]
    },
    {
      title: "Setting up Wallets",
      content: [
        "📍 *Part 1: What Is a Wallet?*\n\nA crypto wallet stores your private keys, which allow access to your coins. Without the keys, you can’t access your funds.",
        "📍 *Part 2: Types*\n\n- Hot wallets (online — apps like Trust Wallet, MetaMask)\n- Cold wallets (offline — hardware like Ledger, Trezor)",
        "📍 *Part 3: Creating One*\n\n1. Download a wallet\n2. Backup your seed phrase securely\n3. Never share it with anyone\n4. Fund your wallet by receiving crypto"
      ],
      quiz: [
        {
          q: "What does a wallet store?",
          options: ["Actual coins", "Private keys", "Passwords", "Bank accounts"],
          answer: 1
        },
        {
          q: "Which is safer but less convenient?",
          options: ["Hot wallet", "Cold wallet", "Mobile wallet", "Web wallet"],
          answer: 1
        },
        {
          q: "What must never be shared?",
          options: ["Seed phrase", "Public address", "Wallet name", "Phone number"],
          answer: 0
        }
      ]
    },
    {
      title: "Sending & Receiving Crypto",
      content: [
        "📍 *Part 1: Sending*\n\nYou need the receiver’s wallet address. Choose the correct blockchain network and confirm the fee.",
        "📍 *Part 2: Receiving*\n\nProvide your wallet address or QR code. Once confirmed on the blockchain, funds arrive in your wallet.",
        "📍 *Part 3: Safety*\n\n- Double-check the address\n- Send a test amount first\n- Match the correct network (ERC20, BEP20, etc.)"
      ],
      quiz: [
        {
          q: "What do you need to send crypto?",
          options: ["Phone number", "Private key", "Public address", "Email"],
          answer: 2
        },
        {
          q: "What must match when sending crypto?",
          options: ["Transaction fee", "Network type", "Color of app", "Wallet logo"],
          answer: 1
        },
        {
          q: "What is a safe practice?",
          options: ["Send large sums first", "Use random addresses", "Test with small amount", "Ignore networks"],
          answer: 2
        }
      ]
    },
    {
      title: "Crypto Safety & Scams",
      content: [
        "📍 *Part 1: Scams*\n\n- Phishing sites\n- Fake airdrops\n- Ponzi schemes\n- Fake support agents",
        "📍 *Part 2: Staying Safe*\n\n- Never share seed phrase\n- Use 2FA\n- Verify websites\n- Avoid guaranteed returns",
        "📍 *Part 3: Tools*\n\n- Hardware wallets\n- Antivirus and VPN\n- Bookmark trusted links"
      ],
      quiz: [
        {
          q: "Which is a scam?",
          options: ["Hardware wallets", "Phishing sites", "Cold storage", "Legit exchange"],
          answer: 1
        },
        {
          q: "What should you never share?",
          options: ["Public key", "Seed phrase", "Wallet name", "App link"],
          answer: 1
        },
        {
          q: "Which improves security?",
          options: ["2FA", "Weak passwords", "Phishing links", "Random apps"],
          answer: 0
        }
      ]
    }
  ],

  "Intermediate": [
    {
      title: "Trading Basics",
      content: [
        "📍 *Part 1: Spot vs Futures*\n\nSpot trading means buying or selling crypto directly. Futures are contracts to buy/sell later at set prices.",
        "📍 *Part 2: Market Types*\n\n- Spot = ownership\n- Futures = speculation (can use leverage)",
        "📍 *Part 3: Why It Matters*\n\nFutures allow higher profit potential but carry higher risk."
      ],
      quiz: [
        { q: "Spot trading means?", options: ["Contracts", "Direct buying/selling", "Loans", "Staking"], answer: 1 },
        { q: "Futures involve?", options: ["Immediate delivery", "Speculation", "Physical coins", "Mining"], answer: 1 },
        { q: "Futures are?", options: ["Low risk", "No risk", "High risk", "Risk-free"], answer: 2 }
      ]
    },
    {
      title: "Market Analysis",
      content: [
        "📍 *Part 1: Fundamental Analysis*\n\nLooks at project team, use case, tokenomics, and news.",
        "📍 *Part 2: Technical Analysis*\n\nUses price charts, patterns, indicators (RSI, MACD) to predict price moves.",
        "📍 *Part 3: Combining Both*\n\nSmart traders combine both for best decisions."
      ],
      quiz: [
        { q: "FA studies?", options: ["Charts", "Project fundamentals", "Indicators", "Order books"], answer: 1 },
        { q: "TA studies?", options: ["Team size", "Code", "Price charts", "Partnerships"], answer: 2 },
        { q: "Best strategy is?", options: ["Ignore news", "Use both FA & TA", "Just follow trends", "Guess"], answer: 1 }
      ]
    },
    {
      title: "Risk Management",
      content: [
        "📍 *Part 1: Why Risk Control?*\n\nProtects your capital from losses.",
        "📍 *Part 2: Tools*\n\n- Stop-loss orders\n- Position sizing\n- Diversification",
        "📍 *Part 3: Psychology*\n\nAvoid greed, revenge trading, and over-leveraging."
      ],
      quiz: [
        { q: "Goal of risk management?", options: ["Make quick profits", "Avoid all risk", "Protect capital", "Win all trades"], answer: 2 },
        { q: "Which helps manage risk?", options: ["Stop-loss", "No plan", "Guessing", "Overtrading"], answer: 0 },
        { q: "A common mistake is?", options: ["Greed", "Planning", "Journaling", "Diversification"], answer: 0 }
      ]
    },
    {
      title: "Using Exchanges",
      content: [
        "📍 *Part 1: Centralized*\n\nPlatforms like :contentReference[oaicite:0]{index=0} & :contentReference[oaicite:1]{index=1} where you trade via order books.",
        "📍 *Part 2: Decentralized*\n\nDEXs like :contentReference[oaicite:2]{index=2} or :contentReference[oaicite:3]{index=3} let users trade directly from wallets.",
        "📍 *Part 3: Tips*\n\nUse 2FA, avoid leaving funds on exchanges, withdraw to wallets for safety."
      ],
      quiz: [
        { q: "CEX is?", options: ["Central exchange", "Cold exchange", "Centralized exchange", "Crypto exit"], answer: 2 },
        { q: "DEX is?", options: ["Direct exchange", "Digital exchange", "Decentralized exchange", "Derivative exchange"], answer: 2 },
        { q: "Which is safer for storage?", options: ["Leave on exchange", "Wallet", "Trade daily", "Hotspots"], answer: 1 }
      ]
    },
    {
      title: "Stablecoins & DeFi Basics",
      content: [
        "📍 *Part 1: Stablecoins*\n\nCryptos pegged to fiat like :contentReference[oaicite:4]{index=4} or :contentReference[oaicite:5]{index=5} for price stability.",
        "📍 *Part 2: DeFi*\n\nDecentralized Finance lets you lend, borrow, or earn interest directly on blockchain.",
        "📍 *Part 3: Risks*\n\nSmart contract bugs, impermanent loss, and hacks."
      ],
      quiz: [
        { q: "Stablecoins are?", options: ["Volatile", "Pegged to fiat", "Mining coins", "Futures"], answer: 1 },
        { q: "DeFi stands for?", options: ["Digital Finance", "Decentralized Finance", "Defined Finance", "Debt Finance"], answer: 1 },
        { q: "DeFi risk is?", options: ["Bank fees", "Smart contract bugs", "Low rewards", "No risk"], answer: 1 }
      ]
    }
  ],

  "Professional": [
    {
      title: "Advanced Technical Analysis",
      content: [
        "📍 *Part 1: Chart Patterns*\n\nHead and shoulders, triangles, flags, etc.",
        "📍 *Part 2: Indicators*\n\nIchimoku, Fibonacci, Elliott Wave.",
        "📍 *Part 3: Volume Analysis*\n\nConfirm trends and reversals using volume."
      ],
      quiz: [
        { q: "TA means?", options: ["Token Allocation", "Technical Analysis", "Trade Audit", "Trend Average"], answer: 1 },
        { q: "Which is a pattern?", options: ["Flag", "Wallet", "Coin", "Stake"], answer: 0 },
        { q: "Volume helps?", options: ["Confirm trends", "Create coins", "Send crypto", "Store keys"], answer: 0 }
      ]
    },
    {
      title: "Leverage & Margin Trading",
      content: [
        "📍 *Part 1: Leverage*\n\nBorrowed funds to increase position size.",
        "📍 *Part 2: Margin*\n\nCollateral needed to open leveraged positions.",
        "📍 *Part 3: Risks*\n\nHigh rewards but also high liquidation risk."
      ],
      quiz: [
        { q: "Leverage is?", options: ["Borrowing funds", "Mining coins", "Cold storage", "Staking"], answer: 0 },
        { q: "Margin is?", options: ["Trading fee", "Collateral", "Profit", "Interest"], answer: 1 },
        { q: "Leverage risk?", options: ["None", "High liquidation", "Slow profit", "Free rewards"], answer: 1 }
      ]
    },
    {
      title: "On-chain Analysis",
      content: [
        "📍 *Part 1: What It Is*\n\nStudying blockchain data directly (wallet flows, whale activity).",
        "📍 *Part 2: Tools*\n\n:contentReference[oaicite:6]{index=6}, :contentReference[oaicite:7]{index=7}, :contentReference[oaicite:8]{index=8}.",
        "📍 *Part 3: Why Use It*\n\nGives deeper insights than price charts alone."
      ],
      quiz: [
        { q: "On-chain looks at?", options: ["Price charts", "Blockchain data", "News", "Social media"], answer: 1 },
        { q: "Example tool?", options: ["Glassnode", "Photoshop", "Gmail", "PayPal"], answer: 0 },
        { q: "It shows?", options: ["User flows", "Marketing trends", "Logos", "Apps"], answer: 0 }
      ]
    },
    {
      title: "Algorithmic Trading",
      content: [
        "📍 *Part 1: What It Is*\n\nUsing automated bots to trade based on rules.",
        "📍 *Part 2: Benefits*\n\nFast execution, no emotions, 24/7.",
        "📍 *Part 3: Risks*\n\nCoding bugs, over-optimization, market changes."
      ],
      quiz: [
        { q: "Algo trading uses?", options: ["Manual clicks", "Bots", "Wallets", "Apps"], answer: 1 },
        { q: "A benefit is?", options: ["Emotions", "24/7 trading", "Guessing", "Luck"], answer: 1 },
        { q: "A risk is?", options: ["High fees", "Coding bugs", "Bank rules", "No profit"], answer: 1 }
      ]
    },
    {
      title: "Portfolio Building",
      content: [
        "📍 *Part 1: Diversification*\n\nInvest across multiple coins & sectors.",
        "📍 *Part 2: Risk Allocation*\n\nPut more in safe assets, less in risky ones.",
        "📍 *Part 3: Rebalancing*\n\nAdjust holdings based on market conditions."
      ],
      quiz: [
        { q: "Diversification means?", options: ["One coin only", "Spreading investments", "High risk only", "Selling fast"], answer: 1 },
        { q: "Allocate more to?", options: ["Risky assets", "Safe assets", "Random assets", "New coins"], answer: 1 },
        { q: "Rebalancing is?", options: ["Changing portfolio mix", "Staking", "Mining", "Buying dips"], answer: 0 }
      ]
    }
  ]
};
