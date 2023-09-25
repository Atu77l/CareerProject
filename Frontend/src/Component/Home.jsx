import React from "react";
import Navbar from "./Sidebar";
import Carousel from "./Carousel";
import About from './About'
import Chatbox from "./JobDetail";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="hidden bg-[#ece8e2] sm:grid sm:grid-cols-1">
          <Navbar />
        </div>
        <div className="grid grid-cols-1 col-span-4 sm:col-span-3">
          <Carousel />
          <About />
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default Home;
