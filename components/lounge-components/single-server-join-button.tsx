"use client";

import {  handleServerJoin } from "@/lib/web3";
import { Button } from "../ui/button";

interface SingleServerJoinButtonProps {
  serverId: string;
  cost: any
}

const SingleServerJoinButton = ({
  serverId,
  cost,
}: SingleServerJoinButtonProps) => {


  const handleJoin = async () => {

    await handleServerJoin(serverId, cost)


  };

  return <Button onClick={handleJoin}>Join now</Button>;
};

export default SingleServerJoinButton;
