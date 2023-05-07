import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from './About'
import Chatbox from "./JobDetail";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="grid grid-cols-1 bg-[#ece8e2]">
          <Navbar />
        </div>
        <div className="flex flex-col col-span-3">
          <Carousel />
          <About />
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default Home;
