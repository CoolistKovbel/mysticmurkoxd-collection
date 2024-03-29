"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';

interface SingleServerEnterButtonProps {
  serverId: any;
}

export const SingleServerEnterButton = ({serverId}:SingleServerEnterButtonProps) => {


  const router = useRouter()

  const handleEnterServer = async () => {
    // const url = `http://localhost:3000/lounge/${serverId}`
    const url = `https://www.mysticmurkoxd-collection-production.up.railway.app/lounge/${serverId}`

    router.push(url)
  }

  return (
    <Button onClick={handleEnterServer}>
        Enter
    </Button>
  )
}
