import {BiMoneyWithdraw} from "react-icons/bi";
import {MdDeliveryDining , MdSecurity} from "react-icons/md";
import {BiSupport} from "react-icons/bi";
import Avatar from "../../assets/bg-cover.png";
export default function Hero() {
  return (
    <>
      <div className="md:w-[88%] p-3 mx-auto mt-20 lg:mt-12 rounded-md h-screen flex flex-col justify-evenly lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col justify-start items-start gap-3 lg:space-y-2 text-[#000] w-full space-y-4  lg:mt-[-40px]">
          <span className="text-xl font-medium">Plan your trip now</span>
          <h1 className="text-2xl lg:text-6xl font-bold tracking-widest leading-loose">Find The Perfect Device</h1>
          <p className="text-base lg:text-xl tracking-widest leading-loose h-fit" style={{lineHeight:"2"}}>Rent-From-Me offers a wide range of electronic Devices for rent</p>
          <button className="px-8 py-3 rounded shadow bg-red-500 text-[#fff]">Rent Now</button>
        </div>
        <img className=" rounded-lg lg:rotate-3" src={Avatar} alt="bg-cover" />
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
