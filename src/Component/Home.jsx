import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
import Carousel from "./Carousel";
import About from './About'
import Message from "./Message";
import Box from "./Box";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="grid grid-cols-1">
          <Navbar />
          <Footer />
        </div>
        <div className="flex flex-col col-span-3">
          <Carousel />
          <About />
          <Box />
        </div>
      </div>
    </div>
  );
};

export default Home;
