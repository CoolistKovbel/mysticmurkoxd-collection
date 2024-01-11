"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { findUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const authUser = async (value: any) => {
  console.log(value);

  const { name, email, metaAddress, signature } = value;

  // Checking if user exists
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    return { error: "user already exists use a different address smh" };
  } 
  

  const user = await db.user.create({
    data: {
      username: name,
      email,
      metaAddress,
      signature,
    },
  });


  if (user) {
    await signIn("credentials", {
      signature: user.signature,
      metaAddress: user.metaAddress,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  }


  return { success: true };
};
