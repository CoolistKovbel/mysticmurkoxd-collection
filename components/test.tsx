"use server"

import { signIn } from "@/auth";
import { findUserByAddress } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const test = async (currentUserAccount: any) => {

  const user = await findUserByAddress(currentUserAccount)

  return user

}


export const signUserIntoApp = async (currentUserAccount: string, signature: string) => {
  await signIn("credentials", {
    signature,
    metaAddress: currentUserAccount,
    redirectTo: DEFAULT_LOGIN_REDIRECT
  })
} 