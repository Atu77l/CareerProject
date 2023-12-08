import React from "react";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import About from "../About/About";
import JobDetail from "../JobDetail/JobDetail";
import Footer from "../Layout/Footer"
import Navbar from "../Layout/Navbar"
const Home = () => {
  return (
    
      <div className="grid grid-cols-4 ">
       
        <div className="hidden   sm:grid sm:grid-cols-1">
          <Sidebar />
        </div>
        <div className="grid grid-cols-1 col-span-4 sm:col-span-3 " >
          <Carousel />
          <About />
          <JobDetail />
         <div className="lg:hidden mt-5"><Footer/></div> 
        </div>
      </div>
   
  );
};

export default Home;
