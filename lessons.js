export const LESSONS = {
    "Novice": [
      {
        title: "What is Cryptocurrency",
        content: [
          "📍 *Part 1: Introduction to Cryptocurrency*\n\nCryptocurrency is a type of digital or virtual money that uses cryptography to secure transactions. Unlike traditional money (like dollars or naira), cryptocurrencies are not controlled by any central bank or government. They run on decentralized networks called blockchains.",
          "📍 *Part 2: Key Features of Crypto*\n\n- Decentralized: No central authority controls it.\n- Digital: Exists only online.\n- Secure: Uses cryptography to protect transactions.\n- Global: Can be sent anywhere across the world quickly.\n\nPopular cryptocurrencies include: \n- Bitcoin (BTC)\n- Ethereum (ETH)\n- Binance Coin (BNB)",
          "📍 *Part 3: Why Cryptos Are Important*\n\n- Fast and cheap cross-border payments\n- Financial inclusion for unbanked people\n- Alternative investment opportunities\n\nIn short, cryptocurrency is money for the digital age."
        ],
        quiz: [
          {
            q: "Which of the following best describes cryptocurrency?",
            options: ["A digital currency using cryptography", "Paper money from a central bank", "Physical coins made of metal", "A local bank's mobile app"],
            answer: 0
          },
          {
            q: "Who controls cryptocurrency?",
            options: ["Central banks", "Government", "Nobody (decentralized)", "Commercial banks"],
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
          "📍 *Part 1: The Blockchain Concept*\n\nBlockchain is the technology that powers cryptocurrencies. It is a digital ledger of transactions shared across many computers. Every transaction is grouped into blocks and linked in a chain — hence the name 'blockchain'.",
          "📍 *Part 2: Key Features*\n\n- Immutable: Once data is added, it cannot be changed.\n- Distributed: Everyone has a copy of the ledger.\n- Transparent: Anyone can view the transactions.\n- Secure: Uses cryptography to secure the network.",
          "📍 *Part 3: Real-World Example*\n\nImagine a Google Sheet shared among thousands of computers worldwide. Every time someone edits it (adds a transaction), everyone can see it and must agree it's valid before it's saved. This is how blockchain ensures trust without a middleman."
        ],
        quiz: [
          {
            q: "What does blockchain store?",
            options: ["Banknotes", "Digital transaction records", "Usernames", "Passwords"],
            answer: 1
          },
          {
            q: "What happens to data on a blockchain once added?",
            options: ["It can be edited anytime", "It can be deleted", "It is permanent and immutable", "It disappears after 24 hours"],
            answer: 2
          },
          {
            q: "Which of these is a feature of blockchain?",
            options: ["Centralized", "Secretive", "Transparent", "Offline"],
            answer: 2
          }
        ]
      },
      {
        title: "Setting up Wallets",
        content: [
          "📍 *Part 1: What is a Crypto Wallet?*\n\nA wallet is a tool (software or hardware) that allows you to store and manage your cryptocurrency. It holds your private keys, which are like passwords that let you access your funds.",
          "📍 *Part 2: Types of Wallets*\n\n- Hot Wallets (online)\n  - Mobile apps (Trust Wallet, MetaMask)\n  - Browser extensions\n- Cold Wallets (offline)\n  - Hardware devices (Ledger, Trezor)\n\nHot wallets are convenient but less secure. Cold wallets are very secure but less convenient.",
          "📍 *Part 3: How to Create One*\n\n1. Download a trusted wallet app (like Trust Wallet)\n2. Write down your recovery phrase (seed phrase)\n3. Never share this phrase with anyone\n4. Add crypto by buying or receiving from another wallet"
        ],
        quiz: [
          {
            q: "What does a wallet store?",
            options: ["Cryptocurrency coins directly", "Private keys to access your coins", "Physical coins", "Exchange accounts"],
            answer: 1
          },
          {
            q: "Which is safer but less convenient?",
            options: ["Hot Wallet", "Cold Wallet", "Mobile Wallet", "Exchange Wallet"],
            answer: 1
          },
          {
            q: "What must you never share?",
            options: ["Username", "Seed phrase", "Public address", "Email"],
            answer: 1
          }
        ]
      },
      {
        title: "Sending & Receiving Crypto",
        content: [
          "📍 *Part 1: How Sending Works*\n\nTo send crypto, you need the recipient’s public wallet address. Each crypto has its own network (e.g. BTC, ETH, BNB). Always make sure you choose the correct network.",
          "📍 *Part 2: How Receiving Works*\n\nTo receive, you give someone your public wallet address. Once they send, the network verifies the transaction and it shows in your wallet after a few minutes.",
          "📍 *Part 3: Tips & Safety*\n\n- Double-check the wallet address\n- Use QR codes to avoid errors\n- Always check the network (BEP20, ERC20, etc.)\n- Start with small test amounts when sending large sums"
        ],
        quiz: [
          {
            q: "What do you need to send crypto?",
            options: ["Private key", "Bank account", "Public wallet address", "Phone number"],
            answer: 2
          },
          {
            q: "What must always match when sending crypto?",
            options: ["The color of the app", "The transaction fee", "The crypto network", "The phone model"],
            answer: 2
          },
          {
            q: "What is a safe practice?",
            options: ["Send large amounts first", "Use random addresses", "Test with small amounts", "Ignore networks"],
            answer: 2
          }
        ]
      },
      {
        title: "Crypto Safety and Scams",
        content: [
          "📍 *Part 1: Common Crypto Scams*\n\n- Phishing websites\n- Fake airdrops and giveaways\n- Ponzi and pyramid schemes\n- Fake support agents on social media",
          "📍 *Part 2: How to Stay Safe*\n\n- Never share your seed phrase\n- Use 2FA (Two-Factor Authentication)\n- Verify links and websites before clicking\n- Avoid promises of guaranteed profits",
          "📍 *Part 3: Security Tools*\n\n- Use hardware wallets for large holdings\n- Keep your software updated\n- Bookmark official sites\n- Use antivirus and VPN when possible"
        ],
        quiz: [
          {
            q: "Which is a common crypto scam?",
            options: ["A real exchange", "Fake airdrops", "Hardware wallets", "Cold storage"],
            answer: 1
          },
          {
            q: "What should you never share?",
            options: ["Email", "Public key", "Seed phrase", "Wallet app name"],
            answer: 2
          },
          {
            q: "Which helps secure your account?",
            options: ["2FA", "Low password strength", "Phishing sites", "Disabling antivirus"],
            answer: 0
          }
        ]
      }
    ],
    "Intermediate": [],
    "Professional": []
  };
  