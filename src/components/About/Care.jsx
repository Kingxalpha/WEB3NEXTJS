import React from 'react'

const Care = () => {
  return (
    <div className='bg-[#0E1939] flex flex-col gap-[40px] items-center p-[20px]'>
        <div className='text-center flex flex-col gap-2'>
            <h1 className='text-white text-3xl font-extrabold'>Core values of web3Kwara initiative</h1>
            <p className='text-white text-lg'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
        </div>
        <div className='grid grid-cols-3 gap-5 p-5 w-[70%] sm:grid sm:grid-cols-1 sm:p-2 sm:w-[100%]'>
            <div className='bg-[#0B132B] p-[25px] flex flex-col gap-5 rounded-xl'>
                <span className='bg-Button rounded-[50px] h-[5vh] w-[5%] p-5 text-center flex items-center justify-center text-white text-lg'>1</span>
                <h1 className='text-white text-2xl font-bold'>Inclusivity</h1>
                <p className='text-[gray] text-lg'>We are committed to creating an inclusive environment where everyone, regardless of their background, can participate and benefit from Web3 technologies. We believe that diversity of perspectives and experiences enriches our community and leads to more robust solutions.</p>
            </div>
            <div className='bg-[#0B132B] p-[25px] flex flex-col gap-5 rounded-xl'>
                <span className='bg-Button rounded-[50px] h-[5vh] w-[5%] p-5 text-center flex items-center justify-center text-white text-lg'>2</span>
                <h1 className='text-white text-2xl font-bold'>Transparency</h1>
                <p className='text-[gray] text-lg'>Transparency is at the heart of our operations. We believe in open and accountable communication with our community members, partners, and stakeholders. We are dedicated to ensuring that our actions and decisions are clear and understandable.</p>
            </div>
            <div className='bg-[#0B132B] p-[25px] flex flex-col gap-5 rounded-xl'>
                <span className='bg-Button rounded-[50px] h-[5vh] w-[5%] p-5 text-center flex items-center justify-center text-white text-lg'>3</span>
                <h1 className='text-white text-2xl font-bold'>Empowerment</h1>
                <p className='text-[gray] text-lg'>We seek to empower individuals and communities through education, resources, and opportunities. We believe that by providing the tools and knowledge needed to engage with Web3 technologies, we can enable people to take control of their digital futures.</p>
            </div>
            <div className='bg-[#0B132B] p-[25px] flex flex-col gap-5 rounded-xl'>
                <span className='bg-Button rounded-[50px] h-[5vh] w-[5%] p-5 text-center flex items-center justify-center text-white text-lg'>4</span>
                <h1 className='text-white text-2xl font-bold'>Innovation</h1>
                <p className='text-[gray] text-lg'>Innovation drives our mission. We encourage creativity, experimentation, and the development of groundbreaking solutions that address the unique challenges faced by Kwara State and its residents.</p>
            </div>
            <div className='bg-[#0B132B] p-[25px] flex flex-col gap-5 rounded-xl'>
                <span className='bg-Button rounded-[50px] h-[5vh] w-[5%] p-5 text-center flex items-center justify-center text-white text-lg'>5</span>
                <h1 className='text-white text-2xl font-bold'>Collaboration</h1>
                <p className='text-[gray] text-lg'>We understand the power of collaboration. We actively seek partnerships with local and global organizations, projects, and individuals who share our mission and can help us amplify our impact.</p>
            </div>
            <div className='bg-[#0B132B] p-[25px] flex flex-col gap-5 rounded-xl'>
                <span className='bg-Button rounded-[50px] h-[5vh] w-[5%] p-5 text-center flex items-center justify-center text-white text-lg'>6</span>
                <h1 className='text-white text-2xl font-bold'>Ethical Responsibility</h1>
                <p className='text-[gray] text-lg'>We uphold ethical principles in all our endeavors. We prioritize the responsible and ethical use of Web3 technologies, ensuring that our actions contribute positively to the well-being of the community and society at large.</p>
            </div>
        </div>
    </div>
  )
}

export default Care