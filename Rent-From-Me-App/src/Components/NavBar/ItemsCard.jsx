
import {useGetItemsQuery,useDeleteItemMutation} from '../../Store/Api/item-slice'
import {FaEdit,FaTrash} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
export const ItemsCard = () => {
  const { data: items = [], error } = useGetItemsQuery();
  const [deleteItem] = useDeleteItemMutation()
  const navigate  = useNavigate()
const message  = ()=>{
  toast.success("Item Deleted Success",{position:toast.POSITION.TOP_CENTER})
}
  console.log("ITEM",items)
  const handleDelete = (item)=>{
    deleteItem(item.id).unwrap().then(()=>{
      message()
      navigate("/")
    })
  }
  return (
    <div className=" md:w-[88%] mx-auto p-2 mt-5">
      <h1 className="text-2xl p-2 mt-3 ml-5 lg:ml-0">Items For Rent</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 space-y-3 mt-3">
        {items.map((item)=>{
          return(
            <>
        <div key={item.id} className="flex flex-col justify-start items-start space-y-3 transition hover:shadow-lg ease-in-out hover:border bg-[#fff] p-2 rounded ">
          <img src={item.img_url} className = 'w-full  object-cover h-[400px]' alt="" />
          <div className=" space-y-2 ">
            <h1 className="text-2xl">{item.title}</h1>
            <p className="text-base ">Daily Cost<span className=" ml-3  text-red-500">{item.daily_cost}</span></p>
          </div>
        
          <div className="space-y-2">
            <p>
        {item.description}
        </p>

          </div>
          <div className="flex flex-row text-red-500 ">
            <Link to = {`/update/${item.id}`}>
          <FaEdit size={20}  className = 'space-x-2' onClick={()=>{

          }}/> 
            </Link>
          <FaTrash size={20} className= 'ml-3' onClick={()=>{
           handleDelete(item)
          }}/>
        </div>
        </div>
        </>

          )
        })}

      


      </div>
    </div>
  )
}

export default ItemsCard