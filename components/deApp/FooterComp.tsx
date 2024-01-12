import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Twitter } from "lucide-react";

const FooterComp = () => {
  const listLinks = [
    {
      route: "Home",
      href: "/home",
      emoji: "🏢",
    },
    {
      route: "About",
      href: "/about",
      emoji: "🌑",
    },
    {
      route: "lounge",
      href: "/lounge",
      emoji: "🎱",
    },
  ];
  return (
    <footer className="bg-[#111] p-6 p-y-[20px] flex items-center justify-between text-white flex-col md:flex-row ">

      <div className="flex flex-col gap-[4px] w-[300px] md:w-[800px] text-center md:text-left">

        <div className="flex items-center ">
          <div className="w-20 h-20 relative">
            <Image src="/MystixKat-v.png" alt="glitchy kitty" fill />
          </div>

          <h1 className="text-1xl md:text-2xl font-bold">Mystic Kitten</h1>
        </div>

        <p className="font-semibold text-sm ">
          The place to come through when you feeling lost or someone comes into
          your life and ruins it and you have to all this stress because you
          know you have to do so much stuff and nobody going to help but just
          look and give you a hard time
        </p>

        <div className="mt-[10px] flex gap-[10px] items-center justify-center md:justify-start">
          <Github />
          <Instagram />
          <Twitter />
        </div>
      </div>

      <div className="flex justify-end gap-[100px]">
        <div className=" flex flex-row items-center md:flex-col md:mt-0 gap-[10px] font-semibold">
          <span className="bg-emerald-500 p-2 text-center rounded-md font-bold">
            Links
          </span>
          {listLinks.map((item: any) => (
            <Link
              href={item.href}
              key={crypto.randomUUID()}
              className="p-2  font-bold text-sm capitalize hover:text-[#aa922759] hover:underline"
            >
              <span>
                {item.route}
                {item.emoji}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
