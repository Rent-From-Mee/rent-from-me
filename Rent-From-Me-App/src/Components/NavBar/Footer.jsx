import React from 'react'
import  logo  from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

function Footer() {
    const token = Cookies.get("token")
    function handleLogout(){
        Cookies.remove("token")
    }
  return (
    
<footer className="bg-white dark:bg-gray-900 m-4">
    <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
                <img src={logo} className="h-8 mr-3" alt="Rent Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rent From Me</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <button className='inline rounded-2xl  mr-2    text-black hover:bg-black hover:text-white border px-10 py-3 '>
                  <Link to='/'>Home</Link>
                  </button>
                </li>
                
                {
                    token ? <li>
                     <Link to="/login" onClick={handleLogout} className="hover:underline">Logout</Link>
                </li> :
                     <button className='inline rounded-2xl  mr-2    text-black hover:bg-black hover:text-white border px-10 py-3 '>
                     <Link to='/login'>Login</Link>
                     </button>
                }
                
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Gabi Rents™</Link>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer