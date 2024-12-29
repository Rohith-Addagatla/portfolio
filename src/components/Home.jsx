import React from "react";
import profileImage from "../assets/portfolio/HeroImage.png";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black mt-24 md:mt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        {/* Left Section */}
        <div className="flex flex-col justify-center h-full w-full md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have 2+ years of experience building and designing software.
            Currently, I love to work on backend applications using
            technologies like Java, Spring Boot, Microservices, and React.
          </p>

          {/* Resume Button */}
          <div className="flex items-center mt-4">
            <a
              href="/assets/resume.pdf"  // Link to the PDF in the public folder
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white flex items-center w-32 px-6 py-3 rounded-md 
              bg-gradient-to-r from-green-500 to-teal-500 cursor-pointer"
            >
              <i className="fa fa-download mr-2 text-lg"></i>
              Resume
            </a>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="flex justify-center items-center mt-8 md:mt-0 md:ml-4 md:w-1/3">
          <img
            src={profileImage}
            alt="my profile"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover border-4 border-cyan-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;






