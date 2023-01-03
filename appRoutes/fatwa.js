const route = require("express").Router();
const {
    addFatwa,
    getFatwa,
    getParticularFatwa,
} = require("../controllers/fatwa");

route.get("/", getFatwa);

route.post("/", addFatwa);

route.put("/:id", getParticularFatwa);

module.exports = route;
