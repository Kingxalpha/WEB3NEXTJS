'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className='w-[100%] flex items-center justify-center mt-6'>
        <nav className='flex justify-around w-[80%] items-center p-4 border border-[#FFFFFF] bg-[#0E1939] rounded-lg sm:w-[95%] sm:p-[10px]' onClick={toggleMenu}>
          <div>
            <Image height={100} width={100} src={"/web.png"}/>
          </div>
          <ul className='flex gap-3 text-white sm:hidden md:hidden text-2xl'>
            <li className='cursor-pointer hover:text-[#48CAE4]'>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className='cursor-pointer hover:text-[#48CAE4]'>
            <Link href="/about">About</Link>
            </li>
            <li className='cursor-pointer hover:text-[#48CAE4]'>
              <Link href="/event">Event</Link>
            </li>
          </ul>
          <button className='bg-Button pt-2 pb-2 pl-3 pr-3 rounded-xl text-white  lg:hidden sm:block transition duration-150 ease-in-out'>
            {isMenuOpen ? <RxCross1/> : <AiOutlineMenu /> }
          </button>
          <button className='bg-Button pt-2 pb-2 pl-3 pr-3 text-lg rounded-xl md:hidden sm:hidden text-white'>Join Us</button>
        </nav>
      </div>
      <ul className={`${isMenuOpen? "block" : "hidden"  } flex flex-col gap-3 items-center justify-center mt-2 text-white h-[30vh] transition duration-300 ease-in-out lg:hidden`}>
        <li className='cursor-pointer hover:text-[#48CAE4]'>Home</li>
        <li className='cursor-pointer hover:text-[#48CAE4]'>About</li>
        <li className='cursor-pointer hover:text-[#48CAE4]'>Event</li>
        <button className='bg-Button pt-2 pb-2 pl-3 pr-3 rounded-xl text-white w-[30%]'>Join Us</button>
      </ul>
    </div>
  )
}

export default Navbar