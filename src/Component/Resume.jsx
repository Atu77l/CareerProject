import React from "react";
import ResumeForm from './ResumeForm';
import image5 from './../Image/Teal Modern Company Logo.png'
import { Link } from "react-router-dom";

const Resume = (props) => {
  return (
    <div>
     <div className="bg-[#abc1f8]  h-24 w-screen flex flex-row">
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
    </div>
  );
};

export default Resume;
