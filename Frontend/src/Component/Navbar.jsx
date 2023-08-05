import React from 'react'
import image5 from "../Image/Teal Modern Company Logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="bg-[#7eaad5] h-24  flex flex-row text-white">
                <img src={image5} alt="" className="rounded-3xl mt-2 ml-20 mb-2" />
                <Link to='/'>
                    <div
                        className="mt-9 ml-20 text-2xl  font-medium hover:underline"        >
                        Home
                    </div></Link>

                <Link to='/about'> <div className="mt-9 text-2xl pl-10 font-medium hover:underline">
                    About
                </div></Link>
                <Link to='/contact'><div className="mt-9 text-2xl pl-10 font-medium ">
                    Contact
                </div></Link>
                <Link to='/design'>
                <div className="mt-9 text-2xl pl-10 font-medium ">
                    Design
                </div>
                </Link>
                <Link to='/resume'>
                <div className="mt-9 text-2xl pl-10 font-medium ">
                    Resume
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar