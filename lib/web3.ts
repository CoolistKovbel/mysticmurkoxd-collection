

import { ethers } from "ethers";

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
      
      alert("connect your metamask account....")
      
      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};


