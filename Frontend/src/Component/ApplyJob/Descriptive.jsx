import React from 'react'
import FooterVersion2 from './Footer'
import logo from './../../assests/FirstStephub.png'
import track from './../../assests/13.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Descriptive = () => {
    const questionList=[
        {"question":"What is the range of salary","answer":"Salary range is from 10000-12000"},
        {"question":"What is the range of salary","answer":"Salary range is from 10000-12000"},
        {"question":"What is the range of salary","answer":"Salary range is from 10000-12000"},
        {"question":"What is the range of salary","answer":"Salary range is from 10000-12000"},
    ]
    const description="We are developing 2 apps for our business.Logistics App like Porter for commercial goods transportation.Brokerage app for our business like Dhan, Zerodha (Although no financial transactions are involved in this case.)"
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
            <div className="flex flex-col mt-32 m-10 border-2 border-gray-200 p-4 rounded-lg">
                <div className='flex flex-col font-semibold'>Description About Job</div>
                <p>{description}</p>
            </div>
            <div className='flex flex-col m-10 p-4 shadow-lg border-2 border-black rounded-lg'>
                {
                    questionList.map((item,key)=>{
                        return(<div className='flex flex-col'>
                             <div className='font-medium'>{key}.{item.question}</div>
                             <div className=''>Answer:{item.answer}</div>
                            </div>
                        )
                    })
                }
            </div>
    <FooterVersion2/>
    </>
  )
}

export default Descriptive