"use client"

import React, { useEffect, useState } from 'react'
import ProModal from './pro-modal';

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    };

  return (
      <main>
          <ProModal/>
    </main>
  )
}

export default ModalProvider