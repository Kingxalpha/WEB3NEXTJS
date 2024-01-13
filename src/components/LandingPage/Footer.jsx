import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-[50px] w-[100%] sm:items-center'>
        <div className='flex justify-around sm:flex-col sm:gap-4 sm:items-center'>
            <Image height={150} width={150} src={"/web.png"}/>
            <div className='flex gap-5'>
                <Image height={50} width={50} src={"/Group 2.png"}/>
                <Image height={50} width={50} src={"/Group 3.png"}/>
                <Image height={50} width={50} src={"/Group 4.png"}/>
            </div>
        </div>
        <div className='flex items-center justify-center w-[100%]'>
            <ul className='flex items-center justify-center gap-[40px] text-white text-xl bg-[#0E1939] p-5 rounded-xl w-[65%] sm:flex-col sm:p-3'>
                <li>About</li>
                <li>Blog</li>
                <li>Events</li>
                <li>Terms Of Services</li>
            </ul>
        </div>
        <div className='flex items-center justify-center'>
            <p className='text-[gray]'>All Right Reserve - Web3Kwara.org</p>
        </div>
    </div>
  )
}

export default Footer