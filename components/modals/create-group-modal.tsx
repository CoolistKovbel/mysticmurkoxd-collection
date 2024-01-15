"use client";

import { useState, useTransition } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import queryString from "query-string";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
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

import { CreateChannelSchema } from "@/schemas";
import { addChannel } from "@/actions/add-channel";

export const CreateGroupModal = () => {
  const [isPending, startTranstion] = useTransition();
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();
  const params = useParams();
  const isModalOpen = isOpen && type === "createChannel";


  const {serverId, channelId} = params as any

  const form = useForm({
    resolver: zodResolver(CreateChannelSchema),
    defaultValues: {
      name: "",
      serverId: ""
    },
  });


  const onSubmit = async (values: z.infer<typeof CreateChannelSchema>) => {
    
    try {
      values.serverId = serverId as string
      
      startTranstion(() => { 
        addChannel(values).then((data: any) => {
          if (data?.success) console.log(data?.success);

          // Alert user about the error or something.... MAYBE REPONE THE MODAL
          if (data?.error) console.log(data?.error);
        })
      })


      form.reset();
      router.refresh();
      onClose();

    } catch (error) {
      console.log(error);
      return null
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
            Create channel
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Channel Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        className="bg-zinc-300/50 border-0 focus-visable:ring-0 text-black focus-visable:rin-offset-0"
                        placeholder="enter channel name"
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
