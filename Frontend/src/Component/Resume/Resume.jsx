import React from "react";
import ResumeForm from './ResumeForm';
import image5 from '../../Image/Teal Modern Company Logo.png'
import { Link } from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar from "../Layout/Navbar";

const Resume = (props) => {
  return (
    <div>
     <Navbar/>
      <h1 className="text-4xl font-bold m-5 text-center text-black rounded">Create Your Resume</h1>
      <ResumeForm func={props.func} resumedata={props.resumedata}/>
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
  );
};

export default Resume;
