"use client";

import { ethers } from "ethers";
import { Button } from "./ui/button";
import { getEthereumAccount } from "@/lib/web3";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { findUserBySignature } from "@/data/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

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

      const user = await findUserBySignature(signature);

      console.log(user)

      if (user) {
        await signIn("credentials", {
          signature,
          metaAddress: userAddress,
          redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
      } else {
        onOpen("authUser", signature.toString());
      }
      

    }
  };

  return <Button onClick={signInMeta}>Join Now</Button>;
};
