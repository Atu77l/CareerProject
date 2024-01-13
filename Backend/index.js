const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const connectDB=require('./connectDB')
const job=require('./model/job')
const user=require('./model/user')
const Contact=require('./model/contact')
const Design=require('./model/design')
require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
const { ObjectId } = mongoose.Types; // Import ObjectId from mongoose.Types

mongoose.set("strictQuery", true);
connectDB();

const verify_token=(token)=>{
    try {
        let secretKey=process.env.SECRET_KEY
        const decoded = jwt.verify(token, secretKey);
        console.log('decoded',decoded)
        return true;
    } catch (error) {
        console.log(error,'error');
        return false;
    }
}
app.post('/login',async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Use findOne from Mongoose
        const data = await user.findOne({ "email": email });
        console.log(process.env.SECRET_KEY)
        const token = jwt.sign({"email":email}, process.env.SECRET_KEY, { expiresIn: '1h' }); // You can customize the expiration time
        
        if (data) {
            if (password === data.password) {
                data.token=token;
                console.log(data,'data')
                return res.status(200).json({ "status": "success", "data": data,"token":token });
            } else {
                return res.status(200).json({ "status": "fail", "data": 'Invalid password' });
            }
        } else {
            return res.status(200).json({ "status": "fail", "data": 'Email does not exist' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "status": "fail", "data": "An error occurred" });
    }
})
app.post('/register',async(req,res)=>{
   try {
      console.log(req.body,'body')
      const new_user=new user(req.body);
      const response=await new_user.save();
      return res.status(200).json({ "data": response });
    } catch (error) {
      console.log(error,'error')
     return res.status(500).json({ "error": "An error occurred" });
   }
})
app.get('/job',async(req,res)=>{
    try {
        const data=await job.find();
        console.log(data,'data')
        return res.status(200).json({"data":data})
    } catch (error) {
        console.log(error,'error')
        return res.status(500).json({"error":"error message"})  
    }
})

app.get('/job/:id',async(req,res)=>{
    try {
        const data=await job.find({'_id':ObjectId(req.params.id)});
        res.status(200).json({"data":data});
    } catch (error) {
        res.status(500).json({"error":"Error Message"}) 
    }
})

app.post('/addjob',async(req,res) =>{
    try {
        const new_job=new job(req.body);
        console.log(req.body)
        const result=await new_job.save();
        return res.status(200).json({"data":result});
    }catch (error) {
        console.log(error)
        return res.status(500).json({"error":"error message"})
    }
})

app.delete('/deletejob/:id',async(req,res)=>{
    try {
        const data=await job.deleteOne({ _id: req.params.id });
        return res.status(200).json({"data":data});
    } catch (error) {
        return res.status(500).json({"error":"error message"})
    }
})

app.patch('/updatejob/:id', async(req,res)=>{
    try {
        const data=job.findOne({_id:req.params.id});
        const response=await job.updateOne({ _id: req.params.id },{ $set: req.body });
        return res.status(200).json({"data":response});
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})


app.post('/addcontact',async(req,res) =>{
    try {
        console.log(req.body);
        const data=req.body;
        const contact=new Contact(data);
        const result=await contact.save();
        return res.status(200).send({"data":result});
    } catch (error) {
        return res.status(500).send({"error":error})   
    }
    
})
app.get('/contact',async(req,res)=>{
    try {
        const data=await Contact.find();
        return res.status(200).send({"data":data})
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

app.get('/contact/:id',async(req,res)=>{
    try {
        const data=await Contact.find({'_id':req.params.id});
        return res.status(200).jsons({"detail":data})
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})
app.get('/design',async(req,res)=>{
    try {
        const data=await Design.find();
        return res.status(200).json({"detail":data})
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

app.post('/addDesign',async(req,res) =>{
    try {
        console.log(req.body);
        const data=req.body;
        const design=new Design(data);
        const result=await design.save();
        res.status(200).json({"data":result}); 
    } catch (error) {
        return res.status(500).json({"error":"error message"})
    } 
})

app.listen(4000,()=>{
    console.log("connected to port");
})


