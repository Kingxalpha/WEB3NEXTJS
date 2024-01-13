'use client'
import About from '@/components/LandingPage/About'
import Activities from '@/components/LandingPage/Activities'
import Events from '@/components/LandingPage/Events'
import Explore from '@/components/LandingPage/Explore'
import Footer from '@/components/LandingPage/Footer'
import Grow from '@/components/LandingPage/Grow'
import Journey from '@/components/LandingPage/Journey'
import Main from '@/components/LandingPage/Main'
import Navbar from '@/components/LandingPage/Navbar'
import Navigation from '@/components/LandingPage/Navigation'
import Organizers from '@/components/LandingPage/Organizers'
import Partners from '@/components/LandingPage/Partners'

export default function Home() {
  return (
    <div className='flex flex-col gap-[60px]'>
      <Navbar />
      {/* <Navigation /> */}
      <Main />
      <Grow />
      <About />
      <Events />
      <Organizers />
      <Activities />
      <Partners />
      <Explore />
      <Journey />
      <Footer />
    </div>
  )
}
