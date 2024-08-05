'use client'
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"
import { toast } from '@/components/ui/use-toast'



export default function AuthForm() {

    const handleSignIn = async () => {
      try {
        await signIn('github', {redirect: false})
        toast({
            title: 'Github Sent',
            description: 'Now you can continue your experience in our micro-saas',
          })
      } catch(error) {
        console.error(error)
        toast({
            title: 'Github Error',
            description: 'There was an error signing in with your GIthub account, check your internet or your credentials.',
          })
    } 
}
  return (
    <div className="mx-auto max-w-sm space-y-6 text-slate-100">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome Back <span className="text-orange-500">Node</span></h1>
        <p className="text-muted-foreground">Sign in to your account to continue</p>
      </div>
      <div>
        
        <Separator className="my-8" />
        <div className="space-y-4">
          <Button 
          onClick={handleSignIn}
          variant="outline" className="w-full text-zinc-900">
            <GithubIcon className="mr-2 h-4 w-4 text-zinc-900" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}