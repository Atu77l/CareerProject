import React,{useState,useEffect} from "react";
import image4 from "../Image/download.png";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import Message from "./Message";
import axios from "axios";

const Box = () => {
  const [handle,sethandle]=useState(false)
  const [jobDetail,setjobDetail]=useState([])
  const fetchData=()=>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/get',
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setjobDetail(response?.data?.detail)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  useEffect(()=>{
   fetchData()
  },[])
  return (
    <>
    {
      jobDetail.map((item,key)=>{
        return(
          <div className="h-48 mr-5 rounded-lg shadow-lg mt-10 ml-5 flex flex-row">
        <div>
          <img src={image4} alt="" className="h-28 w-28 m-5 rounded-lg" />
        </div>
        <div className="flex flex-col pl-28">
          <div className="pt-1 text-2xl font-medium">
            {item.companyname}
          </div>
          <div className="pt-3 font-normal text-xl">About Wipro:</div>
          <div className="">
{item.about}
            <span className="text-[green]">Continue Reading</span>
          </div>
          <div className="grid grid-cols-2">
          <div className="pt-3 font-normal text-xl">Experience Required:{item.experience}</div>
          <div className="pt-3 font-normal text-xl">Package:{item.package}</div>
          </div>
        </div>
      </div>
        )
      })
    }
      

      <div className="text-center">
        <div className="text-blue-700 font-medium m-20">
          <AddIcon sx={{ color: "blue" }} />
          Show More
        </div>
      </div>

     <div style={{marginLeft:"700px"}}>
      {
        handle && <Message/>
      }
      </div>
      <div className="">
        <div className=" absolute right-0 bottom-5  bg-blue-800 rounded-full p-3  w-14 mr-10 " onClick={()=>{sethandle(!handle)}}><MessageIcon sx={{ color: "white" }}/></div>
        </div>
    </>
  );
};

export default Box;
