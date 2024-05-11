import React from "react";

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
         <h1 className="text-2xl font-semibold mt-5">What i do</h1>
         <div className="flex justify-between gap-5">
            <div className="w-[30vw] h-[30vw] bg-red-100"></div>
            <div className="w-[30vw] h-[30vw] bg-blue-100"></div>
         </div>
      </div>
   );
};

export default AboutSection;
