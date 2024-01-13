import React, { useState, useEffect } from "react";
import MessageIcon from "@mui/icons-material/Message";
import Message from "../Dashboard/Chat";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
import { GET_JOB } from "../Constant/Constant";
import secureLocalStorage from "react-secure-storage";

const JobList = () => {
  const [handle, sethandle] = useState(false);
  const [jobDetail, setjobDetail] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [numberBox, setNumberBox] = useState(0);
  const [boxList, setBoxList] = useState([])
  const [data, setData] = useState([])
  const navigate = useNavigate();

  const [displayCount, setDisplayCount] = useState(3);
  const handleShowMoreClick = () => {
    setDisplayCount(displayCount + 3);
  };

  const fetchData = () => {
    const token = secureLocalStorage.getItem('token')
    let config = { method: "get", maxBodyLength: Infinity, url: GET_JOB, headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }, };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setjobDetail(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const min = (a, b) => {
    if (a < b)
      return a;
    return b;

  }
  useEffect(() => {
    let len = jobDetail.length;
    setBoxList(Array(parseInt(len / parseInt(pageSize)) + 1).fill(0))
    setData(jobDetail.slice(numberBox * pageSize, min(len,(numberBox + 1) * pageSize)))
  }, [pageSize, numberBox,jobDetail])

  // { "education": education, 'experience': experience, "salary": salary, "gender": gender, "work": work, "role": role,
  // "test": test, "time": time, "description": description, "questionList": questionList, "company": company,"link":link}
  return (
    <>
      {
        data.map((item, key) => {
          console.log("item", item)
          const path = `/detail/${item._id}`
          return (
            <div className="mr-5 rounded-lg shadow-lg mt-2 ml-2 border-2 p-1">
              <div className="flex flex-col pl-10">
                <div className="pt-1 text-2xl flex flex-row font-serif font-semibold">
                  <span className="pt-1 font-serif text-xl font-semibold text-blue-600" ><BusinessIcon />Company Name:</span> {item.company}
                </div>
                <div className="grid grid-cols-1 mb-2 md:grid-cols-3">
                  <div className="pt-1 font-serif text-xl">
                    <StarIcon />Experience:
                    <span className="text-blue-500 text-xl">
                      {item.experience}
                    </span>
                  </div>
                  <div className="pt-1 font-serif text-xl">
                    <PaymentsIcon />Package:
                    <span className="text-blue-500 text-xl">
                      {item.salary}
                    </span>
                  </div>
                  <div className="pt-1 font-serif text-xl">
                    <DnsIcon />Location:
                    <span className="text-blue-500 text-xl">
                      {item.location}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="pt-1 font-serif text-xl">
                    <SchoolIcon />Qualification:
                    <span className="text-blue-500 text-xl">
                      {item.education}
                    </span>
                  </div>
                  <div className="pt-1 font-serif text-xl cursor-pointer">
                    <LinkIcon />Apply Link:
                    <Link to={item.link} ><span className="text-blue-600 text-xl">
                      link.
                    </span></Link>
                  </div>
                  <div className="pt-1 font-serif text-xl cursor-pointer">
                    <DetailsIcon />For More Detail:
                    <span className="text-blue-500 text-xl" onClick={() => { navigate(`/detail/${item._id}`) }}>
                      click here!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      <div className="grid grid-cols-2" >
        <div className="flex flex-row m-10">
          <div className="mt-2">Page Size</div>
          <select className="ml-3 border-2 rounded-lg border-black" value={pageSize} onChange={(e) => { setPageSize(e.target.value); }}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>

        </div>
        <div className="grid justify-end  mb-10 mt-10 mr-10">
          <div className="flex flex-row">
            {
              boxList.map((item, key) => {
                return (
                  <div className="border-2 border-black rounded  h-8 w-8 text-center justify-center text-black mr-2 p-2 cursor-pointer active:bg-blue-400" onClick={() => { setNumberBox(key); }}>
                    {key}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        {handle && <Message handle={handle} func={sethandle} />}
      </div>
      <div className="m-10">
        <div className="fixed bottom-5  -right-4  mt-8 bg-blue-800 rounded-full p-3  cursor-pointer w-14 mr-10 "
          onClick={() => {sethandle(!handle);}}>
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
