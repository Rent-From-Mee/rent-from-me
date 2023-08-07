
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'


function PrivateRoute() {
    const token = Cookies.get("token")
    const rentToken   = Cookies.get("renter")
    if(rentToken ){
       return  <Outlet />
    }
    if(token){
        return <Outlet/>
    }
 
     return <Navigate to="/login" />
}

export default PrivateRoute