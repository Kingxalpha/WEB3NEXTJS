import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <div className='text-white flex justify-around w-full pt-2 pb-2 pl-[70px] pr-[70px] sm:flex-col sm:gap-[50px] sm:pr-[10px] sm:pl-[10px]'>
      <div className='flex flex-col gap-5 '>
        <h1 className='text-3xl w-[40%] sm:w-[100%]'>Empowering the Future of the Internet In Kwara State</h1>
        <p className='w-[65%] sm:w-[100%] text-xl'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
        <button className='bg-Button w-[30%] rounded-xl p-3 sm:w-full font-bold'>join our community</button>
      </div>
      <div className='grid grid-cols-3 gap-3'>
        <Image height={100} width={100} src={"/61.png"} />
        <Image height={100} width={100} src={"/one.png"} />
        <Image height={100} width={100} src={"/60.png"} />
        <Image height={100} width={100} src={"/66.png"} />
        <Image height={100} width={100} src={"/62.png"} />
        <Image height={100} width={100} src={"/67.png"} />
        <Image height={100} width={100} src={"/65.png"} />
        <Image height={100} width={100} src={"/63.png"} />
        <Image height={100} width={100} src={"/64.png"} />
      </div>
    </div>
  )
}

export default Main