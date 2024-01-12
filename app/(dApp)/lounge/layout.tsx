import { ServerSideBar } from "@/components/lounge-components/server-side-bar";

export default async function DappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex text-white">

      <ServerSideBar />

      <div className="hidden md:flex min-h-[100vh] w-[33%] flex-col inset-y-0 bg-[#213]">
        group side bar
      </div>

      <div className="min-h-[100vh]  w-full  bg-[#214]">{children}</div>
    </section>
  );
}
