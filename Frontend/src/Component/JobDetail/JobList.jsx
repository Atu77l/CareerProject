import React, { useState, useEffect } from "react";
import MessageIcon from "@mui/icons-material/Message";
import Message from "../Dashboard/Chat";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/AcUnit';
import DetailsIcon from '@mui/icons-material/Details';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentsIcon from '@mui/icons-material/Payments';
import DnsIcon from '@mui/icons-material/Dns';
import StarIcon from '@mui/icons-material/Star';
import LinkIcon from '@mui/icons-material/Link';
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const JobList = () => {
  const [handle, sethandle] = useState(false);
  const [jobDetail, setjobDetail] = useState([]);

  const [displayCount, setDisplayCount] = useState(3);
  const handleShowMoreClick = () => {
    setDisplayCount(displayCount + 3);
  };
  
  const fetchData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/get",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setjobDetail(response?.data?.detail);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const min=(a,b)=>{
    if(a<b)
      return a;
    return b;

  }
  return (
    <>
      {jobDetail.slice(0,min(jobDetail.length,displayCount)).map((item, key) => {
        console.log("item",item)
        const path=`/detail/${item._id}`
        return (
          <div className="mr-5 rounded-lg shadow-lg mt-1 ml-2 border-2">
            <div className="flex flex-col pl-10">
              <div className="pt-1 text-2xl flex flex-row font-serif font-semibold">
               <span className="pt-1 font-serif text-xl font-semibold text-blue-600" ><BusinessIcon/>Company Name:</span> {item.companyname}
              </div>
              <div className="grid grid-cols-1 mb-2 md:grid-cols-3">
                <div className="pt-1 font-serif text-xl">
                  <StarIcon/>Experience:
                  <span className="text-blue-500 text-xl">
                    {item.experience}
                  </span>
                </div>
                <div className="pt-1 font-serif text-xl">
                  <PaymentsIcon/>Package:
                  <span className="text-blue-500 text-xl">
                    {item.package}
                  </span>
                </div>
                <div className="pt-1 font-serif text-xl">
                  <DnsIcon/>Location:
                  <span className="text-blue-500 text-xl">
                    {item.location}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3">
              <div className="pt-1 font-serif text-xl">
                  <SchoolIcon/>Qualification:
                  <span className="text-blue-500 text-xl">
                    {item.qualification}
                  </span>
                </div>
              <div className="pt-1 font-serif text-xl">
                <LinkIcon/>Apply Link:
                  <Link to={item.applylink} ><span className="text-blue-600 text-xl">
                    link.
                  </span></Link>
              </div>
              <div className="pt-1 font-serif text-xl">
                <DetailsIcon/>For More Detail:
                  <span className="text-blue-500 text-xl">
                    click here!
                  </span>
              </div>
              </div>
            </div>
          </div>
        );
      })}
       
      <div className="text-center">
        <div className="text-blue-700 font-medium m-20 cursor-pointer" onClick={handleShowMoreClick}>
          <AddIcon sx={{ color: "blue" }} />
          Show More
        </div>
      </div>
         <div
        style={{ marginLeft: "700px", position: "fixed", marginTop: "200px" }}
      >
        {handle && <Message handle={handle} func={sethandle}/>}
      </div>
      <div className="m-10">
        <div
          className="fixed bottom-5  -right-4  mt-8 bg-blue-800 rounded-full p-3  cursor-pointer w-14 mr-10 "
          onClick={() => {
            sethandle(!handle);
          }}
        >
          <MessageIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div className="bg-blue-500 w-full p-2 ">
          <div className="text-center pt-10">
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className="ml-3" />
            <InstagramIcon sx={{ color: "white" }} className="ml-3" />
          </div>
          <div className="text-center text-white pt-2 font-bold text-xl">
            Copyright © 2022 Fast Careers - All Rights Reserved.
          </div>
        </div>  
    </>
  );
};

export default JobList;
