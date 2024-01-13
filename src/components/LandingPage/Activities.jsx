import Image from 'next/image'
import React from 'react'

const Activities = () => {
  return (
    <div className='flex w-full items-center justify-center gap-[10%] mt-[50px] md:flex-col sm:flex-col'>
        <div>
            <Image height={150} width={150} src={"/ActivitiesImg.png"} className='w-[90%] h-[60vh]'/>
        </div>
        <div className='flex flex-col gap-4 '>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                    <Image height={50} width={50} src={"/7.png"}/>
                    <p className='text-white'>Activities</p>
                </div>
                <h1 className='text-2xl text-white'>Be part of our vision </h1>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-2 text-white'>
                    <Image height={50} width={50} src={"/Workshop Icon.png"}/>
                    <p>Workshop</p>
                </div>
                <div className='flex items-center gap-2 text-white'>
                    <Image height={50} width={50} src={"/Hackaton Icon.png"}/>
                    <p>Hackaton</p>
                </div>
                <div className='flex items-center gap-2 text-white'>
                    <Image height={50} width={50} src={"/EventIcon.png"}/>
                    <p>Events</p>
                </div>
                <div className='flex items-center gap-2 text-white'>
                    <Image height={50} width={50} src={"/ScholarshipIcon.png"}/>
                    <p>Scholarship</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Activities