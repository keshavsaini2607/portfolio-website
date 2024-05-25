import Image from "next/image";
import React from "react";
import avatar from "@/assets/avatar.jpg";

const WorkSection = () => {
   return (
      <div className="p-6">
         <div className="flex items-center gap-2">
            <h1 className="text-5xl font-semibold">Portfolio</h1>
            <div className="w-[40%] h-[5px] bg-blue-300"></div>
         </div>
         <div className="w-full flex justify-end">
            <div className="w-max flex items-center gap-5">
               <p className="cursor-pointer text-[#D93C62] font-semibold">All</p>
               <p className="cursor-pointer">E-Commerce</p>
               <p className="cursor-pointer">Web3</p>
               <p className="cursor-pointer">Mobile</p>
            </div>
         </div>
         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <div className="p-2 bg-gray-100  gap-2 flex flex-col rounded-lg">
                <div>
                    <Image src={avatar} alt="avatar" className=" object-fill" />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Web3 forms implementation</p>
                    <p className="font-semibold">Web3 Forms</p>
                </div>
            </div>
            <div className="p-2 bg-gray-100  gap-2 flex flex-col rounded-lg">
                <div>
                    <Image src={avatar} alt="avatar" className=" object-fill" />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Web3 forms implementation</p>
                    <p className="font-semibold">Web3 Forms</p>
                </div>
            </div>
            <div className="p-2 bg-gray-100  gap-2 flex flex-col rounded-lg">
                <div>
                    <Image src={avatar} alt="avatar" className=" object-fill" />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Web3 forms implementation</p>
                    <p className="font-semibold">Web3 Forms</p>
                </div>
            </div>
            <div className="p-2 bg-gray-100  gap-2 flex flex-col rounded-lg">
                <div>
                    <Image src={avatar} alt="avatar" className=" object-fill" />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Web3 forms implementation</p>
                    <p className="font-semibold">Web3 Forms</p>
                </div>
            </div>
         </div>
      </div>
   );
};

export default WorkSection;
