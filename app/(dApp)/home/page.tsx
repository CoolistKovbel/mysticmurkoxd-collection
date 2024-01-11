import Image from 'next/image'
import React from 'react'
import { MintButton } from '@/components/deApp/mint-button'
import { FAQ } from '@/components/deApp/FAQ'

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      

      <div className="flex items-center flex-col md:w-[1000px] p-4 my-40">

        <div className='flex items-center justify-between flex-col md:flex-row'>

        
        <div className='w-[350px] md:w-[600px] mb-10 md:mb-0'>
          <h2 className='text-3xl text-center md:text-5xl font-bold mb-10'>Mystic Murko NFT Collection</h2>
          <p className='text-sm md:text-[20px] leading-7 text-center'>
            This is one of the must have NFT tokens to own. Mystic Murko is a collection of 222 generated unique images of a popular kat, one of a kind, the smartest coolisted, fluffiest, handsome cats in the world. He has been through a lot and climbed up to the rooftop where he sees the sky light shine bright and wished for things to be alright. Help him on his journey to achive enlightment and be able to spread aware of self love and rightous to those who are in the deep blue darkness they call life. With a small invesment you will be able to bring hope to those who live in fear.
          </p>

          
        </div>

        <div className='w-[300px] h-[300px] relative bg-white rounded-full shadow-xl border-4 border-black'>
          <Image src="/MystixKat-3.png" alt="Mystic Murko" width={1000} height={1000} className='absolute bottom-0 right-0'/>
        </div>

        </div>

        <div className='mt-40 text-6xl'>👇</div>

      </div>



      <div className='w-full flex items-center justify-center my-20'>
      
        <div className='w-[350px] md:w-[800px] flex-col md:flex-row flex items-center justify-between bg-[#333] p-10 rounded-md shadow-xl'>

          <div className='w-[100%] md:w-[50%] '>
            <h2 className='text-2xl md:text-5xl font-bold mb-4 text-center md:text-left'>Mint NFT Now</h2>
            <p className='text-[14px] md:text-[18px] text-center md:text-left'>
              Get yourself at least 3 of these awesome erc-721 tokens. Gain access to special features on this website and hold them to be able to receive a future air drop as well as VIP access to other projects that will be available soon.
            </p>

            <div className='mt-4 flex items-center gap-10 w-[80%]'>
              <div>
                <h4 className='text-2xl font-bold'>Mint Price</h4>
                <h3>0.042 ETH</h3>
              </div>

              <div className='w-[50%]'>
                <MintButton />
              </div>

            </div>

          </div>
          
          <div className='w-[300px] h-[300px] relative shadow-2xl'>
            <Image src="/MysticMurkoNFT.png" alt='murko i miss you so much my dude... why' fill  className='rounded-md'/>
          </div>

        </div>

      </div>


      <FAQ />



    </div>
  )
}

export default HomePage