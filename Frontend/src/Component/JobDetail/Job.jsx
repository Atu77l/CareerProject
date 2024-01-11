import React from "react";
import Carousel from "./Carousel"
import Navbar from "../Layout/Navbar";
import JobList from "./JobList";
const Job = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-[65px] w-screen fixed">
        <Carousel />
      </div>
      <div className="overflow-auto mt-72">
        <div className="font-serif text-4xl font-bold m-2 ">All Jobs Opportunity</div>
        <hr className=""></hr>
        <hr className="mb-2"></hr>
        <JobList />
      </div>
    </div>

  );
};

export default Job;
