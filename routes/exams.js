const express = require("express");
const multer = require("multer");
const path = require("path");
const Exam = require("../models/Exam");

const router = express.Router();




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/exams"); // Save files in public/courses
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

        const newExam = new Exam({
            idUser,
            category,
            module,
            title,
            description,
            url,
            filePath: `/exams/${req.file.filename}`, // Store relative path
        });

        await newExam.save();
        res.status(201).json({ message: "Course uploaded successfully", newExam });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/",async (req,res)=>{
    const exams = await Exam.find();
    res.status(200).json({data:exams})

})










module.exports = router;
