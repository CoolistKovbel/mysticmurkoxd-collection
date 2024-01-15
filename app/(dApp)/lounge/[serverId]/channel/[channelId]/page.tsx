"use client"

import React from 'react'

import { SocketIndicator } from '@/components/socket-indicator';
import { useParams } from 'next/navigation';

interface ChannelIdPageProps {
  params: {
    groupId: string;
    channelId: string;
  };
}

const ChannelChatPage = ({ params }: ChannelIdPageProps) => {



  const router = useParams();


  console.log(router)

  // Access route parameters


  return (
    <div>

      <header>
        <h2>Channel {JSON.stringify(params)}</h2>
        <SocketIndicator />
      </header>

      <div>
        <h2>all Messages</h2>
      </div>


      <div>
        <h3>Send Message</h3>
      </div>

      
    </div>
  )
}

export default ChannelChatPage