import { User } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  metaAddress: User;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}