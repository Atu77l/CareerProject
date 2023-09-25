const { express } = require('express');
const mongoose=require('mongoose');

const user=mongoose.Schema(
    {
        companyname:{
            type:String
        },
        about:{
            type:String
        },
        package:{
            type:String
        },
        experience:{
            type:String
        }
    }
);

module.exports=new mongoose.model('user',user);