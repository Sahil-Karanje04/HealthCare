const mongoose = require("mongoose");

const connect = ()=>{

mongoose.connect("mongodb://127.0.0.1:27017/healthcare",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to database")
    }).catch((error)=>{
        console.log(error);
});

}

module.exports = connect