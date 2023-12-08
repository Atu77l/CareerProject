import React,{useState} from "react";
import image from "../../assests/FirstStephub.png";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';

const Message = (props) => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [message,setmessage]=useState("")
  
  const onSubmit=()=>{
    const data={"name":name,"email":email,"message":message}
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/contact',
        headers: {  'Content-Type': 'application/json'  },
        data : data
        };
        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        setname("")
        setemail("")
        setmessage("")
         })

        .catch((error) => {
        console.log(error);
         });
  }
  return (
    <>
    
        <div className="relative h-96 w-80 shadow-lg bg-slate-200 rounded-lg m-10 ">
          <div className="p-3  bg-blue-400 rounded-t-lg  mb-3 grid grid-cols-2">
            <img src={image} alt="" className="h-14 rounded-full " />
           <div className=" rounded-full cursor-pointer bg-white h-7 w-7 text-center justify-center ml-28"><CloseIcon sx={{color:"red",fontSize:"28px"}} onClick={()=>{props.func(false)}}/></div> 
          </div>

          <div className="flex flex-col ml-10 mr-10  ">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
              className=" outline-white  outline-0 pl-3 rounded-lg h-8 "
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              className="mt-3   outline-white  outline-0  pl-3 rounded-lg h-8"
            />
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e)=>{setmessage(e.target.value)}}
              className="mt-3  outline-white  outline-0   pl-3 rounded-lg h-8"
            />
          </div>

          <p className="text-sm ml-10 mt-3 mb-2 pl-1">
            <input type="checkbox" name="" id="" className="mr-2"/>
             Sign up to receive email updates, announcements, and more.
          </p>
          <button className="h-10 w-40 bg-blue-500 rounded-lg ml-20 font-medium text-white" onClick={onSubmit}>
            Submit
          </button>
          <div className="text-xs mt-1 ml-4">
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="text-[green]">Privacy Policy</span> and{" "}
            <span className="text-[green]">Terms of Service</span> apply.
          </div>
        </div>
      
    </>
  );
};

export default Message;
