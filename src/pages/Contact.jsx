import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='relative h-screen flex justify-center w-screen'>
        <div className='flex flex-col max-w-full justify-center items-center '>
            <div className='w-3/6 tracking-wide flex pb-[9vh] flex-col items-center'>
              <h2 className='text-[#496CF6] pb-1 text-lg font-semibold'>Contact With Me </h2>
              <h1 className='text-5xl pb-4 font-bold text-black'>Have an Project in Mind ?</h1>
              <p className='font-medium text-center opacity-50'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <form action="">
              <div className='max-w-full'>
                <div className='w-screen flex flex-col justify-center items-center pl-1 pr-1'>
                  <div className='flex h-full flex-col'> 
                  <div  className='flex gap-8 pb-2 h-2/6'>
                    <div className='mb-4'>
                      <input className='bg-[#F8F8F9] h-16 w-96 pl-8' type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className='mb-4'>
                      <input className='bg-[#F8F8F9] h-16 w-96 pl-8' type="name" placeholder="Company (Optional)"/>
                    </div>
                  </div>
                  <div className='flex gap-8 pb-2 h-2/6'>
                    <div className='mb-4' >
                      <input className='bg-[#F8F8F9] h-16 w-96 pl-8' type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className='mb-4'>
                      <input className='bg-[#F8F8F9] h-16 w-96 pl-8' type="number" placeholder="Phone Number" />
                    </div>
                  </div>
                  </div>
                  <div className='mb-12'>
                    <input className='bg-[#F8F8F9] h-[16vh] w-[54.5vw] pl-8 pb-12' type="text" placeholder="Tell me about your project" />
                  </div>
                  <button type="button" className="text-white bg-[#496CF6] hover:bg-[#5B7BF8] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Me</button>
                </div>
              </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default Contact
