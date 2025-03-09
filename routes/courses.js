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
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
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

router.post("/", upload.single("file"), async (req, res) => {
    try {
        const { idUser, category, module, title, description, url } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "File is required" });
        }

        const newCourse = new Course({
            idUser,
            category,
            module,
            title,
            description,
            url,
            filePath: `/courses/${req.file.filename}`, // Store relative path
        });

        await newCourse.save();
        res.status(201).json({ message: "Course uploaded successfully", newCourse });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/",async (req,res)=>{
    const courses = await Course.find();
    res.status(200).json({data:courses})

})










module.exports = router;
