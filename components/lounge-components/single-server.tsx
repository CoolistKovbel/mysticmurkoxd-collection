"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import SingleServerJoinButton from "./single-server-join-button";
import { getEthereumAccount } from "@/lib/web3";
import { SingleServerEnterButton } from "./single-server-enter-button";

interface SingleServerProps {
    servers: any;

}

export const SingleServer = ({servers}:SingleServerProps) => {

    const [hasJoined, setHasJoined] = useState(false)

    useEffect(() => {

        const xx = async () => {
            const account = await getEthereumAccount()
            const serverUserList = servers?.users
            const hasJpoined = serverUserList.some((item: string) => item.toLowerCase() === account)
            
            setHasJoined(hasJpoined)
        }

        xx()

        return () => {}
    }, [servers?.users])


  return (
    <div key={crypto.randomUUID()} className="bg-[#111] p-2 shadow-lg text-white w-[150px] h-fit flex items-center justify-center flex-col gap-2 rounded-lg hover:shadow-lime-500">

        <div className="w-20 h-20 relative">
            <Image src={`/${servers.logo}`} alt="best server to join now..." fill  className="rounded-full"/>
        </div>

        <h3>
            {servers.name}
        </h3>

        <h4>
            {ethers.utils.formatEther(servers.cost)}
        </h4>


    {
        hasJoined ? (
            <SingleServerEnterButton serverId={servers.id} />
        )  : (
            <SingleServerJoinButton  serverId={servers.id} cost={servers.cost} />
        )
    }
        


    </div>
    );
};
