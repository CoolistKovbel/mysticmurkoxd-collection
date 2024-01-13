"use client";

import Link from "next/link";


interface ServerSideBarProps {
    serverId: any;
}

export function GroupSideBar({ serverId }: ServerSideBarProps) {
  const route = `http://locahost:3000/${serverId}`
  const url = `${route}/channel/lounge`

  return (
    <div className="bg-[#333] w-[23%] min-h-[100vh] hidden md:flex  flex-col  inset-y-0">
      <header>
        {serverId}
      </header>

      {/* <ServerChannel group={singleServer} channels={channels} /> */}

      <div>
        <Link href={url}>Lounge</Link>
      </div>


    </div>
  );
}

