"use client";

import { useEffect, useState } from "react";
import { grabAllServers, myServers } from "@/lib/web3";
import { SingleServer } from "./single-server";
import { CreateServerButton } from "./create-server-button";

export const ServerSideBar = () => {
  const [allServers, setAllServers] = useState<[]>([]);
  const [userServers, setUserServers] = useState<[]>([]);
  const [showServers, setShowServers] = useState<boolean>(true);

  const myZone = async () => {
    try {
      const deUserServers = await myServers();
      setUserServers(deUserServers);
      
      if(userServers.length > 0) setShowServers(false);


    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const xx = async () => {
    const servers = await grabAllServers();

    console.log(servers);
    setAllServers(servers);
    setShowServers(true);
  };

  useEffect(() => {
    xx();
    myZone()
  }, []);

  console.log(showServers)

  return (
    <div className="hidden md:flex min-h-[100vh] w-[22%] flex-col inset-y-0 bg-[#212] relative">
      <h2 className="text-xl md:text-3xl font-bold text-center mt-4">
        <button onClick={xx}>Available Servers</button>
      </h2>
      <button className="absolute p-4 bg-[#231] top-0 right-0" onClick={myZone}>
        my servers
      </button>

      {!showServers ? (
        <div className="flex items-center justify-start h-full flex-col gap-10 p-4 overflow-auto">
          {userServers &&
            userServers.map((servers: any) => (
              <SingleServer servers={servers} key={crypto.randomUUID()} />
            ))}
        </div>
      ) : (
        <div className="flex items-center justify-start h-full flex-col gap-10 p-4 overflow-auto">
          {allServers &&
            allServers.map((servers: any) => (
              <SingleServer servers={servers} key={crypto.randomUUID()} />
            ))}
        </div>
      )}

      <CreateServerButton />
    </div>
  );
};
