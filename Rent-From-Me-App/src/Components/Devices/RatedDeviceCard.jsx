import { GrNext } from "react-icons/gr"
import { Link } from "react-router-dom"
import {useGetItemsQuery} from '../../Store/Api/item-slice'

function RatedDeviceCard({images}) {
  const { data: items = [], error } = useGetItemsQuery();
  
     items.forEach((item)=>{
      console.log("image",item.img_url
      )
     })
  

  //  console.log("items Title",items[15].img_url)
   
  return (
    <div className="w-40 bg-black md:max-w-[1640px] max-sm:w-full max-sm:m-auto bg-white shadow-md max-sm:p-2 rounded relative">
      {
        items.map((item)=>{
          // console.log(item.img_ur)
          return(
            <>
            <img src={item.img_url} alt={item.id} className="w-full aspect-video rounded rounded-b-none" />
        <p className="text-lg text-gray-700 ml-1">{item.title}</p>
        <p className="text-xs bg-gray-900 text-white px-3 text-center rounded-full ml-1 absolute top-2 left-2">{}</p>
        <p className="text-sm text-gray-800 ml-1 pr-1 break-words font-semibold">Description {item.description} </p>
        <div className="flex justify-between items-center pb-2 pr-2">
        <p className="text-lg font-bold text-gray-900 ml-1">{item.daily_cost}</p>
        <Link to={``}>
            <GrNext />
        </Link>
        </div>
            </>
          )
        })
      }
        {/* <img src={image_url} alt={name} className="w-full aspect-video rounded rounded-b-none" />
        <p className="text-lg text-gray-700 ml-1">{name}</p>
        <p className="text-xs bg-gray-900 text-white px-3 text-center rounded-full ml-1 absolute top-2 left-2">{rating}</p>
        <p className="text-sm text-gray-800 ml-1 pr-1 break-words font-semibold">{desc} Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex justify-between items-center pb-2 pr-2">
        <p className="text-lg font-bold text-gray-900 ml-1">{price}</p>
        <Link to={``}>
            <GrNext />
        </Link>
        </div> */}
    </div>


  )
}

export default RatedDeviceCard