const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const connectDB=require('./connectDB')
const User=require('./model')
require('dotenv');
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const cors=require('cors');
const Contact=require('./contactmodel')
const Design=require('./designmodel')


const app=express();
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

mongoose.set("strictQuery", true);
connectDB();

app.get('/get',async(req,res)=>{
    const data=await User.find();
    res.send({"detail":data})
})
app.post('/save',async(req,res) =>{
    console.log(req.body);
    const data=req.body;
    const user=new User(data);
    const result=await user.save();
    res.send({"result":result});
   
})
app.post('/save_design',async(req,res) =>{
    console.log(req.body);
    const data=req.body;
    const design=new Design(data);
    const result=await design.save();
    res.send({"result":result});
   
})

app.post('/contact',async(req,res) =>{
    console.log(req.body);
    const data=req.body;
    const contact=new Contact(data);
    const result=await contact.save();
    res.send({"result":result});
})
app.get('/get/contact',async(req,res)=>{
    const data=await Contact.find();
    res.send({"detail":data})
})
app.get('/get/contact/:id',async(req,res)=>{
    const data=await Contact.find({'_id':req.params.id});
    res.send({"detail":data})
})
app.get('/get/design',async(req,res)=>{
    const data=await Design.find();
    res.send({"detail":data})
})
app.delete('/delete/:id',async(req,res)=>{
    const data=await User.deleteOne({ _id: req.params.id });
    res.send(JSON.stringify(data));
})

app.patch('/update/:id', async(req,res)=>{
    const data=User.findOne({_id:req.params.id});
    const response=await User.updateOne({ _id: req.params.id },
        { $set: req.body });
    res.send(response);
})

app.listen(4000,()=>{
    console.log("connected to port");
})


