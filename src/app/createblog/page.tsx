"use client";
import DynamicForm, { FormItemInterface } from "@/lib/common/DynamicForm";
import React, { useState } from "react";
import * as z from "zod";

const itemSchema = z.object({
   type: z.string().nonempty("Type is required"),
   text: z.string().nonempty("Text is required"),
});

const createBlogSchema = z.object({
   title: z.string().nonempty({ message: "Title is required" }),
   shortDescription: z
      .string()
      .nonempty({ message: "Please provide a short description of your blog" }),
   blogItems: z.array(itemSchema),
});

const formItems: FormItemInterface[] = [
   {
      name: "title",
      placeholder: "Title",
      label: "Title",
      type: "text",
   },
   {
      name: "shortDescription",
      placeholder: "Short Description",
      label: "Short Description",
      type: "text",
   },
];

const CreateBlog = () => {
   const [loading, setLoading] = useState(false);

   async function handleSubmit(data: any) {
      console.log({ data });
   }

   return (
      <div className="gradient_background w-screen h-screen p-16 flex items-center justify-center overflow-hidden">
         <div className="p-4 rounded-lg bg-white w-full h-full overflow-scroll">
            <h1 className="text-4xl font-semibold">Create Blog</h1>
            <DynamicForm
               formSchema={createBlogSchema}
               formItems={formItems}
               defaultValues={{
                  title: "",
                  blogItems: [{ type: "", text: "" }],
               }}
               handleSubmit={handleSubmit}
               loading={loading}
            />
         </div>
      </div>
   );
};

export default CreateBlog;
