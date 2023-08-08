import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
import { MdKeyboardReturn } from 'react-icons/md'

function PrivateRoute() {
    const token = Cookies.get("token")
    const rentToken   = Cookies.get("renter")
    if(rentToken ){
       return  <Outlet />
    }
    if(token){
        return <Outlet/>
    }
    // !rentToken &&(return (<Navigate  to ="/login"/>))
    // if(!token){
    //     return <Navigate to="/login" />
    // }
     return <Navigate to="/login" />
}

export default PrivateRoute