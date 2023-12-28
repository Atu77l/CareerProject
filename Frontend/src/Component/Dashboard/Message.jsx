import React from "react";
import image5 from "../../assests/FirstStephub.png";
const Message = () => {
  return (
    <>
    
        <div className="lg:h-96 sm:20 lg:w-80 sm:20 shadow-lg bg-slate-300 rounded-lg m-10 ">
          <div className="p-3 bg-blue-500 rounded-t-lg  mb-3">
            <img src={image5} alt="" className="h-14 rounded-lg " />
          </div>

          <div className="flex flex-col ml-10 mr-10  ">
            <input
              type="text"
              placeholder="Name"
              className=" outline-white  outline-0 pl-3 rounded-lg h-8"
            />
            <input
              type="ttext"
              placeholder="Email"
              className="mt-3   outline-white  outline-0  pl-3 rounded-lg h-8"
            />
            <input
              type="text"
              placeholder="Message"
              className="mt-3  outline-white  outline-0   pl-3 rounded-lg h-8"
            />
          </div>

          <p className="text-sm ml-10 mt-3 mb-2">
            {" "}
            <input type="checkbox" name="" id="" />
            Sign up to receive email updates, announcements, and more.
          </p>
          <button
            className="h-10 w-40 bg-blue-400 rounded-lg ml-20 font-medium text-white"
            
          >
            Send
          </button>
          <div className="text-xs mt-1 ml-4">
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="text-[green]">Privacy Policy</span> and{" "}
            <span className="text-[green]">Terms of Service</span> apply.
          </div>
        </div>
      
    </>
  );
};

export default Message;
