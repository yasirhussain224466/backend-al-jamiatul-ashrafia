const route = require("express").Router();
const {
    addContactUsForm,
    getContactUsForm,
    getParticularContactUsForm,
} = require("../controllers/contact");

route.get("/", getContactUsForm);

route.post("/", addContactUsForm);

route.put("/:id", getParticularContactUsForm);

module.exports = route;
