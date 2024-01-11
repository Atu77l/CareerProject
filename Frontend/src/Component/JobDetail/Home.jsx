import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-gray-300 w-screen h-screen'>
            <div className='flex text-center justify-center pt-16'>
                <div className='flex flex-col text-center  justify-center h-48 w-[420px] rounded-lg shadow-lg border-2 border-b-4 border-t-4 border-blue-600 border-b-600'>
                    <div className='text-6xl font-bold'><WorkIcon sx={{ fontSize: "60px" }} /> Job</div>
                    <div className='border-b-2 text-blue-500 text-center justify-center text-xl font-medium'>Welcome</div>
                    <div className='flex flex-row text-center justify-center mt-5'>
                        <Link to='/login'><div className='flex text-center justify-center border-2 bg-blue-500 text-white text-xl rounded-md w-36 cursor-pointer'>Login</div></Link>
                        <Link to='/signup'><div className='flex text-center justify-center border-2 bg-blue-500 text-white text-xl rounded-md w-36 cursor-pointer'>Register</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home