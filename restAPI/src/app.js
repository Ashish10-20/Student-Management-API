const express = require("express");
require("./db/conn");
const studentRouter=require('./Routes/router')
const Student = require("./models/students");
const { default: mongoose } = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());// watch yt 7 video at 7:30
app.use(studentRouter)

app.listen(port, () => {
  console.log(`🚀 Server is running at ${port}`);
});
