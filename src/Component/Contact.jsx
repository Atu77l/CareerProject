import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import image5 from "../Image/Teal Modern Company Logo.png";

const Contact = () => {
  return (
    <>
      <div className="bg-[#abc1f8] h-24 w-screen flex flex-row">
        <img src={image5} alt="" className="rounded-3xl mt-2 ml-20 mb-2" />
        <div
          className="mt-9 text-2xl  font-medium hover:underline"
          style={{ marginLeft: "800px" }}
        >
          Home
        </div>
        <div className="mt-9 text-2xl pl-10 font-medium hover:underline">
          About Us{" "}
        </div>
        <div className="mt-9 text-2xl pl-10 font-medium hover:underline">
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
            className=" p-3 h-14  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <input
            type="text"
            placeholder="Email*"
            className=" p-3 mt-2  h-14  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <input
            type="text"
            placeholder="Phone No*"
            className=" p-3 mt-2   h-14  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <input
            type="text"
            placeholder="Message"
            className=" p-3 mt-2  h-14 border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <div className="mt-2 font-medium text">
            <AttachFileIcon />
            Attach Files
          </div>

          <div className="text-auto">
            <button className="h-14 mt-24 ml-80 w-40 bg-[green] rounded-2xl  border-none">
              Send Message
            </button>
            <div className="pl-16 mt-5 mb-5">
              This site is protected by reCAPTCHA and the Google
              <span className="text-[green]">Privacy Policy</span> and{" "}
              <span className="text-[green]">Terms of Service</span> apply.
            </div>
          </div>
        </div>

        <div className="bg-[#abc1f8] w-screen h-40 ">
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
