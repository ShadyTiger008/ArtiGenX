"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { useProModal } from '@/hooks/use-pro-modal'
import { Badge } from './ui/badge'
import { tools } from '@/app/(dashboard)/(routes)/dashboard/constants'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { Check, ZapIcon } from 'lucide-react'
import { Button } from './ui/button'
import axios from 'axios'
import { NextResponse } from 'next/server'
import toast from 'react-hot-toast'

const ProModal = () => {

  const [loading, setLoading] = useState(false);

  const proModal = useProModal();

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');
      window.location.href = response.data.url;

    } catch (error) {
      console.log(error, 'STRIPE_CLENT_ERROR');
      toast.error("Something went wrong!")
      return new NextResponse('STRIPE_CLIENT_ERROR', { status: 400 });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-4 font-bold py-1'>
              Upgrade to ArtiGenX
              <Badge className='uppercase text-sm py-1' variant='premium'>
                Master
              </Badge>
           </div>
          </DialogTitle>
          <DialogDescription className='text-center pt-2  space-y-2 text-zinc-900 font-medium'>
            {tools.map((tool) => (
              <Card key={tool.label} className='p-3 border-black/5 flex items-center justify-between'>
                <div className="flex items-center gap-x-4">
                  <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                    <tool.icon className={cn('w-6 h-6', tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">
                    {tool.label}
                  </div>
                </div>
                <Check className='text-primary w-5 h-5' />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onSubscribe} size='lg' variant='premium' className='w-full' disabled={loading}>
            Upgrade
            <ZapIcon className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
   </Dialog>
  )
}

export default ProModal