import React from 'react'
import FooterVersion2 from './Footer'
import logo from './../../assests/FirstStephub.png'
import track from './../../assests/13.jpg'
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';
import LanguageIcon from '@mui/icons-material/Language';
import DnsIcon from '@mui/icons-material/Dns';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Descriptive = () => {
    const questionList = [
        { "question": "What is the range of salary", "answer": "Salary range is from 10000-12000" },
        { "question": "What is the range of salary", "answer": "Salary range is from 10000-12000" },
        { "question": "What is the range of salary", "answer": "Salary range is from 10000-12000" },
        { "question": "What is the range of salary", "answer": "Salary range is from 10000-12000" },
    ]
    const description = "We are developing 2 apps for our business.Logistics App like Porter for commercial goods transportation.Brokerage app for our business like Dhan, Zerodha (Although no financial transactions are involved in this case.)"
    return (
        <>
            <div className="flex flex-row" >
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
            <div className="bg-purple-500 mt-16 m-10 p-5 rounded-lg">
                <div className="text-4xl font-semibold text-white">Web & Graphic Designer</div>
                <div className="text-2xl font-semibold text-white"><BusinessIcon/>Damyant Fintech Private Limited,Noida</div>
                <div className="text-xl font-semibold text-white"><HomeIcon/>Work From Home</div>
                <div className="text-xl font-semibold text-white"><PaymentsIcon/><CurrencyRupeeIcon/>7500 per month(Fixed + incentives)</div>
                <div className="bg-white text-purple-400 text-center rounded-lg w-28">Part-time</div>
            </div>
            <div className="flex flex-col m-10 p-4">
                <div className='text-xl font-semibold border-b-4'>Job Details</div>
                <div className='grid grid-cols-2'>
                    <div className="flex flex-col">
                        <div className="font-semibold text-xl"><SchoolIcon/>Education</div>
                        <div className="text-xl">Graduate</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold text-xl'><StarIcon/>Experience</div>
                        <div className="text-xl">Fresher</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold text-xl'><LanguageIcon/>Language</div>
                        <div className="text-xl">Intermediate English</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold text-xl'><AccountCircleIcon/>Gender</div>
                        <div className="text-xl">Male</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold text-xl'><DnsIcon/>Address</div>
                        <div className="text-xl">Noida ,Sector-62 </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col m-10 border-2 border-gray-200 p-4 rounded-lg bg-purple-500 text-white">
                <div className='flex flex-col text-xl font-semibold'>Description About Job</div>
                <p className='font-medium'>{description}</p>
            </div>
            <div className='flex flex-col m-10 p-4 shadow-lg border-2 border-black rounded-lg'>
                {
                    questionList.map((item, key) => {
                        return (<div className='flex flex-col'>
                            <div className='font-medium'>{key}.{item.question}</div>
                            <div className=''>Answer:{item.answer}</div>
                        </div>
                        )
                    })
                }
            </div>
            <FooterVersion2 />
        </>
    )
}

export default Descriptive