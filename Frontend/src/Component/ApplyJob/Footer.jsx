import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import logo from './../../assests/FirstStephub.png'

const FooterVersion2 = () => {
  return (
    <>
      <div className="grid grid-cols-6 pt-5 pl-5 pb-5 max-md:grid-cols-1  border-t-8 border-white" style={{ backgroundColor: "#DAECF2", color: "#6d6f90" }}>
        {/* 1st Box  */}

        {/* 2nd Box */}
        <div className="flex flex-col col-span-3 mr-24 ml-16 max-md:col-span-1 max-md:m-0">
          <p className="mt-10">FirstStepHub was incorporated in January,2024. The company is headquartered in Noida,UttarPradesh India</p>
          <div className="flex flex-row">
            <div style={{ borderRadius: "50%", backgroundColor: "white", padding: "5px", margin: "10px" }}><FacebookIcon /></div>
            <div style={{ borderRadius: "50%", backgroundColor: "white", padding: "5px", margin: "10px" }}><TwitterIcon /></div>
            <div style={{ borderRadius: "50%", backgroundColor: "white", padding: "5px", margin: "10px" }}><LinkedInIcon /></div>
            <div style={{ borderRadius: "50%", backgroundColor: "white", padding: "5px", margin: "10px" }}><GoogleIcon /></div>
          </div>
        </div>

        {/* ###### 3rd Box ##### */}
        <div className="flex flex-col">
          <div className="font-bold text-xl" style={{ color: "#000958" }}>Useful links</div>
          <p className="mt-3">FAQs</p>
          <div className="mt-3">Industries</div>
          <div className="mt-3">Privacy Policy</div>
          <div className="mt-3">Terms of Use</div>
          <div className="mt-3">Site Map</div>
        </div>

        {/* 4th Box */}
        <div className="flex flex-col">
          <div className="font-bold text-xl" style={{ color: "#000958" }}>Explore</div>
          <div className="mt-3">Home</div>
          <div className="mt-3">About Us</div>
          <div className="mt-3">Solution</div>
          <div className="mt-3">Services</div>
          <div className="mt-3">Products</div>
        </div>
        {/* 5th box */}
        <div className="flex flex-col">
          <div className="font-bold text-xl" style={{ color: "#000958" }}>About Us</div>
          <img src={logo} alt="logo" className="h-12 w-12 mt-5" />
          <div className="mt-4">FirstStepHub</div>
          <div className="mt-3">Noida One</div>
          <div className="mt-3">Sector 62,Noida Uttar Pradesh</div>
        </div>
      </div>
      <div className='bg-[#E5F4FF]' style={{ backgroundColor: "#DAECF2", color: "#6d6f90" }}>
        <hr className='bg-white h-1 ml-10 mr-10'></hr>
        <div className="text-center mt-5 pb-5 text-l bg-[#E5F4FF]" style={{ backgroundColor: "#DAECF2", color: "#6d6f90" }}>2022-2023 Copyright © All rights reserved || For Contact <span className="italic text-blue-600">support.dftl@damyant.com</span> </div>
      </div>
    </>
  )
}

export default FooterVersion2