const express = require("express");
const cors = require("cors");
const connect = require("./connect.js");
const patients = require("./Models/Patient.js");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

connect();

app.get("/getPatientsData",async(req,res)=>{
    res.send(await patients.find());
});

app.listen(process.env.PORT || PORT,()=>{
    console.log(`server running on ${PORT}`)
});