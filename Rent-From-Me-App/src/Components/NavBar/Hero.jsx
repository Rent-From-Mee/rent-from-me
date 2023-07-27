import {BiMoneyWithdraw} from "react-icons/bi";
import {MdDeliveryDining , MdSecurity} from "react-icons/md";
import {BiSupport} from "react-icons/bi";
export default function Hero() {
  return (
    <>
      <div className="bg-black/100 lg:w-[90%] p-4 mx-auto mt-20 rounded-md h-screen flex flex-col lg:flex-row justify-between items-center object-fill" style={{ backgroundImage: 'url("https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg?auto=compress&cs=tinysrgb&w=1600")', backgroundPosition: "center" }}>
        <div className="flex flex-col justify-center items-center gap-2 lg:space-y-6 text-[#fff] w-full mt-64 space-y-10  lg:mt-0">
          <h1 className="text-2xl lg:text-4xl tracking-widest">Find The Perfect Device</h1>
          <p className="text-base lg:text-xl tracking-widest text-center">Rent-From-Me offers a wide range of electronic Devices for rent</p>
          <button className="px-7 py-3 rounded-md shadow bg-[#000] text-[#fff]">Rent Now</button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-3 gap-4 md:w-[92%] xl:w-[89%] xl:gap-3   mx-auto mt-14'>
        <div className='p-8 rounded-sm shadow cursor-pointer hover:shadow-2xl border w-[90%] mx-auto xl:ml-5' data-aos="fade-up">
          <BiMoneyWithdraw className=' mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>Money Back Gurantee</h1>
          <p className='text-xs text-center tracking-normal mt-2'>Easy 30-day return policy</p>
        </div>
        <div className='p-8 rounded-sm shadow cursor-pointer hover:shadow-2xl border w-[90%] mx-auto' data-aos="fade-up">
          <MdDeliveryDining className='mx-auto' size={25} />
          <h1 className='text-1xl text-center  mt-5'>free Delivery</h1>
          <p className='text-xs text-center tracking-normal mt-2'>When you spend $50 or more</p>
        </div>
        <div className='p-8 rounded-sm shadow cursor-pointer hover:shadow-2xl border w-[90%] mx-auto ' data-aos="fade-up">
          <BiSupport className='mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>Always support</h1>
          <p className='text-xs text-center tracking-normal mt-2'>Need help? contact us anytime</p>
        </div>
        <div className='p-8 rounded-sm shadow hover:shadow-2xl cursor-pointer border w-[90%] mx-auto ' data-aos="fade-up">
          <MdSecurity className='mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>Security Payment</h1>
          <p className=' text-xs text-center tracking-normal mt-2'>Evc,Sad,Mastercard</p>
        </div>
      </div>
    </>
  )
}
