const express = require("express");
const multer = require("multer");
const path = require("path");
const User = require("../models/User");


const router = express.Router();


// router.use(express.json()); // For JSON body
// router.use(express.urlencoded({ extended: true })); 

router.post("/", async (req, res) => {
    try {
        const { fullname, email, phone, password ,type} = req.body;
        const result = new User({
            fullname,
            email,
            phone,
            password,
            type,
        });

        await result.save();
        res.status(201).json({ message: "User Created successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/",async (req,res)=>{
    const users = await User.find();
    res.status(200).json({data:users})

})










module.exports = router;
