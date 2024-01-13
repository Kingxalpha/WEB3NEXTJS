import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='bg-[#0E1939] p-[50px] text-white w-[80%] rounded-lg flex flex-col gap-3 sm:w-full'>
            <h1 className='text-2xl w-[30%] sm:w-[100%]'>Explore The Potential Of Web3 & Blockchain</h1>
            <button className='bg-Button text-[#0E1939] p-2 rounded-lg w-[20%] sm:w-[50%]'>Learm More</button>
            <div className='h-[30vh]'>
              <Image height={300} width={300} src={"/Ellipse 48.png"} className='w-[100%] h-[30vh] relative top-[49px]'/>
            </div>
            {/* <div className='w-[8015] rounded-tl-full rounded-tr-full bg-[#0E1939] h-[30vh] shadow-[#48CAE4] shadow-lg relative top-[47px]'></div> */}
        </div>
    </div>
  )
}

export default Explore