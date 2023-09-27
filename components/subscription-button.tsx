"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { Zap } from 'lucide-react';
import axios from 'axios';
import { NextResponse } from 'next/server';
import toast from 'react-hot-toast';

interface SunscriptionButtonProps{
    isPro: boolean;
}

const SubscriptionButton = ({ isPro }: SunscriptionButtonProps) => {
    
    const [isLoadig, setIsLoading] = useState(false);

    const subscribe = async () => {

    try {
        setIsLoading(true);
        const response = await axios.get('/api/stripe');
        window.location.href = response.data.url;
    } catch (error) {
        console.log("BILLING_ERROR", error);
        toast.error("Something went wrong!")
        return new NextResponse("BILLING_ERROR", { status: 401 })
    } finally {
        setIsLoading(false);
    }
    }

    return (
        <Button disabled={isLoadig} variant={isPro ? "default" : "premium"} onClick={subscribe}>
            {isPro ? "Manage Subscription" : "Upgrade Now"}
            {!isPro && <Zap className='w-4 h-4 ml-2 fill-white' />}
      </Button>
  )
}

export default SubscriptionButton