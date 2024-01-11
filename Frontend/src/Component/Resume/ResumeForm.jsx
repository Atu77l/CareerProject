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
  const [linkedIn, setlinkedIn] = useState("");
  const [github, setgithub] = useState("");
  const [certify, setcertify] = useState([]);
  const [project, setproject] = useState([]);
  const [projectname, setprojectname] = useState("");
  const [projecttech, setprojecttech] = useState("");
  const [projectdescription, setprojectdescription] = useState("");
  const [hobbies, sethobbies] = useState([]);
  const [hobbiesitem, sethobbiesitem] = useState("");
  const [skill, setskill] = useState([]);
  const [skillitem, setskillitem] = useState("");
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [percent, setPercent] = useState("");
  const [etitle, setEtitle] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [ctitle, setCtitle] = useState("");
  const [cdescription, setCdescription] = useState("");
  const navigate = useNavigate();
  const [year, setyear] = useState("");
  const [title, setitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to generate the resume using the input data
    const data = {
      title: title,
      name: Name,
      email: email,
      phone: phone,
      linkedIn: linkedIn,
      github: github,
      experience: experience,
      education: education,
      project: project,
      skills: skill,
      hobbies: hobbies,
      certifications: certify,
    };
    props.func(data);
    console.log(data);
    navigate("/resume_result");
  };

  return (
    <div className="  m-10 p-10 shadow-2xl   rounded-2xl border-2 border-t-4 border-b-4 border-blue-600 ">
      <div className="grid grid-cols-1">
        <label className="grid grid-cols-8  rounded-2xl text-xl font-serif  lg:ml-14  sm:-ml-14 mb-2">
          Name:
          <input
            type="text"
            value={Name}
            className="border-2 col-span-5 border-black p-1 bg-inherit  rounded-md w-96"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="grid grid-cols-8  rounded-2xl text-xl  mb-2 font-serif  lg:ml-14  sm:-ml-14">
          Email:
          <input
            type="email"
            value={email}
            className="border-2 col-span-5 border-black p-1 bg-inherit   rounded-md w-96"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="grid grid-cols-8  rounded-2xl text-xl  mb-2 font-serif  lg:ml-14  sm:-ml-14">
          Github Link:
          <input
            type="email"
            value={github}
            className="border-2  border-black p-1 bg-inherit col-span-5 rounded-md w-96"
            onChange={(e) => setgithub(e.target.value)}
          />
        </label>
        <label className="grid grid-cols-8  rounded-2xl text-xl font-serif  lg:ml-14  sm:-ml-14 mb-2">
          LinkedIn:
          <input
            type="text"
            value={linkedIn}
            className="border-2 border-black p-1 bg-inherit col-span-5 rounded-md w-96"
            onChange={(e) => setlinkedIn(e.target.value)}
          />
        </label>
        <label className="grid grid-cols-8  rounded-2xl text-xl font-serif  lg:ml-14  sm:-ml-14 mb-2">
          Phone:
          <input
            type="tel"
            value={phone}
            className="border-2 border-black p-1 bg-inherit col-span-5 rounded-md w-96"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className="grid grid-cols-8  rounded-2xl text-xl font-serif  lg:ml-14  sm:-ml-14  mb-2">
          Address:
          <input
            type="text"
            value={address}
            className="border-2 border-black p-1 bg-inherit col-span-5 rounded-md w-96"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label className="grid grid-cols-8  rounded-2xl text-xl font-serif  lg:ml-14  sm:-ml-14  mb-2">
          Gender:
         
          <div id="dropdownList">
                <select
                  id="dropdown"
                  className="border-2 col-span-5 border-black p-1 bg-inherit rounded-md w-96  mb-2 "
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                 
                </select>
              </div>
        </label>
        <label className="grid grid-cols-8  rounded-2xl text-xl font-serif  lg:ml-14  sm:-ml-14 mb-2">
          Summary:
          <textarea
            value={summary}
            className="border-2 border-black p-2 bg-inherit col-span-5 rounded-md w-96"
            onChange={(e) => setSummary(e.target.value)}
          />
        </label>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <label className="grid grid-cols-6 rounded-2xl text-xl  mb-2 mt-5 lg:ml-14 sm:-mr-80 font-serif">
          Education:
          <div className="grid grid-cols-1 col-span-4">
            <div className="grid grid-cols-1">
              <label className="text-l -mb-1 sm:pt-3 ">Course:</label>

              <div id="dropdownList">
                <select
                  id="dropdown"
                  className="border-2 col-span-5 border-black p-1 bg-inherit rounded-md w-96  mb-2 "
                >
                  <option value="option1">B.Tech</option>
                  <option value="option2">B.com</option>
                  <option value="option1">B.Ed</option>
                  <option value="option2">BCA</option>
                  <option value="option1">MCA</option>
                  <option value="option2">MBA</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <label className="text-l  -mb-1">CollegeName:</label>
              <input
                type="text"
                value={school}
                className="border-2 border-black p-1 bg-inherit mb-1  rounded-md w-96"
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>{" "}
            <div className="grid grid-cols-1">
              <label className="text-l -mb-1">Percentage:</label>
              <input
                type="text"
                value={percent}
                className="border-2 border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setPercent(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="text-l -mb-1">Year:</label>
              <input
                type="text"
                value={year}
                className="border-2 border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setyear(e.target.value)}
              />
            </div>
            <div
              className="text-white text-center rounded-md w-96 p-1 font-bold text-xl bg-green-600"
              onClick={() => {
                const inputdata = [...education];
                inputdata.push({
                  course: course,
                  school: school,
                  percent: percent,
                  year: year,
                });
                setEducation(inputdata);
              }}
            >
              Add
            </div>
          </div>
        </label>

        <div className="flex flex-col mt-14">
          {education.length > 0
            ? education.map((item, key) => {
                return (
                  <div className="grid grid-cols-1 shadow-lg rounded-lg p-1 mb-2 ">
                    <div className="text-l">Course: {item.course}</div>
                    <div className="text-l">School: {item.school}</div>
                    <div className="text-l">Percentage: {item.percent}</div>
                    <div
                      className="bg-blue-700 rounded text-white border-4-white text-center justify-center"
                      onClick={() => {
                        const inputdata = [...education];
                        inputdata.splice(key, 1);
                        setEducation(inputdata);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2 lg:ml-14 sm:-mr-80 font-serif mt-5">
          Experience:
          <div className="flex flex-col  col-span-4 -ml-1">
            <div className="grid grid-cols-1 ">
              <label className="text-l mr-10 -mb-1">Title:</label>
              <input
                type="text"
                value={etitle}
                className="border-2 border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setEtitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="text-l mr-10 -mb-1">Company:</label>
              <input
                type="text"
                value={company}
                className="border-2 border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="text-l mr-10 -mb-1">Date:</label>
              <input
                type="text"
                value={date}
                className="border-2 border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="text-l mr-10 -mb-1">Description:</label>
              <input
                type="text"
                value={description}
                className="border-2 border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div
              className="text-white text-center rounded-md w-96 p-1 font-bold text-xl bg-green-600"
              onClick={() => {
                const inputdata = [...experience];
                inputdata.push({
                  title: etitle,
                  date: date,
                  description: description,
                  company: company,
                });
                setExperience(inputdata);
              }}
            >
              Add
            </div>
          </div>
        </label>
        <div className="flex flex-col mt-14">
          {experience.length > 0
            ? experience.map((item, key) => {
                return (
                  <div className="grid grid-cols-1 shadow-lg rounded-lg p-3 mb-2 ">
                    <div className="text-l">Title: {item.title}</div>
                    <div className="text-l">Company: {item.company}</div>
                    <div className="text-l">Date: {item.date}</div>
                    <div className="text-l">
                      Description: {item.description}
                    </div>
                    <div
                      className="bg-blue-700 rounded text-white border-4-white text-center justify-center"
                      onClick={() => {
                        const inputdata = [...experience];
                        inputdata.splice(key, 1);
                        setExperience(inputdata);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2 lg:ml-14 sm:-mr-80 font-serif mt-5">
          Certifications:
          <div className="flex flex-col -ml-1 col-span-4 ">
            <div className="grid grid-cols-1">
              <label className="text-l  -mb-1 ">Title:</label>
              <input
                type="text"
                value={ctitle}
                className="border-2 border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setCtitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="text-l mr-10 -mb-1">Description:</label>
              <input
                type="text"
                value={cdescription}
                className="border-2 border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setCdescription(e.target.value)}
              />
            </div>
            <div
              className="text-white text-center rounded-md w-96 p-1 font-bold text-xl bg-green-600"
              onClick={() => {
                const inputdata = [...certify];
                inputdata.push({ title: ctitle, description: cdescription });
                setcertify(inputdata);
              }}
            >
              Add
            </div>
          </div>
        </label>

        <label className="flex flex-col rounded-2xl text-xl  mt-5">
          {certify.length > 0
            ? certify.map((item, key) => {
                return (
                  <div className="grid grid-cols-1 shadow rounded-lg p-3 mb-2 ">
                    <div className="text-l">
                      CertificationsTitle: {item.title}
                    </div>
                    <div className="text-l">
                      Description: {item.description}
                    </div>
                    <div
                      className="bg-blue-700 rounded text-white border-4-white text-center justify-center"
                      onClick={() => {
                        const inputdata = [...certify];
                        inputdata.splice(key, 1);
                        setcertify(inputdata);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                );
              })
            : ""}
        </label>
      </div>
      {/* Project */}

      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <label className="grid grid-cols-6  rounded-2xl text-xl  mb-2 lg:ml-14 sm:-mr-80 font-serif mt-5">
          Projects:
          <div className="flex flex-col  col-span-4">
            <div className="grid grid-cols-1">
              <label className="text-l -mb-1">Project Name:</label>
              <input
                type="text"
                value={projectname}
                className="border-2  border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setprojectname(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="text-l -mb-1">Tech Used:</label>
              <input
                type="text"
                value={projecttech}
                className="border-2  border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setprojecttech(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="text-l -mb-1">Description:</label>
              <input
                type="text"
                value={projectdescription}
                className="border-2  border-black p-1 bg-inherit mb-2 rounded-md w-96"
                onChange={(e) => setprojectdescription(e.target.value)}
              />
            </div>
            <div
              className="text-white text-center rounded-md w-96 p-1 font-bold text-xl bg-green-600"
              onClick={() => {
                const inputdata = [...project];
                inputdata.push({
                  title: projectname,
                  tech: projecttech,
                  description: projectdescription,
                });
                setproject(inputdata);
              }}
            >
              Add
            </div>
          </div>
        </label>

        <label className="flex flex-col rounded-md  text-xl   mt-5">
          {project.length > 0
            ? project.map((item, key) => {
                return (
                  <div className="grid grid-cols-1 shadow rounded-lg p-3 mb-2 ">
                    <div className="text-l -mb-1">Project Name: {item.title}</div>
                    <div className="text-l -mb-1">Tech Used: {item.tech}</div>
                    <div className="text-l -mb-1">
                      Description: {item.description}
                    </div>
                    <div
                      className="bg-blue-700 rounded-md  text-white border-4-white text-center justify-center"
                      onClick={() => {
                        const inputdata = [...project];
                        inputdata.splice(key, 1);
                        setproject(inputdata);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                );
              })
            : ""}
        </label>
      </div>
      {/* Project End */}
{/* 
      <div className="">
        <label className="grid grid-cols-6  rounded-md w-96 text-xl  mb-2 font-serif  mt-5">
          Skills:
          <div className="">
            <input
              type="text"
              className="border-2  border-black bg-inherit h-10 rounded-md    w-96 "
              value={skillitem}
              onChange={(e) => {
                setskillitem(e.target.value);
              }}
            />
            <div
              className="text-white text-center rounded-md p-2 font-bold text-xl bg-green-600 h-10 mt-2 w-96"
              onClick={() => {
                const inputdata = [...skill];
                inputdata.push(skillitem);
                setskill(inputdata);
              }}
            >
              Add
            </div>
          </div>
        </label>
        <div className="flex flex-col mt-4">
          {skill.length > 0
            ? skill.map((item, key) => {
                return (
                  <div className="grid grid-cols-2  p-2 shadow rounded mb-2 ">
                    <h3 className="text-black">{item}</h3>
                    <div
                      className="bg-blue-700 rounded text-white border-4-white p-2  text-center justify-center"
                      onClick={() => {
                        const inputdata = [...skill];
                        inputdata.splice(key, 1);
                        setskill(inputdata);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div> */}

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-5">
        <label className="grid grid-cols-6  text-xl text-black  mb-2 lg:ml-12 sm:-ml-2 font-serif">
          Hobbies:
          <div className="sm:ml-16 lg:ml-16">
            <input
              type="text"
              className="col-span-2 h-10 border-2 bg-inherit border-black rounded-md w-96 "
              value={hobbiesitem}
              onChange={(e) => {
                sethobbiesitem(e.target.value);
              }}
            />
            <div
              className="text-white text-center rounded-md p-2 font-bold text-xl bg-green-600 h-10 mt-2 w-96 "
              onClick={() => {
                const inputdata = [...hobbies];
                inputdata.push(hobbiesitem);
                sethobbiesitem("");
                sethobbies(inputdata);
              }}
            >
              Add
            </div>
          </div>
        </label>
        <div className="flex flex-col  mt-2">
          {hobbies.length > 0
            ? hobbies.map((item, key) => {
                return (
                  <div className="grid grid-cols-2 p-2 shadow rounded mb-2">
                    <h3 className="text-black">{item}</h3>
                    <div
                      className="bg-blue-700 rounded-md text-white border-4-white p-2  text-center justify-center"
                      onClick={() => {
                        const inputdata = [...skill];
                        inputdata.splice(key, 1);
                        setskill(inputdata);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>


      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-5">
        <label className="grid grid-cols-6  text-xl text-black  mb-2 lg:ml-12 sm:-ml-2 font-serif">
          Skills:
          <div className="sm:ml-16 lg:ml-16">
            <input
              type="text"
              className="col-span-2 h-10 border-2 bg-inherit border-black rounded-md w-96 "
              value={hobbiesitem}
              onChange={(e) => {
                setskillitem(e.target.value);
              }}
            />
            <div
              className="text-white text-center rounded-md p-2 font-bold text-xl bg-green-600 h-10 mt-2 w-96 "
              onClick={() => {
                const inputdata = [...hobbies];
                inputdata.push(hobbiesitem);
                setskillitem("");
                setskill(inputdata);
              }}
            >
              Add
            </div>
          </div>
        </label>
        <div className="flex flex-col  mt-2">
          {hobbies.length > 0
            ? hobbies.map((item, key) => {
                return (
                  <div className="grid grid-cols-2 p-2 shadow rounded mb-2">
                    <h3 className="text-black">{item}</h3>
                    <div
                      className="bg-blue-700 rounded-md text-white border-4-white p-2  text-center justify-center"
                      onClick={() => {
                        const inputdata = [...skill];
                        inputdata.splice(key, 1);
                        setskill(inputdata);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>




      <div className="flex-justify-center text-center mt-3 ">
        <Button
          className="text-2xl font-semibold w-96 h-10 "
          type="submit"
          onClick={handleSubmit}
          variant="contained"
        >
          Generate Resume
        </Button>
      </div>
    </div>
  );
};

export default ResumeForm;
