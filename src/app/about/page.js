import Care from '@/components/About/Care'
import Mission from '@/components/About/Mission'
import Statement from '@/components/About/Statement'
import Stop from '@/components/About/Stop'
import Team from '@/components/About/Team'
import Vision from '@/components/About/Vision'
import Explore from '@/components/LandingPage/Explore'
import Footer from '@/components/LandingPage/Footer'
import Journey from '@/components/LandingPage/Journey'
import Navbar from '@/components/LandingPage/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col gap-[70px]'>
        <Navbar />
        <Mission />
        <Stop />
        <Statement />
        {/* <Vision /> */}
        <Care />
        <Team />
        <Explore />
        <Journey />
        <Footer />
    </div>
  )
}

export default Page