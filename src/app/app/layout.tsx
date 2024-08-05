import { auth } from "@/server/auth"
import { NavBar } from "./_components/nav-bar"
import { getServerSession } from "next-auth"



export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()

  return (
    <main>
      <NavBar user={session?.user} />
      {children}
    </main>

  )
}