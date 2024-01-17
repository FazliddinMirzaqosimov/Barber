const { Scenes, Markup } = require("telegraf");
const { main_keyboards, client_menu_keyboard } = require("../keyboards");
const User = require("../../modules/userModule");
const { start } = require("../commands/start");

const registerScene = new Scenes.WizardScene(
  "register-scene",
  async (ctx) => {
    await ctx.reply(
      "Enter your fullName",
      Markup.keyboard([["Asosiy menu"]]).resize()
    );
    ctx.wizard.state.data = {};
    ctx.wizard.state.data.tgId = ctx.from.id;
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.fullName = ctx.message.text;
    ctx.reply(
      "Enter your phone number",
      Markup.keyboard([
        ["Asosiy menu"],
        [Markup.button.contactRequest("Share Contact")],
      ]).resize()
    );
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.phoneNumber =
      ctx.message.text || ctx.message.contact.phone_number;
    ctx.reply("Who are you client or barber", {
      reply_markup: main_keyboards,
    });
    return ctx.wizard.next();
  },
  async (ctx) => {
    try {
      ctx.answerCbQuery();
      await ctx.reply(ctx.update.callback_query.data);
      ctx.wizard.state.data.role = ctx.update.callback_query.data;
      const user = await User.create(ctx.wizard.state.data);
      ctx.session.user = user;

      ctx.reply(`You are logged in`, {
        reply_markup: {
          keyboard: client_menu_keyboard,
          resize_keyboard: true,
        },
      });
    } catch (error) {
      ctx.reply("Nimadir xato ketdi! boshidan boshlang");
      ctx.scene.enter("register-scene");
      console.log(error);
    }

    return ctx.scene.leave();
  }
);

registerScene.hears("Asosiy menu", async (ctx) => {
  await ctx.scene.leave();
  await ctx.reply(
    "Asosiy menuga qaytdik. Botga start berish uchun /start ni bosing",
    { reply_markup: { remove_keyboard: true } }
  );
});

registerScene.start(async (ctx) => {
  ctx.scene.leave();
  return await ctx.reply(
    "Registratsiya qiliwin kere bu botni iwllatiw ucun!",
    Markup.inlineKeyboard([Markup.button.callback("Registratsiya", "register")])
  );
});
registerScene.action("register", async (ctx) => {
  await ctx.scene.reenter("my-wizard")(ctx);
});

module.exports = registerScene;
 