const route = require("express").Router();
const {
    addContactUsForm,
    getContactUsForm,
    getParticularContactUsForm,
    updateParticularContactUsForm,
    deleteParticularContactUsForm,
    markAsRead,
} = require("../controllers/contact");

route.get("/", getContactUsForm);
route.post("/", addContactUsForm);
route.put("/markAsRead", markAsRead);
route.get("/:id", getParticularContactUsForm);
route.put("/:id", updateParticularContactUsForm);
route.delete("/:id", deleteParticularContactUsForm);

module.exports = route;
