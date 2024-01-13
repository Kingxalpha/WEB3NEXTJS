import Image from 'next/image'
import React from 'react'

const Vision = () => {
  return (
    <div className='w-[100%] flex justify-center items-center'>
        <div className='flex justify-around w-[80%]'>
            <div className='flex gap-4 w-full'>
                <Image height={150} width={150} src={"/Rectangle.png"} className='w-[100%] h-[40vh]'/>
                <Image height={150} width={150} src={"/Rectangle0.png"} className='w-[100%] h-[40vh]'/>
            </div>
            <div className='flex flex-col gap-[30px] w-full'>
                <div>
                    <h1 className='text-white text-3xl font-extrabold'>Vision Statement</h1>
                    <p className='text-[gray] text-lg w-[80%]'>Our vision for Web3Kwara is a Kwara State where every individual, regardless of background or location, can harness the opportunities presented by Web3 technologies. We aspire to see a thriving ecosystem of blockchain-based solutions that address local challenges, stimulate economic growth, and enhance transparency in governance.</p>
                </div>
                <div className='flex gap-[30px]'>
                    <div className='flex items-center gap-5'>
                        <Image height={50} width={50} src={"/icon.png"}/>
                        <h2>Democratics access</h2>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image height={50} width={50} src={"/icon.png"}/>
                        <h2>Foster Innovation and Inclusivity</h2>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Vision