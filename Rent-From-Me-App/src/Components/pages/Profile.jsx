
import { useRentProfileQuery } from '../../Store/Api/Renter'
export default function Profile() {

    const { data: rentProfile = [] } = useRentProfileQuery()

    return (
        <>
            <div className='bg-white w-[90%] md:w-1/2  m-auto lg:w-1/3 mt-32  rounded-lg shadow-lg  '>
                <div className='mt-2 w-full  h-[300px] bg-red-500 flex flex-col justify-center items-center space-y-5  '>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/236/236831.png?w=740&t=st=1691426950~exp=1691427550~hmac=fad27366588b217904035a5f2fbca06f421e4ce6b427940e8d8a4501ce4e62af" alt="items"
                        className=' rounded-full w-[100px] h-[100px]   mt-10 object-cover' />

                    <h3 className='text-gray-100 font-normal text-2xl'>
                        {rentProfile&&rentProfile.first_name + "  " + rentProfile.last_name}
                    </h3>
                </div>
                <div>
                    <div className='text-[20px] mt-2'>
                        <p className='px-10 pt-2 '>Type :
                            <span className='px-3'>Renter</span></p>
                    </div>

                    <div className='text-[20px] mt-2 mb-2 pb-10'>
                        <p className='px-10 pt-2 '>Email :
                            <span className='px-3'>{rentProfile&&rentProfile.email}</span></p>

                    </div>


                </div>


            </div>

        </>



    )
}
