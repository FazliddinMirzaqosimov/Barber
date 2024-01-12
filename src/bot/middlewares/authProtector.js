const { Markup } = require("telegraf");
const User = require("../../modules/userModule");

exports.routeProtector = async (ctx, next) => {
  try {
    if (ctx?.update?.callback_query?.data === "register") {
      return await ctx.scene.enter("register-scene");
    }
    if (ctx.session?.user) {
      return next();
    }
    ctx.session = ctx.session || {};
    const user = await User.findOne({ tgId: ctx.from.id });
    if (!user) {
      return await ctx.reply(
        "Registratsiya qiliwin kere bu botni iwllatiw ucun!",
        Markup.inlineKeyboard([
          Markup.button.callback('Registratsiya', 'register'),
         ])
      );
    }
    ctx.session.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
