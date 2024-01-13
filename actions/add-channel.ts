"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { CreateChannelSchema } from "@/schemas";
import { findUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const addChannel = async (values: z.infer<typeof CreateChannelSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "User not found" };
  }

  const dbUser = await findUserById(user.id);

  if (!dbUser) {
    return { error: "User not found" };
  }

  await db.channel.create({
    data:{
        name: values.name,
        connectedToServer: values.serverId,
        owner: dbUser.metaAddress
    }
  })

  return { success: "channel Created" };
};
