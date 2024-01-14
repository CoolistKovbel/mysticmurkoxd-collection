"use client"

import { getAllAnouncements, listenToAllAnnouncements } from "@/lib/web3";
import { useEffect, useState } from "react";
import { SingleAnnouncement } from "./single-announcement";


export const AllMessages = () => {

    const [allAnnouncements, setAllAnnouncments] = useState<[]>([])

    useEffect(() => {

        const xx = async () => {
            const announcemnets = await getAllAnouncements()

            const dd = await listenToAllAnnouncements()

            console.log(dd)

            
            setAllAnnouncments(announcemnets)
        }

        xx()

    },[])

  return (
    <div className="bg-[#111] w-full h-[900px] flex items-center justify-center overflow-auto">

        <div className="bg-[#333] w-[337px] md:w-[800px] lg:w-[1000px] h-fit p-4 rounded-lg shadow-lg flex flex-col gap-10 overflow-auto mt-[100px] md:mt-[20px] mb-[20px]">
            {
                allAnnouncements && (
                    allAnnouncements.map((item:any) => (
                        <SingleAnnouncement annoucnement={item} key={crypto.randomUUID()} />
                    ))
                )
            }
        </div>
      
    </div>
  );
};
