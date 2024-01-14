"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AnnounceFormSchema } from "@/schemas/index";
import { sendAnnouncement } from "@/lib/web3";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";

export const AnnouncementForm = () => {

  const form = useForm<z.infer<typeof AnnounceFormSchema>>({
    resolver: zodResolver(AnnounceFormSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof AnnounceFormSchema>) => {
    try {
      await sendAnnouncement(values.message);
      

      form.reset()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-3 my-10 flex items-center justify-center"
      >
        <div className="w-[320px] md:w-[800px] bg-[#112] p-3 shadow-lg rounded-lg">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="p-2 w-full flex items-center justify-between flex-col">
                <FormLabel className="text-1xl font-bold w-full text-white">
                  Message:
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
        </div>
      </form>
    </Form>
  );
};
