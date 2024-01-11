"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShieldEllipsis } from "lucide-react";

export const MobileNav = () => {

  const listLinks = [
    {
      route: "Home",
      href: "/home",
      emoji: "🏢"
    },
    {
      route: "About",
      href: "/about",
      emoji: "🌑"
    },
    {
      route: "Settings",
      href: "/settings",
      emoji: "🐱‍💻"
    },
    {
      route: "anounce",
      href: "/announcements",
      emoji: "🧿"
    },
    {
      route: "lounge",
      href: "/lounge",
      emoji: "🎱"
    },

  ]
  return (
    <Sheet>
      <SheetTrigger className="bg-[green] p-2 font-bold rounded-md shadow-lg">
        <ShieldEllipsis className="w-6 h-6" />
      </SheetTrigger>

      <SheetContent className="bg-[#222]" side="top">
        <SheetHeader className=" p-4">
          <SheetTitle className="text-1xl font-bold text-white">
            Mystic Kitten
          </SheetTitle>
        </SheetHeader>

        <div className="mt-10 flex items-center h-full flex-col gap-4">
        {
          listLinks.map((item: any) => (
            <Link href={item.href} key={crypto.randomUUID()} className="p-2 border-2 rounded-lg font-bold text-sm capitalize hover:bg-[#aa922759] w-full text-center text-white">
              <span>{item.route}{item.emoji}</span>
            </Link>
          ))
        }
        </div>

      </SheetContent>
      
    </Sheet>
  );
};
