import React, { useState, useEffect } from "react";
import MessageIcon from "@mui/icons-material/Message";
import Message from "../Dashboard/Chat";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/AcUnit';

const Box = () => {
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
          <div className="mr-5 rounded-lg shadow mt-5 ml-5 grid grid-cols-1 sm:grid-cols-3">
              <img src={item.imagelink} alt="company logo" className="h-24 w-24 m-5 rounded-lg" />
            <div className="flex flex-col pl-10 sm:col-span-2">
              <div className="pt-1 text-3xl  font-semibold">
                {item.companyname}
              </div>
              <div className="pt-1 font-serif text-xl">About {item.companyname}:</div>
              <div className="overflow-hidden h-12">{item.about}</div>
              {
              <Link to={path}>
                <span className="text-[green] text-md ">
                  ....Continue Reading
                </span>
              </Link>
            }
              <div className="grid grid-cols-1 mb-2 sm:grid-cols-1">
                <div className="pt-1 font-serif text-xl">
                  Experience:
                  <span className="text-blue-500 text-xl">
                    {item.experience}
                  </span>
                </div>
                <div className="pt-1 font-serif text-xl">
                  Package:
                  <span className="text-blue-500 text-xl">
                    {item.package}
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
    </>
  );
};

export default Box;
