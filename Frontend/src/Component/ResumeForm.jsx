import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeForm = (props) => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [linkedIn, setlinkedIn] = useState("")
  const [github, setgithub] = useState("")
  const [certify, setcertify] = useState([])
  const [project, setproject] = useState([])
  const [projectname,setprojectname]=useState("")
  const [projecttech,setprojecttech]=useState("")
  const [projectdescription,setprojectdescription]=useState("")
  const [hobbies, sethobbies] = useState([])
  const [hobbiesitem, sethobbiesitem] = useState("")
  const [skill, setskill] = useState([])
  const [skillitem, setskillitem] = useState("")
  const [course, setCourse] = useState("")
  const [school, setSchool] = useState("")
  const [percent, setPercent] = useState("")
  const [etitle, setEtitle] = useState("")
  const [company, setCompany] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [ctitle, setCtitle] = useState("")
  const [cdescription, setCdescription] = useState("")
  const navigate = useNavigate()
  const [year,setyear]=useState("")
  const [title,settitle]=useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to generate the resume using the input data
    const data = {"title":title,"name": Name, "email": email, "phone": phone, "linkedIn": linkedIn, "github": github, "experience": experience, "education": education, "project": project, "skills": skill, "hobbies": hobbies, "certifications": certify }
    props.func(data);
    console.log(data)
    navigate('/resume_result')
  };

  return (
    <div className="grid grid-cols-1 m-10 p-5 shadow gap-2 text-l  rounded-2xl sm:grid-cols-2">
     <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Title:
        <input
          type="text"
          value={title}
          className="border-2 col-span-5 border-black p-2 bg-inherit rounded-2xl"
          onChange={(e) => settitle(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Name:
        <input
          type="text"
          value={Name}
          className="border-2 col-span-5 border-black p-2 bg-inherit rounded-2xl"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Email:
        <input
          type="email"
          value={email}
          className="border-2 col-span-5 border-black p-2 bg-inherit  rounded-2xl"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Github Link:
        <input
          type="email"
          value={github}
          className="border-2  border-black p-2 bg-inherit col-span-5 rounded-2xl"
          onChange={(e) => setgithub(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        LinkedIn:
        <input
          type="text"
          value={linkedIn}
          className="border-2 border-black p-2 bg-inherit col-span-5 rounded-2xl"
          onChange={(e) => setlinkedIn(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Phone:
        <input
          type="tel"
          value={phone}
          className="border-2 border-black p-2 bg-inherit col-span-5 rounded-2xl"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Address:
        <input
          type="text"
          value={address}
          className="border-2 border-black p-2 bg-inherit col-span-5 rounded-2xl"
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Summary:
        <textarea
          value={summary}
          className="border-2 border-black p-2 bg-inherit col-span-5 rounded-2xl"
          onChange={(e) => setSummary(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Education:
        <div className="grid grid-cols-1 col-span-4">
          <div className="grid grid-cols-1">
            <label className="text-l">Course:</label>
            <input
              type="text"
              value={course}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="text-l">CollegeName:</label>
            <input
              type="text"
              value={school}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setSchool(e.target.value)}
            />
          </div> <div className="grid grid-cols-1">
            <label className="text-l">Percentage:</label>
            <input
              type="text"
              value={percent}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setPercent(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="text-l">Year:</label>
            <input
              type="text"
              value={year}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setyear(e.target.value)}
            />
          </div>
          <div className="text-black text-center rounded-xl p-2 font-bold text-xl bg-green-600" onClick={() => { const inputdata = [...education]; inputdata.push({ "course": course, "school": school, "percent": percent ,"year":year }); setEducation(inputdata);}}>Add</div>
        </div>

      </label>
      <div className="flex flex-col">
        {
          education.length > 0 ? education.map((item, key) => {
            return (
              <div className="grid grid-cols-1 shadow-lg rounded-lg p-2 mb-2 ">
                <div className="text-l">Course:    {item.course}</div>
                <div className="text-l">School:    {item.school}</div>
                <div className="text-l">Percentage:     {item.percent}</div>
                <div className="bg-blue-700 rounded text-white border-4-white text-center justify-center" onClick={()=>{const inputdata=[...education];inputdata.splice(key,1);setEducation(inputdata)}}>Delete</div>
              </div>
            )
          }) : ""
        }
      </div>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Experience:
        <div className="flex flex-col ml-10 col-span-4">
          <div className="grid grid-cols-1">
            <label className="text-l mr-10">title:</label>
            <input
              type="text"
              value={etitle}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setEtitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="text-l mr-10">Company:</label>
            <input
              type="text"
              value={company}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="text-l mr-10">Date:</label>
            <input
              type="text"
              value={date}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="text-l mr-10">Description:</label>
            <input
              type="text"
              value={description}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="text-black text-center rounded-xl p-2 font-bold text-xl bg-green-600" onClick={() => { const inputdata = [...experience]; inputdata.push({ "title": etitle, "date": date, "description": description, "company": company }); setExperience(inputdata);}}>Add</div>
        </div>
      </label>
      <div className="flex flex-col">
        {
          experience.length > 0 ? experience.map((item, key) => {
            return (
              <div className="grid grid-cols-1 shadow-lg rounded-lg p-3 mb-2 ">
                <div className="text-l">Title:   {item.title}</div>
                <div className="text-l">Company:   {item.company}</div>
                <div className="text-l">Date:    {item.date}</div>
                <div className="text-l">Description:    {item.description}</div>
                <div className="bg-blue-700 rounded text-white border-4-white text-center justify-center" onClick={()=>{const inputdata=[...experience];inputdata.splice(key,1);setExperience(inputdata)}}>Delete</div>
              </div>
            )
          }) : ""
        }
      </div>
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Certifications:
        <div className="flex flex-col ml-10 col-span-4">
          <div className="grid grid-cols-1">
            <label className="text-l mr-10">Title:</label>
            <input
              type="text"
              value={ctitle}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setCtitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="text-l mr-10">Description:</label>
            <input
              type="text"
              value={cdescription}
              className="border-2 border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setCdescription(e.target.value)}
            />
          </div>
          <div className="text-black text-center rounded-xl p-2 font-bold text-xl bg-green-600" onClick={() => { const inputdata = [...certify]; inputdata.push({ "title": ctitle, "description": cdescription }); setcertify(inputdata); }}>Add</div>
        </div>
      </label>
      <label className="grid grid-cols-1 rounded-2xl text-xl  mb-2">
      {
        certify.length > 0 ? certify.map((item, key) => {
          return (
            <div className="grid grid-cols-1 shadow rounded-lg p-3 mb-2 ">
              <div className="text-l">CertificationsTitle: {item.title}</div>
              <div className="text-l">Description:    {item.description}</div>
              <div className="bg-blue-700 rounded text-white border-4-white text-center justify-center" onClick={()=>{const inputdata=[...certify];inputdata.splice(key,1);setcertify(inputdata)}}>Delete</div>
            </div>
          )
        }) : ""
      }
      </label>
{/* Project */}
<label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Projects:
        <div className="flex flex-col  col-span-4">
          <div className="grid grid-cols-1">
            <label className="text-l">Project Name:</label>
            <input
              type="text"
              value={projectname}
              className="border-2  border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setprojectname(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="text-l">Tech Used:</label>
            <input
              type="text"
              value={projecttech}
              className="border-2  border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setprojecttech(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="text-l">Description:</label>
            <input
              type="text"
              value={projectdescription}
              className="border-2  border-black p-2 bg-inherit mb-2 rounded-2xl"
              onChange={(e) => setprojectdescription(e.target.value)}
            />
          </div>
          <div className="text-black text-center rounded-xl p-2 font-bold text-xl bg-green-600" onClick={() => { const inputdata = [...project]; inputdata.push({ "title": projectname, "tech": projecttech ,"description":projectdescription }); setproject(inputdata);}}>Add</div>
        </div>
      </label>
      <label className="grid grid-cols-1 rounded-2xl text-xl  mb-2">
      {
        project.length > 0 ? project.map((item, key) => {
          return (
            <div className="grid grid-cols-1 shadow rounded-lg p-3 mb-2 ">
              <div className="text-l">Project Name: {item.title}</div>
              <div className="text-l">Tech Used:    {item.tech}</div>
              <div className="text-l">Description:    {item.description}</div>
              <div className="bg-blue-700 rounded-lg text-white border-4-white text-center justify-center" onClick={()=>{const inputdata=[...project];inputdata.splice(key,1);setproject(inputdata)}}>Delete</div>

            </div>
          )
        }) : ""
      }
      </label>
      {/* Project End */}
      <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2">
        Skills:
        <input type="text" className="border-2 col-span-3 border-black bg-inherit h-12 rounded-2xl" style={{ width: "60%" }} value={skillitem} onChange={(e) => { setskillitem(e.target.value) }} />
        <div className="text-black h-12 col-span-2 text-center rounded-xl p-2 font-bold text-xl bg-green-600" onClick={() => {
          const inputdata = [...skill]; inputdata.push(skillitem); setskill(inputdata)}}>Add</div>
      </label>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {
          skill.length > 0 ? skill.map((item, key) => {
            return<div className="grid grid-cols-2  p-2 shadow rounded mb-2">
             <h3 className="text-black">{item}</h3>
             <div className="bg-blue-700 rounded text-white border-4-white p-2  text-center justify-center"  onClick={()=>{const inputdata=[...skill];inputdata.splice(key,1);setskill(inputdata)}}>Delete</div>
             </div>
          }) : ""
        }
      </div>
      <label className="grid grid-cols-4 rounded-2xl text-xl text-black  mb-2">
        Hobbies:
        <input type="text" className="col-span-2 h-12 border-2 bg-inherit border-black rounded-2xl" style={{ width: "60%" }} value={hobbiesitem} onChange={(e) => { sethobbiesitem(e.target.value) }} />
        <div className="text-black text-center rounded-xl p-2 font-bold text-xl bg-green-600 h-12" onClick={() => { const inputdata = [...hobbies]; inputdata.push(hobbiesitem); sethobbiesitem(""); sethobbies(inputdata) }}>Add</div>
      </label>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {
           hobbies.length > 0 ? hobbies.map((item, key) => {
            return<div className="grid grid-cols-2 p-2 shadow rounded mb-2">
             <h3 className="text-black">{item}</h3>
             <div className="bg-blue-700 rounded-lg text-white border-4-white p-2  text-center justify-center"  onClick={()=>{const inputdata=[...skill];inputdata.splice(key,1);setskill(inputdata)}}>Delete</div>
             </div>
          }) : ""
        }
      </div>
      <Button type="submit" onClick={handleSubmit} variant="contained">Generate Resume</Button>
    </div>
  );
};

export default ResumeForm;
