import Image from 'next/image'
import React from 'react'

const Events = () => {
  return (
    <div className='flex flex-col gap-[50px]'>
        <div className='flex justify-around text-white items-center sm:p-3'>
            <div className='flex flex-col gap-3'>
                <h2>Events</h2>
                <h1 className='text-4xl w-[90%] sm:text-lg sm:w-full'>Connect, share, learn</h1>
            </div>
            <div>
                <button className='border border-Button p-2 rounded-lg sm:p-1'>View All Events</button>
            </div>
        </div>
        <div className='flex flex-col gap-[50px] pl-[15%] pr-[15%] sm:p-[5%]'>
            <div className='flex md:flex-col sm:flex-col justify-around gap-10 text-white'>
                <div className='w-full flex flex-col gap-3'>
                    <Image height={100} width={100} src={"/Event1.png"} className='h-[20vh] w-[100%]'/>
                    <div className='flex items-center gap-2'>
                        <Image height={50} width={50} src={"/7.png"}/>
                        <p>Upcoming</p>
                    </div>
                    <h1 className='text-2xl'>Decentralized Finance (DeFi) Symposium</h1>
                    <p className='text-[gray]'>A deep dive into the world of DeFi, exploring how decentralized financial solutions can benefit individuals in Kwara State.</p>
                    <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <Image height={100} width={100} src={"/Event2.png"} className='h-[20vh] w-[100%]'/>
                    <div className='flex items-center gap-2'>
                        <Image height={50} width={50} src={"/7.png"}/>
                        <p>Upcoming</p>
                    </div>
                    <h1 className='text-2xl'>Web3Kwara Blockchain Workshop</h1>
                    <p className='text-[gray]'>An educational event focusing on the fundamentals of blockchain technology and its potential applications.</p>
                    <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <Image height={100} width={100} src={"/Event3.png"} className='h-[20vh] w-[100%]'/>
                    <div className='flex items-center gap-2'>
                        <Image height={50} width={50} src={"/7.png"}/>
                        <p>Upcoming</p>
                    </div>
                    <h1 className='text-2xl'>NFT Showcase and Art Auction</h1>
                    <p className='text-[gray]'>Highlighting the world of Non-Fungible Tokens (NFTs) and showcasing local artists and their NFT creations.</p>
                    <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
                </div>
            </div>
            <div className='flex justify-around gap-10 text-white md:flex-col sm:flex-col'>
                <div className='w-full flex flex-col gap-3'>
                    <Image height={100} width={100} src={"/Event5.png"} className='h-[20vh] w-[100%]'/>
                    <div className='flex items-center gap-2'>
                        <Image height={50} width={50} src={"/7.png"}/>
                        <p>Upcoming</p>
                    </div>
                    <h1 className='text-2xl'>Blockchain for Social Impact</h1>
                    <p className='text-[gray]'>Exploring how blockchain and Web3 technologies can be harnessed for social and environmental good in Kwara State.</p>
                    <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <Image height={100} width={100} src={"/Event6.png"} className='h-[20vh] w-[100%]'/>
                    <div className='flex items-center gap-2'>
                        <Image height={50} width={50} src={"/7.png"}/>
                        <p className='text-Button'>Upcoming</p>
                    </div>
                    <h1 className='text-2xl'>Web3 Hackathon: Building for Kwara</h1>
                    <p className='text-[gray]'>A hands-on event where developers and entrepreneurs come together to build Web3 solutions addressing local challenges.</p>
                    <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <Image height={100} width={100} src={"/Event8.png"} className='h-[20vh] w-[100%]'/>
                    <div className='flex items-center gap-2'>
                        <Image height={50} width={50} src={"/7.png"}/>
                        <p className='text-Button'>Upcoming</p>
                    </div>
                    <h1 className='text-2xl'>Crypto Investment and Trading Masterclass</h1>
                    <p className='text-[gray]'>Educating attendees on safe and responsible cryptocurrency investment and trading strategies.</p>
                    <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events