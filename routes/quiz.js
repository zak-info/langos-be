const express = require("express");
const multer = require("multer");
const path = require("path");
const Quiz = require("../models/Quiz");


const router = express.Router();


// router.use(express.json()); // For JSON body
// router.use(express.urlencoded({ extended: true })); 

router.post("/", async (req, res) => {
    try {
        const { idUser,category,module,title,description} = req.body;
        const result = new Quiz({idUser,category,module,title,description});
        await result.save();
        res.status(201).json({ message: "Quiz Created successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/",async (req,res)=>{
    const quizs = await Quiz.find();
    res.status(200).json({data:quizs})
})


router.get("/:id",async (req,res)=>{
    const quizs = await Quiz.find({idUser:req.params.id});
    res.status(200).json({data:quizs})
})









module.exports = router;
