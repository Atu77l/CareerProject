import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';
import LanguageIcon from '@mui/icons-material/Language';
import DnsIcon from '@mui/icons-material/Dns';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from "axios";
import Navbar from "../Layout/Navbar";
import { GET_JOB } from "../Constant/Constant";
import secureLocalStorage from "react-secure-storage";


const Detail = () => {
  const [jobdetail, setjobdetail] = useState({})
  const questionList = [
    { "question": "What is the range of salary", "answer": "Salary range is from 10000-12000" },
    { "question": "What is the range of salary", "answer": "Salary range is from 10000-12000" },
    { "question": "What is the range of salary", "answer": "Salary range is from 10000-12000" },
    { "question": "What is the range of salary", "answer": "Salary range is from 10000-12000" },
  ]
  const description = "We are developing 2 apps for our business.Logistics App like Porter for commercial goods transportation.Brokerage app for our business like Dhan, Zerodha (Although no financial transactions are involved in this case.)"

  const params = useParams();

  const fetchData = () => {
    const token = secureLocalStorage.getItem('token')
    console.log('token', token)
    let config = { method: "get", maxBodyLength: Infinity, url: `${GET_JOB}/${params.id}`, headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }, };
    axios
      .request(config)
      .then((response) => {
        console.log("item data", JSON.stringify(response.data));
        setjobdetail(response?.data?.data[0]);
        console.log(jobdetail)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // { "education": education, 'experience': experience, "salary": salary, "gender": gender, "work": work, "role": role,
  // "test": test, "time": time, "description": description, "questionList": questionList, "company": company,"link":link}

  return (
    <>
      <Navbar />
      <div className="bg-purple-500 mt-20 m-10 p-5 rounded-lg">
        <div className="text-4xl font-semibold text-white">{jobdetail?.role}</div>
        <div className="text-2xl font-semibold text-white"><BusinessIcon />{jobdetail?.company}</div>
        <div className="text-xl font-semibold text-white"><HomeIcon />{jobdetail?.work}</div>
        <div className="text-xl font-semibold text-white"><PaymentsIcon /><CurrencyRupeeIcon />{jobdetail?.salary} per month(Fixed + incentives)</div>
        <div className="bg-white text-purple-400 text-center rounded-lg w-28">{jobdetail?.time}</div>
      </div>


      <div className="flex flex-col m-10 p-4">
        <div className='text-xl font-semibold border-b-4'>Job Details</div>
        <div className='grid grid-cols-2'>
          <div className="flex flex-col">
            <div className="font-semibold text-xl"><SchoolIcon />Education</div>
            <div className="text-xl">{jobdetail?.education}</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold text-xl'><StarIcon />Experience</div>
            <div className="text-xl">{jobdetail?.experience}</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold text-xl'><LanguageIcon />Language</div>
            <div className="text-xl">Intermediate English</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold text-xl'><AccountCircleIcon />Gender</div>
            <div className="text-xl">{jobdetail?.gender}</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold text-xl'><DnsIcon />Address</div>
            <div className="text-xl">{jobdetail?.location} </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-10 border-2 border-gray-200 p-4 rounded-lg bg-purple-500 text-white">
        <div className='flex flex-col text-xl font-semibold'>Description About Job</div>
        <p className='font-medium'>{jobdetail?.description}</p>
      </div>
      {jobdetail?.length > 0 && <div className='flex flex-col m-10 p-4 shadow-lg border-2 border-black rounded-lg'>
        {
          jobdetail?.questionlist.map((item, key) => {
            return (<div className='flex flex-col'>
              <div className='font-medium'>{key}.{item.question}</div>
              <div className=''>Answer:{item.answer}</div>
            </div>
            )
          })
        }
      </div>}

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
