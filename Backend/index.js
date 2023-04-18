const express = require("express");
const cors = require("cors");
const connect = require("./connect.js");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

connect();

app.get("/",(req,res)=>{
    res.send("working");
});

app.listen(process.env.PORT || PORT,()=>{
    console.log(`server running on ${PORT}`)
});