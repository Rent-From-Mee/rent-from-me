import { Link } from "react-router-dom"
import { HiInformationCircle, HiLightBulb } from 'react-icons/hi';
import { SiSimplenote } from 'react-icons/si';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import profile from "../assets/bg-cover.png"
const About = () => {
    return (
        <>
            <div className="mt-20 p-10 bg-red-500 text-white">
                <div className=" p-4">
                    <div className="p-3">
                        <h1 className="text-4xl tracking-tighter text-center">About Us</h1>
                    </div>
                    <span className="flex justify-center items-center space-x-4">
                        <Link to="/" className="text-xl">Home</Link> <small>/</small> <span className="text-lg">About</span>
                    </span>
                </div>

            </div>

            <div className='p-5 text-[#000] mt-14'>
                <div className='flex flex-col lg:flex-row justify-start lg:ml-20 shadow-inner'>
                    <img className='lg:w-[35%] h-[72] rounded-md' src={profile} alt='profiles' />
                    <div className='lg:w-[50%] leading-8 lg:ml-10 tracking-widest space-y-3 mt-10'>
                        <span className='text-3xl'>We Are Team Developed By Rent <span className="text-red-500">FromMe</span></span>
                        <p className='text-2xl'>Guided Us COE Founder Gabi School</p>
                        <p> Tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person!
                            Rent From Me: like AirBnB, but for high-end electronics. Are you tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person!.</p>
                        <span className='flex flex-row justify-start space-x-3 '>
                            <BsFacebook className='cursor-pointer duration-500  text-lg ease-in text-[#000]  inline' size={22} />
                            <BsInstagram className='ml-4 cursor-pointer duration-500  text-lg  ease-in text-[#000]  inline ' size={22} />
                            <BsTwitter className='ml-4 cursor-pointer duration-500  text-lg  ease-in text-[#000]  inline' size={22} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-3xl font-bold text-center">Our<span className="text-red-500">Team</span></h1>
                <div className='flex flex-col lg:flex-row justify-center mx-auto mt-14  p-3 lg:w-[87%] text-[#000] gap-6'>

                    <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                        <img className="w-full rounded-lg" src="https://images.pexels.com/photos/7567605/pexels-photo-7567605.jpeg" alt="profile team" />
                        <p className="text-xl">Amiir Muuse</p>
                        <p className="text-base">Creative and Owner</p>
                        <span className='flex flex-row justify-start space-x-3 pb-2'>
                            <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-red-500  inline' size={20} />
                            <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-red-500  inline ' size={20} />
                            <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-red-500  inline' size={20} />
                        </span>
                    </div>

                    <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                        <img className="w-full rounded-lg" src="https://images.pexels.com/photos/7567605/pexels-photo-7567605.jpeg" alt="profile team" />
                        <p className="text-xl">Amiir Muuse</p>
                        <p className="text-base">Creative and Owner</p>
                        <span className='flex flex-row justify-start space-x-3 pb-2'>
                            <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-red-500  inline' size={20} />
                            <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-red-500  inline ' size={20} />
                            <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-red-500  inline' size={20} />
                        </span>
                    </div>

                    <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                        <img className="w-full rounded-lg" src="https://images.pexels.com/photos/7567605/pexels-photo-7567605.jpeg" alt="profile team" />
                        <p className="text-xl">Amiir Muuse</p>
                        <p className="text-base">Creative and Owner</p>
                        <span className='flex flex-row justify-start space-x-3 pb-2'>
                            <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-red-500  inline' size={20} />
                            <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-red-500  inline ' size={20} />
                            <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-red-500  inline' size={20} />
                        </span>
                    </div>


                    <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full '>
                        <img className="w-full rounded-lg" src="https://images.pexels.com/photos/7567605/pexels-photo-7567605.jpeg" alt="profile team" />
                        <p className="text-xl">Amiir Muuse</p>
                        <p className="text-base">Creative and Owner</p>
                        <span className='flex flex-row justify-start space-x-3 pb-2'>
                            <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-red-500  inline' size={20} />
                            <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-red-500  inline ' size={20} />
                            <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-red-500  inline' size={20} />
                        </span>
                    </div>

                    


                </div>
            </div>
        </>
    )
}

export default About