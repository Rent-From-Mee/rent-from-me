import { Route,Routes } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import OwnerRegistration from "./Forms/OwnerRegistration"
import Login from './Forms/Login'
import ItemRegistration from './Forms/ItemRegistration'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UpdateItem from "./Forms/UpdateItem"
import Home from "./Components/NavBar/Home"
import Footer from "./footer/Footer"
import About from "./about/About"
import Contact from "./Forms/Contact"
import PrivateRoute from "./PrivateRoute"
function App() {
  return (
    <>
    <ToastContainer/>
    <NavBar/>
    <Routes>
             <Route path='/'element={<Home/>}></Route>
             <Route path='/About'element={<About/>}></Route>
             <Route path='/register'element={<OwnerRegistration/>}></Route>

            <Route path="/addItem" element={<PrivateRoute />} >
             <Route path='/addItem'element={<ItemRegistration/>}></Route>
             </Route>
             <Route path="/update/:id" element={<PrivateRoute />} >
             <Route path='/update/:id'element={<UpdateItem/>}></Route>
             </Route>
             
             <Route path='/contact'element={<Contact/>}></Route>
             <Route path='/Login'element={<Login />}></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
