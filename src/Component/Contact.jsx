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
      <div className="bg-[#7eaad5] h-24 w-screen flex flex-row text-white">
        <img src={image5} alt="" className="rounded-3xl mt-2 ml-20 mb-2" />
     <Link to='/'>   <div
          className="mt-9 text-2xl  font-medium hover:underline"
          style={{ marginLeft: "800px" }}
        >
          Home
        </div></Link>

       <Link to='/about'> <div className="mt-9 text-2xl pl-10 font-medium hover:underline">
          About Us{" "}
        </div></Link>
        <div className="mt-9 text-2xl pl-10 font-medium ">
          Contact
        </div>
      </div>
      <div className="">
        <div className="font-semibold text-3xl text-center mt-8">
          Contact Us
        </div>
        <hr className="ml-10 mr-10 mt-10 font-bold" />

        <div className="mt-10 text-4xl text-center">Get in Touch</div>
        <div className="flex flex-col mt-2 ml-96 outline-0">
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
            className=" p-4 h-14 mt-5  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <input
            type="text"
            placeholder="Email*"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            className=" p-4 mt-3  h-14  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <input
            type="text"
            placeholder="Phone No*"
            value={phone}
            onChange={(e)=>{setphone(e.target.value)}}
            className=" p-4 mt-3   h-14  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e)=>{setmessage(e.target.value)}}
            className=" p-4 mt-3  h-14 border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <div className="text-auto">
            <button className="h-14 mt-24 ml-80 w-40 bg-[#287dd1] rounded-3xl font-medium text-white" onClick={onSubmit}>
              Send Message
            </button>
            <div className="pl-16 mt-5 mb-5">
              This site is protected by reCAPTCHA and the Google
              <span className="text-[green]">Privacy Policy</span> and{" "}
              <span className="text-[green]">Terms of Service</span> apply.
            </div>
          </div>
        </div>

        <div className="bg-[#7eaad5] w-screen h-40 ">
          <div className="text-center pt-10">
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className="ml-3" />
            <InstagramIcon sx={{ color: "white" }} className="ml-3" />
          </div>
          <div className="text-center text-white pt-8 font-bold text-xl">
            Copyright © 2022 Fast Careers - All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
