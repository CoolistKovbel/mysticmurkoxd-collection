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



/**
 * Listen to announcements.
 *
 * @type {() => void}
 */

export const listenToAllAnnouncements = async () => {
  try {

    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );


    contractInstance.on("UserAnnounced", (user, announcemnet) => {
      let data = {
        user,
        announcemnet
      }

      console.log(data)
    })

    

    return null


    
  } catch (error) {
    console.log(error)
    return null
  }
}

/**
 * Grab all anounce messages.
 *
 * @type {() => void}
 */
export const getAllAnouncements = async () => {
  try {

    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );


    const anouncements = await contractInstance.getAllMessages()

    // console.log(anouncements)

    return anouncements


    
  } catch (error) {
    console.log(error)
    return null
  }
}


/**
 * Makea request to send announcement
 *
 * @type {() => void}
 */
export const sendAnnouncement = async (message:string) => {
  try {

    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );

    const announcement = await contractInstance.createMessage(message, {
      value: ethers.utils.parseEther((0.012).toString()),
      gasLimit: 600000,
    });

  
    alert("Your announcement is being proccess")

    await announcement.wait()

    alert(`your announcement has been completed: ${announcement.hash} `)
  

    
  } catch (error) {
    console.log(error)
    return null
  }
}

/**
 * Makea request to get all server
 *
 * @type {() => void}
 */

export const grabAllServers = async () => {
  try {
    
    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );

    console.log(contractInstance)
    

    const servers = await contractInstance.getAllChannels()

    return servers

  } catch (error) {
    console.log(error)
    return null
  }
}

/**
 * Makea request to join the specfic server
 *
 * @type {() => void}
 */

export const handleServerJoin = async (serverId: any, cost: any) => {
  try {

    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );


    const joingServer = await contractInstance.joinChannel(serverId.toString(), {
      value: cost.toString(),
      gasLimit: 300000,
    })


    alert("Joining server")

    await joingServer.wait()


    alert(`joined server ${joingServer.hash}` )


    
  } catch (error) {
    console.log(error)
    return  null
  }
}


/**
 * Makea request to join the specfic server
 *
 * @type {() => void}
 */

export const handleCreateServer = async (channelName: string, weiValue: any, imageUrl:any) => {
  try {


    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );


    const serverCreated = await contractInstance.createChannel(channelName, weiValue, imageUrl, {
      value: ethers.utils.parseEther((0.024).toString()),
      gasLimit: 500000,
    })


    alert("Server is being created one moment please")

    await serverCreated.wait()

    alert(`Server has been created: ${serverCreated.hash} `)


    
  } catch (error) {
    console.log(error)
    return null
  }
}

/**
 * Makea a withdrawl
 *
 * @type {() => void}
 */

export const ownerWithdrawl = async () => {
  try {
    

    const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      contractAddress,
      ABI.abi,
      signer
    );


    await contractInstance.withdraw()


  } catch (error) {
    console.log(error)
    return null
  }
}