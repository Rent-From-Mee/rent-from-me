import React from 'react'

export default function Hero() {
  return (
    <div className='max-w-[1650px] p-4 mx-auto rounded-lg'>
      {/* overlay */}
        <div className=' max-h-[500px] relative'>

        <div className='bg-black/80 text-gray-200 absolute  w-full h-full max-h-[500px] flex flex-col justify-center space-y-5 font-serif '>
            <h1 className='font-bold  px-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl  '>Welcome To Gabi Renting</h1>
      
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl  px-7'>Lorem ipsum dloremolor sit amet to?</p>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
      
    </div>
  )
}
