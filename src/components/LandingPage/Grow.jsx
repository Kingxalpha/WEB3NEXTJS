import React from 'react'

const Grow = () => {
  return (
    <div className='flex justify-around text-white items-center bg-[#0E1939] h-[30vh] md:flex-col sm:flex-col'>
        <div>
            <h2 className='text-4xl w-[80%] sm:w-[100%] sm:text-3xl'>With a growing of over -</h2>
        </div>
        <div className='flex gap-3 sm:gap-5'>
            <div className=''>
                <h2 className='text-2xl sm:text-lg'>2K+</h2>
                <p>Community members</p>
            </div>
            <div className=''>
                <h2 className='text-2xl sm:text-lg'>10+</h2>
                <p>Partners & Sponsors</p>
            </div>
        </div>
    </div>
  )
}

export default Grow