import Image from 'next/image'
import React from 'react'

const Block = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='flex justify-around w-[80%] items-center sm:w-full sm:flex-col'>
            <div className='flex flex-col gap-3 sm:p-3'>
                <h1 className='text-white text-3xl w-[40%] font-bold sm:w-full'>Blockchain for Kwara - Empowering a Digital Future</h1>
                <p className='text-[gray] w-[55%] text-lg sm:w-full'>Discover the potential of decentralized finance, explore the world of NFTs, and learn how blockchain can revolutionize our communities.</p>
                <button className='bg-Button p-3 text-lg rounded-lg w-[30%] sm:w-full'>Join Our Community</button>
            </div>
            <div>
                <Image height={150} width={150} src={"/Group 44.png"} className='h-[60vh] w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Block