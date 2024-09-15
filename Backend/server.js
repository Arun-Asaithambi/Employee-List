const express = require("express");
const app = express();
const path = require('path')
const dotenv = require("dotenv");
const cors = require("cors")
const connectDatabase = require("./config/database");
const details = require('./routs/router');
const Auth = require("./routs/authRouter");

dotenv.config({path:path.join(__dirname,"config/config.env")})
app.use(cors())
app.use(express.json());
app.use("/", details);
app.use("/", Auth);

connectDatabase();

app.listen(process.env.PORT, () =>{
    console.log(`port listining ${process.env.PORT}`)
})