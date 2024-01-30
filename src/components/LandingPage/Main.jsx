import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <div className='text-white flex justify-around items-center w-full pt-2 pb-2 pl-[70px] pr-[70px] sm:flex-col sm:gap-[50px] sm:pr-[10px] sm:pl-[10px]'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl w-[60%] sm:w-[100%]'>Empowering the Future of the Internet In Kwara State</h1>
        <p className='w-[65%] sm:w-[100%] text-xl'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
        <button className='bg-Button w-[30%] rounded-xl p-3 sm:w-full font-bold'>join our community</button>
      </div>
      <div className=''>
        <Image height={200} width={500} src={"/Group.png"} />
      </div>
    </div>
  )
}

export default Main