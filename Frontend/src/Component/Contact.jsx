import React,{useState} from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import image5 from "../Image/Teal Modern Company Logo.png";
import {Link} from 'react-router-dom'
import axios from "axios";

const Contact = () => {
  const [name,setname]=useState("")
  const [message,setmessage]=useState("")
  const [phone,setphone]=useState("")
  const [email,setemail]=useState("")

  const onSubmit=()=>{
    const data={"name":name,"email":email,"phone":phone,"message":message}
    console.log(data)

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/contact',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setname("")
        setemail("")
        setphone("")
        setmessage("")
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="bg-[#7eaad5] h-24  flex flex-row text-white">
        <img src={image5} alt="" className="rounded-3xl mt-2 ml-20 mb-2" />
     <Link to='/'>   
     <div
          className="mt-9 ml-20 text-2xl  font-medium hover:underline"        >
          Home
        </div></Link>

       <Link to='/about'> <div className="mt-9 text-2xl pl-10 font-medium hover:underline">
          About
        </div></Link>
        <div className="mt-9 text-2xl pl-10 font-medium ">
          Contact
        </div>
      </div>
      <div className="h-screen">
        <div className="font-semibold shadow text-3xl text-center mt-8">
          Contact Us
        </div>
        <hr className="ml-10 mr-10 mt-2 font-bold" />
        <hr className="ml-10 mr-10 mt-1 font-bold" />

        <div className="grid grid-cols-1 gap-4 mt-2 m-10 outline-0 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
            className=" p-4 h-10   border-2 border-[gray] rounded-xl"
          />
          <input
            type="text"
            placeholder="Email*"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            className=" p-4 h-10  border-2 border-[gray] rounded-xl"
          />
          <input
            type="text"
            placeholder="Phone No*"
            value={phone}
            onChange={(e)=>{setphone(e.target.value)}}
            className=" p-4 mt-3   h-10  border-2 border-[gray] rounded-xl"
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e)=>{setmessage(e.target.value)}}
            className=" p-4 mt-3  h-10 border-2 border-[gray] rounded-xl"
          />
          <div className="grid grid-cols-1 mt-2">
            <button className="h-10 mt-3  bg-[#287dd1] rounded-xl font-medium text-white" onClick={onSubmit}>
              Send Message
            </button>
            <div className="text-sm mt-1 mb-5">
              This site is protected by reCAPTCHA and the Google
              <span className="text-[green]">Privacy Policy</span> and{" "}
              <span className="text-[green]">Terms of Service</span> apply.
            </div>
          </div>
          </div>
        </div>

        <div className="bg-[#7eaad5] w-screen h-40">
          <div className="text-center pt-10">
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className="ml-3" />
            <InstagramIcon sx={{ color: "white" }} className="ml-3" />
          </div>
          <div className="text-center text-white pt-8 font-bold text-xl">
            Copyright © 2022 Fast Careers - All Rights Reserved.
          </div>
        </div>
    </>
  );
};

export default Contact;
