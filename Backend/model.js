const { express } = require('express');
const mongoose=require('mongoose');

const user=mongoose.Schema(
    {
        companyname:{
            type:String,
            required:true
        },
        experience:{
            type:String,
            required:true
        },
        package:{
            type:String,
            required:true
        },
        about:{
            type:String,
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true

        },
        location:{
            type:String,
            required:true
        },
        jobOverview:
        {
            type:String,
            required:true
        }
    }
);

module.exports=new mongoose.model('user',user);