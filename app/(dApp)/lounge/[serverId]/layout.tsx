
import { GroupSideBar } from "@/components/lounge-components/channel-side-bar";

export default async function ServerIdLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { serverId: string };
  }){ 

    return (      
      <section className="flex w-full h-full">

          <GroupSideBar serverId={params.serverId}/>

          <div className="min-h-[100vh]  w-full  bg-[#214]">{children}</div>
      </section>
    )
  }
