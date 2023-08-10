import { useGetItemsQuery, useDeleteItemMutation, useGetOwnerProfileQuery } from '../../Store/Api/item-slice'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
export const ItemsCard = () => {
  const { data: items = [], error } = useGetItemsQuery();
  const [deleteItem] = useDeleteItemMutation()
  const { data: myProfile = [] } = useGetOwnerProfileQuery()
  const navigate = useNavigate()
  const message = () => {
    toast.success("Item Deleted Success", { position: toast.POSITION.TOP_CENTER })
  }
  const rentToken = Cookies.get("renter")
  const handleDelete = (id) => {
    deleteItem(id).unwrap().then(() => {
      message()
      navigate("/")
    })
  }
  return (
    <div className=" md:w-[88%] mx-auto p-5 mt-5">
      <h1 className="text-2xl p-2 mt-3 ml-5 lg:ml-0">Items For Rent</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2  mt-3">
        {items.map((item) => {
          return (
            <>
            
              <div className="relative flex w-[100%]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-auto mb-3">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden  bg-white  text-gray-700">
                  <img
                    src={item.img_url}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between ">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased mr-2">
                      {item.title}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                      {item.daily_cost}$
                    </p>
                  </div>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {item.description}
                  </p>
                </div>
                <div className="p-6 pt-0 flex justify-between items-center -blue-900">


                  {
                    myProfile.id === item.owner_id ? (
                      <>

                        <div className='space-x-4'>

                          <button
                            className="  select-none rounded-lg bg-blue-gray-900/10 py-3    font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={() => {
                              handleDelete(item.id)
                            }} >
                            <FaTrash size={20} />
                          </button>

                          <Link to={`/update/${item.id}`}>

                            <button
                              className="  select-none rounded-lg bg-blue-gray-900/10 py-3    font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              type="button"
                            >
                              <FaEdit size={20} />
                            </button>
                          </Link>
                          {/* 
                  
  {
                    myProfile.id === item.owner_id &&(
                      <>
                        <Link to={`/update/${item.id}`}>
                          <FaEdit size={20} className='space-x-2' onClick={() => {
                          }} />
                        </Link>
                        <FaTrash size={20} className='ml-3' onClick={() => {
                          handleDelete(item)
                        }} />
                      </>
                    )
                  }
                  
                  */}

                        </div>

                      </>

                    ) : rentToken && (
                      <>
                        <Link to={`/items/${item.id}`}>
                          <button
                            className="  select-none rounded-lg bg-red-500 py-3 px-4 text-gray-50   font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                          >
                            Rent Now
                          </button>
                        </Link>


                      </>
                    )
                  }


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