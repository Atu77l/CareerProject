import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Folder } from '@mui/icons-material'

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
    <div className="bg-[#529bcf] h-24 w-screen flex flex-row">
        <div className=" mt-10 text-4xl text-center pl-9 font-medium">New Job Detail</div>
        <div className="flex flex-col mt-96 text-center justify-center outline-0">
         <label className="text-l text-[blue] mt-96">Company Name</label>
          <input
            type="text"
            placeholder="Company Name"
            value={companyname}
            className=" p-3 h-14  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
            onChange={(e)=>{setcompanyname(e.target.value)}}
          />
         <label className="text-l pt-1 text-[blue]">Experience</label>
          <input
            type="text"
            placeholder="Experience*"
            value={experience}
            onChange={(e)=>{setexperience(e.target.value)}}
            className=" p-3 mt-2  h-14  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
        <label className="text-l pt-1 text-[blue]">About Us</label>
          <input
            type="text"
            placeholder="About*"
            value={about}
            onChange={(e)=>{setabout(e.target.value)}}
            className=" p-3 mt-2   h-14  border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
        <label className="text-l pt-1 text-[blue]">Package</label>
          <input
            type="text"
            placeholder="Package"
            value={package1}
            onChange={(e)=>{setpackage(e.target.value)}}

            className=" p-3 mt-2  h-14 border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
           <label className="text-l pt-1 text-[blue]">Qualification</label>
          <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e)=>{setqualification(e.target.value)}}

            className=" p-3 mt-2  h-14 border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          
           <label className="text-l pt-1 text-[blue]">Location</label>
          <input
            type="text"
            value={location}
            placeholder="location"
            onChange={(e)=>{setlocation(e.target.value)}}
            className=" p-3  h-14 border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
           <label className="text-l pt-1 text-[blue]">Apply Link</label>
          <input
            type="text"
            value={link}
            placeholder="link"
            onChange={(e)=>{setlink(e.target.value)}}
            className=" p-3   h-14 border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
           <label className="text-l pt-1 text-[blue]">Image Link</label>
          <input
            type="text"
            value={imagelink}
            placeholder="Image link"
            onChange={(e)=>{setimagelink(e.target.value)}}
            className=" p-3   h-14 border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
           <label className="text-l pt-1 text-[blue]">Job Overview</label>
          <input
            type="text"
            value={joboverview}
            placeholder="Job Overview"
            onChange={(e)=>{setjoboverview(e.target.value)}}
            className=" p-3   h-14 border-2 border-[gray] rounded-lg"
            style={{ width: "800px" }}
          />
          <div className="text-auto text-center">
            <button className="h-14 mt-6 mb-10 w-40 bg-[green] rounded-2xl  font-semibold text-white" onClick={onSubmit }> 
              Save in Database
            </button>
          </div>
        </div>
        </div>

        {
            companydetail
        }
       </>
  )
}

export default Data