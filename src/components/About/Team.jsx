import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
        <div className='flex flex-col gap-3 text-center'>
            <h1 className='text-white text-4xl font-extrabold'>Meet The Team</h1>
            <p className='text-[gray] text-lg'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
        </div>
        <div className='text-white grid grid-cols-4 gap-[50px] sm:grid sm:grid-cols-1'>
            <div className='flex flex-col gap-3 text-center items-center bg-[#0E1939] p-[30px] rounded-xl'>
                <Image height={100} width={100} src={"/Ellipse 44.png"}/>
                <h1 className='text-2xl font-bold'>Ajisefinni Joy</h1>
                <p>Community lead</p>
                <div className='flex gap-2'>
                    <Image height={30} width={30} src={"/Group 2.png"}/>
                    <Image height={30} width={30} src={"/Group 3.png"}/>
                    <Image height={30} width={30} src={"/Group 4.png"}/>
                </div>
            </div>
            <div className='flex flex-col gap-3 text-center items-center bg-[#0E1939] p-[30px] rounded-xl'>
                <Image height={100} width={100} src={"/Ellipse 45.png"}/>
                <h1 className='text-2xl font-bold'>Jays Alimi</h1>
                <p>Product designer</p>
                <div className='flex gap-2'>
                    <Image height={30} width={30} src={"/Group 2.png"}/>
                    <Image height={30} width={30} src={"/Group 3.png"}/>
                    <Image height={30} width={30} src={"/Group 4.png"}/>
                </div>
            </div>
            <div className='flex flex-col gap-3 text-center items-center bg-[#0E1939] p-[30px] rounded-xl'>
                <Image height={100} width={100} src={"/Ellipse 46.png"}/>
                <h1 className='text-2xl font-bold'>Samuel Mike</h1>
                <p>Team lead</p>
                <div className='flex gap-2'>
                    <Image height={30} width={30} src={"/Group 2.png"}/>
                    <Image height={30} width={30} src={"/Group 3.png"}/>
                    <Image height={30} width={30} src={"/Group 4.png"}/>
                </div>
            </div>
            <div className='flex flex-col gap-3 text-center items-center bg-[#0E1939] p-[30px] rounded-xl'>
                <Image height={100} width={100} src={"/Ellipse 47.png"}/>
                <h1 className='text-2xl font-bold'>Abdulrouf D.D</h1>
                <p>Community lead</p>
                <div className='flex gap-2'>
                    <Image height={30} width={30} src={"/Group 2.png"}/>
                    <Image height={30} width={30} src={"/Group 3.png"}/>
                    <Image height={30} width={30} src={"/Group 4.png"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team