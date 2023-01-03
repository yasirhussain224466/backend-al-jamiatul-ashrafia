const route = require("express").Router();
const {
    addBookRequest,
    getBookRequest,
    getParticularBookRequest,
} = require("../controllers/req_for_book");

route.get("/", getBookRequest);
route.post("/", addBookRequest);
route.put("/:id", getParticularBookRequest);

module.exports = route;
