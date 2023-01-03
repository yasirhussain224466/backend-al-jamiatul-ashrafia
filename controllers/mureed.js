const Mareed = require("../models/mureed");

exports.addMureed = async (req, res, next) => {
    try {
        const mureed = await Mareed.create(req.body);
        return res.status(201).json({
            status: "Success",
            data: mureed,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getMureed = async (req, res, next) => {
    try {
        const mureeds = await Mareed.find();
        res.status(200).json({
            status: "Success",
            result: mureeds.length,
            data: mureeds,
        });
    } catch (error) {
        return next(error);
    }
};


exports.getParticularMureed = async (req, res, next) => {
 try {
     const mureed = await Mareed.findById({_id: req.params.id});
     res.status(200).json({
         status: "Success",
         data: mureed,
     });
 } catch (error) {
     return next(error);
 }
};


