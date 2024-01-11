"use client";

import { ethers } from "ethers";
import { Button } from "./ui/button";
import { getEthereumAccount } from "@/lib/web3";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { signUserIntoApp, test } from "./test";



export const MetaSign = () => {
  const { onOpen } = useModal();
  const router = useRouter();

  const signInMeta = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const currentUserAccount = await getEthereumAccount();

    let message =
      "I am the real owner of this account thank you very much... 🐱‍💻";

    let signature = await signer.signMessage(message);

    const userAddress = ethers.utils.verifyMessage(message, signature);

    if (userAddress.toLowerCase() === currentUserAccount.toLowerCase()) {
      
      const gg = await test(currentUserAccount)

      if(gg){

        await signUserIntoApp(currentUserAccount, signature)

      } else {
        onOpen("authUser", signature.toString());
      }
      
      
    }
  };

  return <Button onClick={signInMeta}>Join Now</Button>;
};
