const { express } = require('express');
const mongoose=require('mongoose');

const contact=mongoose.Schema(
    {
        name:{
            type:String
        },
        phonenumber:{
            type:String
        },
        email:{
            type:String
        },
        message:{
            type:String
        }
    }
);

module.exports=new mongoose.model('contact',contact);