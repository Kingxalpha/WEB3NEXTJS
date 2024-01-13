import Image from 'next/image'
import React from 'react'

const Journey = () => {
  return (
    <div className='flex justify-evenly bg-[#0E1939] items-center p-[60px] sm:flex-col gap-10 sm:p-[20px]'>
      <div className='text-white flex flex-col gap-8'>
        <h1 className='text-3xl w-[40%] font-bold sm:w-full sm:text-xl'>Journey To Join Over 2,000+ Members In The Community</h1>
        <button className='bg-Button p-3 rounded-lg w-[30%] sm:w-full'>Join Now!!</button>
      </div>
      <div>
        <Image height={150} width={150} src={"/Community.png"} className='h-[40vh] w-[100%]'/>
      </div>
    </div>
  )
}

export default Journey