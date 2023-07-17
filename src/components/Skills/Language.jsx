import React from 'react'

const Language = (props) => {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 w-[15%] m-12">
    <h1 className='text-5xl'>{props.logo}</h1>
    <p className="font-semibold mt-2 text-center">{props.name}<span className='ml-1'>{props.fluency}</span></p>
  </div>
  )
}

export default Language

