import { GrNext } from "react-icons/gr"
import { Link, useParams } from "react-router-dom"
import {useGetItemsQuery,useDeleteItemMutation} from '../../Store/Api/item-slice'
import {FaEdit, FaTrash} from 'react-icons/fa'
import {toast} from 'react-toastify'
import Cookies from "js-cookie"
function RatedDeviceCard({images}) {
  const { data: items = [], error } = useGetItemsQuery();
  const token = Cookies.get("token")
const [deleteItem,{e =  {}}] = useDeleteItemMutation()

  const message  = ()=>{
    if(e){
      console.log(e)
    }
    toast.success(`Item Deleted Success`,{position:toast.POSITION.TOP_CENTER,autoClose:2000})
  }
  

  //  console.log("items Title",items[15].img_url)
   
  return (
    <div  className="max-w-[92%] grid grid-cols-8 max-2xl:grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:items-center gap-2 m-auto">
      {
        items.map((item)=>{
          // console.log(item.img_ur)
          return(
            <div key={item.id} className="w-40 mx-4 md:max-w-[1640px] max-sm:w-full max-sm:m-auto bg-white shadow-md max-sm:p-2 rounded relative">
            <img src={item.img_url} alt={item.id} className="w-full aspect-video rounded rounded-b-none" />
        <p className="text-lg text-gray-700 ml-1">{item.title}</p>
        <p className="text-xs bg-gray-900 text-white px-3 text-center rounded-full ml-1 absolute top-2 left-2">{}</p>
        <p className="text-sm text-gray-800 ml-1 pr-1 break-words font-semibold">Description: {item.description} </p>
        <div className="flex justify-between items-center pb-2 pr-2">
        <p className="text-lg font-bold text-gray-900 ml-1">${item.daily_cost}</p>
        { token && (
          <>
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
            </>
           )}
        

        </div>
            </div>
          )
        })
      }
      
    </div>


  )
}

export default RatedDeviceCard