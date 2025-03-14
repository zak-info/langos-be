const express = require("express");
const multer = require("multer");
const path = require("path");
const Course = require("../models/Course");

const router = express.Router();




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/courses"); // Save files in public/courses
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only images and PDFs are allowed."), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});



const thumbnailsDir = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/filaha-products/'); // Ensure the 'uploads' folder exists
    },
    filename: (req, file, cb) => {
        const originalName = file.originalname;
        const extension = originalName.substring(originalName.lastIndexOf('.'));

        cb(null, `${Date.now()}-${uuidv4()}${extension}`);
    },
});
const thumbnails = multer({ storage: thumbnailsDir });
















module.exports = router;
