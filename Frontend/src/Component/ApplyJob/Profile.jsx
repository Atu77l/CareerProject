import React from 'react'
import Navbar from './Navbar'
import FooterVersion2 from './Footer'

const Profile = () => {
  return (
    <div>
      <Navbar/>
      <div className='border-2 shadow-lg rounded-lg m-10 p-4 grid grid-cols-2'>
      <div className='text-l font-semibold font-serif'>Name</div>
      <div className="text-l font-semibold font-serif text-blue-600">Atul Kesharwani</div>
      <div className='text-l font-semibold font-serif'>Company</div>
      <div className='text-l font-semibold font-serif  text-blue-600'>Damyant Fintech Private Limited,Noida</div>
      <div className="text-l font-semibold font-serif">Role</div>
      <div className='text-l font-semibold font-serif  text-blue-600'>Software Developer</div>
      <div className='text-l font-semibold font-serif'>Gender</div>
      <div className='text-l font-semibold font-serif  text-blue-600'>Male</div>
      <div className='text-l font-semibold font-serif'>Education</div>
      <div className='text-l font-semibold font-serif  text-blue-600'>Graduation</div>
      <div className="text-l font-semibold font-serif">Home Address</div>
      <div className='text-l font-semibold font-serif  text-blue-600'>Ward No.11 Neta Nagar,G.T. Road</div>
      <div className='text-l font-semibold font-serif '>Email Address</div>
      <div className='text-l font-semibold font-serif text-blue-600'>kesharwaniatul9935@gmail.com</div>
      <div className='text-l font-semibold font-serif'>Mobile Number</div>
      <div className="text-l font-semibold font-serif  text-blue-600">9636605371</div>
      <div className='text-l font-semibold font-serif'>Total Experience</div>
      <div className='text-l font-semibold font-serif  text-blue-600'>2 Years</div>
      <div className="text-l font-semibold font-serif">Notice Period</div>
      <div className='text-l font-semibold font-serif  text-blue-600'>30 Days</div>
      <div className='text-l font-semibold font-serif'>Salary Range</div>
      <div className='text-l font-semibold font-serif  text-blue-600'>25000-30000</div>
      </div>
      <FooterVersion2/>
    </div>
  )
}

export default Profile