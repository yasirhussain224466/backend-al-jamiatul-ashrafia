const Carousel = require("../models/carousel");
const cloudinary = require("../services/cloudinary");
// const Cloudinary = require("cloudinary");
const fs = require("fs");

exports.addCarousel = async (req, res, next) => {
    try {
        const PreviousCaousel = await Carousel.find();
        if (PreviousCaousel) {
            await Carousel.deleteMany();
            for (const item of PreviousCaousel[0].images) {
                await cloudinary.removeFromCloudinary(item.id);
            }
        }
        const uploader = async (path) =>
            await cloudinary.upload(path, "Carousel");
        const urls = [];
        for (const file of req.files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        const carousel = await Carousel.create({ images: urls });
        res.status(200).json({
            status: "success",
            data: carousel,
        });
    } catch (error) {
        next(error);
    }
};

exports.updateByOneCarousel = async (req, res, next) => {
    try {
        const data = await cloudinary.upload(req.file.path, "Carousel");
        await cloudinary.removeFromCloudinary(req.body.pub_id);
        const updateCarousel = await Carousel.updateOne(
            {
                _id: req.params.id,

                images: {
                    $elemMatch: { _id: req.params.pub_id },
                },
            },
            { $set: { "images.$.url": data.url, "images.$.id": data.id } }
        );

        // console.log(updateCarousel);
        if (updateCarousel) {
            res.status(200).json({
                status: "success",
            });
        } else {
            res.status(404).json({
                status: "Bad request",
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.deleteCarousel = async (req, res, next) => {
    try {
        console.log("req.params", req.params);
        const deleteCarousel = await Carousel.updateOne(
            {
                _id: req.params.id,
            },
            {
                $pull: {
                    images: {
                        _id: req.params.pub_id,
                    },
                },
            }
        );
        if (req.body.pub_id) {
            console.log("hello");
            await cloudinary.removeFromCloudinary(req.body.pub_id);
        }
        res.status(200).json({
            status: "success",
            deleteCarousel,
        });
    } catch (error) {
        next(error);
    }
};

exports.getCarousel = async (req, res, next) => {
    try {
        const carousel = await Carousel.find();
        res.status(200).json({
            status: "success",
            data: carousel,
        });
    } catch (error) {
        next(error);
    }
};
