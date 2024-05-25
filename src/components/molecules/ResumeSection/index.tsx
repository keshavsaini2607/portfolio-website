import { knowledges, mySkills } from "@/lib/constant";
import React from "react";

const ResumeSection = () => {
   return (
      <div className="p-6">
         <div className="flex items-center gap-2">
            <h1 className="text-5xl font-semibold">Resume</h1>
            <div className="w-[40%] h-[5px] bg-blue-300"></div>
         </div>
         <div className="w-full flex gap-5 mt-6 items-start">
            <div className="w-[50%] flex flex-col gap-4">
               <h2 className="text-xl font-semibold mb-1">Education</h2>
               <div className="flex flex-col text-sm p-4 gap-2 rounded-lg bg-pink-50">
                  <span className="text-sm text-gray-600">2017-2018</span>
                  <span className="font-semibold">
                     Happy Public School (CBSE Affiliated)
                  </span>
                  <span className="text-sm text-gray-600">
                     High School (12th)
                  </span>
               </div>
               <div className="flex flex-col text-sm p-4 gap-2 rounded-lg bg-blue-50">
                  <span className="text-sm text-gray-600">2017-2018</span>
                  <span className="font-semibold">
                     Happy Public School (CBSE Affiliated)
                  </span>
                  <span className="text-sm text-gray-600">
                     High School (12th)
                  </span>
               </div>
            </div>
            <div className="w-[50%] flex flex-col gap-4">
               <h2 className="text-xl font-semibold mb-1">Experience</h2>
               <div className="flex flex-col text-sm p-4 gap-2 rounded-lg bg-blue-50">
                  <span className="text-sm text-gray-600">
                     Feb 2024 - Present
                  </span>
                  <span className="font-semibold">Wedigit.tech</span>
                  <span className="text-sm text-gray-600">
                     Senior Full Stack Developer
                  </span>
               </div>
               <div className="flex flex-col text-sm p-4 gap-2 rounded-lg bg-pink-50">
                  <span className="text-sm text-gray-600">
                     Nov 2022 - Feb 2024
                  </span>
                  <span className="font-semibold">InfoObjects Inc</span>
                  <span className="text-sm text-gray-600">
                     Software Developer
                  </span>
               </div>
               <div className="flex flex-col text-sm p-4 gap-2 rounded-lg bg-blue-50">
                  <span className="text-sm text-gray-600">
                     Sep 2021 - Oct 2022
                  </span>
                  <span className="font-semibold">Clocr INC</span>
                  <span className="text-sm text-gray-600">
                     Software Developer (Frontend)
                  </span>
               </div>
               <div className="flex flex-col text-sm p-4 gap-2 rounded-lg bg-blue-50">
                  <span className="text-sm text-gray-600">
                     Sep 2020 - Aug 2021
                  </span>
                  <span className="font-semibold">QuantaVid LLC</span>
                  <span className="text-sm text-gray-600">
                     Frontend Developer
                  </span>
               </div>
            </div>
         </div>
         <div className="w-full flex gap-6">
            <div className="w-[50%] flex flex-col gap-5 mt-10">
               <span className="text-xl font-semibold">Working Skills</span>
               {mySkills.map((skill) => (
                  <div key={skill.title} className="flex flex-col gap-2 w-full">
                     <div className="flex justify-between">
                        <span>{skill.title}</span>
                        <span>{skill.percentage}%</span>
                     </div>
                     <span className="w-full h-[10px] bg-gray-200 rounded-lg">
                        <div
                           className={`w-[${skill.percentage}%] h-[10px] ${skill.color} rounded-lg`}
                        ></div>
                     </span>
                  </div>
               ))}
            </div>
            <div className="w-[50%] flex flex-col gap-5 mt-10">
               <span className="text-xl font-semibold mb-4">Knowledges</span>
               <div className="flex flex-row flex-wrap gap-5">
                  {knowledges.map((knowledge) => (
                     <span
                        key={knowledge}
                        className="bg-blue-500 bg-opacity-[50%] text-white p-2 rounded-lg"
                     >
                        <span>{knowledge}</span>
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ResumeSection;
