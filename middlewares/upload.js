const multer = require("multer");

//specify the storage enjine

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

// file validation

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb({ message: "Unsupported File Formate" }, false);
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 },
    fileFilter,
});

module.exports = upload;
