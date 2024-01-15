
import React from 'react'

interface ChannelHeaderProps{
  channelDetails: any;
}

export const ChannelHeader = ({channelDetails}: ChannelHeaderProps) => {
  
  
  return (
    <header className="p-3 flex items-center justify-between">
      <h2 className="bold text-2xl">{channelDetails?.name || channelDetails}</h2> 

    </header>
  )
}
