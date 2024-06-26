"use client";
import React, { useState } from "react";
import avatar from "@/assets/avatar.jpg";
import Image from "next/image";
import "./globals.css";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/molecules/AboutSection";
import ResumeSection from "@/components/molecules/ResumeSection";
import ContactSection from "@/components/molecules/ContactSection";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { GrContact, GrDocument } from "react-icons/gr";
import { BsBag } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import WorkSection from "@/components/molecules/WorkSection";
import BlogSection from "@/components/molecules/BlogSection";

const App = () => {
   const [tab, setTab] = useState("About");

   const renderTabContent = () => {
      switch (tab) {
         case "About":
            return <AboutSection />;
         case "Resume":
            return <ResumeSection />;
         case "Contact":
            return <ContactSection />;
         case "Blog":
            return <BlogSection />;
         case "Work":
            return <WorkSection />;

         default:
            return <h1>Invalid Option</h1>;
      }
   };
   return (
      <div className="h-[100vh] w-full relative gradient_background overflow-hidden">
         <div
            id="sidebar"
            className="w-[25vw] h-[78vh] absolute top-36 left-[5%] rounded-lg shadow-md bg-white"
         >
            <div className="relative w-full h-full">
               <Image
                  src={avatar}
                  alt="avatar"
                  className="w-[55%] h-[35%] absolute -top-28 left-[23%] rounded-lg"
               />
               <div className="absolute top-[18%] w-full flex flex-col gap-2 items-center justify-center">
                  <h1 className="text-2xl font-bold">Keshav Saini</h1>
                  <p className="bg-gray-100 p-2 w-[60%] flex items-center justify-center font-semibold rounded-lg">
                     Full Stack Developer
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                     <div className="social_icon">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           x="0px"
                           y="0px"
                           width="30"
                           height="30"
                           viewBox="0 0 50 50"
                        >
                           <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                     </div>
                     <div className="social_icon">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           x="0px"
                           y="0px"
                           width="30"
                           height="30"
                           viewBox="0 0 48 48"
                        >
                           <path
                              fill="#03A9F4"
                              d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                           ></path>
                        </svg>
                     </div>
                     <div className="social_icon">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           x="0px"
                           y="0px"
                           width="30"
                           height="30"
                           viewBox="0 0 48 48"
                        >
                           <path
                              fill="#0078d4"
                              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                           ></path>
                           <path
                              d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                              opacity=".05"
                           ></path>
                           <path
                              d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                              opacity=".07"
                           ></path>
                           <path
                              fill="#fff"
                              d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                           ></path>
                        </svg>
                     </div>
                  </div>

                  {/* about section */}
                  <div className="w-[80%] flex flex-col gap-3 mt-4">
                     <div className="p-2 bg-gray-100 rounded-lg">
                        <div className="flex items-center gap-4 cursor-pointer">
                           <BiPhone size={25} />
                           <div className="flex flex-col text-sm">
                              <span>Phone</span>
                              <span>+917014015981</span>
                           </div>
                        </div>
                     </div>
                     <div className="p-2 bg-gray-100 rounded-lg">
                        <div className="flex items-center gap-4 cursor-pointer">
                           <TfiEmail size={25} />
                           <div className="flex flex-col text-sm">
                              <span>Email</span>
                              <span>skeshav162@gmail.com</span>
                           </div>
                        </div>
                     </div>
                     <div className="p-2 bg-gray-100 rounded-lg">
                        <div className="flex items-center gap-4 cursor-pointer">
                           <BiLocationPlus size={25} />
                           <div className="flex flex-col text-sm">
                              <span>Location</span>
                              <span>Alwar Rajasthan India</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <Button style={{ width: "80%", marginTop: "2rem" }}>
                     Download CV
                  </Button>
               </div>
            </div>
         </div>
         <div
            id="rightContent"
            className="absolute top-0 right-10 p-4 bottom-0 left-[33%] overflow-scroll rounded-lg"
         >
            <div className="p-4">
               <div className="w-full flex justify-end">
                  <div className="flex gap-5 w-max bg-white p-4 rounded-lg">
                     <div
                        className={`router_link ${
                           tab === "About" ? "active_router" : ""
                        }`}
                        onClick={() => setTab("About")}
                     >
                        <IoPersonCircleOutline size={25} />
                        <span>About</span>
                     </div>
                     <div
                        className={`router_link ${
                           tab === "Resume" ? "active_router" : ""
                        }`}
                        onClick={() => setTab("Resume")}
                     >
                        <GrDocument size={20} />
                        <span>Resume</span>
                     </div>
                     <div
                        className={`router_link ${
                           tab === "Blog" ? "active_router" : ""
                        }`}
                        onClick={() => setTab("Blog")}
                     >
                        <BsBag size={20} />
                        <span>Blogs</span>
                     </div>
                     <div
                        className={`router_link ${
                           tab === "Work" ? "active_router" : ""
                        }`}
                        onClick={() => setTab("Work")}
                     >
                        <BsBag size={20} />
                        <span>Works</span>
                     </div>
                     <div
                        className={`router_link ${
                           tab === "Contact" ? "active_router" : ""
                        }`}
                        onClick={() => setTab("Contact")}
                     >
                        <GrContact size={20} />
                        <span>Contact</span>
                     </div>
                  </div>
               </div>
               {/* content page */}
            </div>
            <div className="p-4 bg-white rounded-lg">{renderTabContent()}</div>
         </div>
      </div>
   );
};

export default App;
