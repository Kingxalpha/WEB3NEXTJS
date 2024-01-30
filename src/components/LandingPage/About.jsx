import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex text-white justify-around w-full items-center pl-[13%] pr-[13%] mt-5 sm:flex-col sm:pr-3 sm:pl-3'>
        <div className='w-full'>
            <Image height={150} width={150} src={"/About.png"} className='w-[80%] h-[60vh]'/>
        </div>
        <div className='w-full flex flex-col gap-3'>
            <h3>About</h3>
            <h1 className='text-3xl'>About Web 3Kwara</h1>
            <p className='leading-7 text-[gray]'>Web3Kwara is a community dedicated to spreading awareness and driving adoption of Web3, blockchain technology, and its potential in the Kwara State. We are a group of individuals passionate about the future of the Web3 and believe that Web3 has the potential to revolutionize the way we interact and transact With the internet.</p>
        </div>
    </div>
  )
}

export default About