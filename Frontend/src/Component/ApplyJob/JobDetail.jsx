import React, { useState, useRef } from 'react'
import logo from './../../assests/FirstStephub.png'
import track from './../../assests/13.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from './Footer';

const JobDetail = () => {
    const ref = useRef();
    const [education, setEducation] = useState("");
    const [experience, setExperience] = useState("");
    const [salary, setSalary] = useState("");
    const [gender, setGender] = useState("");
    const [work, setWork] = useState("");
    const [role, setRole] = useState("");
    const [test, setTest] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [questionList, setQuestionList] = useState([]);
    const [company, setCompany] = useState("");

    const addQuestion = () => {
        setQuestionList([...questionList, { "question": question, "answer": answer }]);
        setQuestion("");
        setAnswer("");
    }

    return (
        <>
            <div className="flex flex-row">
                <div className='flex flex-row gap-4 text-center ml-4 p-1 justify-start'>
                    <img src={logo} className="h-24 w-24"></img>
                    <div className="text-xl font-bold text-center justify-center flex mt-4">Jobs By Type</div>
                    <div className="text-xl font-bold text-center justify-center flex mt-4">Find Job</div>
                </div>
                <div className="flex justify-end text-center mr-4 mt-3 p-1 flex-grow">
                    <div className='flex flex-row'>
                        <div className="text-xl font-semibold text-center justify-center flex mt-1">Atul Kesharwani</div>
                        <AccountCircleIcon sx={{ fontSize: "40px" }} />
                    </div>
                </div>
            </div>
            <div className='m-10 shadow-lg rounded-lg shadow-blue-500 p-5'>
                <div className='text-center font-semibold text-xl'>JobDetail</div>
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
                    <div className='font-semibold text-xl'>Description</div>
                    <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={description} onChange={(e) => { setDescription(e.target.value); }} />
                    <div className='font-semibold text-xl'>Test</div>
                    <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={test} onChange={(e) => { setTest(e.target.value); }} />
                    <div className='font-semibold text-xl'>Question</div>
                    <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={question} onChange={(e) => { setQuestion(e.target.value); }} />
                    <div className='font-semibold text-xl'>Answer</div>
                    <input type="text" className='border-2 border-black rounded-lg shadow-lg p-1 w-full' value={answer} onChange={(e) => { setAnswer(e.target.value); }} />
                    <div className="bg-blue-500 rounded-lg text-white text-center justify-center font-semibold w-24 h-10 m-2 text-xl" onClick={() => { addQuestion(); }}>Add</div>
                    <div className='border-2 rounded-lg p-2'>
                        {
                            questionList.map((item, key) => {
                                return (
                                    <div className='flex flex-col'>
                                        <div className='text-xl'>{item.question}</div>
                                        <div className='text-xl'>{item.answer}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="rounded-lg bg-blue-600 text-white text-center justify-center h-10 m-2 text-xl">Submit</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default JobDetail