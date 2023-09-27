import Image from 'next/image';
import React from 'react'

interface EmptyProps {
    label: string;
}

const Empty = ({label}: EmptyProps) => {
  return (
      <main className='h-full p-20 flex flex-col items-center justify-center'>
          <div className="relative h-72 w-72">
              <Image src='/typing.gif' alt='' fill />
          </div>
          <p className="text-muted-foreground">{label}</p>
    </main>
  )
}

export default Empty