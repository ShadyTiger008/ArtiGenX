"use client"

import { Crisp } from 'crisp-sdk-web';
import { useEffect } from 'react';

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("95b21f3b-3f41-4acf-a4a6-b6fa43885372");
    }, [])

    return null;
}