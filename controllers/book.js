const Book = require("../models/book");
const cloudinary = require("../services/cloudinary");

exports.addBook = async (req, res, next) => {
    console.log("Hello")
    try {
        const book = await Book.create(req.body);
        if (req.file) {
            const data = await cloudinary.upload(req.file.path, "book");
            await Book.updateOne(
                { _id: book._id },
                {
                    $set: {
                        book_image_url: data.url,
                        book_image_id: data.id,
                    },
                }
            );
            res.status(200).json({
                status: "success",
                data: await Book.findById({ _id: book._id }),
            });
        } else {
            await Book.deleteOne({ _id: book._id });
            res.status(400).json({
                status: "Image file is required !!",
            });
        }
    } catch (error) {
        return next(error);
    }
};

exports.getBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            status: "Success",
            result: books.length,
            data: books,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getParticularBook = async (req, res, next) => {
    try {
        const book = await Book.findById({ _id: req.params.id });
        res.status(200).json({
            status: "success",
            data: book,
        });
    } catch (error) {
        return next(error);
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        await Book.findByIdAndDelete({ _id: req.params.id });
        const book = await Book.findById({ _id: req.params.id });
        await cloudinary.removeFromCloudinary(book?.book_image_id);
        res.status(204).json({
            status: "delete successfully",
        });
    } catch (error) {
        return next(error);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (req.file && book.book_image_id) {
            await cloudinary.removeFromCloudinary(book?.book_image_id);
            const data = await cloudinary.upload(req.file.path, "book");
            await Book.updateOne(
                { _id: book._id },
                {
                    $set: {
                        book_image_url: data.url,
                        book_image_id: data.id,
                    },
                }
            );
        }
        await book.save();
        res.status(200).json({
            status: "update successfully",
            data: await Book.findById(req.params.id),
        });
    } catch (error) {
        return next(error);
    }
};
