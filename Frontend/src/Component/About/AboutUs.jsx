import React from "react";

import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "../Layout/Navbar";
const AboutUs = () => {
  return (
    <>
     <Navbar/>
      <div className="ml-10 mt-36 font-bold text-3xl font-sans">
        ABOUT US
      </div>
      <hr className="m-3" />
      <div className="">
        <p className="text-xl font-thin  pl-10 ">

        Assisting job seekers in discovering suitable opportunities to advance and develop their careers is a highly rewarding endeavor. As previously mentioned, it can be a challenging task to find a job that aligns with one's interests and skill set. However, a platform like Fast Career, which consolidates and presents all pertinent information in one place, can certainly simplify the process.
        <br/><br/>
In addition to providing information about job openings and company cultures, it is equally essential to offer resources and tools that can aid job seekers in improving their job search skills. Such tools could include resume builders, career assessments, interview tips, and advice on networking and personal branding. By providing these additional resources, Fast Career can empower job seekers to enhance their employability and stand out in a highly competitive job market.
<br/><br/>
Another potential advantage of the platform is its ability to assist organizations in reaching a broader pool of potential candidates who may not have otherwise known about their job openings. This could be especially valuable for smaller or lesser-known companies that may struggle to attract top talent. By facilitating connections between job seekers and employers, Fast Career has the potential to foster a more efficient and effective job market.
<br/>
Overall, Fast Career appears to have the potential to be a valuable resource for both job seekers and employers. By providing a comprehensive platform that offers information, resources, and connections, Fast Career can streamline the job search process and contribute to the growth and development of individuals and organizations alike.
          <br /><br/>
        </p>

        <div className="bg-blue-500  h-32  ">
          <div className="text-center pt-10">
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className="ml-3" />
            <InstagramIcon sx={{ color: "white" }} className="ml-3" />
          </div>
          <div className="text-center text-white pt-2 font-bold text-xl">
            Copyright © 2022 Fast Careers - All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;