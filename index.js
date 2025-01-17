const express = require("express");
const cookieParser = require("cookie-parser");
const cors=require('cors')
const connectDB=require('./Config/db')
const projectRoute=require('./Route/ProjectRoute')
require("dotenv").config();
const bodyParser = require("body-parser");

connectDB();

const app = express();

app.use(bodyParser.json({ limit: "1000mb" })); 
app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))

app.use('/api/project',projectRoute)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));