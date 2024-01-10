"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { UserFormSchema } from "@/schemas";
import { getEthereumAccount } from "@/lib/web3";
import { authUser } from "@/actions/auth";




export const AuthUserModal = () => {
  const [isPending, startTranstion] = useTransition();
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();
  const [deFile, setFile] = useState<File | null>(null);

  const isModalOpen = isOpen && type === "authUser";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const form = useForm({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      metaAddress: "",
    },
  });



  const onSubmit = async (values: z.infer<typeof UserFormSchema>) => {
    try {

      const account = await getEthereumAccount()

      values.metaAddress = account

      console.log(values);

      // Make request to db to save user
      startTranstion(() => {
        authUser(values).then((data: any) => {
          if(data?.success) router.push('/home')
          if(data?.error) console.log(data?.error)
        })
      })

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Sign Up
          </DialogTitle>
          <DialogDescription className="text-center text-zine-500">
            Provide a username and email so users know who you are and you get important email updates in the future.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
                      Username:
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        className="bg-zinc-300/50 border-0 focus-visable:ring-0 text-black focus-visable:rin-offset-0"
                        placeholder="enter a username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
                      Email:
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        className="bg-zinc-300/50 border-0 focus-visable:ring-0 text-black focus-visable:rin-offset-0"
                        placeholder="enter your email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="bg-gray-200 px-6 py-4">
              <Button disabled={isPending} variant="secondary">
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
