import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import "./style.css"
import Cookies from 'js-cookie';
const NavBar = () => {
  const [navs, showNavs] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const token = Cookies.get("token")
  const rentToken = Cookies.get("renter")
  useEffect(() => {
    if (token || rentToken) {
      setIsAuthenticated(true)
    }

  }, [token, rentToken])

  const showMenu = () => {
    showNavs(!navs)
  }
  const hideMenu = () => {
    showNavs(false);
  }

  function handleLogout() {
    Cookies.remove("token")
    Cookies.remove("renter")
    setIsAuthenticated(false)
  }

  return (
    <header className='p-3 fixed top-0 left-0 right-0 z-20 bg-[#F4F6F7] shadow'>
      <div className='flex flex-col p-1 lg:flex-row lg:justify-around  lg:w-[97%] lg:mx-auto lg:items-baseline relative'>
        <h1 className='text-2xl lg:text-3xl font-bold'>Rent <span className='text-red-500'>FromMe</span></h1>
        <div className=' flex justify-start  items-baseline absolute right-7 top-3  lg:hidden'>
          <AiOutlineMenu className='ml-7' size={28} onClick={showMenu} />
        </div>
        <nav className='lg:w-8/12 mt-2 md:mt-0' >
          <div className={navs ? "showList" : "HideList"}>
            <ul className='h-screen lg:h-fit flex flex-col justify-start items-start gap-3 lg:flex-row lg:justify-around lg:items-center text-lg' onClick={hideMenu}>

              <Link to="/">HOME</Link>


              {token ? (
                <>
                  <Link to="/addItem">CREATE ITEM</Link>
                  <Link to="/ownerProfile">Profile</Link>


                </>
              ) : ("")}
              {rentToken ? (
                <>

                  <Link to="/rentedItems">Rented Items</Link>
                  <Link to="/profile">Profile</Link>


                </>
              ) : ("")}


              {/*
            
            */}
              <Link to="/About">ABOUT</Link>
              <Link to="/Contact">CONTACT</Link>
              <span className=' flex flex-row justify-end items-center space-x-10'>
                {/* <span className='flex flex-row justify-between '><FaUserCircle className='mr-2 mt-1' /> Hi.{displayName}</span> */}
                {/* <button className='px-4 py-2 text-white bg-[#03256C] rounded-md shadow-md'>Logout </button> */}
                {
                  token || rentToken ? (
                    <Link onClick={handleLogout} to="/Login">Sign Out</Link>
                  ) : (
                    <Link to="/Login">Sign In</Link>
                  )
                }
                {
                  !token && !rentToken && (
                    <button className='px-5 py-2 text-white bg-red-500 rounded-md shadow-md'> <Link to="/Register">Get Started</Link> </button>
                  )
                }

              </span>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar