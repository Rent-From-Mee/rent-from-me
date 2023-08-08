import React from 'react'
import {useGetItemsQuery} from '../../Store/Api/item-slice'
import {useRentedItemsQuery,useDeleteRentedItemMutation } from '../../Store/Api/Renter'
import {FaTrash} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function RentedItems() {
    const {data:items = []} = useGetItemsQuery()
    const {data:rented = []} = useRentedItemsQuery()
    const [deleteRentedItem] = useDeleteRentedItemMutation()
    console.log("items in the rented",items)
    console.log(" rented",rented)
    const navigate  = useNavigate()
    const handleDelete=(id)=>{
        deleteRentedItem(id)
        .unwrap().then(()=>{
          console.log("deleted")
          navigate("/rentedItems")
          window.location.reload()
        })
    }

  const my  =  rented.map((renter)=>{return renter.tool_id})
  console.log(my)
  return (
    <div className="flex flex-col  text-xl w-full sm:w-[95%] m-auto  mt-20 ">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr className='bg-red-500 text-white'>
                <th scope="col" className=" py-4">#</th>
                <th scope="col" className=" py-4">Start Date</th>
                <th scope="col" className=" py-4">End Date</th>
                <th scope="col" className=" py-4">Total Cost</th>
                <th scope="col" className=" py-4">Action</th>
              </tr>
            </thead>
            <tbody>
                {rented.map((rentedItem)=>{
                const qual  = items.find((item)=>item.id  === rentedItem.tool_id)
                  
                    return(
                        <>
                           <tr className="border-b dark:border-neutral-500 bg-white ">
                <td className="whitespace-nowrap px-2 py-4 font-medium">{rentedItem.id}</td>
                <td className="whitespace-nowrap px-2 py-4">{rentedItem.start_date}</td>
                <td className="whitespace-nowrap px-2 py-4">{rentedItem.end_date}</td>
                <td className="whitespace-nowrap px-2 py-4">{rentedItem.total_cost}</td>
                <td className="whitespace-nowrap px-2 py-4"><button>{<FaTrash className='text-red-500' onClick={()=>{
                  handleDelete(rentedItem.id)
                }}/>}</button></td>
               <td><img src={qual.img_url} className='w-8 h-4' alt="" /></td>
              {console.log("find",qual.img_url)}

              
              </tr>
                        </>

                    )
                })}
           
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}
