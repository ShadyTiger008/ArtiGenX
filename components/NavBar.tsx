import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './mobile-sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { userSubscription } from '@/lib/subscription'

const NavBar = async () => {

  const isPro = await userSubscription();

  const apiLimitCount = await getApiLimitCount();
  
  return (
      <div className='flex items-center p-4'>
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
          <div className="flex w-full justify-end">
              <UserButton afterSignOutUrl='/' />
          </div>
    </div>
  )
}

export default NavBar