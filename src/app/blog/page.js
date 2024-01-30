import Sorry from '@/components/Blog/Sorry'
import Footer from '@/components/LandingPage/Footer'
import Journey from '@/components/LandingPage/Journey'
import Navbar from '@/components/LandingPage/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-[70px]'>
        <Navbar />
        <Sorry />
        <Journey />
        <Footer />
    </div>
  )
}

export default page