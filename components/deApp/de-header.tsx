import Image from "next/image";
import Link from "next/link";
import React from "react";

const DeHeader = () => {


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
    <header className="flex items-center justify-center flex-col bg-[#111] text-white p-4">

      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-bold">Mytsic Murko GG</h2>
        <div className="w-[80px] h-[80px] relative">
          <Image src="/MystixKat-v.png" alt="Murko" fill />
        </div>
      </div>

      <nav className="flex items-center gap-10 ">
        {
          listLinks.map((item: any) => (
            <Link href={item.href} key={crypto.randomUUID()} className="p-2 border-2 rounded-lg font-bold text-sm capitalize hover:bg-[#aa922759]">
              <span>{item.route}{item.emoji}</span>
            </Link>
          ))
        }
      </nav>

    </header>
  );
};

export default DeHeader;
