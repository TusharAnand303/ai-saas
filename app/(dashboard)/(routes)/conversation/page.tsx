"use client"

import * as z from 'zod';
import Heading from '@/components/heading'
import React, { useState } from 'react'
import {MessageSquare} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { formSchema } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import  ChatCompletionRequestMessage  from 'openai';

interface ChatCompletionRequestMessages {
  role: string; // You might want to replace "string" with a more specific type if possible
  content: string; // You might want to replace "string" with a more specific type if possible
}

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      prompt:""
    }
  });
  const isLoading = form.formState.isSubmitting;
  // const onSubmit = async (values:z.infer<typeof formSchema>) =>{
  //   try {

  //     const userMessage: ChatCompletionRequestMessages = {
  //       role: "user",
  //       content: values.prompt,
  //   };
  //     const newMessages = [...messages, userMessage];

  //     const response = await axios.post("/api/conversation",{
  //       messages: newMessages,
  //     });
  //     setMessages((current)=>[...current, userMessage, response.data])

  //     form.reset();
      
  //   } catch (error: any) {
  //     //TODO OPEN PRO MODEL
  //     console.log(error)
  //   }finally{
  //     router.refresh();
  //   }
  // } 
  const onSubmit = () =>{
    alert('hello');
  }
  return (

    <div>
     <Heading
     title="Conversation"
     description="Our most advance conversation model"
     icon={MessageSquare}
     iconColor='text-violet-500'
     bgColor='bg-violet-500/10'
     />
     <div className='px-4 lg:px-8'>
      <Form {...form}>
        <form
        className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-xm grid grid-cols-12 gap-2'>
          <FormField name="Prompt" render={({ field })=>(
            <FormItem className='col-span-12 lg:col-span-10'>
              <FormControl className='m-0 p-0'>
                  <Input
                  className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2 text-gray-700'
                  disabled={isLoading}
                  placeholder='How do I calculate the radius of earth !'
                  {...field}
                  />
              </FormControl>
            </FormItem>
          )}/>
          <Button type='submit' className='col-span-12 lg:col-span-2 w-full 'disabled={isLoading}>Generate</Button>
        </form>
      </Form>
      <div className='space-y-5 mt-4'>
       <div className='flex flex-col-reverse gap-4'>
            {messages.map((message)=>(
              <div key={message.content}>
                {message.content}
              </div>
            ))}
       </div>
     </div>
     </div>
     
    </div>
  )
}

export default ConversationPage