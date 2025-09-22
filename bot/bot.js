import { Telegraf, Markup } from "telegraf";
import lessonsData from "./lessons.json" assert { type: "json" };
import { BOT_TOKEN } from "../config.js";

const bot = new Telegraf(BOT_TOKEN);

// Track user state
const userProgress = {};

function getLesson(level, index) {
  const lesson = lessonsData[level].lessons[index];
  return `📘 *${lesson.title}*\n\n${lesson.content}`;
}

bot.start((ctx) => {
  userProgress[ctx.from.id] = { level: "novice", index: 0, score: 0, quizMode: false };
  ctx.reply(
    `👋 Welcome ${ctx.from.first_name}!\n\nLet's begin your crypto journey.`,
    Markup.inlineKeyboard([Markup.button.callback("Start Novice ➡️", "next")])
  );
});

bot.action(["next", "prev"], async (ctx) => {
  const id = ctx.from.id;
  const state = userProgress[id];
  const level = lessonsData[state.level];
  const direction = ctx.match[0];

  if (!state.quizMode) {
    if (direction === "next" && state.index < level.lessons.length - 1) state.index++;
    else if (direction === "prev" && state.index > 0) state.index--;
    else if (direction === "next" && state.index === level.lessons.length - 1) {
      state.quizMode = true;
      state.index = 0;
      return ctx.editMessageText(
        `✅ Lessons complete!\nNow let's test your knowledge with a short quiz.`,
        Markup.inlineKeyboard([Markup.button.callback("Start Quiz 📝", "quiz")])
      );
    }

    await ctx.editMessageText(
      getLesson(state.level, state.index),
      {
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([
          ...(state.index > 0 ? [Markup.button.callback("⬅️ Previous", "prev")] : []),
          Markup.button.callback("Next ➡️", "next")
        ])
      }
    );
  }
});

bot.action("quiz", async (ctx) => {
  const id = ctx.from.id;
  const state = userProgress[id];
  const level = lessonsData[state.level];
  const q = level.quiz[state.index];

  await ctx.editMessageText(
    `📝 *Quiz ${state.index + 1}:* ${q.question}`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard(
        q.options.map((opt) => [Markup.button.callback(opt, `answer:${opt}`)])
      )
    }
  );
});

bot.action(/answer:(.+)/, async (ctx) => {
  const id = ctx.from.id;
  const answer = ctx.match[1];
  const state = userProgress[id];
  const level = lessonsData[state.level];
  const q = level.quiz[state.index];

  if (answer === q.answer) {
    state.score++;
    await ctx.answerCbQuery("✅ Correct!");
  } else {
    await ctx.answerCbQuery("❌ Wrong!");
  }

  if (state.index < level.quiz.length - 1) {
    state.index++;
    return bot.telegram.sendMessage(
      id,
      `📝 *Quiz ${state.index + 1}:* ${level.quiz[state.index].question}`,
      {
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard(
          level.quiz[state.index].options.map((opt) => [Markup.button.callback(opt, `answer:${opt}`)])
        )
      }
    );
  } else {
    const percent = Math.round((state.score / level.quiz.length) * 100);
    const passed = percent >= 70;
    userProgress[id] = { level: passed ? "intermediate" : "novice", index: 0, score: 0, quizMode: false };

    return ctx.editMessageText(
      `🎯 Quiz complete!\nYour score: *${percent}%*`,
      {
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([
          Markup.button.callback(
            passed ? "Proceed to Intermediate ➡️" : "Retry Novice 🔄",
            "next"
          )
        ])
      }
    );
  }
});

export default bot;
