"use client";

import { useModal } from "@/hooks/use-modal-store";

import { ServerCog } from "lucide-react";
import { Button } from "../ui/button";
import { userIsVip } from "@/lib/web3";

export const CreateServerButton = () => {
  const { onOpen } = useModal();

  const handleButtonClick = async () => {

    alert("Check user! one moment please")
    const userHasNFT = await userIsVip()

    // TODO: MAYBE ADD TOAST
    console.log("completed")
    if(userHasNFT === true){
      onOpen("createServer");
    } else if(userHasNFT === undefined || userHasNFT === false){
      alert("Please purchase NFT")
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-white mb-10">
        <Button
          onClick={handleButtonClick}
          className="w-full h-full bg-emerald-500 "
        >
          <ServerCog className="h-12 w-12" />
        </Button>
      </div>
    </div>
  );
};
