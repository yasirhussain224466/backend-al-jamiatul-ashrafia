const Article = require("../models/article");

exports.addArticle = async (req, res, next) => {
    try {
        const article = await Article.create(req.body);
        return res.status(201).json({
            status: "Success",
            data: article,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getArticles = async (req, res, next) => {
    try {
        const articles = await Article.find();
        res.status(200).json({
            status: "Success",
            result: articles.length,
            data: articles,
        });
    } catch (error) {
        return next(error);
    }
};

exports.getParticularArticle = async (req, res, next) => {
    try {
        const article = await Article.findById({ _id: req.params.id });
        res.status(200).json({
            status: "success",
            data: article,
        });
    } catch (error) {
        return next(error);
    }
};

exports.deleteArticle = async (req, res, next) => {
    try {
        await Article.findByIdAndDelete({ _id: req.params.id });
        res.status(204).json({
            status: "delete successfully",
        });
    } catch (error) {
        return next(error);
    }
};

exports.updateArticle = async (req, res, next) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        await article.save();
        res.status(200).json({
            status: "update successfully",
            data: article,
        });
    } catch (error) {
        return next(error);
    }
};
