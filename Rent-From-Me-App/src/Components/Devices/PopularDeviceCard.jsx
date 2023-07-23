import React from 'react'

export const PopularDeviceCard = ({images}) => {
    const { image, name } = images
  return (
    <div className="ml-16 w-72 h-64 flex flex-wrap max-sm:flex max-sm:justify-center max-sm:items-center max-lg:m-auto max-sm:m-auto max-lg:ml-16 rounded-lg m-2 relative">
    <img
      src={image}
      className="w-full h-full rounded-lg"
      alt={name}
    />
    <span className="absolute bottom-2 left-2 bg-black text-white text-md py-1 px-2 rounded-md">
      {name}
    </span>
  </div>
  )
}
