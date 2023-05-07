import React,{useEffect,useState} from 'react'
import Contact from './Component/Contact'
import  Aboutus from './Component/AboutUs'
import Home from './Component/Home'
import Data from './Component/Data'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Detail from './Component/Detail'
import Resume from './Component/Resume'
import ResumePdf from '../src/Component/ResumePdfFormat'


const App = () => {
  let data={
    "title":"Software Developer",
    "name":"Atul Kesharwani",
    "email":"kesharwaniatul9935@gmail.com",
    "phone":"9636605371",
    "linkedIn":"https://linkedIn.com/atulkeshawani",
    "github":"https://linkedIn.com/Atu77l",
    "education":[ {"degree":"B.tech",
    "school":"Madan Mohan Malaviya University Of Technology,gorakhpur","percent":"95%"}, {"degree":"B.tech",
    "school":"Madan Mohan Malaviya University Of Technology,gorakhpur","percent":"95%"}],
    "experience":[{"title":"Software Developer","company":"Damyant Software Private Limited","startDate":"20/01/2020","endDate":"12/02/2020","description":"Good Working conditions"},{"title":"Software Developer","company":"Damyant Software Private Limited","startDate":"20/01/2020","endDate":"12/02/2020","description":"Good Working conditions"},{"title":"Software Developer","company":"Damyant Software Private Limited","startDate":"20/01/2020","endDate":"12/02/2020","description":"Good Working conditions"}],
    "skills":["C++","JavaScript","Node Js","MongoDB","Data Structure and Algorithm"],
    "certifications":[{"title":"NPTEL","description":"this is related to complete the course in IOT"}],
    "hobbies":["Playing Chess","Read and Write"]
  
  }
  const [resumedata,setresumedata]=useState(data)
  useEffect(()=>{
    console.log(resumedata)
  },[resumedata])
  return (
    <>
  <Router>
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<Aboutus/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/admin/data' exact element={<Data/>}/>
        <Route path='/detail/:id' exact element={<Detail/>}/>
        <Route path='/resume_result' exact element={<ResumePdf func={setresumedata} resumedata={resumedata}/>}/>
        <Route path='/resume' exact element={<Resume func={setresumedata} resumedata={resumedata}/>}/>
        </Routes>
  </Router>
    </>
  )
}

export default App