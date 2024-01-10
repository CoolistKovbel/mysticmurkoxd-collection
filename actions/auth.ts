"use server";

import { findUserByAddress } from "@/data/user";
import { db } from "@/lib/db";

export const authUser = async (value: any) => {
  console.log(value);

  const { name, email, metaAddress, signature } = value;

  // Checking if user exists
  const existingUser = await findUserByAddress(metaAddress);

  if (existingUser) return { error: "user already exists use a different address smh" };

  const user = await db.user.create({
    data: {
      username: name,
      email,
      metaAddress,
      signature,
    },
  });


  if(user) {
    return { success: true };
  }

};
