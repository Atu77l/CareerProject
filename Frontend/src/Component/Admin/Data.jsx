import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import axios from 'axios'


const Data = () => {
  const [companyname, setcompanyname] = useState("")
  const [experience, setexperience] = useState("")
  const [package1, setpackage] = useState("")
  const [about, setabout] = useState("")
  const [companydetail, setcompanydetail] = useState([])
  const [qualification, setqualification] = useState("")
  const [link, setlink] = useState("")
  const [location, setlocation] = useState("")
  const [joboverview, setjoboverview] = useState("")



  const onSubmit = () => {
    const data = { "companyname": companyname, "experience": experience, "package": package1, "about": about, "qualification": qualification, "link": link, "location": location, "jobOverview": joboverview }
    console.log(data)

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/save',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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


  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 m-10 gap-4 ">
        <div className='text-4xl font-bold text-left mt-20'>Job Detail</div>
        <input
          type="text"
          placeholder="Company Name*"
          value={companyname}
          onChange={(e) => setcompanyname(e.target.value)}
          className="p-3 border-2 border-black text-xl rounded-lg"
        />
        <input
          type="text"
          placeholder="Experience*"
          value={experience}
          onChange={(e) => setexperience(e.target.value)}
          className="p-3 border-2 border-black text-xl rounded-lg"
        />

        <input
          type="text"
          placeholder="About*"
          value={about}
          onChange={(e) => { setabout(e.target.value) }}
          className=" p-3 border-2 border-black text-xl rounded-lg"
        />
        <input
          type="text"
          placeholder="Package*"
          value={package1}
          onChange={(e) => { setpackage(e.target.value) }}
          className=" p-3 border-2 border-black text-xl rounded-lg"
        />

        <input
          type="text"
          placeholder="Qualification*"
          value={qualification}
          onChange={(e) => { setqualification(e.target.value) }}
          className=" p-3 border-2 border-black text-xl rounded-lg"
        />


        <input
          type="text"
          value={location}
          placeholder="location*"
          onChange={(e) => { setlocation(e.target.value) }}
          className=" p-3 border-2 border-black text-xl rounded-lg"
        />

        <input
          type="text"
          value={link}
          placeholder="Enter Company link*"
          onChange={(e) => { setlink(e.target.value) }}
          className=" p-3 border-2 border-black text-xl rounded-lg"
        />


        <input
          type="text"
          value={joboverview}
          placeholder="Job Overview*"
          onChange={(e) => { setjoboverview(e.target.value) }}
          className=" p-3 border-2 border-black text-xl rounded-lg"
        />
        <button
          className="py-3 bg-green-500 text-white rounded-lg font-semibold"
          onClick={onSubmit}
        >
          Save in Database
        </button>
      </div>

      {
        companydetail.map((item, key) => {
          return (
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
    </>
  )
}

export default Data