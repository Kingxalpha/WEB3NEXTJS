import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='flex flex-col gap-3 items-center'>
        <div className='flex gap-3 text-white items-center'>
            <Image height={50} width={50} src={"/7.png"}/>
            <p>Partners</p>
        </div>
        <h1 className='text-white text-2xl'>Our Partners & Sponsors</h1>
        <div className='flex gap-7 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2'>
          <Image height={100} width={100} src={"/KuagiLogo.png"}/>
          <Image height={100} width={100} src={"/INHLogo.png"}/>
          <Image height={100} width={100} src={"/KwaraguildLogo.png"}/>
          <Image height={100} width={100} src={"/InterswithLogo.png"}/>
        </div>
    </div>
  )
}

export default Partners