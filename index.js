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
    origin:'https://jimportfolio223.netlify.app',
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))
app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Welcome to Merchant App Server',
  });
});
app.use('/api/project',projectRoute)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
