import { ethers } from "ethers";
import Image from "next/image";
import React from "react";

export const SingleServer = (servers: any) => {
  return (
    <div key={crypto.randomUUID()} className="bg-[#111] p-2 shadow-lg text-white w-[150px] h-fit flex items-center justify-center flex-col gap-2 rounded-lg hover:shadow-lime-500">

        <div className="w-20 h-20 relative">
            <Image src="/MysticMurkoNFT.png" alt="best server to join now..." fill  className="rounded-full"/>
        </div>

        <h3>
            {servers.servers.name}
        </h3>

        <h4>
            {ethers.utils.formatEther(servers.servers.cost)}
        </h4>
    </div>
    );
};
