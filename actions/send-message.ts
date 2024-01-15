"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { MessageFormSchema } from "@/schemas";
import { findUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const sendMessage = async (values: z.infer<typeof MessageFormSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "User not found" };
  }

  const dbUser = await findUserById(user.id);

  if (!dbUser) {
    return { error: "User not found" };
  }

  // Create a message
  await db.message.create({
    data: {
      channelId: values.channelId,
      content: values.message,
      userId: dbUser.id
    }
  })


  return { success: "Message Created" };
};
