import { GrNext } from "react-icons/gr"
import { Link, useParams } from "react-router-dom"
import {useGetItemsQuery,useDeleteItemMutation} from '../../Store/Api/item-slice'
import {FaEdit, FaTrash} from 'react-icons/fa'
import {toast} from 'react-toastify'
function RatedDeviceCard({images}) {
  const { data: items = [], error } = useGetItemsQuery();
const [deleteItem,{e =  {}}] = useDeleteItemMutation()

  const message  = ()=>{
    if(e){
      console.log(e)
    }
    toast.success(`Item Deleted Success`,{position:toast.POSITION.TOP_CENTER,autoClose:2000})
  }
  

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
        <Link to={`/update/${item.id}`}>
            <button className="mr-2">
              <FaEdit className="text-blue-900" size={20} />
            </button>
            </Link>
        
            <button className="mr-2" onClick={()=>{
              deleteItem(item.id).unwrap().then(()=>{

                message()
              }).catch((error)=>{
                  console.log(error)
              })

            }}>
              <FaTrash className="text-blue-900" size={20} />
            </button>
           
        {/* <Link to={``}>
            <GrNext />
        </Link> */}

        </div>
            </>
          )
        })
      }
      
    </div>


  )
}

export default RatedDeviceCard