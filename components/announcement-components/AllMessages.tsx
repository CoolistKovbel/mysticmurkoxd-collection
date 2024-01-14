"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

import ABI from "@/lib/abi.json"
import { contractAddress } from "@/routes";
import { getAllAnouncements } from "@/lib/web3";
import { SingleAnnouncement } from "./single-announcement";

export const AllMessages = () => {

  const [allAnnouncements, setAllAnnouncments] = useState<[]>([]);
  const [newAnnouncment, setNewAnnouncment] = useState({})

  const xx = async () => {
    const announcemnets: any = await getAllAnouncements();
    setAllAnnouncments(announcemnets);
  };

  useEffect(() => {
    xx();

    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );

    const handleUserAnnounced =  (user: any, announcement:any) => {
      console.log(`${user} announced, ${JSON.stringify(announcement)}`);
      xx();
    };


    contractInstance.on("UserAnnounced", handleUserAnnounced)

  
    return () => {
      contractInstance.off("UserAnnounced", handleUserAnnounced)
    }

  }, []);

  return (
    <div className="bg-[#111] w-full h-[900px] flex items-center justify-center overflow-auto">

      <div className="bg-[#333] w-[337px] md:w-[800px] lg:w-[1000px] h-[90%] p-10 rounded-lg shadow-lg flex flex-col gap-10 overflow-auto mt-[100px] md:mt-[20px] mb-[20px]">
        {allAnnouncements &&
          allAnnouncements.map((item: any) => (
            <SingleAnnouncement annoucnement={item} key={crypto.randomUUID()} />
          ))}
      </div>

    </div>
  );
};
