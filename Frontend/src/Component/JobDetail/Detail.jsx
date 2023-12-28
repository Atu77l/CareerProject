import React,{useState,useEffect} from "react";
import { Link,useParams} from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import Navbar from "../Layout/Navbar";

const Detail = () => {
  const [jobdetail,setjobdetail]=useState({})
  
  const params=useParams();

  const fetchData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/get/jobDetail/${params.id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)

      .then((response) => {
        console.log("item data",JSON.stringify(response.data));
        setjobdetail(response?.data?.detail[0]);
        console.log(jobdetail)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
     <Navbar/>
      <div className="m-5 p-5 ">
        <div className="flex flex-row ">
          <div className="">
            <div className="text-4xl text-blue-700 font-bold mt-5 mb-5">
              {jobdetail?.companyname}
            </div>
            <div className="font-medium mb-2 text-xl text-orange-600">About Company:</div>
            <p>
              {jobdetail?.about}
            </p>
            <div className="font-medium mt-5 mb-2 text-xl text-orange-600">
              What You will be doing:
            </div>
            <p className="mb-5">
             {jobdetail.jobOverview}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="text-xl text-black  font-medium">
            Package :<span className="font-normal">{jobdetail?.package}</span>
          </div>
          <div className="text-xl text-black  font-medium">
            Qualification :<span className="font-normal">{jobdetail?.qualification}</span>
          </div>
          <div className="text-xl text-black  font-medium">
            Experience :<span className="font-normal">{jobdetail?.experience}</span>{" "}
          </div>
          <div className="text-xl text-black  font-medium">
            Location:<span className="font-normal">{jobdetail?.location}</span>
          </div>
          <div className="text-xl text-black mb-5 font-medium">
            <Link to={jobdetail.applylink} target="_blank"><span className="text-[blue] hover:underline">Click here</span></Link> to
            Apply !!
          </div>
        </div>
      </div>

      <div className="bg-[#7eaad5] w-screen h-40 ">
        <div className="text-center pt-10">
          <LinkedInIcon sx={{ color: "white" }} />
          <TelegramIcon sx={{ color: "white" }} className="ml-3" />
          <InstagramIcon sx={{ color: "white" }} className="ml-3" />
        </div>
        <div className="text-center text-white pt-6 font-bold text-xl">
          Copyright © 2022 Fast Careers - All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Detail;
