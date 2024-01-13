const { express } = require('express');
const mongoose=require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});
const job=new mongoose.Schema(
    {
        company:{
            type:String,
            required:true
        },
        experience:{
            type:String,
            required:true
        },
        salary:{
            type:String,
            required:true
        },
        about:{
            type:String,
            required:true
        },
        education:{
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
        description:
        {
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true  
        },
        work:{
            type:String,
            required:true  
        },
        role:{
            type:String,
            required:true  
        },
        test:{
            type:String,
            required:true  
        },
        time:{
            type:String,
            required:true  
        },
        questionlist:{
            type: [questionSchema],
            require:true
        }
    }
);

module.exports=new mongoose.model('job',job);