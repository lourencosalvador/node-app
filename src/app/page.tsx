import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center lg:px-0 px-6 py-[5rem] bg-zinc-950 dark:bg-zinc-950 antialiased text-white">
     <div className="flex justify-center items-center flex-col space-y-4">
     <h1 className="text-2xl font-semibold">Landing Page em andamento ....</h1>
     <Link href='/auth'>
     <Button className="px-8 py-6">Criar Sessão</Button>
     </Link>
     </div>
    </main>
  );
}
