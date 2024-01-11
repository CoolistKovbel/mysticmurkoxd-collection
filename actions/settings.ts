"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { UserSettingsSchema } from "@/schemas";
import { findUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const settings = async (values: z.infer<typeof UserSettingsSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "User not found" };
  }

  const dbUser = await findUserById(user.id);

  if (!dbUser) {
    return { error: "User not found" };
  }


  await db.user.update({
    where: { id: dbUser.id },
    data: { ...values },
  });

  return { success: "settings updated" };
};
