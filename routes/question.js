const express = require("express");
const multer = require("multer");
const path = require("path");
const Question = require("../models/Question");
const Choice = require("../models/Choice");


const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const { idUser,idQuiz,text,points , choices} = req.body;
        const result = new Question({idUser,idQuiz,text,points,choices});
        await result.save();
        res.status(201).json({ message: "Question Created successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/",async (req,res)=>{
    const quizs = await Question.find();
    res.status(200).json({data:quizs})
})


router.get("/:id",async (req,res)=>{
    const questions = await Question.find({idQuiz:req.params.id});
    res.status(200).json({data:questions})
})









module.exports = router;
