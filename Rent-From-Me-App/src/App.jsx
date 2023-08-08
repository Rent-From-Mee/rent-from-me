import { Route,Routes } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Login from './Forms/Login'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/NavBar/Home"
import Footer from "./footer/Footer"
import About from "./about/About"
import Contact from "./Forms/Contact"
import PrivateRoute from "./PrivateRoute"
import RentItem from "./Components/renter/RentItem"
import UpdateItem from "./Components/owner/UpdateItem";
import ItemRegistration from "./Components/owner/ItemRegistration";
import OwnerRegistration from "./Components/owner/OwnerRegistration";
import Profile from "./Components/pages/Profile";
import OwnerProfile from "./Components/pages/OwnerProfile";
import RentedItems from "./Components/renter/rentedItems";
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
             <Route path="/profile" element={<PrivateRoute />} >
             <Route path='/profile'element={<Profile/>}></Route>
             </Route>
             <Route path="/ownerProfile" element={<PrivateRoute />} >
             <Route path='/ownerProfile'element={<OwnerProfile/>}></Route>
             </Route>
             <Route path="/rentedItems" element={<PrivateRoute />} >
             <Route path='/rentedItems'element={<RentedItems/>}></Route>
             </Route>
            {/* <Route path="/items/:id" element={<PrivateRoute />} >
             </Route> */}
             {/* <Route path='/items/:id'element={<RentItem/>}></Route> */}
             <Route path="/update/:id" element={<PrivateRoute />} >
             <Route path='/update/:id'element={<UpdateItem/>}></Route>
             </Route>
             <Route path='/contact'element={<Contact/>}></Route>
             <Route path='/items/:id'element={<RentItem/>}></Route>
             <Route path='/Login'element={<Login />}></Route>
        </Routes>
        <Footer/>
    </>
  )
            }
export default App
