const { Markup } = require("telegraf");
const User = require("../../modules/userModule");

exports.routeProtector = async (ctx, next) => {
  try {
    if (ctx?.update?.callback_query?.data === "register") {
      await ctx.answerCbQuery();
       await ctx.scene.enter("register-scene");
      return;
    }
    if (ctx.session?.user) {
      return next();
    }
    ctx.session = ctx.session || {};
    const user = await User.findOne({ tgId: ctx.from.id });
    if (!user) {
      return await ctx.reply(
        "Registratsiya qiliwin kere bu botni iwllatiw ucun!",
        {
          ...Markup.inlineKeyboard([
            Markup.button.callback("Registratsiya", "register"),
          ]),

          remove_keyboard: true,
        }
      );
    }
    ctx.session.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
