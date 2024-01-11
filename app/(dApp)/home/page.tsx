import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      

      <div className="flex items-center justify-between">


        <div>
          <h2>Mystic Murko NFT Collection</h2>
          <p>
            This is one of the must have NFT tokens to own. Mystic Murko is a collection of 222 generated unique images of a popular kat, one of a kind, the smartest coolisted, fluffiest, handsome cats in the world. He has been through a lot and climbed up to the rooftop where he sees the sky light shine bright and wished for things to be alright. Help him on his journey to achive enlightment and be able to spread aware of self love and rightous to those who are in the deep blue darkness they call life. With a small invesment you will be able to bring hope to those who live in fear.
          </p>

          <button>Mint Now</button>
        </div>

        <div className='w-[300px] h-[300px] relative bg-[orange] rounded-xl'>
          <Image src="/MystixKat-3.png" alt="Mystic Murko" fill />
        </div>


      </div>



    </div>
  )
}

export default HomePage