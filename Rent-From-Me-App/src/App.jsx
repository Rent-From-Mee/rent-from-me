import { Route,Routes,useLocation } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import OwnerRegistration from "./Forms/OwnerRegistration"
import Hero, {} from './Components/NavBar/Hero'



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
