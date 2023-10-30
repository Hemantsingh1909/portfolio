import React from 'react'

const Pricing = () => {
  return (
    <>
      <div className='relative h-screen flex flex-col justify-between w-screen'>
        <div className='flex flex-col max-w-full justify-center items-center '>
            <div className='w-3/6 tracking-wide flex pb-[9vh] flex-col items-center'>
              <h2 className='text-[#496CF6] pb-1 text-lg font-semibold'>My Resume </h2>
              <h1 className='text-5xl pb-4 font-bold text-black'>My Pricing Plans</h1>
              <p className='font-medium text-center opacity-50'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <div className='container w-full h-5/6'>
            <div className='flex h-4/6 absolute px-12'>
              <div className='flex flex-col justify-around items-center m-8 p-8 ease-linear hover:shadow-2xl'>
                <h1 className='text-3xl font-medium'>Gold Package</h1>
                <p className='font-medium text-center opacity-50'>Lorem ipsum dolor sai sit amet consectetur adipisicing elit. Repellat, sunt!</p>
                <h2 className='text-[#496CF6] pb-1 text-4xl font-bold'>$99</h2>
                <button type="button" className="text-[#9EA4B8] border-2 bg-white hover:bg-[#5B7BF8] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</button>
              </div>
              <div className='flex flex-col justify-around items-center m-8 p-8 ease-linear hover:shadow-2xl'>
              <h1 className='text-3xl font-medium'>Platinum Package</h1>
                <p className='font-medium text-center opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sunt!</p>
                <h2 className='text-[#496CF6] pb-1 text-4xl font-bold'>$189</h2>
                <button type="button" className="text-[#9EA4B8] border-2 bg-white hover:bg-[#5B7BF8] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</button>
              </div>
              <div className='flex flex-col justify-around items-center m-8 p-8 ease-linear hover:shadow-2xl'>
              <h1 className='text-3xl font-medium'>Silver Package</h1>
                <p className='font-medium text-center opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sunt!</p>
                <h2 className='text-[#496CF6] pb-1 text-4xl font-bold'>$249</h2>
                <button type="button" className="text-[#9EA4B8] border-2 bg-white hover:bg-[#5B7BF8] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Pricing
