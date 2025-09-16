import TelegramBot from 'node-telegram-bot-api';
import fs from 'fs';

const token = process.env.BOT_TOKEN; // already in config.js / vercel env
const bot = new TelegramBot(token, { polling: true });

// Load lessons and quiz
const lessons = [
  "Lesson 1: What is cryptocurrency?\n\nCryptocurrency is a digital or virtual form of money that uses cryptography for security and operates on decentralized networks called blockchains.",
  "Lesson 2: History of Bitcoin\n\nThe first cryptocurrency, Bitcoin, was created in 2009 by an unknown person/group called Satoshi Nakamoto.",
  "Lesson 3: Blockchain technology\n\nA blockchain is a decentralized ledger that records transactions across many computers securely.",
  "Lesson 4: Types of cryptocurrencies\n\nCoins (like Bitcoin) run on their own blockchain. Tokens are built on existing blockchains.",
  "Lesson 5: Wallets (Hot vs Cold)\n\nHot wallets are online and connected to the internet. Cold wallets are offline and safer for long-term storage.",
  "Lesson 6: Trading vs Investing\n\nTrading is short-term buying and selling to make quick profits. Investing is holding crypto for long-term growth.",
  "Lesson 7: How trading works\n\nTrading involves analyzing price charts, placing buy/sell orders, and managing risk to earn profit from price movements."
];

const quiz = [
  {
    q: "What does cryptocurrency use to secure transactions?",
    options: ["Emails", "Encryption/cryptography", "Banks", "Government"],
    answer: 1
  },
  {
    q: "Who created Bitcoin?",
    options: ["Elon Musk", "Vitalik Buterin", "Satoshi Nakamoto", "Bill Gates"],
    answer: 2
  },
  {
    q: "What is a blockchain?",
    options: ["A social media site", "A cloud storage", "A decentralized ledger", "An online bank"],
    answer: 2
  },
  {
    q: "Which are safer for long term storage?",
    options: ["Hot wallets", "Cold wallets", "Mobile wallets", "Exchange accounts"],
    answer: 1
  },
  {
    q: "Trading aims for ____ profits while investing aims for ____ profits.",
    options: ["short-term, long-term", "long-term, short-term", "medium, small", "small, quick"],
    answer: 0
  }
];

const userState = {}; 
// structure: { [userId]: { stage: 'lesson'|'quiz', currentLesson, quizIndex, score } }

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  userState[chatId] = { stage: 'lesson', currentLesson: 0, quizIndex: 0, score: 0 };
  sendLesson(chatId);
});

function sendLesson(chatId) {
  const state = userState[chatId];
  const lessonIndex = state.currentLesson;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        ...(lessonIndex > 0 ? [{ text: "⬅️ Previous", callback_data: "prev" }] : []),
        ...(lessonIndex < lessons.length - 1 ? [{ text: "Next ➡️", callback_data: "next" }] : []),
        ...(lessonIndex === lessons.length - 1 ? [{ text: "Start Quiz 📝", callback_data: "start_quiz" }] : [])
      ].map(b => b.length ? b : [b])
    }
  };
  bot.sendMessage(chatId, lessons[lessonIndex], opts);
}

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  const state = userState[chatId];

  if (!state) return;

  if (state.stage === 'lesson') {
    if (data === 'next' && state.currentLesson < lessons.length - 1) {
      state.currentLesson++;
      bot.editMessageText(lessons[state.currentLesson], {
        chat_id: chatId,
        message_id: query.message.message_id,
        reply_markup: {
          inline_keyboard: [
            ...(state.currentLesson > 0 ? [{ text: "⬅️ Previous", callback_data: "prev" }] : []),
            ...(state.currentLesson < lessons.length - 1 ? [{ text: "Next ➡️", callback_data: "next" }] : []),
            ...(state.currentLesson === lessons.length - 1 ? [{ text: "Start Quiz 📝", callback_data: "start_quiz" }] : [])
          ].map(b => b.length ? b : [b])
        }
      });
    }
    if (data === 'prev' && state.currentLesson > 0) {
      state.currentLesson--;
      bot.editMessageText(lessons[state.currentLesson], {
        chat_id: chatId,
        message_id: query.message.message_id,
        reply_markup: {
          inline_keyboard: [
            ...(state.currentLesson > 0 ? [{ text: "⬅️ Previous", callback_data: "prev" }] : []),
            ...(state.currentLesson < lessons.length - 1 ? [{ text: "Next ➡️", callback_data: "next" }] : []),
            ...(state.currentLesson === lessons.length - 1 ? [{ text: "Start Quiz 📝", callback_data: "start_quiz" }] : [])
          ].map(b => b.length ? b : [b])
        }
      });
    }
    if (data === 'start_quiz') {
      state.stage = 'quiz';
      sendQuiz(chatId);
    }
  } else if (state.stage === 'quiz') {
    const q = quiz[state.quizIndex];
    const chosen = parseInt(data);

    if (!isNaN(chosen)) {
      if (chosen === q.answer) {
        state.score++;
        bot.sendMessage(chatId, "✅ Correct");
      } else {
        bot.sendMessage(chatId, "❌ Wrong");
      }
      state.quizIndex++;
      if (state.quizIndex < quiz.length) {
        sendQuiz(chatId);
      } else {
        const percent = Math.round((state.score / quiz.length) * 100);
        if (percent >= 70) {
          bot.sendMessage(chatId, `🎉 You passed with ${percent}%!\n`, {
            reply_markup: {
              inline_keyboard: [[{ text: "Proceed to Intermediate ➡️", callback_data: "go_intermediate" }]]
            }
          });
        } else {
          bot.sendMessage(chatId, `❌ You scored ${percent}%. Try again with /start`);
        }
      }
    }
  }
});

function sendQuiz(chatId) {
  const state = userState[chatId];
  const q = quiz[state.quizIndex];
  const opts = {
    reply_markup: {
      inline_keyboard: q.options.map((o, i) => [{ text: o, callback_data: i.toString() }])
    }
  };
  bot.sendMessage(chatId, `📝 ${q.q}`, opts);
}
