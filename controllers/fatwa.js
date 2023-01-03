const Fatwa = require("../models/fatwa");

exports.addFatwa = async (req, res, next) => {
    try {
        const fatwa = await Fatwa.create(req.body);
        return res.status(201).json({
            status: "Success",
            data: fatwa,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getFatwa = async (req, res, next) => {
    try {
        const fatwa = await Fatwa.find();
        res.status(200).json({
            status: "Success",
            result: fatwa.length,
            data: fatwa,
        });
    } catch (error) {
        return next(error);
    }
};


exports.getParticularFatwa = async (req, res, next) => {
 try {
     const fatwa = await Fatwa.findById({_id: req.params.id});
     res.status(200).json({
         status: "Success",
         data: fatwa,
     });
 } catch (error) {
     return next(error);
 }
};