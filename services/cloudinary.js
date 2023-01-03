const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SCRET,
});

const upload = (path, folder) => {
    return cloudinary.v2.uploader
        .upload(path, { folder })
        .then((data) => {
            return { url: data.url, id: data.public_id };
        })
        .catch((err) => {
            console.log(err);
        });
};

const removeFromCloudinary = async (public_id) => {
    await cloudinary.v2.uploader.destroy(public_id, function (error, result) {
        console.log(error, result);
    });
};

module.exports = { upload, removeFromCloudinary };
