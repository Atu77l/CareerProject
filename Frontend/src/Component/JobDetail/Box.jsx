import React,{useState,useEffect} from "react";
import image4 from "../../Image/download.png";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import Message from "../Dashboard/Message";
import axios from "axios";
import { GET_JOB } from "../Constant/Constant";
import secureLocalStorage from "react-secure-storage";

const Box = () => {
  const [handle,sethandle]=useState(false)
  const [jobDetail,setjobDetail]=useState([])
  const fetchData=()=>{
    const token=secureLocalStorage.getItem('token')
    let config = { method: 'get', maxBodyLength: Infinity, url: GET_JOB, headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },};
    
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
          <div className="h-48 mx-8 rounded-lg shadow-2xl mt-10  flex flex-row">
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
      <div className="cursor-pointer">
        <div className=" absolute right-0 bottom-5 cursor-pointer bg-blue-800 rounded-full p-3  w-14 mr-10 " onClick={()=>{sethandle(!handle)}}><MessageIcon sx={{ color: "white" }}/></div>
        </div>
    </>
  );
};

export default Box;
