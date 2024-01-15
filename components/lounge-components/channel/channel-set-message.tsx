"use client"

import React, { useTransition } from 'react'
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MessageFormSchema } from '@/schemas'
import { sendMessage } from '@/actions/send-message';


interface ChannelSetMessageProps {
  channelId: string;
  xx: any
}

export const ChannelSetMessage = ({channelId, xx}: ChannelSetMessageProps ) => {
  const [isPending, startTranstion] = useTransition();

  const form = useForm<z.infer<typeof MessageFormSchema>>({
    resolver: zodResolver(MessageFormSchema),
    defaultValues: {
      message: "",
      channelId: ""
    },
  });


  const onSubmit = async (values: z.infer<typeof MessageFormSchema>) => {
    try {

      values.channelId = channelId;
      
      startTranstion(() => {
        sendMessage(values).then((data:any) => {
          if(data?.success) {
            xx()
          }
          console.log(data?.error)
        })
      })
      

      form.reset()
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="p-2 w-full flex items-center justify-between flex-col">
                <FormLabel className="text-1xl font-bold w-full text-white">
                  Send Message
                </FormLabel>
                <FormControl>
                  {/* TextArea */}
                  <Textarea
                    className="bg-slate-500 text-[#000] text-sm resize-none "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-[100%] rounded-xl font-bold uppercase border-2 mt-2"
          >
            Submit
          </Button>

        </form>
      </Form>
    </>
  )
}
