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
      <h1 className=" flex font-serif justify-center text-center mt-20 text-4xl font-bold  text-black rounded">Create Your Resume</h1>


      <ResumeForm func={props.func} resumedata={props.resumedata}/>
    
      <div className="flex justify-center text-center  " >
      <div className="bg-blue-500 w-screen  " >
          <div className="flex justify-center text-center pt-4">
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className="ml-3" />
            <InstagramIcon sx={{ color: "white" }} className="ml-3" />
          </div> 
          <div className=" flex justify-center text-center text-white pt-4 font-bold text-xl">
            Copyright © 2022 Fast Careers - All Rights Reserved.
          </div>
        </div>
    </div>
    </div>
  );
};

export default Resume;
