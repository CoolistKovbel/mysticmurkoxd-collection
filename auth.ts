import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { User } from "@prisma/client";

import { db } from "./lib/db";
import authConfig from "./auth.config";
import { findUserById } from "./data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn, //Can only be used in server actions or server components
  signOut,
} = NextAuth({
  callbacks: {
    // data transfers to session
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.metaAddress && session.user) {
        session.user.metaAddress = token.metaAddress as User;
      }

      if (token.username && session.user) {
        session.user.username = token.username as User;
      }

      if(token.userImage && session.user) {
        session.user.userImage = token.userImage as User
      }

      return session;
    },
    // Add data in token first
    async jwt({ token, user }) {
      if (!token.sub) return token;

      // Get user from jwt...
      const existingUser = await findUserById(token.sub);

      if (!existingUser) return token;

      token.metaAddress = existingUser.metaAddress;
      token.username = existingUser.username;
      token.userImage = existingUser.userImage;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
