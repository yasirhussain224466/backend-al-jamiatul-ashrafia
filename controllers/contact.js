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
        const contactInfo = await ContactUs.find();
        res.status(200).json({
            status: "Success",
            result: contactInfo.length,
            data: contactInfo,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getParticularContactUsForm = async (req, res, next) => {
 try {
     const contactInfo = await ContactUs.findById({_id: req.params.id});
     res.status(200).json({
         status: "Success",
         data: contactInfo,
     });
 } catch (error) {
     return next(error);
 }
};
