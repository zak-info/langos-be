const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
const multer = require("multer");

const { connectToDatabase } = require('./DB_Connection/db');

const path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors())
app.use(cors({
    origin: "*", // Allow your frontend's origin
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));


const http = require("http");
const server = http.createServer(app);

const courseRoutes = require("./routes/courses");
const examRoutes = require("./routes/exams");
const userRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");





app.use("/courses", courseRoutes);
app.use("/exam", examRoutes);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);



app.use("/public", express.static("public"));


app.get("/", (req, res) => {
    res.json({ msg: "hi there " })
})


















connectToDatabase()
    .then(() => {
        server.listen(8000, () => {
            console.log("server is running on 8000");
        });
    })
    .catch(error => {
        console.log(error);
    })
