"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"

import { MintSchema } from "@/schemas/index";
import {contractAddress} from "@/routes"
import ABI from "@/lib/abi.json"

export function MintButton() {
  
  const { toast } = useToast()

  const form = useForm<z.infer<typeof MintSchema>>({
    resolver: zodResolver(MintSchema),
    defaultValues: {
      amount: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  

  const onSubmit = async (values: z.infer<typeof MintSchema>) => {

    const provider = new ethers.providers.Web3Provider(
      window?.ethereum as any
    );

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );

    let amount = parseInt(values.amount);

    const res = await contractInstance.mint(amount, {
      value: ethers.utils.parseEther((0.042 * amount).toString()),
    });


    toast({
      title: "Progress",
      description: "Give me a few secounds......",
    })
    

    await res.wait()


    toast({
      title: "Progress",
      description: `Here is your hash:${res.hash}`,
    })


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
                    disabled={isLoading}
                  />
                </FormControl>
                <Button className="absolute right-[-50px] bottom-[8px]" disabled={isLoading}>Mint</Button>
                <FormMessage />
              </FormItem>
            )}
          />

          
        </div>
      </form>
    </Form>
  );
}
