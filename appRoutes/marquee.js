const route = require("express").Router();
const {
    addMarquee,
    getMarquee,
    updateMarquee,
} = require("../controllers/marquee");

route.get("/", getMarquee);

route.post("/", addMarquee);

route.get("/:id", updateMarquee);

module.exports = route;
