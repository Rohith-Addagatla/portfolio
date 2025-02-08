import React from "react";
// Import skill images from assets folder
import javaImage from "../assets/portfolio/java.png";
import jsImage from "../assets/portfolio/javascript.png";
import springBootImage from "../assets/portfolio/springboot.png";
import reactImage from "../assets/portfolio/react.png";
import mysqlImage from "../assets/portfolio/mysql.png";
import kafkaImage from "../assets/portfolio/kafka.png";
import redisImage from "../assets/portfolio/redis.png";
import aws from "../assets/portfolio/aws.png";

// Import LeetCode and GeeksforGeeks logos
import leetcodeLogo from "../assets/portfolio/leetcode.png"; // Add the correct path
import gfgLogo from "../assets/portfolio/gfg.png"; // Add the correct path

const About = () => (
  <section
    id="about"
    className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white py-24"
  >
    <div className="max-w-screen-lg mx-auto px-4 pt-6">
      {/* About and Profiles Section in a Flex Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* About Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl font-bold">About</h2>
          <p className="text-gray-400 py-4 max-w-2xl mx-auto md:mx-0">
          Hi, I’m Rohith Addagatla, a passionate software developer with expertise in designing and developing scalable, high-performance applications. My passion for technology extends beyond work—I actively participate in coding challenges, having solved 300+ LeetCode problems and earned a 5-star badge in Java & Python on HackerRank. I continuously upskill, explore emerging technologies, and contribute to impactful projects. I believe in writing clean, efficient code and developing solutions that drive real-world innovation
          </p>
        </div>

        {/* Profiles Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Profiles</h3>
          <div className="flex justify-start gap-12">
            <a
              href="https://leetcode.com/u/rohith25/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={leetcodeLogo}
                alt="LeetCode"
                className="w-24 h-24 object-contain"
              />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/rohithstar6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={gfgLogo}
                alt="GeeksforGeeks"
                className="w-24 h-24 object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Primary Skills Section */}
      <div className="mt-12">
        <h4 className="text-2xl sm:text-3xl font-bold text-left text-white mb-8">
          Primary Skills
        </h4>

        {/* Skill Images Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-12 justify-items-center">
          {/* Skill 1 - Java */}
          <div className="flex justify-center items-center">
            <img
              src={javaImage}
              alt="Java"
              className="w-24 h-24 object-contain"
            />
          </div>
          {/* Skill 2 - JavaScript */}
          <div className="flex justify-center items-center">
            <img
              src={jsImage}
              alt="JavaScript"
              className="w-24 h-24 object-contain"
            />
          </div>
          {/* Skill 3 - Spring Boot */}
          <div className="flex justify-center items-center">
            <img
              src={springBootImage}
              alt="Spring Boot"
              className="w-24 h-24 object-contain"
            />
          </div>
          {/* Skill 4 - React */}
          <div className="flex justify-center items-center">
            <img
              src={reactImage}
              alt="React"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Skill 5 - MySQL */}
          <div className="flex justify-center items-center">
            <img
              src={mysqlImage}
              alt="MySQL"
              className="w-24 h-24 object-contain"
            />
          </div>
          {/* Skill 6 - Kafka */}
          <div className="flex justify-center items-center">
            <img
              src={kafkaImage}
              alt="Kafka"
              className="w-24 h-24 object-contain"
            />
          </div>
          {/* Skill 7 - Redis */}
          <div className="flex justify-center items-center">
            <img
              src={redisImage}
              alt="Redis"
              className="w-24 h-24 object-contain"
            />
          </div>
          {/* Skill 8 - AWS */}
          <div className="flex justify-center items-center">
            <img
              src={aws}
              alt="AWS"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-12">
        <h4 className="text-2xl sm:text-3xl font-bold text-left text-white mb-8">
          Experience
        </h4>

        {/* Experience Details */}
        <div className="space-y-4 text-left">
          {/* Experience 1 - National Payments Corporation of India */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
            <div className="flex flex-col w-full lg:w-1/3">
              <h5 className="text-xl font-semibold text-white">National Payments Corporation of India <span>(Hyderabad)</span></h5> 
              <p className="text-gray-400">Associate Software Developer</p>
              <p className="text-gray-400">Aug 08, 2022 - Present</p>
            </div>
            <div className="flex flex-col w-full lg:w-2/3">
              <p className="text-gray-400">
              As a Full Stack Developer at the National Payments Corporation of India, I contributed to high-performance product development and application portal creation. I developed scalable APIs, enhanced transaction search features, and resolved production issues to optimize the ONMAGS product, increasing its success rate significantly. Additionally, I played a critical role in creating onboarding portals, integrating thousands of merchants and banks, and improving application security. My efforts also included enhancing simulation environments for automated testing, supporting production systems, and configuring messaging queues to ensure consistency and operational reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
