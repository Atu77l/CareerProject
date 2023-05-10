import React from "react";
import ResumeForm from './ResumeForm';
import image5 from './../Image/Teal Modern Company Logo.png'
import { Link } from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Resume = (props) => {
  return (
    <div>
     <div className="bg-[#abc1f8]  h-24 flex flex-row" style={{width:"100%"}}>
        <img src={image5} alt="" className="rounded-3xl mt-2 ml-20 mb-2" />
       <Link to='/'> <div
          className="mt-9 text-2xl  font-medium hover:underline"
          style={{ marginLeft: "800px" }}
        >
          Home
        </div></Link>
       <Link to='/about'> <div className="mt-9 text-2xl pl-10 font-medium hover:underline">
          About Us{" "}
        </div></Link>
       <Link to='/contact'><div className="mt-9 text-2xl pl-10 font-medium hover:underline">
          Contact
        </div></Link> 
      </div>
      <h1 className="text-4xl text-center text-black shadow rounded mb-10 p-5">Create Your Resume</h1>
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
