const route = require("express").Router();
// const requireAuth = require("../middlewares/auth");
// const roleAuth = require("../middlewares/role");
const { getUsers, addUser } = require("../controllers/user");

route.get("/", getUsers);

route.post("/", addUser);

module.exports = route;
