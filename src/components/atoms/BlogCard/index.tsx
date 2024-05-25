import React from "react";
import asset from "@/assets/avatar.jpg";
import Image from "next/image";

const BlogCard = () => {
   return <div className="p-2 rounded-lg bg-gray-100 w-[45%]">
    <Image 
        src={asset}
        alt="asset"
    />
    <div className="mt-2">
        <h2 className="text-lg font-semibold">React Query</h2>
        <p className="text-sm text-gray-500">Foundations and setup of react query in next app</p>
    </div>
   </div>;
};

export default BlogCard;
