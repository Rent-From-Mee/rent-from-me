import React from 'react'
import { useGetItemsQuery } from '../../Store/Api/item-slice'
import { useRentedItemsQuery, useDeleteRentedItemMutation } from '../../Store/Api/Renter'
import { FaTrash } from 'react-icons/fa'
import { useNavigate,Link } from 'react-router-dom'
// import {FaTrash} from 'react-icons/fa'
export default function RentedItems() {
  const { data: items = [] } = useGetItemsQuery()
  const { data: rented = [] } = useRentedItemsQuery()
  const [deleteRentedItem] = useDeleteRentedItemMutation()
  console.log("items in the rented", items)
  console.log(" rented", rented)
  const navigate = useNavigate()
  const handleDelete = (id) => {
    deleteRentedItem(id)
      .unwrap().then(() => {
        console.log("deleted")
        navigate("/rentedItems")
        window.location.reload()
      })
  }

  const my = rented.map((renter) => { return renter.tool_id })
  console.log(my)
  return (

    <div className=" md:w-[88%] mx-auto p-5 mt-5">
      <h1 className="text-3xl p-2 lg:ml-0 text-center m-12  ">Check Your Rented Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2  mt-3">
     
        {
        rented.map((rentedItem)=>{
              const qual  = items.find((item)=>item.id  === rentedItem.tool_id)
          
           console.log("qual",qual)
        
          
          return (
            <>
              <div className="relative flex w-[100%]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-auto mb-3">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden  bg-white  text-gray-700">
                  <img
                    src={qual.img_url}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between ">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased mr-2">
                      {qual.title}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                      {qual.daily_cost}$
                    </p>
                  </div>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {qual.description}
                  </p>
                </div>
                <div className="p-6 pt-0 flex justify-end items-center -blue-900">
                  <div className='space-x-4'>

                    <button
                      className="  select-none rounded-lg bg-blue-gray-900/10 py-3    font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      onClick={() => {
                        // handleDelete()
                      }} >
                      <FaTrash size={20} />
                    </button>

               




                  </div>





              






                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
