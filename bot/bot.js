const { Telegraf, Markup } = require("telegraf");
const { BOT_TOKEN } = require("../config");
const LESSONS = require("../lessons");

if (!BOT_TOKEN) throw new Error("BOT_TOKEN missing in config.js");

const bot = new Telegraf(BOT_TOKEN);

// In-memory session
const sessions = {};

function getSession(ctx) {
  const id = ctx.chat.id;
  if (!sessions[id]) {
    sessions[id] = {
      level: "Novice",
      lessonIndex: 0,
      quizMode: false,
      quizIndex: 0,
      score: 0
    };
  }
  return sessions[id];
}

// Start Command
bot.start((ctx) => {
  const session = getSession(ctx);
  session.level = "Novice";
  session.lessonIndex = 0;
  session.quizMode = false;
  session.quizIndex = 0;
  session.score = 0;

  ctx.reply(
    "🚀 Welcome to Crypto Learning Bot!\n\nWe’ll start with *Novice Level*. Ready?",
    Markup.inlineKeyboard([[Markup.button.callback("Start Lesson 1 ▶️", "nextLesson")]])
  );
});

// Show Lesson
function showLesson(ctx) {
  const session = getSession(ctx);
  const { level, lessonIndex } = session;
  const lessons = LESSONS[level].lessons;

  if (lessonIndex < 0 || lessonIndex >= lessons.length) return;

  const lesson = lessons[lessonIndex];
  const nav = [];

  if (lessonIndex > 0) nav.push(Markup.button.callback("⏮ Previous", "prevLesson"));
  if (lessonIndex < lessons.length - 1) {
    nav.push(Markup.button.callback("Next ⏭", "nextLesson"));
  } else {
    nav.push(Markup.button.callback("📝 Take Quiz", "startQuiz"));
  }

  ctx.editMessageText(
    `📘 *${level}* - ${lesson.title}\n\n${lesson.content}`,
    { parse_mode: "Markdown", ...Markup.inlineKeyboard([nav]) }
  ).catch(() => {
    ctx.reply(
      `📘 *${level}* - ${lesson.title}\n\n${lesson.content}`,
      { parse_mode: "Markdown", ...Markup.inlineKeyboard([nav]) }
    );
  });
}

// Show Quiz Question
function showQuiz(ctx) {
  const session = getSession(ctx);
  const { level, quizIndex } = session;
  const quiz = LESSONS[level].quiz.questions;

  if (quizIndex >= quiz.length) {
    const percent = Math.round((session.score / quiz.length) * 100);
    const pass = percent >= LESSONS[level].quiz.passingScore;

    let msg = `✅ Quiz Finished!\nYour Score: *${session.score}/${quiz.length}* (${percent}%)\n`;

    if (pass) {
      if (level === "Novice") {
        msg += "\n🎉 You passed Novice Level!\n➡️ Proceed to Intermediate.";
      } else if (level === "Intermediate") {
        msg += "\n🔥 You passed Intermediate!\n➡️ Proceed to Professional.";
      } else {
        msg += "\n🏆 Congratulations! You completed all levels.";
      }
    } else {
      msg += "\n❌ You did not pass. Please review lessons and try again.";
    }

    const nextButtons = [];
    if (pass) {
      if (level === "Novice")
        nextButtons.push(Markup.button.callback("Proceed to Intermediate ➡️", "nextLevel"));
      if (level === "Intermediate")
        nextButtons.push(Markup.button.callback("Proceed to Professional ➡️", "nextLevel"));
    }
    nextButtons.push(Markup.button.callback("🔄 Retry Quiz", "retryQuiz"));

    ctx.editMessageText(msg, {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([nextButtons])
    }).catch(() => {
      ctx.reply(msg, {
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([nextButtons])
      });
    });

    return;
  }

  const q = quiz[quizIndex];
  const options = q.options.map((opt, i) =>
    [Markup.button.callback(opt, `answer_${i}`)]
  );

  ctx.editMessageText(
    `❓ Q${quizIndex + 1}: ${q.q}`,
    Markup.inlineKeyboard(options)
  ).catch(() => {
    ctx.reply(
      `❓ Q${quizIndex + 1}: ${q.q}`,
      Markup.inlineKeyboard(options)
    );
  });
}

// Navigation
bot.action("nextLesson", (ctx) => {
  const session = getSession(ctx);
  session.lessonIndex++;
  showLesson(ctx);
});

bot.action("prevLesson", (ctx) => {
  const session = getSession(ctx);
  session.lessonIndex--;
  showLesson(ctx);
});

// Start Quiz
bot.action("startQuiz", (ctx) => {
  const session = getSession(ctx);
  session.quizMode = true;
  session.quizIndex = 0;
  session.score = 0;
  showQuiz(ctx);
});

// Quiz Answer
bot.action(/answer_(\d+)/, (ctx) => {
  const session = getSession(ctx);
  const choice = parseInt(ctx.match[1]);
  const { level, quizIndex } = session;
  const quiz = LESSONS[level].quiz.questions;

  if (quiz[quizIndex].answer === choice) session.score++;

  session.quizIndex++;
  showQuiz(ctx);
});

// Retry Quiz
bot.action("retryQuiz", (ctx) => {
  const session = getSession(ctx);
  session.quizIndex = 0;
  session.score = 0;
  showQuiz(ctx);
});

// Next Level
bot.action("nextLevel", (ctx) => {
  const session = getSession(ctx);

  if (session.level === "Novice") session.level = "Intermediate";
  else if (session.level === "Intermediate") session.level = "Professional";
  else {
    ctx.reply("🏆 You have completed all levels!");
    return;
  }

  session.lessonIndex = 0;
  session.quizMode = false;
  session.quizIndex = 0;
  session.score = 0;

  showLesson(ctx);
});

module.exports = bot;
