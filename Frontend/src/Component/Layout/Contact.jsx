import React, { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import Navbar from "./Navbar";
import { ADD_CONTACT } from "../Constant/Constant";
import secureLocalStorage from "react-secure-storage";

const Contact = () => {
  const [name, setname] = useState("")
  const [message, setmessage] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")
  const [description, setDescription] = useState("")

  const onSubmit = () => {
    const data = { "name": name, "email": email, "phone": phone, "message": message, "description": description }
    console.log(data)
    const token=secureLocalStorage.getItem('token')
    let config = { method: 'post', maxBodyLength: Infinity, url: ADD_CONTACT, headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }, data: data };
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
      <div className="">
        <Navbar />
        <div className="flex text-center justify-center">
          <div className="flex flex-col w-3/5">
          
          <div className="text-6xl font-bold mt-20 font-serif text-left">Contact Me</div>
            <div className=" grid grid-cols-1 mt-8 outline-0  outline-none  ">
              <input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => { setname(e.target.value) }}
                className=" p-4 h-10  border-2 border-black text-xl rounded-md"
              />
              <input
                type="text"
                placeholder="Email*"
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
                className=" p-4 h-10 mt-3 border-2 border-black text-xl rounded-md"
              />
              <input
                type="text"
                placeholder="Phone No*"
                value={phone}
                onChange={(e) => { setphone(e.target.value) }}
                className=" p-4 mt-3   h-10  border-2 border-black text-xl rounded-md"
              />
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => { setmessage(e.target.value) }}
                className=" p-4 mt-3  h-10 border-2 border-black text-xl rounded-md"
              />
              <textarea value={description} className="h-36 mt-3 border-2 border-black text-xl p-2 pl-4 rounded-md" placeholder="Description*" onChange={(e) => { setDescription(e.target.value) }} />

              <div className="grid grid-cols-1 mt-2 mb-5">
                <button className="h-10 mt-3  bg-[#287dd1] rounded-lg font-medium text-white w-36" onClick={onSubmit}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 fixed left-0 bottom-0 w-full p-2 ">
        <div className="text-center">
          <LinkedInIcon sx={{ color: "white" }} />
          <TelegramIcon sx={{ color: "white" }} className="ml-3" />
          <InstagramIcon sx={{ color: "white" }} className="ml-3" />
        </div>
        <div className="text-center text-white font-bold text-xl">
          Copyright © 2022 Fast Careers - All Rights Reserved.
        </div>
      </div>

    </>
  );
};

export default Contact;
