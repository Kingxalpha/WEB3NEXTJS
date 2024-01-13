import Image from 'next/image'
import React from 'react'

const Statement = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='flex justify-around w-[80%] items-center sm:w-[100%] sm:flex-col'>
            <div className='flex flex-col gap-5 sm:p-3'>
                <div className='w-full flex flex-col gap-4'>
                    <h1 className='text-white text-3xl font-extrabold'>Mission Statement</h1>
                    <p className='text-[gray] text-lg w-[70%] sm:w-[100%]'>At Web3Kwara, our mission is to democratize access to the transformative power of Web3 technologies for the people of Kwara State. We are dedicated to fostering innovation, inclusivity, and economic empowerment through blockchain, decentralized applications (DApps), and emerging technologies. By educating, engaging, and empowering our community, we aim to bridge the digital divide and create a more equitable future for all.</p>
                </div>
                <div className='flex gap-[30px] sm:flex-col'>
                    <div className='flex gap-5 items-center text-white text-lg font-semibold'>
                        <Image height={50} width={50} src={"/icon.png"}/>
                        <h2>Democratics access</h2>
                    </div>
                    <div className='flex gap-5 items-center text-white text-lg font-semibold'>
                        <Image height={50} width={50} src={"/icon.png"}/>
                        <h2>Foster Innovation and Inclusivity</h2>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 w-full sm:flex-col sm:w-[90%]'>
                <Image height={150} width={150} src={"/Rectangle 79.png"} className='w-[100%] h-[40vh]'/>
                <Image height={150} width={150} src={"/Rectangle 80.png"} className='w-[100%] h-[40vh]'/>
            </div>
        </div>
    </div>
  )
}

export default Statement