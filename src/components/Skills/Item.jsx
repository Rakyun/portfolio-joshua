import React from 'react'

const Item = (props) => {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 w-[15%] m-6">
    {props.logo}
    <p className="font-semibold text-center">{props.name}</p>
  </div>
  )
}

export default Item