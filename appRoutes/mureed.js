const route = require("express").Router();
const {
    addMureed,
    getMureed,
    getParticularMureed,
} = require("../controllers/mureed");

route.get("/", getMureed);
route.post("/", addMureed);
route.put("/:id", getParticularMureed);

module.exports = route;
