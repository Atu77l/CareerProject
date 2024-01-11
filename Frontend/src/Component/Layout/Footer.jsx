import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <div className='w-full'>
        <div className="bg-blue-500">
          <div className='text-center pt-10 '>
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className='ml-3' />
            <InstagramIcon sx={{ color: "white" }} className='ml-3' />
          </div>
          <div className="text-center text-white pt-2">Copyright © 2022 Fast Careers - All Rights Reserved.</div>
        </div>
      </div>
    </>
  )
}

export default Footer