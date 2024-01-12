"use client";

import Image from "next/image";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { User } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCurrentUser } from "@/hooks/use-current-user";
import { UserSettingsSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { settings } from "@/actions/settings";
import { getEthereumAccount, getNFTImage } from "@/lib/web3";

const SettingsPage = () => {
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const [userImage, setUserImage] = useState<string | null>("")

  const user = useCurrentUser();

  const form = useForm<z.infer<typeof UserSettingsSchema>>({
    resolver: zodResolver(UserSettingsSchema),
    defaultValues: {
      email: user?.email || undefined,
      username: user?.username.toString() || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof UserSettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          }

          if (data.success) {
            update();
            console.log(data.success);
          }
        })
        .catch(() => console.log("Something went wrong!"));
    });

    form.reset();
  };


  useEffect(() => {
    const xx = async () => {
      const account = await getEthereumAccount()
      const images = await getNFTImage(account)
      setUserImage(images as string)
      
    }

    xx()


    return () => {}

  }, [])

  return (
    <div className="min-h-screen">
      <div className="p-4">
        <h2 className="text-2xl md:text-6xl font-bold">User Settings</h2>
        <p className="text-2xl font-bold">Review or edit your details...</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center gap-10 flex-col">

              {/* Image */}
              <div className="flex items-center justify-between gap-20 flex-col md:flex-row">

                <div className="w-[300px] h-[300px] relative mb-5">
                  {
                    userImage ? (
                      <Image src={userImage} alt="user cool profile" fill  className="rounded-full shadow-xl"/>
                    ) : (
                      <User className="w-full h-full text-[yellow] bg-black rounded-full" />
                    )
                  }
                </div>

                <div className="p-4">
                  <h2 className="text-2xl font-bold">Current Account:</h2>
                  <p className="text-sm">{user?.metaAddress.toString()}</p>
                </div>

            </div>

            {/* Username */}
            <div className="w-[50%]">
              <h2 className="text-2xl md:text-6xl font-bold mb-4">
                Change Username
              </h2>
              <p className="text-md md:text-xl font-bold">
                Current Name: {user?.username.toString()}
              </p>

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Change Username: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="enter a username"
                        className="bg-black text-[#16a34a] text-sm"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <div className="w-[50%]">
              <h2 className="text-2xl md:text-6xl font-bold mb-4">
                Change Email
              </h2>
              <p className="text-md md:text-xl font-bold">
                Current Email: {user?.email}
              </p>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Change Email: </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="enter your email"
                        className="bg-black text-[#16a34a] text-sm"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="bg-black text-[#16a34a] text-1xl uppercase hover:text-[yellow] mt-5">
              Update Account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SettingsPage;
