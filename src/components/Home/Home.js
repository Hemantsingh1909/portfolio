import React from 'react'
import logo from '../../images/profile.png'

const Home = () => {
  return (
    <div className='relative max-w-full '>
      <div className='flex w-screen h-screen justify-around'>
        <div className='w-2/6 tracking-wide flex flex-col justify-center'>
            <h2 className='text-[#496CF6] pb-1 font-bold'>Hey There 👋 I am </h2>
            <h1 className='text-4xl pb-4 font-bold text-black'>Hemant Satwal</h1>
            <h3 className='text-xl font-medium pb-5'><span className='opacity-50'>Professional </span>Software Developer</h3>
            <p className='font-medium opacity-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, vero?</p>
            <div className='flex pt-10'>
                <div className='pr-2'>
                <button type="button" className="text-white bg-[#496CF6] hover:bg-[#5B7BF8] hover:shadow-xl ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Me</button>
                </div>
            <button type="button" className="text-white text-base bg-[#090F34] hover:bg-[#212548] hover:shadow-xl ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#090F34] dark:hover:bg-[#212548] dark:focus:ring-blue-800">Learn More</button>
            </div>
        </div>
        <div className="relative w-2/6">
        <div className="rounded-full h-[696px] w-[696px] bg-[#4566EE] clip-half-circle absolute left-[30vh] top-[12vw]"></div>
        <img src={logo} alt="Your Image" className="w-screen object-contain pt-[65px] z-10 relative" />
        </div>
      </div>
    </div>
  )
}

export default Home
