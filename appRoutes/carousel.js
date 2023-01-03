const route = require("express").Router();
const {
    addCarousel,
    getCarousel,
    updateByOneCarousel,
    deleteCarousel,
} = require("../controllers/carousel");
const uploads = require("../middlewares/upload");

route.post("/", uploads.array("image"), addCarousel);
route.put("/:id/:pub_id", uploads.single("image"), updateByOneCarousel);
route.delete("/:id/:pub_id", uploads.single("image"), deleteCarousel);
route.get("/", getCarousel);

module.exports = route;
