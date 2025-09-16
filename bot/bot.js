import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import { lessons, quizzes } from "./lessons.js";

const bot = new Telegraf(BOT_TOKEN);

const userState = {}; // { userId: { level, index, score, quizMode, quizIndex } }

function getLessonKeyboard(userId) {
  const state = userState[userId];
  const total = lessons[state.level].length;

  const buttons = [];
  if (state.index > 0) buttons.push(Markup.button.callback("⬅️ Previous", "prev"));
  if (state.index < total - 1) buttons.push(Markup.button.callback("➡️ Next", "next"));
  else buttons.push(Markup.button.callback("📝 Take Quiz", "start_quiz"));

  return Markup.inlineKeyboard(buttons);
}

function sendLesson(ctx) {
  const state = userState[ctx.from.id];
  const lesson = lessons[state.level][state.index];
  ctx.editMessageText(
    `📚 *${lesson.title}*\n\n${lesson.content}`,
    { parse_mode: "Markdown", ...getLessonKeyboard(ctx.from.id) }
  );
}

bot.start(ctx => {
  userState[ctx.from.id] = { level: "novice", index: 0, quizMode: false };
  const lesson = lessons.novice[0];
  ctx.reply(
    `Welcome! Let's begin your crypto journey.\n\n📚 *${lesson.title}*\n\n${lesson.content}`,
    { parse_mode: "Markdown", ...getLessonKeyboard(ctx.from.id) }
  );
});

bot.action("next", ctx => {
  const state = userState[ctx.from.id];
  state.index++;
  sendLesson(ctx);
});

bot.action("prev", ctx => {
  const state = userState[ctx.from.id];
  state.index--;
  sendLesson(ctx);
});

bot.action("start_quiz", ctx => {
  const state = userState[ctx.from.id];
  state.quizMode = true;
  state.quizIndex = 0;
  state.score = 0;
  askQuiz(ctx);
});

function askQuiz(ctx) {
  const state = userState[ctx.from.id];
  const quiz = quizzes[state.level][state.quizIndex];
  ctx.editMessageText(
    `📝 *Quiz ${state.quizIndex + 1}*\n\n${quiz.q}`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard(
        quiz.options.map((opt, i) => Markup.button.callback(opt, `answer_${i}`))
      )
    }
  );
}

bot.action(/answer_(\d+)/, ctx => {
  const state = userState[ctx.from.id];
  const choice = parseInt(ctx.match[1]);
  const quiz = quizzes[state.level][state.quizIndex];

  if (choice === quiz.correct) state.score++;

  state.quizIndex++;

  if (state.quizIndex >= quizzes[state.level].length) {
    const percent = Math.round((state.score / quizzes[state.level].length) * 100);
    const result = `You scored *${percent}%*`;

    if (percent >= 70) {
      let nextLevel = state.level === "novice" ? "intermediate" :
                      state.level === "intermediate" ? "professional" : null;

      if (nextLevel) {
        ctx.editMessageText(
          `${result}\n\n🎉 Congrats! You can now proceed to *${nextLevel.toUpperCase()}*`,
          {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
              Markup.button.callback(`Proceed to ${nextLevel}`, `goto_${nextLevel}`)
            ])
          }
        );
      } else {
        ctx.editMessageText(`${result}\n\n🏁 You have completed all levels!`, { parse_mode: "Markdown" });
      }
    } else {
      ctx.editMessageText(`${result}\n\n❌ Try again to score at least 70%.`, {
        ...Markup.inlineKeyboard([Markup.button.callback("Retry Quiz", "start_quiz")]),
        parse_mode: "Markdown"
      });
    }
  } else {
    askQuiz(ctx);
  }
});

bot.action(/goto_(.+)/, ctx => {
  const next = ctx.match[1];
  userState[ctx.from.id] = { level: next, index: 0, quizMode: false };
  const lesson = lessons[next][0];
  ctx.editMessageText(
    `📚 *${lesson.title}*\n\n${lesson.content}`,
    { parse_mode: "Markdown", ...getLessonKeyboard(ctx.from.id) }
  );
});

export default bot;
