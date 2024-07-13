import React from 'react'

function Card() {
  return (
    <div className='max-w-[268px] mx-auto  flex items-center flex-col text-center my-8 shadow-md p-6 border-black gap-4'>
         <div className='w-14 h-14 bg-stone-300 rounded-full '></div>
         <h2 className='text-lg'>Headline</h2>
         <p className='text-gray-500'>Please add your content here. Keep it short and simple. And smile :) </p>
    </div>
  )
}

export default Card