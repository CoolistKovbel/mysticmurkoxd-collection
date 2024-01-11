"use client";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MintSchema } from "@/schemas/index";

export function MintButton() {
  const form = useForm<z.infer<typeof MintSchema>>({
    resolver: zodResolver(MintSchema),
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof MintSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-[42px]"
      >
        <div className="relative">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className=" p-2 text-green w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="enter amount"
                    className="bg-[#f4f4f4] text-[#16a34a] text-sm"
                    {...field}
                  />
                </FormControl>
                <Button className="absolute right-[-50px] bottom-[8px]">Mint</Button>
                <FormMessage />
              </FormItem>
            )}
          />

          
        </div>
      </form>
    </Form>
  );
}
