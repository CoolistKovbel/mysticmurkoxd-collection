import Provider from "@/components/providers/session-provider";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export default async function DappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <section>

        <header>
          <h2>Mytsic Murko GG</h2>
        </header>
        
        {children}
      </section>
    </SessionProvider>
  );
}
