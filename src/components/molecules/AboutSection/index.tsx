import React from "react";
import { FaGlobe, FaMobileAlt } from "react-icons/fa";

const AboutSection = () => {
   return (
      <div className="p-6">
         <h1 className="text-5xl font-semibold">About</h1>
         <p className="mt-2 text-sm text-gray-500 text-justify">
            Dynamic and results-driven Full Stack Developer with over 3 years of
            hands-on experience in building robust web applications using the
            MERN (MongoDB, Express.js, React.js, Node.js) stack.
            <br />
            Proficient in both front-end and back-end development, with a keen
            eye for detail and a passion for creating seamless user experiences.
            <br />
            <br />
            Demonstrated expertise in agile methodologies, collaborative
            problem-solving, and delivering high-quality code within project
            deadlines.
            <br />
            <br /> Proven track record of leveraging cutting-edge technologies
            to drive innovation and exceed client expectations. Seeking to
            contribute my technical skills and strategic insights to a
            forward-thinking organization poised for growth and excellence in
            the digital landscape.
         </p>
         <h1 className="text-2xl font-semibold mt-5 mb-4">What i do</h1>
         <div className="flex justify-between gap-5">
            <div className="w-[30vw] h-[20vw] bg-red-100 flex gap-5 p-5 rounded-lg bg-opacity-[50%] bg-gradient-to-r from-red-100 via-red-200 to-red-100">
               <div className="w-[10%]">
                  <FaGlobe color="#5927AA" size={40} />
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold">Web Development</span>
                  <span>
                     I am a full stack web developer with comprehensive
                     expertise in both front-end and back-end development. I
                     specialize in crafting responsive, user-friendly web
                     applications utilizing cutting-edge web technologies.
                  </span>
               </div>
            </div>

            <div className="w-[30vw] h-[20vw] bg-blue-100 flex gap-5 p-5 rounded-lg bg-opacity-[30%] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100">
               <div>
                  <FaMobileAlt color="#5927AA" size={40} />
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold">
                     Mobile App Development
                  </span>
                  <span>
                     I specialize in creating hybrid mobile applications that
                     are compatible with both iOS and Android platforms. My
                     approach integrates responsive design techniques with the
                     latest cross-platform frameworks to ensure seamless
                     functionality and optimal user experience across all
                     devices.
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutSection;
