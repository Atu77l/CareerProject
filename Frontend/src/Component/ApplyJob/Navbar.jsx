import React from 'react'
import logo from './../../assests/FirstStephub.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
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
</div>  )
}

export default Navbar