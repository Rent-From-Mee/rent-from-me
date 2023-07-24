import { Route,Routes,useLocation } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import OwnerRegistration from "./Forms/OwnerRegistration"
import Hero, {} from './Components/NavBar/Hero'
import Login from './Forms/Login'
import ItemRegistration from './Forms/ItemRegistration'

import {ToastContainer,toast} from 'react-toastify'
import PopularDeviceList from "./Components/Devices/PopularDeviceList"
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from "./Forms/ItemRegistration"
// import RatedDeviceCard from "./Components/Devices/RatedDeviceCard"
import RatedDeviceList from "./Components/Devices/RatedDeviceList"


// toast.configure()
function App() {
  const location  = useLocation()


  return (
    <>
    {location.pathname === '/' ?(
      <>
      <NavBar/>
      <Hero/>
      <PopularDeviceList />
      <RatedDeviceList/>
      </>
      ):(<>
          <NavBar/>
        <Routes>
             <Route path='/'element={<NavBar/>}></Route>
             <Route path='/register'element={<OwnerRegistration/>}></Route>
             <Route path='/addItem'element={<ItemRegistration/>}></Route>
             <Route path='/login'element={<Login/>}></Route>
        </Routes>
      </>
        )}
    <ToastContainer/>
    </>
  )
}

export default App
