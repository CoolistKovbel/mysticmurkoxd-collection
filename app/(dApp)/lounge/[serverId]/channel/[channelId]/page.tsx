"use client";

import { ChannelHeader } from "@/components/lounge-components/channel/channel-header";
import { ChannelMessages } from "@/components/lounge-components/channel/channel-messages";
import { ChannelSetMessage } from "@/components/lounge-components/channel/channel-set-message";
import React, { useEffect, useState } from "react";

interface ChannelIdPageProps {
  params: {
    groupId: string;
    channelId: string;
  };
}

const ChannelChatPage = ({ params }: ChannelIdPageProps) => {
  const [channelDetails, setChannelDetials] = useState<any>([]);

  const xx = async () => {
    const channelData = await fetch(
      `/api/getSingleChannel?channelId=${params.channelId}&serverId=${params.groupId}`
    );
    const data = await channelData.json();
    setChannelDetials(data);
  };

  useEffect(() => {
    xx();
  }, []);

  if (params.channelId === "lounge") {
    return (
      <div>
        <ChannelHeader channelDetails="lounge"/>
        {/* In porgress */}
      </div>
    );
  }

  return (
    <div>
      <ChannelHeader channelDetails={channelDetails} />

      <ChannelMessages messages={channelDetails?.Message} />

      <ChannelSetMessage channelId={params.channelId} xx={xx} />
    </div>
  );
};

export default ChannelChatPage;
