import React, { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import Navbar from "./Navbar";

const Contact = () => {
  const [name, setname] = useState("")
  const [message, setmessage] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")
  const [description, setDescription] = useState("")

  const onSubmit = () => {
    const data = { "name": name, "email": email, "phone": phone, "message": message, "description": description }
    console.log(data)

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/contact',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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
      <div className="h-screen">
        <Navbar />
        <div className="">
          <hr className="ml-10 mr-10 mt-10 font-bold" />
          <hr className="ml-10 mr-10 mt-1 font-bold" />
          <div className="text-center justify-center text-4xl mt-2 font-serif">Contact Us</div>
          <div className="flex text-center justify-center ">
            <div className=" grid grid-cols-1 mt-8 m-10 outline-0  ">
              <input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => { setname(e.target.value) }}
                className=" p-4 h-10   border-2 border-[gray] rounded-md w-96"
              />
              <input
                type="text"
                placeholder="Email*"
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
                className=" p-4 h-10 mt-3 border-2 border-[gray] rounded-md w-96"
              />
              <input
                type="text"
                placeholder="Phone No*"
                value={phone}
                onChange={(e) => { setphone(e.target.value) }}
                className=" p-4 mt-3   h-10  border-2 border-[gray] rounded-md w-96"
              />
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => { setmessage(e.target.value) }}
                className=" p-4 mt-3  h-10 border-2 border-[gray] rounded-md w-96"
              />
              <textarea value={description} className="h-36 mt-3 border-2 border-[gray] p-4 rounded-md" placeholder="Description*" onChange={(e) => { setDescription(e.target.value) }} />

              <div className="grid grid-cols-1 mt-2">
                <button className="h-10 mt-3  bg-[#287dd1] rounded-xl font-medium text-white w-96" onClick={onSubmit}>
                  Send Message
                </button>
                <div className="text-sm mt-1 mb-5 ">
                  This site is protected by reCAPTCHA and the Google<br />
                  <span className="text-[green]">Privacy Policy</span> and{" "}
                  <span className="text-[green]">Terms of Service</span> apply.
                </div>
              </div>
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
