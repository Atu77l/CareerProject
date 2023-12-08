import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import image from "../../assests/FirstStephub.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="bg-white shadow-xl">
        <div className="bg-white text-center fixed left-24 ">
          <div className="flex text-center justify-center ">
            <img src={image} alt="" className="h-40 rounded-full" />
          </div>
          <div className="font-bold text-2xl mt-10 font-serif">
            <div className="">Home</div>
            <Link to="/about">
              <div className="mt-4 hover:underline">About</div>
            </Link>
            <Link to="/resume">
              <div className="mt-4 hover:underline">Resume</div>
            </Link>
            <Link to="/design">
              <div className="mt-4 hover:underline">Design</div>
            </Link>
            <Link to="/Contact">
              <div className="mt-4 hover:underline">Contact</div>
            </Link>
          </div>
        </div>
      

       <div className="fixed w-96" style={{ marginTop: "750px" }}>
        <div className="bg-blue-500 h-40 w-94 absolute bottom-0 pr-4">
          <div className="text-center pt-10">
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className="ml-3" />
            <InstagramIcon sx={{ color: "white" }} className="ml-3" />
          </div>
          <div className="text-center text-white pt-8">
            Copyright © 2022 FastStepHub - All Rights Reserved.
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Sidebar;
