const { Scenes } = require("telegraf");
const { main_keyboards } = require("../keyboards");
const User = require("../../modules/userModule");

exports.registerScene = new Scenes.WizardScene(
  "register-scene",
  async (ctx) => {
    ctx.answerCbQuery();
    ctx.reply("Soorry You are not logged in. Enter your fullName");
    ctx.wizard.state.data = {};
    ctx.wizard.state.data.tgId = ctx.from.id;
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.fullName = ctx.message.text;
    ctx.reply("Enter your phone number", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Share contact",
              request_contact: true,
            },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
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
      ctx.reply("Nimadir xato ketdi! boshidan boshlang")
      ctx.scene.enter("register-scene")
      console.log(error);
    }

    return ctx.scene.leave();
  }
);
