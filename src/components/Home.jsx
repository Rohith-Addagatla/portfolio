import React from "react";
import profileImage from "../assets/portfolio/HeroImage.png";

const Home = () => {
  return (
    <div
      id="home" // Add the id here to allow for smooth navigation
      className="h-screen w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        {/* Left Section */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have 2+ years of experience building and designing software.
            Currently, I love to work on backend applications using
            technologies like Java, Spring Boot, Microservices, and React.
          </p>

          {/* Resume Button */}
          <div className="flex items-center mt-4">
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white flex items-center w-40 px-6 py-3 rounded-md 
              bg-gradient-to-r from-green-500 to-teal-500 cursor-pointer text-lg"
            >
              <i className="fa fa-download mr-2 text-lg"></i>
              Resume
            </a>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="flex justify-center items-center md:justify-center md:w-1/2 -mt-4 md:mt-0">
          <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-80 border-4 border-cyan-500 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="my profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
