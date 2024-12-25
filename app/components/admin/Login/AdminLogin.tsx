"use client";
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Home/Footer/Footer';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';



 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 


function AdminLogin() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password:""
        },
      })

      const router = useRouter();

      const {data:session, status} = useSession();
    
      if(status==="authenticated"){
        router.push("/dashboard");
      }

      async function onSubmit(values: z.infer<typeof formSchema>) {
     
        const {username, password} = values;
        const res =await signIn("credentials", {
            redirect:false,
            email:username,
            password
          });
        
      }

      const onNavigate =()=>{

      }

  return (
    <>
    
    <Header onNavigate={onNavigate} />

    <div className='mx-4 md:mx-16 lg:mx-[12rem] bg-[#1e1e1f] my-8 md:my-[4rem] rounded-md md:rounded-lg shadow-md shadow-gray-900 pb-12'>
    <div className='px-4 md:px-8 pt-8  text-[1.5rem] md:text-[2rem] font-semibold relative'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='space-y-0 m-0'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full bg-blue-600 hover:bg-blue-600 font-semibold '>Submit</Button>
      </form>
    </Form>
    </div>
  
    </div>


    <Footer />
    
    
    </>
  )
}

export default AdminLogin