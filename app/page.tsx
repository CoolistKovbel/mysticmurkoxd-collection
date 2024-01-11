import { MetaSign } from "@/components/MetaSign";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="text-center relative">
        <h2
          className="text-[3rem] md:text-[6rem] font-bold capitalize  glitch"
          data-text="Do you dare to join..."
        >
          Do you dare to join...
        </h2>
      </div>
        <MetaSign />
    </main>
  );
}
