const ContactUs = require("../models/contactUs");

exports.addContactUsForm = async (req, res, next) => {
    try {
        const contactInfo = await ContactUs.create(req.body);
        return res.status(201).json({
            status: "Success",
            data: contactInfo,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getContactUsForm = async (req, res, next) => {
    try {
        let contactInfo;
        if (req.query?.seen === "true" || req.query?.seen === "false") {
            contactInfo = await ContactUs.find({
                seen: req.query?.seen,
            }).sort({ createdAt: -1 });
        } else {
            contactInfo = await ContactUs.find().sort({ createdAt: -1 });
        }

        const seenLen = await await ContactUs.countDocuments({
            seen: true,
        });
        const unSeenLen = await ContactUs.countDocuments({
            seen: false,
        });
        const total = await ContactUs.countDocuments();
        console.log({ seenLen, unSeenLen });
        res.status(200).json({
            status: "Success",
            seenLen,
            unSeenLen,
            total,
            data: contactInfo,
        });
    } catch (error) {
        console.log(error);
        return next(error);
    }
};

exports.getParticularContactUsForm = async (req, res, next) => {
    try {
        const contactInfo = await ContactUs.findById({ _id: req.params.id });
        res.status(200).json({
            status: "Success",
            data: contactInfo,
        });
    } catch (error) {
        return next(error);
    }
};

exports.updateParticularContactUsForm = async (req, res, next) => {
    try {
        const contactInfo = await ContactUs.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json({
            status: "Success",
            data: contactInfo,
        });
    } catch (error) {
        return next(error);
    }
};

exports.markAsRead = async (req, res, next) => {
    try {
        console.log("hello");
        const contactInfo = await ContactUs.updateMany({}, req.body, {
            new: true,
            runValidators: false,
        });
        res.status(200).json({
            status: "Success",
            data: contactInfo,
        });
    } catch (error) {
        return next(error);
    }
};

exports.deleteParticularContactUsForm = async (req, res, next) => {
    try {
        await ContactUs.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({
            status: "Success",
        });
    } catch (error) {
        return next(error);
    }
};
