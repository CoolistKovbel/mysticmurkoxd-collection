import type { NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";

import { UserFormSchema } from "./schemas";
import { findUserByAddress, findUserBySignature } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {

        console.log(credentials, "in the credntials")

        const validatedFields = UserFormSchema.safeParse(credentials);

        if (validatedFields.success) {

          const { metaAddress, signature } = validatedFields.data;

          const user = await findUserByAddress(metaAddress);

          if (!user) return null;

          const validUser = await findUserBySignature(signature)


          if(validUser) return user


        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
