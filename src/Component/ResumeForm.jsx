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


  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to generate the resume using the input data
    const data = { "name": Name, "email": email, "phone": phone, "linkedIn": linkedIn, "github": github, "experience": experience, "education": education, "project": project, "skills": skill, "hobbies": hobbies, "certifications": certify }
    props.func(data);
    console.log(data)
    navigate('/resume_result')
  };

  return (
    <div className="flex flex-col text-l shadow rounded bg-slate-200 p-10">
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Name:
        <input
          type="text"
          value={Name}
          className="border-2 border-black p-2 bg-inherit w-screen ml-20"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Email:
        <input
          type="email"
          value={email}
          className="border-2 border-black p-2 bg-inherit w-screen ml-20"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Github Link:
        <input
          type="email"
          value={github}
          className="border-2 border-black p-2 bg-inherit w-screen ml-20"
          onChange={(e) => setgithub(e.target.value)}
        />
      </label>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        LinkedIn:
        <input
          type="text"
          value={linkedIn}
          className="border-2 border-black p-2 bg-inherit w-screen ml-20"
          onChange={(e) => setlinkedIn(e.target.value)}
        />
      </label>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Phone:
        <input
          type="tel"
          value={phone}
          className="border-2 border-black p-2 bg-inherit w-screen ml-20"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Address:
        <input
          type="text"
          value={address}
          className="border-2 border-black p-2 bg-inherit w-screen ml-20"
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Summary:
        <textarea
          value={summary}
          className="border-2 border-black p-2 bg-inherit w-screen ml-20"
          onChange={(e) => setSummary(e.target.value)}
        />
      </label>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Education:
        <div className="flex flex-col ml-10">
          <div className="flex flex-row">
            <label className="text-l mr-10">Course:</label>
            <input
              type="text"
              value={course}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label className="text-l mr-10">CollegeName:</label>
            <input
              type="text"
              value={school}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div> <div className="flex flex-row">
            <label className="text-l mr-10">Percentage:</label>
            <input
              type="text"
              value={percent}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setPercent(e.target.value)}
            />
          </div>
        </div>

        <div className="text-green-500 text-xl ml-5" onClick={() => { const inputdata = [...education]; inputdata.push({ "course": course, "school": school, "percent": percent }); setEducation(inputdata); setCourse(""); setSchool(""); setPercent("") }}>Add</div>
      </label>
      <div className="flex flex-col">
        {
          education.length > 0 ? education.map((item, key) => {
            return (
              <div className="flex flex-col shadow bg-slate-500 p-3 mb-2 font-bold">
                <div className="text-l">Course:    {item.course}</div>
                <div className="text-l">School:    {item.school}</div>
                <div className="text-l">Percentage:     {item.percent}</div>
              </div>
            )
          }) : ""
        }
      </div>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Experience:
        <div className="flex flex-col ml-10">
          <div className="flex flex-row">
            <label className="text-l mr-10">title:</label>
            <input
              type="text"
              value={etitle}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setEtitle(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label className="text-l mr-10">Company:</label>
            <input
              type="text"
              value={company}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label className="text-l mr-10">Date:</label>
            <input
              type="text"
              value={date}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label className="text-l mr-10">Description:</label>
            <input
              type="text"
              value={description}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="text-green-500 text-xl ml-5" onClick={() => { const inputdata = [...experience]; inputdata.push({ "title": etitle, "date": date, "description": description, "company": company }); setEtitle(""); setExperience(inputdata); setCompany(""); setDate(""); setDescription("") }}>Add</div>

      </label>
      <div className="flex flex-col">
        {
          experience.length > 0 ? experience.map((item, key) => {
            return (
              <div className="flex flex-col shadow bg-slate-500 p-3 mb-2 font-bold">
                <div className="text-l">Title:   {item.title}</div>
                <div className="text-l">Company:   {item.company}</div>
                <div className="text-l">Date:    {item.date}</div>
                <div className="text-l">Description:    {item.description}</div>
              </div>
            )
          }) : ""
        }
      </div>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Certifications:
        <div className="flex flex-col ml-10 ">
          <div className="flex flex-row">
            <label className="text-l mr-10">Title:</label>
            <input
              type="text"
              value={ctitle}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setCtitle(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label className="text-l mr-10">Description:</label>
            <input
              type="text"
              value={cdescription}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setCdescription(e.target.value)}
            />
          </div>
        </div>
        <div className="text-green-500 text-xl ml-5" onClick={() => { const inputdata = [...certify]; inputdata.push({ "title": ctitle, "description": cdescription }); setcertify(inputdata); setCtitle(""); setCdescription(""); }}>Add</div>
      </label>
      {
        certify.length > 0 ? certify.map((item, key) => {
          return (
            <div className="flex flex-col shadow bg-slate-500 p-3 mb-2 font-bold">
              <div className="text-l">CertificationsTitle: {item.title}</div>
              <div className="text-l">Description:    {item.description}</div>
            </div>
          )
        }) : ""
      }
{/* Project */}
<label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Projects:
        <div className="flex flex-col ml-10 ">
          <div className="flex flex-row">
            <label className="text-l mr-10">Project Name:</label>
            <input
              type="text"
              value={projectname}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setprojectname(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label className="text-l mr-10">Tech Used:</label>
            <input
              type="text"
              value={projecttech}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setprojecttech(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label className="text-l mr-10">Description:</label>
            <input
              type="text"
              value={projectdescription}
              className="border-2 border-black p-2 bg-inherit ml-20 mb-2"
              style={{ width: "80%" }}
              onChange={(e) => setprojectdescription(e.target.value)}
            />
          </div>
        </div>
        <div className="text-green-500 text-xl ml-5" onClick={() => { const inputdata = [...project]; inputdata.push({ "title": projectname, "tech": projecttech ,"description":projectdescription }); setproject(inputdata); setprojectname(""); setprojectdescription("");setprojecttech("") }}>Add</div>
      </label>
      {
        project.length > 0 ? project.map((item, key) => {
          return (
            <div className="flex flex-col shadow bg-slate-500 p-3 mb-2 font-bold">
              <div className="text-l">Project Name: {item.title}</div>
              <div className="text-l">Tech Used:    {item.tech}</div>
              <div className="text-l">Description:    {item.description}</div>
            </div>
          )
        }) : ""
      }
      {/* Project End */}
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl font-bold">
        Skills:
        <input type="text" className="border-2 border-black bg-inherit h-12 ml-20" style={{ width: "60%" }} value={skillitem} onChange={(e) => { setskillitem(e.target.value) }} />
        <div className="text-green-500 text-xl ml-5" onClick={() => {
          const inputdata = [...skill]; inputdata.push(skillitem); setskillitem(""); setskill(inputdata)
        }}>Add Skills</div>
      </label>
      <div className="flex flex-col mb-2">
        {
          skill.length > 0 ? skill.map((item, key) => {
            return <h3 className="hello p-3 mb-2 bg-slate-500 font-bold">{item}</h3>
          }) : ""
        }
      </div>
      <label className="flex flex-row p-10 shadow bg-slate-100 rounded text-xl text-black font-bold">
        Hobbies:
        <input type="text" className="border-2 bg-inherit border-black h-12 ml-20" style={{ width: "60%" }} value={hobbiesitem} onChange={(e) => { sethobbiesitem(e.target.value) }} />
        <div className="text-green-500 text-xl ml-5" onClick={() => { const inputdata = [...hobbies]; inputdata.push(hobbiesitem); sethobbiesitem(""); sethobbies(inputdata) }}>Add Hobbies</div>
      </label>
      <div className="flex flex-col mb-2">
        {
          hobbies.length > 0 ? hobbies.map((item, key) => {
            return <h3 className="hello mb-2 p-3 bg-slate-500 font-bold">{item}</h3>
          }) : ""
        }
      </div>
      <Button type="submit" onClick={handleSubmit} variant="contained">Generate Resume</Button>
    </div>
  );
};

export default ResumeForm;
