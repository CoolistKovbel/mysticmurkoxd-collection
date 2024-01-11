"use client"
import { logOut } from "@/actions/sign-out";
export const SignOutButton = () => {
  const onClick = () => {
    logOut();
  };
  return <button onClick={onClick} className="bg-[yellow] p-2 text-black font-bold rounded-lg">signout</button>;
};
