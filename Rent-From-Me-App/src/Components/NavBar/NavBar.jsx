import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import "./style.css"
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  const HideMenu = () => {
    setShowMenu(false);
  }
  return (
    <header className='p-4 fixed top-0 left-0 right-0 z-20 bg-white'>
      <div className='flex flex-col  lg:flex-row lg:justify-around  lg:w-[97%] lg:mx-auto lg:items-baseline relative'>
      <h1 className='text-2xl lg:text-3xl'>Rent <span className='text-blue-700'>FromMe</span></h1>
        <div className=' flex justify-start  items-baseline absolute right-5 top-3 lg:hidden'>
          <AiOutlineMenu className='ml-7' size={28} onClick={toggleMenu} />
        </div>
        {/* navs started */}
        <nav className='w-[77%] xl:w-[75%]' >
          <div className={showMenu ? '.showList transition ease-in-out' : 'HideList'} style={{ width: '95%' }}>
            <ul className='p-2 flex flex-col lg:flex-row lg:justify-evenly lg:items-baseline transition-all duration-500 ease-in h-screen lg:h-fit' onClick={HideMenu}>
              <Link className='navlink mt-2 ml-2 xl:mt-0 xl:ml-0 text-lg tracking-wide hover:text-blue-700 transition ease-in-out hover:translate-x-1' to='/'>Home</Link>
              <Link className='navlink mt-2 ml-2 xl:mt-0 xl:ml-0 text-lg tracking-wide hover:text-blue-700 transition ease-in-out hover:translate-x-1' to='/'>Contact</Link>
              <Link className='navlink mt-2 ml-2 xl:mt-0 xl:ml-0 text-lg tracking-wide hover:text-blue-700 transition ease-in-out hover:translate-x-1' to='/'>About</Link>
              <Link className='navlink mt-2 ml-2 xl:mt-0 xl:ml-0  text-lg tracking-wide hover:text-blue-700 transition ease-in-out hover:translate-x-1' to='/Login' >Login</Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar