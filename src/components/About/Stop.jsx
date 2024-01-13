import React from 'react'

const Stop = () => {
  return (
    <div className='flex justify-around text-white bg-[#0E1939] p-[30px] sm:flex-col sm:gap-4'>
        <div>
            <h1 className='text-3xl font-bold w-[70%] leading-8 sm:w-full'>We Grow And Didn’t Stop There...!</h1>
        </div>
        <div className='grid grid-cols-2 text-lg gap-5 font-light sm:grid-cols-1 sm:text-base'>
            <div>
                <h1>500+</h1>
                <p>Job opportunity</p>
            </div>
            <div>
                <h1>2,000+</h1>
                <p>Community members</p>
            </div>
            <div>
                <h1>4,000+</h1>
                <p>Education resources</p>
            </div>
            <div>
                <h1>10+</h1>
                <p>Close partners</p>
            </div>

        </div>
    </div>
  )
}

export default Stop