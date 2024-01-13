import { ServerSideBar } from "@/components/lounge-components/server-side-bar";

export default async function DappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="text-white flex">
      <ServerSideBar />
      <div className="min-h-[100vh]  w-full  bg-[#214]">{children}</div>
    </section>
  );
}
