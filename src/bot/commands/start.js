const { main_keyboards } = require("../keyboards");

exports.start = async (ctx) => {
  await ctx.reply(
    "Assalomu aleykum bratishka nima gap. Bittasini tanla Klentmisan yoki Sartaroshmisan!",
    {
      reply_markup: main_keyboards,
    }
  );
};
 