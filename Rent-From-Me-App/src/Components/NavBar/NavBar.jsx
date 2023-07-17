import { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import{AiOutlineClose} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import {GrLogout} from 'react-icons/gr'
import {AiOutlineLogin} from 'react-icons/ai'
import {FaRegAddressCard} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
  function NavBar() {
    const [hiding, setHiding] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between  items-center p-4 shadow '>
      {/* left side  */}
        <div className='flex items-center'>
        <div className='cursor-pointer'>
            <AiOutlineMenu size={25} onClick = {()=>{setHiding(!hiding)}}/>
        </div>
        <h1 className='text-xl sm:3xl lg:text-3xl px-2 '>Gebi <Link to ='/' className='font-bold cursor-pointer'>Rents</Link></h1>
        </div>
        
        <div className='flex    text-[20px] cursor-pointer font-sans capitalize  text-xl hidden sm:flex' >
            <div className='flex text-2xl  '>
             
            <div className='flex cursor-pointer'>

                <Link to='/' className='px-2 text-2xl  hover:text-blue-500'>Home</Link>
                <Link to='/register' className='px-2 text-2xl  hover:text-blue-500'>get started</Link>
                <Link to='/login' className='px-2 text-2xl  hover:text-blue-500'>Login</Link>
                <Link to='/register' className='px-2 text-2xl  hover:text-blue-500'>Register</Link>
              
            
            </div>
            </div>
         </div>
     
        
         {hiding ?
       <div className='bg-black/50 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={hiding ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setHiding(!hiding)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4 uppercase'>
          Rent from <span className='font-bold'>Me</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800 capitalize'>
                <Link to='/' className='text-xl py-4 flex w-full hover:bg-gray-100'><FaHome size={25} className='mr-4' /> Home</Link>
                <Link className='text-xl py-4 flex w-full hover:bg-gray-100'><FaUser size={25} className='mr-4' /> Profile</Link>
                <Link className='text-xl py-4 flex  w-full hover:bg-gray-100'><GrAdd size={25} className='mr-4' /> add Item</Link>

                <Link to='/register' className='text-xl py-4 flex  w-full hover:bg-gray-100'><FaRegAddressCard size={25} className='mr-4' /> Register</Link>
                <Link className='text-xl py-4 flex  w-full hover:bg-gray-100'><AiOutlineLogin size={25} className='mr-4' /> Login </Link>
                <Link className='text-xl py-4 flex absolute bottom-0 left-0 mb-5 bg-gray-100 w-full px-4'><GrLogout size={25} className='mr-4 ' /> logout</Link>
 
            </ul>
        </nav>
      </div>
    </div>
  )
}
export default NavBar
