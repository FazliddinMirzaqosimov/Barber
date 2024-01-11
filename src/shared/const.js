 
exports.BOT_TOKEN = process.env.BOT_TOKEN || "";
exports.ENVIRONMENT = process.env.ENVIRONMENT;
exports.API_URL = process.env.API_URL;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRE = process.env.JWT_EXPIRE;
exports.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
exports.DATABASE_URL = process.env.DATABASE_URL.replace("<password>",this.DATABASE_PASSWORD);
exports.PORT = process.env.PORT;
 