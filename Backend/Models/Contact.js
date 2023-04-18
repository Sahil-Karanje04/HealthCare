const mongoose = require("mongoose");

const contactSchema =new mongoose.Schema({
    contactame:{
        type:String,
    },
    contactemail:{
        type:String,
    },
    contacttext:{
        type:String,
    }
});

const contactus =new mongoose.model("contactus",contactSchema);

module.exports = contactus