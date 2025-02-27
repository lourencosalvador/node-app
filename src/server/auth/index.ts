import NextAuth from 'next-auth'

import GitHubProvider from "next-auth/providers/github";


export const {
    handlers: {GET, POST},
    auth
} = NextAuth({
  pages: {
  signIn: '/auth',
  signOut: '/auth',
  error: '/auth',
  verifyRequest: '/auth',
  newUser: '/app' 
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    })
  ]
})