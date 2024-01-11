const User = require("../../modules/userModule");

exports.routeProtector = async (ctx, next) => {
  try {
    if (ctx.session?.user) {
      return next();
    }
    ctx.session = {};
    const user = await User.findOne({ tgId: ctx.from.id });
    if (!user) {
      return ctx.scene.enter("login-scene");
    }
    ctx.session.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
