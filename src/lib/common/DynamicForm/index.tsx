import { Button } from "@/components/ui/button";
import {
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

export interface FormItemInterface {
   name: string;
   placeholder: string;
   label: string;
   type?: string;
}

interface DynamicFormProps {
   formSchema: any;
   defaultValues: any;
   formItems: FormItemInterface[];
   handleSubmit: (data: any) => void;
   loading: boolean;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
   formSchema,
   defaultValues,
   formItems,
   handleSubmit,
   loading,
}) => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: { ...defaultValues },
   });
   return (
      <div>
         <FormProvider {...form}>
            <form onSubmit={form.handleSubmit((data) => handleSubmit(data))}>
               {formItems.map((item, idx) => (
                  <FormField
                     control={form.control}
                     key={idx}
                     name={item.name}
                     render={({ field, fieldState }) => {
                        return (
                           <FormItem>
                              <FormLabel>{item.label}</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder={item.placeholder}
                                    {...field}
                                 />
                              </FormControl>
                              {fieldState.error && (
                                 <FormMessage>
                                    {fieldState.error.message}
                                 </FormMessage>
                              )}
                           </FormItem>
                        );
                     }}
                  />
               ))}
               <Button type="submit" className="w-full mt-8" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Blog"}
               </Button>
            </form>
         </FormProvider>
      </div>
   );
};

export default DynamicForm;
