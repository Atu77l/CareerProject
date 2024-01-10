import React from 'react'
import logo from './../../assests/FirstStephub.png'
import track from './../../assests/13.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';
import { ListItem } from '@mui/material';
import FooterVersion2 from './Footer';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Job = [
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
    { "company": "Damyant Fintech Private Limited,Noida", "work": "Work From Home", "role": "Software Engineer", "jobtype": "Full Time", "test": "Test Required", "need": "Urgent", "salary": "25000-30000" },
]
const jobfilter=['Department','Salary','Experience','Education','Work Mode','Work Type','Work Shift','Posted By','Company','Sort By','Other']

const Applyjob = () => {
    return (
        <>
            <div className="flex flex-row bg-blue-700 -z-10" >
                <div className='flex flex-row gap-4 text-center ml-4 p-1 fixed top-0 left-0'>
                    <img src={logo} className="h-24 w-24"></img>
                    <div className="text-xl font-bold text-center justify-center flex mt-4">Jobs By Type</div>
                    <div className="text-xl font-bold text-center justify-center flex mt-4">Find Job</div>
                </div>
                <div className="flex flex-row fixed top-0 right-0 text-center mr-4 mt-3 p-1">
                    <div className="text-xl font-semibold text-center justify-center flex mt-1">Atul Kesharwani</div>
                    <AccountCircleIcon sx={{ fontSize: "40px" }} />
                </div>
            </div>
            <div className="text-center border-2 flex flex-row rounded-lg border-black mt-32 m-10 p-2">
                <div className='flex-grow'>
                    <input type="text" placeholder="Search Job by Company,Position" className="text-2xl h-12 w-full border-2 rounded-lg border-gray-600 flex-grow" />
                    <div className='text-center justify-center text-xl font-sans font-semibold'>OR</div>
                    <input type="text" placeholder="Search Job by Location" className="text-2xl h-12 border-2 rounded-lg border-gray-600 w-full" />
                </div>
                <div className="text-2xl bg-green-800 text-white border-2 flex text-center justify-center shadow-lg rounded-lg pt-10 w-64">Search Job</div>
            </div>
            <div className='text-xl font-medium font-serif ml-5'>Track Your Application here...</div>
            <img src={track} className='h-36 w-full ml-5 mr-5 rounded-lg border-2 border-black'></img>
            <div className='m-5'>
                <div className="text-xl font-semibold">Showing Job based on filter</div>
                <div className='flex flex-row overflow-auto gap-3'>
                <FilterAltIcon/>
                {
                    jobfilter.map((item,key)=>{
                        return( <div className='border-2 rounded-2xl border-black w-48 text-center justify-center'>{item}<ArrowDropDownIcon/></div>)
                    })
                }
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    {Job.map((item, key) => {
                        return (
                            <div className='shadow-lg rounded p-4'>
                                <div className="flex flex-row"><BusinessIcon /><p>{item.company}</p></div>
                                <div className="flex flex-row"><HomeIcon /><p>{item.worktype}</p></div>
                                <div className="flex flex-row"><PaymentsIcon /><p>{item.salary}</p></div>
                                <div className='text-l font-medium'>{item.role}</div>
                                <div className="flex flex-row gap-4">
                                    <div className="text-white rounded-lg bg-green-600 w-28 text-center justify-center p-1">{item.jobtype}</div>
                                    <div className="text-white rounded-lg bg-green-600 w-28 text-center justify-center p-1">{item.test}</div>
                                </div>
                                <div className="text-white mt-2 rounded-lg bg-green-600 w-32 text-center justify-center">{item.need}</div>
                            </div>
                        )
                    })}

                </div>
            </div>

            {/* Foooter */}
            <div className="w-full bg-blue-400">
            <FooterVersion2/>
                
            </div>

        </>
    )
}

export default Applyjob