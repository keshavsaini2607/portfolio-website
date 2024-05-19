"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormFields } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toast } from "@/components/ui/toast";
import { ToastProvider } from "@radix-ui/react-toast";

const contactSchema = z.object({
   name: z.string().nonempty({ message: "Please tell your name" }),
   email: z.string().email({ message: "Please enter an valid email address" }),
   phone: z
      .string()
      .max(10, { message: "Please enter a valid 10 digit mobile number" })
      .nonempty({ message: "Please enter your phone number" })
      .refine((value) => /^\d{10}$/.test(value) || value.length < 10, {
         message: "Please enter a valid 10-digit mobile number",
         path: ["phone"],
      }),
   message: z
      .string()
      .nonempty({ message: "Let me know your reason to contact" }),
});

const ContactSection = () => {
   const { toast } = useToast();
   const [loading, setLoading] = useState(false);
   const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
         name: "",
         email: "",
         phone: "",
         message: "",
      },
   });

   async function handleSubmit(data: ContactFormFields) {
      setLoading(true);

      const json = JSON.stringify({
         ...data,
         access_key: "f59d6c3e-bc79-4797-abac-c00148e5cada",
      });

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: json,
         });
         const result = await response.json();
         if (result.success) {
            console.log(result);
            form.reset();
            toast({
               title: "I have received your message",
               description: "Thank you for contacting me",
            });
         } else {
            throw new Error(result.error || "Failed to send message");
         }
      } catch (error) {
         console.error("Submission error:", error);
         toast({
            title: "Error",
            description:
               "There was an issue sending your message. Please attempt to send it again after some time.",
         });
      } finally {
         setLoading(false);
      }
   }

   return (
      <div className="p-6">
         <h1 className="text-5xl font-semibold">Contact</h1>
         <div className="p-12">
            <p className="text-2xl">
               I am always open to discussing new projects
            </p>
            <p className="text-2xl font-semibold">and startup/contract ideas</p>
            <div className="w-[80%] mt-6">
               <FormProvider {...form}>
                  <form
                     onSubmit={form.handleSubmit((data) => handleSubmit(data))}
                     className="flex flex-col gap-4"
                  >
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                           return (
                              <FormItem>
                                 <FormLabel>Name</FormLabel>
                                 <FormControl>
                                    <Input placeholder="Name" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           );
                        }}
                     />
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                           return (
                              <FormItem>
                                 <FormLabel>Email</FormLabel>
                                 <FormControl>
                                    <Input
                                       type="email"
                                       placeholder="Email"
                                       {...field}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           );
                        }}
                     />
                     <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => {
                           return (
                              <FormItem>
                                 <FormLabel>Phone</FormLabel>
                                 <FormControl>
                                    <Input placeholder="Phone" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           );
                        }}
                     />
                     <FormField
                        control={form.control}
                        name="message"
                        render={({ field, fieldState }) => (
                           <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                 <Input
                                    type="text"
                                    placeholder="Message"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage>
                                 {fieldState.error?.message}
                              </FormMessage>
                           </FormItem>
                        )}
                     />
                     <Button
                        type="submit"
                        className="w-full mt-8"
                        disabled={loading}
                     >
                        {loading ? "Submitting..." : "Submit"}
                     </Button>
                  </form>
               </FormProvider>
            </div>
         </div>
         <ToastProvider>
            <Toast />
         </ToastProvider>
      </div>
   );
};

export default ContactSection;
