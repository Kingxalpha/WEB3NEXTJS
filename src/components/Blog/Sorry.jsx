import Image from 'next/image'
import React from 'react'

const Sorry = () => {
  return (
    <div className='w-full flex items-start justify-center'>
        <div className='flex justify-between w-[80%] items-center sm:flex-col sm:w-full sm:p-3 sm:gap-[40px]'>
            <div className='flex flex-col gap-[30px] w-[70%] sm:w-full'>
                <h1 className='text-4xl text-white font-extrabold w-[60%] sm:w-full sm:text-2xl'>Sorry, This Page Is Under Development</h1>
                <p className='text-[gray] text-lg w-[70%] sm:w-full'>We’re still building our website and some of our pages are not yet live yet. Is there anything you were looking for, please send us an email or chat with us using the Support widget on the bottom right of this page.</p>
                <button className='bg-Button p-3 rounded-lg text-lg w-[30%] sm:w-[50%]'>Back To Home</button>
            </div>
            <div className='w-[30%] sm:w-full'>
                <Image height={150} width={150} src={"/Group 6.png"} className='w-full h-[30vh]'/>
            </div>
        </div>
    </div>
  )
}

export default Sorry