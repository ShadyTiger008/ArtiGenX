import NavBar from '@/components/NavBar'
import Sidebar from '@/components/Sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { userSubscription } from '@/lib/subscription'
import React from 'react'

const Dashboardlayout = async ({ children }: { children: React.ReactNode }) => {
  
  const apiLimitCount = await getApiLimitCount();

  const isPro = await userSubscription();

  return (
      <main className='h-full relative'>
          {/* Sidebar Component */}
          <section className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-zinc-900'>
        <Sidebar apiLimitCount={ apiLimitCount } isPro={isPro} />
          </section>
          {/* Main Screen */}
          <section className='md:pl-72'>
              <NavBar />
              {children}
          </section>
    </main>
  )
}

export default Dashboardlayout