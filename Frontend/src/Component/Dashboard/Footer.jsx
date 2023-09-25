import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import logo from './../../assests/logo.png'
import { Link } from 'react-router-dom';

const Footer
 = () => {
  return (
    <>
     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,0L30,37.3C60,75,120,149,180,202.7C240,256,300,288,360,293.3C420,299,480,277,540,229.3C600,181,660,107,720,96C780,85,840,139,900,149.3C960,160,1020,128,1080,106.7C1140,85,1200,75,1260,90.7C1320,107,1380,149,1410,170.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
      <div className="grid grid-cols-6 pl-5 pb-5 mt-5 max-md:grid-cols-1 border-t-2 border-white">
        {/* 1st Box  */}

        {/* 2nd Box */}
        <div className="flex flex-col col-span-3 mr-24 ml-16 max-md:col-span-1 max-md:m-0">
          <p className="mt-10">Akvayu is incorported in August,2023.This company provide service to startup company.</p>
          <div className="flex flex-row">
            <div style={{ borderRadius: "50%", backgroundColor: "white", padding: "5px", margin: "10px" }}><FacebookIcon /></div>
            <Link to=''><div style={{ borderRadius: "50%", backgroundColor: "white", padding: "5px", margin: "10px" }}><TwitterIcon /></div></Link>
            <Link to=''><div style={{ borderRadius: "50%", backgroundColor: "white", padding: "5px", margin: "10px" }}><LinkedInIcon /></div></Link>
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
          <img src={logo} alt="logo" className="h-12 w-36 mt-5" />
          <div className="mt-4">Akvayu</div>
          <div className="mt-3">Noida One</div>
          <div className="mt-3">Sector 62,Noida Uttar Pradesh</div>
        </div>
      </div>
      <div>
        <hr className='bg-white h-1 ml-10 mr-10'></hr>
        <div className="text-center mt-5 pb-5 text-l" style={{ color: "#6d6f90" }}>2022-2023 Copyright © All rights reserved || For Contact <span className="italic text-blue-600">codeway.skill@gmail.com</span> </div>
      </div>
     
    </>
  )
}

export default Footer
