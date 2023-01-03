const Marquee = require("../models/marquee");

exports.addMarquee = async (req, res, next) => {
    try {
        const marqueedata = await Marquee.find();
        if (marqueedata) {
            await Marquee.deleteMany();
            const newMarquee = await Marquee.create(req.body);
            return res.status(201).json({
                status: "Success",
                message: "New marquee added successfully",
                result: newMarquee.length,
                data: { newMarquee },
            });
        } else {
            const newMarquee = await Marquee.create(req.body);
            return res.status(201).json({
                status: "Success",
                message: "First marquee added successfully",
                result: newMarquee.length,
                data: { newMarquee },
            });
        }
    } catch (error) {
        return next(error);
    }
};

exports.getMarquee = async (req, res, next) => {
    try {
        const allMarquee = await Marquee.find();
        res.status(200).json({
            status: "Success",
            result: allMarquee.length,
            data: allMarquee[0],
        });
    } catch (error) {
        return next(error);
    }
};

exports.updateMarquee = async (req, res, next) => {
    try {
        const marquee = await Marquee.findById({ _id: req.params.id });
        const { ticker } = req.body;
        marquee.ticker = ticker;
        await marquee.save();
        next();
        res.status(200).json({
            status: "successfully updated",
            data: marquee,
        });
    } catch (error) {
        return next(error);
    }
};
