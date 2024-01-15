import React from 'react'


interface ChannelMessagesProps {
  messages: any
}

export const ChannelMessages = ({messages}: ChannelMessagesProps) => {
  
  console.log(messages)

  return (
    <div className="p-2 min-h-screen flex items-center flex-col gap-2 overflow-auto">
      {
        messages?.map((message:any) => (
          <div key={crypto.randomUUID()} className="w-full p-2 bg-black text-green-400">
            <h4>{message.user.username}</h4>
            <p>{message.content}</p>
          </div>
        ))
      }
    </div>
  )
}
