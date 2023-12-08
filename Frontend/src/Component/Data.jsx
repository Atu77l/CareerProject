import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Folder } from '@mui/icons-material'
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const Data = () => {
  const [companyname,setcompanyname]=useState("")
  const [experience,setexperience]=useState("")
  const [package1,setpackage]=useState("")
  const [about,setabout]=useState("")
  const [companydetail,setcompanydetail]=useState([])
  const [qualification,setqualification]=useState("")
  const [link,setlink]=useState("")
  const [location,setlocation]=useState("")
  const [imagelink,setimagelink]=useState("")
  const [joboverview,setjoboverview]=useState("")

  const [link1,setGithubLink]=useState("")
  const [code,setCode]=useState("")
  const [title,setTitle]=useState("")
  const [topic,setTopic]=useState("")
  

  const onSubmit=()=>{
    const data={"companyname":companyname,"experience":experience,"package":package1,"about":about,"qualification":qualification,"applylink":link,"location":location,"imagelink":imagelink,"joboverview":joboverview}
    console.log(data)
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/save',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setcompanyname("")
        setabout("")
        setexperience("")
        setpackage("")
      })
      .catch((error) => {
        console.log(error);
      });
}
const onHandleDesignSubmit=()=>{
  const data={"link":link1,"code":code,"title":title,"topic":topic}
  
  let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/save_design',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setGithubLink("")
      setTitle("")
      setTopic("")
      setCode("")
    })
    .catch((error) => {
      console.log(error);
    });
}
const handleCodeChange = (editor, data, value) => {
  setCode(value);
};
  // const fetchData=()=>{
  //   let config = {
  //       method: 'get',
  //       maxBodyLength: Infinity,
  //       url: 'http://localhost:4000/get',
  //       headers: { 
  //         'Content-Type': 'application/json'
  //       }
  //     };
      
  //     axios.request(config)
  //     .then((response) => {
  //       if(response.data)
  //          setcompanydetail(response?.data?.detail)
  //       console.log(response.data.detail)
  //       const data=response.data.detail
  //       console.log("data",data)
       

  //       console.log("c",companydetail)


  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
      
  // }

  return (
    <>
    <div className="bg-[#529bcf] h-24 w-screen flex flex-col">
        <div className=" mt-10 text-4xl text-center pl-9 font-medium">New Job Detail</div>
        </div>
        <div className="grid grid-cols-1 m-10 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Company Name"
          value={companyname}
          onChange={(e) => setcompanyname(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setexperience(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />
         
          <input
            type="text"
            placeholder="About*"
            value={about}
            onChange={(e)=>{setabout(e.target.value)}}
            className=" p-3  border-2 border-gray-300 rounded-lg"
          />
                   <input
            type="text"
            placeholder="Package"
            value={package1}
            onChange={(e)=>{setpackage(e.target.value)}}
            className=" p-3 border border-gray-300 rounded-lg"
          />
        
          <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e)=>{setqualification(e.target.value)}}
            className=" p-3 border border-gray-300 rounded-lg"
          />
          
            
          <input
            type="text"
            value={location}
            placeholder="location"
            onChange={(e)=>{setlocation(e.target.value)}}
            className=" p-3 border border-gray-300 rounded-lg"
          />
      
          <input
            type="text"
            value={link}
            placeholder="link"
            onChange={(e)=>{setlink(e.target.value)}}
            className=" p-3 border border-gray-300 rounded-lg"
          />
       
          <input
            type="text"
            value={imagelink}
            placeholder="Image link"
            onChange={(e)=>{setimagelink(e.target.value)}}
            className=" p-3 border border-gray-300 rounded-lg"
          />
           
          <input
            type="text"
            value={joboverview}
            placeholder="Job Overview"
            onChange={(e)=>{setjoboverview(e.target.value)}}
            className=" p-3 border border-gray-300 rounded-lg"
          />
          <button
          className="py-3 bg-green-500 text-white rounded-lg font-semibold"
          onClick={onSubmit}
        >
          Save in Database
        </button>
        </div>

        <div className="bg-[#529bcf] h-24 w-screen flex flex-col">
        <div className=" mt-10 text-4xl text-center font-medium">New Design Detail</div>
        </div>
        <div className="grid grid-cols-1 m-10 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />
         
         <CodeMirror
        value={code}
        onBeforeChange={handleCodeChange}
        options={{
          lineNumbers: true,
          mode: 'javascript',
          theme: 'material',
        }}
      />
            <textarea id="code" value={code} name="code" rows="10" cols="50"  onChange={(e)=>{setCode(e.target.value)}}  className=" p-3  border-2 border-gray-300 rounded-lg"></textarea>

          <input
            type="text"
            placeholder="Github Link"
            value={link1}
            onChange={(e)=>{setGithubLink(e.target.value)}}
            className=" p-3 border border-gray-300 rounded-lg"
          />
   
          
      
          <button
          className="py-3 bg-green-500 text-white rounded-lg font-semibold"
          onClick={onHandleDesignSubmit}
        >
          Save Design in Database
        </button>
        </div>
        
      
        {
            companydetail
        }

       </>
  )
}

export default Data