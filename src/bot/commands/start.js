const {   client_menu_keyboard } = require("../keyboards");

exports.start = async (ctx) => {
  await ctx.reply(
    "Start bosdin hoz!",
    {
      reply_markup: client_menu_keyboard,
    }
  );
};
 