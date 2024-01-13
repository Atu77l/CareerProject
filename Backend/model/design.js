const { express } = require('express');
const mongoose=require('mongoose');

const design=mongoose.Schema(
    {
        title:{
            type:String
        },
        topic:{
            type:String
        },
        code:{
            type:String
        },
        link:{
            type:String
        }
    }
);

module.exports=new mongoose.model('Design',design);