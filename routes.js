const Router = require("express").Router();
const userRoutes = require("./appRoutes/user");
const marqueeRoute = require("./appRoutes/marquee");
const mureedRoute = require("./appRoutes/mureed");
const fatwaRoute = require("./appRoutes/fatwa");
const contactUsRoute = require("./appRoutes/contact");
const bookRoute = require("./appRoutes/book");
const articleRoute = require("./appRoutes/article");
const reqForBook = require("./appRoutes/req_for_bbok");
const carousel = require("./appRoutes/carousel");

Router.use("/user", userRoutes);
Router.use("/marquee", marqueeRoute);
Router.use("/mureed", mureedRoute);
Router.use("/fatwa", fatwaRoute);
Router.use("/contactUs", contactUsRoute);
Router.use("/book", bookRoute);
Router.use("/article", articleRoute);
Router.use("/reqForBook", reqForBook);
Router.use("/carousel", carousel);

module.exports = Router;
