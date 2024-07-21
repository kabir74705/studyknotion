const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
        trim:true,
    },
    lastName : {
        type:String,
        required:true,
        trim:true,
    },
    email : {
        type:String,
        required:true,
        trim:true,
    },
    password : {
        type:String,
        required:true,
    },
    accountType : {
        type:String,
        enum:["Student","Admin","Instructor"]
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"profile",
    },
    courses:[
        { type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ],
    image:{
        type:String,
        
    },
    courseProgress:[
        { type:mongoose.Schema.Types.ObjectId,
            ref:"courseProgress",
        }
    ],
    token: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
    
})
module.exports = mongoose.model("user",userSchema);