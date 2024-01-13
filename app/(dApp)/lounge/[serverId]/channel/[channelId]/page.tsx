import React from 'react'

interface ChannelIdPageProps {
  params: {
    groupId: string;
    channelId: string;
  };
}

const ChannelChatPage = ({ params }: ChannelIdPageProps) => {


  return (
    <div>
      <h2>ChannelIDPAge</h2>
      {JSON.stringify(params)}
    </div>
  )
}

export default ChannelChatPage