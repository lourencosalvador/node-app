import { CardPost } from "./_components/card-post";


export default function Page(){
  return(
    <main className="w-full h-screen flex justify-center lg:px-0 px-6 py-[5rem] bg-zinc-950 dark:bg-zinc-950 antialiased text-white">
    <div className="w-full max-w-[53.125rem] h-full">
     <CardPost  />
    </div>
  </main>
  )
}