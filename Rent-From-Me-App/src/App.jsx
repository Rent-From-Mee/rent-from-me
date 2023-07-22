import { Route,Routes,useLocation } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import OwnerRegistration from "./Forms/OwnerRegistration"
import Hero, {} from './Components/NavBar/Hero'
import PopularDeviceList from "./Components/Devices/PopularDeviceList"
import RatedDeviceList from "./Components/Devices/RatedDeviceList"



function App() {
  const location  = useLocation()


  return (
    <>
    {/* <NavBar/> */}
    {/* <OwnerRegistration /> */}
    {location.pathname === '/' ?(
      <>
      <NavBar/>
      <Hero/>
      <PopularDeviceList />
      <RatedDeviceList />
      {/* <Hero/> */}
      
   
      </>
      
      ):(<>
          <NavBar/>
        <Routes>
        
        <Route path='/'element={<NavBar/>}></Route>
        <Route path='/register'element={<OwnerRegistration/>}></Route>
        </Routes>
      </>
        )}
    </>
  )
}

export default App
