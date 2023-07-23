import { Route,Routes,useLocation } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import OwnerRegistration from "./Forms/OwnerRegistration"
import Hero, {} from './Components/NavBar/Hero'
import Login from './Forms/Login'
import ItemRegistration from './Forms/ItemRegistration'

import {ToastContainer,toast} from 'react-toastify'


import 'react-toastify/dist/ReactToastify.css';
import LoginForm from "./Forms/ItemRegistration"


// toast.configure()
function App() {
  const location  = useLocation()


  return (
    <>
    {location.pathname === '/' ?(
      <>
      <NavBar/>
      <Hero/>
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
