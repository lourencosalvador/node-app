'use client'
import { useState } from "react";
import Image from "next/image";
import cardIMage from '@/../public/card-img.svg';
import BlurIn from "@/components/magicui/gradual-spacing";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function CardPost() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full flex flex-col space-y-5">
      <div className="size-auto flex space-x-4">
      <div className="border-2 border-dashed border-orange-300 size-[45px] flex justify-center items-center p-2 rounded-full">
        <Avatar className="h-8 w-8">
         
            <div className="size-8 overflow-hidden rounded-full">
              <AvatarImage src="https://avatars.githubusercontent.com/u/16860528" alt='user details ...' />
            </div>
      
        </Avatar>
        </div>

        <div className="flex flex-col text-left">
          <h1 className="text-[16px] font-semibold ">Antonio <span className="text-orange-500">Gabriel</span></h1>
          <p className="text-[14px] font-normal text-slate-700">Há 5min</p>
        </div>
      </div>
      <div
        className="size-auto relative group flex flex-col hover:cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-auto mb-[60px] h-[18.75rem] transition-all duration-700 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_50%)] rounded-lg overflow-hidden z-0">
          <Image
            src={cardIMage}
            className="w-full h-auto object-cover transition-all duration-300 ease-out hover:scale-105"
            alt="Illustr"
          />
        </div>
        <div className="w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isHovered && (

            <div className="w-full h-auto flex justify-between items-center">
              <BlurIn
                word="Paisagem Monte Magic"
                className="text-[24px] md:text-[18px] font-bold text-slate-100 dark:text-white"
                description='Aqui você encontra as melhores paisagens do mundo'
              />

              <button className="p-[18px] rounded-full mr-2 bg-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}