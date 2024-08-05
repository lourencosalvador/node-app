'use client'
import { Session } from 'next-auth'

import { UserDropdown } from "./user-dropdow";

type MainSidebarProps = {
  user: Session['user']
  }

export function NavBar({ user }: MainSidebarProps){
  return(
    <div className="w-full py-6 bg-zinc-950 text-slate-100 flex justify-between px-[2.5rem] items-center dark:text-white">
      <h1 className="text-[23px] font-semibold"><span className="text-orange-500">.</span> Node</h1>
      <UserDropdown user={user}/>
    </div>
  )
}