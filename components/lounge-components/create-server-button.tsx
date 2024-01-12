"use client";

import { useModal } from "@/hooks/use-modal-store";

import { ServerCog } from "lucide-react";
import { Button } from "../ui/button";

export const CreateServerButton = () => {
  const { onOpen } = useModal();

  const handleButtonClick = async () => {
    onOpen("createServer");
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
