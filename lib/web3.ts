import { ethers } from "ethers";

import ABI from "./abi.json";
import { contractAddress } from "@/routes";

export const getEthereumObject = () => {
  return window.ethereum;
};

/**
 * Grab an ethereum account
 * using windows to grab eth window to grab account connected
 * @type {() => void}
 */

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Check if user has a minted nft imnage.
 *
 * @type {() => void}
 */

export const getNFTImage = async (account: any) => {
  try {
    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );

    const image = await contractInstance.ownerToToken(account);

    const token = await contractInstance.tokenURI(image);
    let tt = "";

    if (token.startsWith("ipfs://")) {
      tt = `https://scarlet-husky-loon-439.mypinata.cloud/ipfs/${
        token.split("ipfs://")[1]
      }`;
    }

    const tokenMetaday = await fetch(tt).then((res) => res.json());

    if (tokenMetaday) {
      if (tokenMetaday.image.startsWith("ipfs://"))
        return `https://scarlet-husky-loon-439.mypinata.cloud/ipfs/${
          tokenMetaday.image.split("ipfs://")[1]
        }`;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
