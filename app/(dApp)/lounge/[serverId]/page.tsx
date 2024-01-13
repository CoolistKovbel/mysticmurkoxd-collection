import React from 'react'


interface ServerSideBarProps {
  serverId: string;
}

const GroupIdPage = ({ serverId }: ServerSideBarProps) => {

  console.log(serverId)

  return (
    <div>
        <header>
           <h2>Messagses go here....</h2>
           <p>if user selected channel... show messages here if not remain &#34;invisable&#34;</p>
        </header>
    </div>
  )
}

export default GroupIdPage