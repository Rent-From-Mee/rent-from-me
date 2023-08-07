import React from 'react'
import { useEffect, useState } from 'react'
// import { useFetchUserQuery } from '../../Store/Api/Auth'
import { useGetOwnerProfileQuery } from '../../Store/Api/item-slice'
// import Cookies from 'js-cookie'
import { useRentProfileQuery } from '../../Store/Api/Renter'
export default function Profile() {
    const [renter, setRenter] = useState(false)
    const [owner, setOwner] = useState(false)
    // const { data: rentUsers = [] } = useGetRenterProfileQuery()
    const { data: ownerProfile = [] } = useGetOwnerProfileQuery()

    // const renterToken = Cookies.get("renter")
    // console.log("rentes query ", rentUsers)
    const { data: rentProfile = [] } = useRentProfileQuery()
    useEffect(() => {

        if (ownerProfile) {
            setOwner(true)
            // setIsRenterProfile(false)
        }
        if (rentProfile) {
            setRenter(true)
        }


    }, [ownerProfile, rentProfile])


    console.log("first", ownerProfile.first_name)
    return (
        <>
            <div className='bg-white w-[90%] md:w-1/2  m-auto lg:w-1/3  rounded-lg shadow-lg  '>
                <div className='mt-2 w-full  h-[300px] bg-red-500 flex flex-col justify-center items-center space-y-5  '>
                    <img
                        src="https://images.pexels.com/photos/17823726/pexels-photo-17823726/free-photo-of-kitten-girls-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="items"
                        className=' rounded-full w-[100px] h-[100px]   mt-10 object-cover' />

                    <h3 className='text-gray-100 font-normal text-2xl'>
                        User Name
                    </h3>
                </div>
                <div>
                    <div className='text-[20px] mt-2'>
                        <p className='px-10 pt-2 '>Type :
                            <span className='px-3'>air@</span></p>
                    </div>

                    <div className='text-[20px] mt-2 mb-2 pb-10'>
                        <p className='px-10 pt-2 '>Email :
                            <span className='px-3'>
                                {ownerProfile && (ownerProfile.email)}
                                {rentProfile && (rentProfile.email)}</span></p>

                    </div>


                </div>


            </div>

        </>



    )
}
