import { GrNext } from "react-icons/gr"
import { Link } from "react-router-dom"

function RatedDeviceCard({images}) {
    const { image, name, rating, desc, price } = images
  return (
    <div className="w-40 md:max-w-[1640px] max-sm:w-full max-sm:m-auto bg-white shadow-md max-sm:p-2 rounded relative">
        <img src={image} alt={name} className="w-full aspect-video rounded rounded-b-none" />
        <p className="text-lg text-gray-700 ml-1">{name}</p>
        <p className="text-xs bg-gray-900 text-white px-3 text-center rounded-full ml-1 absolute top-2 left-2">{rating}</p>
        <p className="text-sm text-gray-800 ml-1 pr-1 break-words font-semibold">{desc} Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex justify-between items-center pb-2 pr-2">
        <p className="text-lg font-bold text-gray-900 ml-1">{price}</p>
        <Link to={``}>
            <GrNext />
        </Link>
        </div>
    </div>


  )
}

export default RatedDeviceCard