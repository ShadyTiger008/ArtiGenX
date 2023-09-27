"use client";

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Montserrat_Alternates } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings} from 'lucide-react'
import FreeCounter from './free-counter';

const monsterrat = Montserrat_Alternates({ weight: "600", subsets: ["latin"] })

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: '/dashboard',
        color: "text-sky-500"
    },
    {
        label: "Coversation",
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: '/image',
        color: "text-pink-700"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: '/video',
        color: "text-orange-700"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: '/music',
        color: "text-emerald-700"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: '/code',
        color: "text-green-700"
    },
    {
        label: "Settings",
        icon: Settings,
        href: '/settings',
    },
]

interface SidebarProps {
    apiLimitCount: number
    isPro: boolean
};

const Sidebar = ({apiLimitCount = 0, isPro = false}: SidebarProps) => {

    const pathName = usePathname();

  return (
      <main className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
          <div className='px-3 py-2 flex-1'>
              <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
                  <div className="relative w-8 h-8 mr-4">
                      <Image fill alt='' src="/AX.png" />
                  </div>
                  <h1 className={cn('text-2xl font-bold', monsterrat.className)}>
                      ArtiGenX
                  </h1>
              </Link>
              <div className='space-y-1'>
                  {routes.map((route) => {
                      return (
                          <Link href={route.href} key={route.label} className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition', pathName === route.href ? "text-white bg-white/20" : "text-zinc-400")}>
                              <div className='flex items-center flex-1'>
                                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                  <span>{route.label}</span>
                              </div>
                          </Link>
                      )
                  })}
              </div>
          </div>
          <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </main>
  )
}

export default Sidebar