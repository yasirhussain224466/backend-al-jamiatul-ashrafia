const route = require("express").Router();
const {
    addArticle,
    deleteArticle,
    getArticles,
    getParticularArticle,
    updateArticle,
} = require("../controllers/article");

route.get("/", getArticles);
route.post("/", addArticle);
route.put("/:id", updateArticle);
route.delete("/:id", deleteArticle);
route.get("/:id", getParticularArticle);

module.exports = route;
