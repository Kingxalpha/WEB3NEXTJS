import Footer from '@/components/LandingPage/Footer'
import Journey from '@/components/LandingPage/Journey'
import Navbar from '@/components/LandingPage/Navbar'
import Service from '@/components/Terms/Service'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-[70px]'>
        <Navbar />
        <Service />
        <Journey />
        <Footer />
    </div>
  )
}

export default page