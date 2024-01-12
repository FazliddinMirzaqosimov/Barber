const { Router } = require("express");
const { templateControllers } = require("../controllers/templateControllers");

const templateRouter = Router();

templateRouter.route("/book/:userId").get(templateControllers.getBookPage);

module.exports = templateRouter;
