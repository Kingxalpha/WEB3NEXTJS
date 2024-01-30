import Image from 'next/image'
import React from 'react'

const Organizers = () => {
  return (
    <div className='text-white flex flex-col gap-3 pl-[10%] pr-[10%]'>
        <div className='flex gap-2 items-center pl-[50px]'>
            <Image height={50} width={50} src={"/7.png"}/>
            <p>Organisers</p>
        </div>
        <h1 className='text-2xl pl-[50px] sm:p-[5%]'>Meet Our Organisers</h1>
        <div className='flex justify-around w-full mt-[40px] md:flex-col sm:flex-col sm:gap-[30px]'>
            <div className='bg-[#0E1939] p-[50px] rounded-lg flex flex-col gap-3 items-center'>
                {/* <Image height={100} width={100} src={"/JoysImg.png"} className='relative bottom-[45%]'/> */}
                <div className='text-center'>
                    <h1 className='text-xl'>Ajisefinni Joy</h1>
                    <p className='text-[gray]'>Host</p>
                </div>
                <div className='flex gap-2'>
                    <Image height={30} width={30} src={"/Group 2.png"}/>
                    <Image height={30} width={30} src={"/Group 3.png"}/>
                    <Image height={30} width={30} src={"/Group 4.png"}/>
                </div>
            </div>
            <div className='bg-[#0E1939] p-[50px] rounded-lg flex flex-col gap-3 items-center'>
                {/* <Image height={100} width={100} src={"/PreciousImg.png"} className='relative bottom-[45%]'/> */}
                <div className='text-center'>
                    <h1 className='text-xl'>precious okpara</h1>
                    <p className='text-[gray]'>Organiser</p>
                </div>
                <div className='flex gap-2'>
                    <Image height={30} width={30} src={"/Group 2.png"}/>
                    <Image height={30} width={30} src={"/Group 3.png"}/>
                    <Image height={30} width={30} src={"/Group 4.png"}/>
                </div>
            </div>
            <div className='bg-[#0E1939] p-[50px] rounded-lg flex flex-col gap-3 items-center'>
                {/* <Image height={100} width={100} src={"/JaysImg.png"} className='relative bottom-[45%]'/> */}
                <div className='text-center'>
                    <h1 className='text-xl'>jays alimi</h1>
                    <p className='text-[gray]'>Host Assistant</p>
                </div>
                <div className='flex gap-2'>
                    <Image height={30} width={30} src={"/Group 2.png"}/>
                    <Image height={30} width={30} src={"/Group 3.png"}/>
                    <Image height={30} width={30} src={"/Group 4.png"}/>
                </div>
            </div>
            <div className='bg-[#0E1939] p-[50px] rounded-lg flex flex-col gap-3 items-center'>
                {/* <Image height={100} width={100} src={"/ToshImg.png"} className='relative bottom-[45%]'/> */}
                <div className='text-center'>
                    <h1 className='text-xl'>tosh money</h1>
                    <p className='text-[gray]'> Host</p>
                </div>
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

export default Organizers