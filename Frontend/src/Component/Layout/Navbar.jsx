import React from 'react'
import image5 from "../../assests/FirstStephub.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className="  fixed top-0 right-0 left-0 bg-blue-400 h-16  flex flex-row text-white font-serif ">
            <img src={image5} alt="" className="rounded-full mt-2 lg:ml-28 sm:ml-5 mb-2 " />
            <Link to='/list'><div className="mt-3 lg:ml-20 sm:ml-2 text-2xl  font-medium">Home</div></Link>
            <Link to='/about'> <div className="mt-3 text-2xl pl-10 font-medium "> About </div></Link>
            <Link to='/contact'><div className="mt-3 text-2xl pl-10 font-medium "> Contact </div></Link>
            <Link to='/resume'><div className="mt-3 text-2xl pl-10 font-medium "> Resume </div></Link>
            <Link to='/admin/data'><div className="mt-3 text-2xl pl-10 font-medium "> Admin </div></Link>
        </div>

    )
}

export default Navbar