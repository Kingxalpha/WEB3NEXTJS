import Image from 'next/image'
import React from 'react'

const Available = () => {
  return (
    <div className='flex flex-col gap-[40px] items-center justify-center bg-[#0E1939] p-3'>
      <div className='flex flex-col items-center justify-center gap-3 sm:p-3 text-center'>
        <h1 className='text-white text-3xl font-extrabold w-[40%] sm:w-full sm:text-xl'>Available Web3 events coming up in kwara state</h1>
        <p className='text-[gray] text-lg w-[60%] sm:w-full sm:text-sm'>Our event brings together experts, enthusiasts, and industry leaders for insightful discussions, hands-on workshops, and networking opportunities.</p>
      </div>
      <div className='grid grid-cols-3 gap-[30px] w-[80%] sm:w-full sm:grid-cols-1 sm:p-[20px] text-white'>
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
            <p>Upcoming</p>
          </div>
          <h1 className='text-2xl'>Web3 Hackathon: Building for Kwara</h1>
          <p className='text-[gray]'>A hands-on event where developers and entrepreneurs come together to build Web3 solutions addressing local challenges.</p>
          <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <Image height={100} width={100} src={"/Event8.png"} className='h-[20vh] w-[100%]'/>
          <div className='flex items-center gap-2'>
            <Image height={50} width={50} src={"/7.png"}/>
            <p>Upcoming</p>
          </div>
          <h1 className='text-2xl'>Crypto Investment and Trading Masterclass</h1>
          <p className='text-[gray]'>Educating attendees on safe and responsible cryptocurrency investment and trading strategies.</p>
          <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <Image height={100} width={100} src={"/Btc.png"} className='h-[20vh] w-[100%]'/>
          <div className='flex items-center gap-2'>
            <Image height={50} width={50} src={"/7.png"}/>
            <p>Upcoming</p>
          </div>
          <h1 className='text-2xl'>Web3Kwara Developer Hackathon</h1>
          <p className='text-[gray]'>A hackathon inviting developers to build innovative decentralized applications (DApps) and blockchain solutions for local challenges.</p>
          <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <Image height={100} width={100} src={"/Coin.png"} className='h-[20vh] w-[100%]'/>
          <div className='flex items-center gap-2'>
            <Image height={50} width={50} src={"/7.png"}/>
            <p>Upcoming</p>
          </div>
          <h1 className='text-2xl'>Blockchain and Business: Transforming Kwara's Economy</h1>
          <p className='text-[gray]'>Exploring how blockchain technology can enhance business processes, reduce costs, and drive economic growth in Kwara State.</p>
          <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <Image height={100} width={100} src={"/Blue.png"} className='h-[20vh] w-[100%]'/>
          <div className='flex items-center gap-2'>
            <Image height={50} width={50} src={"/7.png"}/>
            <p>Upcoming</p>
          </div>
          <h1 className='text-2xl'>Web3Kwara Community Roundtable</h1>
          <p className='text-[gray]'>A recurring event where the local Web3 community gathers to discuss the latest trends, share insights, and foster collaboration.</p>
          <p className='text-Button'>Fri, may 27, 8: 30 AM</p>
        </div>
      </div>
    </div>
  )
}

export default Available