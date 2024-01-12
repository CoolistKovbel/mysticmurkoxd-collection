
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import DeHeader from "@/components/deApp/de-header";
import FooterComp from "@/components/deApp/FooterComp";

import { Toaster } from "@/components/ui/toaster"


export default async function DappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <section className="bg-[#222] min-h-screen text-white">

        <DeHeader />
        
        {children}

        <Toaster />


        <FooterComp />
        
      </section>
    </SessionProvider>
  );
}
