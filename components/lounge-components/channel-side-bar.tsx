"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useModal } from "@/hooks/use-modal-store";
import { getSpecificServer } from "@/lib/web3";
import { Button } from "../ui/button";


interface ServerSideBarProps {
    serverId: any;
}

interface Server {
  name: string;
}

export function GroupSideBar({ serverId }: ServerSideBarProps) {

  const { onOpen } = useModal();

  const route = `http://localhost:3000/${serverId}`
  const url = `${route}/channel/lounge`

  const [currentServer, setCurrentServer] = useState<Server>();
  const [serverChannels,setServerChannels] = useState<[]>([])


  const handleCreateServer = async () => {

    onOpen("createChannel")
    console.log("handling server creating")
  }



  useEffect(() => {
    const ccx = async () => {
      const server = await getSpecificServer(serverId);

      const channels = await fetch(`/api/getAllChannels?serverId=${serverId}`)
      const deChannels = await channels.json()

      console.log(server)

      setCurrentServer(server);
      setServerChannels(deChannels)
    };

    ccx();
  }, []);

  console.log(currentServer)


  return (
    <div className="bg-[#333] w-[23%] min-h-[100vh] hidden md:flex  flex-col  inset-y-0">
      <header className="bg-[#564] font-bold p-1">
        {currentServer && <h2>{currentServer.name}</h2>}


        <Button onClick={handleCreateServer}>💾</Button>

      </header>

      {/* <ServerChannel group={singleServer} channels={channels} /> */}

      <div className="w-full">
        <h4>Default channel</h4>
        <Link href={url} className="bg-[#123] w-full block p-2 hover:bg-[#321]">Lounge</Link>

        <h4>Channels</h4>
        {
          serverChannels && (
            serverChannels.map((channel:any) => (
              <Link href={`http://localhost:3000/lounge/1/channel/${channel.id}`} key={crypto.randomUUID()} className="bg-[#122] block font-bold text-white p-2 w-full">
                {channel.name}
              </Link>
            ))
          )
        }

      </div>


    </div>
  );
}

