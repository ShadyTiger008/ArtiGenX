import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
      <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
          <div className="w-32 h-32 relative">
              <Image alt='logo' src='/thinking.gif' fill />
          </div>
          <p className="text-sm text-muted-foreground">
              ArtiGen is  thinking...
          </p>
    </div>
  )
}

export default Loader