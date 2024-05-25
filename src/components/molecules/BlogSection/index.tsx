import BlogCard from "@/components/atoms/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
   return (
      <div className="p-6 relative">
         <div className="flex items-center gap-2">
            <h1 className="text-5xl font-semibold">Blogs</h1>
            <div className="w-[40%] h-[5px] bg-blue-300"></div>
         </div>
         <Link href={"/createblog"} className="absolute right-10 top-8">
            <Button>Add New Blog</Button>
         </Link>
         <div className="mt-10">
            <BlogCard />
         </div>
      </div>
   );
};

export default BlogSection;
