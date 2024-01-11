import React,{useEffect,useState} from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
//Job
import Home from './Component/JobDetail/Home'
import Login from './Component/Layout/Login'
import SignUp from './Component/Layout/SignUp'
import JobList from './Component/JobDetail/Job'
import Detail from './Component/JobDetail/Detail'
import Data from './Component/Admin/Data'
import Contact from './Component/Layout/Contact'
import  Aboutus from './Component/About/AboutUs'
import Resume from './Component/Resume/Resume'
import ResumePdf from '../src/Component/Resume/DownloadPdf'
import Page_404 from './Component/Layout/Page_404'


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
    "hobbies":["Playing Chess","Read and Write"],
    "project":[{"title":"online shopping","tech":"html,css,javascript","description":"App is responsive and where we can create anything"},{"title":"online shopping","tech":"html,css,javascript","description":"App is responsive and where we can create anything"},{"title":"online shopping","tech":"html,css,javascript","description":"App is responsive and where we can create anything"}]
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
        <Route path='/list' exact element={<JobList/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<SignUp/>}/>
        <Route path='/about' exact element={<Aboutus/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/admin/data' exact element={<Data/>}/>
        <Route path='/detail/:id' exact element={<Detail/>}/>
        <Route path='/resume_result' exact element={<ResumePdf func={setresumedata} resumedata={resumedata}/>}/>
        <Route path='/resume' exact element={<Resume func={setresumedata} resumedata={resumedata}/>}/>
        <Route path='*' element={<Page_404/>}/>
        </Routes>
  </Router>
    </>
  )
}

export default App