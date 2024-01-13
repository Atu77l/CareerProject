import React, { useState, useRef, useEffect } from 'react'
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import { ADD_JOB } from './../Constant/Constant'
import secureLocalStorage from "react-secure-storage";
import axios from 'axios';

const JobDetail = () => {
  const ref = useRef();
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [gender, setGender] = useState("");
  const [work, setWork] = useState("");
  const [role, setRole] = useState("Softwar");
  const [test, setTest] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [company, setCompany] = useState("");
  const [link,setLink]=useState('')
  const [location,setLocation]=useState('')
  const [about,setAbout]=useState('')
  const addJob = async () => {
    try {
      let data = {
        "education": education, 'experience': experience, "salary": salary, "gender": gender, "work": work, "role": role,
        "test": test, "time": time, "description": description, "questionList": questionList, "company": company,"link":link,
        "about":about,"location":location,
      }
      console.log(data, 'data')
      const token = secureLocalStorage.getItem('token')
      console.log('token', token)
      let config = { method: "post", maxBodyLength: Infinity, url: ADD_JOB, headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }, data:data};
      const result = await axios(config);
      console.log(result);
    } catch (error) {
      console.log(error, 'error');
    }
  }
  const addQuestion = () => {
    setQuestionList([...questionList, { "question": question, "answer": answer }]);
    setQuestion("");
    setAnswer("");
  }


  return (
    <>
      <Navbar />
      <div className='m-10 mt-20 shadow-lg rounded-lg shadow-blue-500 p-5'>
        <div className='text-center font-semibold text-4xl font-serif'>JobDetail</div>
        <div className="text-left">
          <div className='font-semibold text-xl'>Company</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={company} onChange={(e) => { setCompany(e.target.value); }} />
          <div className='font-semibold text-xl'>Education</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={education} onChange={(e) => { setEducation(e.target.value); }} />
          <div className='font-semibold text-xl'>Gender</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={gender} onChange={(e) => { setGender(e.target.value); }} />
          <div className='font-semibold text-xl'>Experience</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={experience} onChange={(e) => { setExperience(e.target.value); }} />
          <div className='font-semibold text-xl'>Salary</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={salary} onChange={(e) => { setSalary(e.target.value); }} />
          <div className='font-semibold text-xl'>Work</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={work} onChange={(e) => { setWork(e.target.value); }} />
          <div className='font-semibold text-xl'>Time</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={time} onChange={(e) => { setTime(e.target.value); }} />
         
          <div className='font-semibold text-xl'>Test</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={test} onChange={(e) => { setTest(e.target.value); }} />
          <div className='font-semibold text-xl'>Link</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={link} onChange={(e) => { setLink(e.target.value); }} />
          <div className='font-semibold text-xl'>Location</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={location} onChange={(e) => { setLocation(e.target.value); }} />
         
          <div className='font-semibold text-xl'>Role</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={role} onChange={(e) => { setRole(e.target.value); }} />
          <div className='font-semibold text-xl'>Description</div>
          <textarea type="text" className='border-2 border-black rounded-lg shadow-lg p-1 h-16 w-full' value={description} onChange={(e) => { setDescription(e.target.value); }} />
          <div className='font-semibold text-xl'>About</div>
          <textarea type="text" className='border-2 border-black rounded-lg shadow-lg p-1 h-16 w-full' value={about} onChange={(e) => { setAbout(e.target.value); }} />
          <div className='font-semibold text-xl'>Question</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={question} onChange={(e) => { setQuestion(e.target.value); }} />
          <div className='font-semibold text-xl'>Answer</div>
          <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={answer} onChange={(e) => { setAnswer(e.target.value); }} />
          <div className="bg-blue-500 rounded-lg text-white text-center justify-center font-semibold w-24 h-10 m-2 text-xl cursor-pointer" onClick={() => { addQuestion(); }}>Add</div>
          <div className='border-2 rounded-lg p-2'>
            {
              questionList.map((item, key) => {
                return (
                  <div className='flex flex-col'>
                    <div className='text-xl font-semibold'>{key}.{item.question}</div>
                    <div className='text-xl'>Answer:{item.answer}</div>
                  </div>
                )
              })
            }
          </div>
          <div className="rounded-lg bg-blue-600 text-white text-center justify-center h-10 m-2 text-xl cursor-pointer" onClick={() => { addJob(); }}>Submit</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JobDetail