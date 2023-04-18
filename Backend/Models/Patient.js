const mongoose = require("mongoose");

const patientSchema =new mongoose.Schema({
    pName:{
        type:String,
        required:true
    },
    pAge:{
        type:Number,
        required:true
    }
});

const patients =new mongoose.model("patients",patientSchema);

module.exports = patients