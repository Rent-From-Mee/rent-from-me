import {Form,Field ,ErrorMessage, Formik} from 'formik'
import*  as Yup from 'yup'
import { useState } from 'react'
import {useOwnerLoginMutation} from '../Store/Api/Auth'
import { useRenterLoginMutation, useFetchRenterQuery } from '../Store/Api/Renter'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Login(){
    const [ownerLogin,{error = {},isSuccess}]  = useOwnerLoginMutation()
    const [ renterLogin ] = useRenterLoginMutation()
    const [ rollType, setRollType ] = useState("Renter")
    const {data:userRenter = {} } = useFetchRenterQuery()
    const navigate  = useNavigate()

    function message(){
        toast.error(`Invalid Email or Password`,{position:toast.POSITION.TOP_CENTER,autoClose:2000})
      }

    const initialValues ={
        email: '',
        password:''
    
    }
    const validationSchema = Yup.object({
        email:Yup.string().required("Email is Required"),
        password: Yup.string().required("Password is Required")
    
    })
    const handleSubmit = (values,{resetForm})=>{
        if(rollType === "Owner"){
            ownerLogin({
                email:values.email,
                password:values.password
             }).unwrap().then(()=>{
                navigate("/addItem")
           console.log(error)
             }).catch((error)=>{
                message()
             })
        }

        if(rollType === "Renter"){
            renterLogin({
                email:values.email,
                password:values.password
             }).unwrap().then(()=>{
                navigate("/addItem")  
           console.log("Users",userRenter)
           console.log(error)
             }).catch((error)=>{
                console.log(error)
                message()
             })
        }
        
     resetForm()

    }


    return(
        <div className="block bg-white flex justify-center items-center mt-8 max-w-md mx-auto md:w-3/4 lg:w-1/2">
           <Formik
           initialValues={initialValues }
           validationSchema = {validationSchema}
           onSubmit = {handleSubmit}
          
           >
           
            <Form className="bg-white p-10 shadow-lg rounded-sm">

                <div className="mb-3">
                <h3 className=" text-2xl mb-4 font-medium text-gray-900 dark:text-gray-900 ">Sign in Your Account </h3>
                </div>
                <div className="mb-2">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Type:</label>
            <select onChange={(e)=>setRollType(e.target.value)} id="type" name='type' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" autoComplete="off">
            
            <option value="Renter">Renter</option>
            <option value="Owner">Owner</option>
            </select>
            </div>
                <div className="mb-3">
                    <label className="block mb-4 text-sm font-medium md:text-xl text-gray-700 dark:text-white">Email</label>
                    <Field type="text" id="email"name = 'email' placeholder="email" className="bg-gray-100 border border-gray-400 text-gray-900 shadow-sm text-md focus:outline-blue-500 block w-96 p-3"></Field>
                    <ErrorMessage name="email" component="div" className="text-red-500 " />
                </div>
                    
                <div className="mb-3">
                    <label className="block mb-4 text-sm font-medium md:text-xl text-gray-700 dark:text-white">Password </label>
                    <Field type="password" name = 'password' id="password" placeholder="password" className="shadow-sm bg-gray-100 border border-gray-400 text-gray-900 text-md focus:outline-blue-500 block w-96 p-3"></Field>
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>

                    <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-96 px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-900">log in</button>
            </Form>
           </Formik>
        </div>
    )
}
export default Login;