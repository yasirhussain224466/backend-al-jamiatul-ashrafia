const route = require("express").Router();
const uploads = require("../middlewares/upload");
// const { removeFromCloudinary, upload } = require("../services/cloudinary");
const {
    addBook,
    deleteBook,
    getBooks,
    updateBook,
    getParticularBook,
} = require("../controllers/book");

route.get("/", getBooks);
route.post("/", uploads.single("image"), addBook);
route.put("/:id", uploads.single("image"), updateBook);
route.delete("/:id", deleteBook);
route.get("/:id", getParticularBook);

module.exports = route;
