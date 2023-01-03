const bookRequest = require("../models/req_for_book");

exports.addBookRequest = async (req, res, next) => {
    try {
        const bookReq = await bookRequest.create(req.body);
        return res.status(201).json({
            status: "Success",
            data: bookReq,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getBookRequest = async (req, res, next) => {
    try {
        const bookReq = await bookRequest.find();
        res.status(200).json({
            status: "Success",
            result: bookReq.length,
            data: bookReq,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getParticularBookRequest = async (req, res, next) => {
 try {
     const Request = await bookRequest.findById({_id: req.params.id});
     res.status(200).json({
         status: "Success",
         data: Request,
     });
 } catch (error) {
     return next(error);
 }
};