const express = require("express");
const multer = require("multer");
const path = require("path");
const User = require("../models/User");


const router = express.Router();


// router.use(express.json()); // For JSON body
// router.use(express.urlencoded({ extended: true })); 

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await User.findOne({ email });
        console.log(result);
        if (result?._id) {
            if (result?.password == password) {
                res.status(200).json({ message: "User accessed successfully", data:result });
            } else {
                res.status(401).json({ message: "Unautherized , wrong password" });
            }
        } else {
            res.status(404).json({ message: "user didnt exist" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/", async (req, res) => {
    const users = await User.find();
    res.status(200).json({ data: users })

})










module.exports = router;
