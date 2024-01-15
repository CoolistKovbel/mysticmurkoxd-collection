import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Dapp",
  description:
    "A small NFT collection compatabile with this website to allow you to message your friends create a community or announce something...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
