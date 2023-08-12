import { Form, Field, ErrorMessage, Formik } from 'formik'
import *  as Yup from 'yup'
import { useState } from 'react'
import { useOwnerLoginMutation } from '../Store/Api/Auth'
import { useRenterLoginMutation } from '../Store/Api/Renter'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Login() {
    const [ownerLogin] = useOwnerLoginMutation()
    const [renterLogin] = useRenterLoginMutation()
    const [rollType, setRollType] = useState("Renter")
  
    const navigate = useNavigate()

    function message() {
        toast.error(`Invalid Email or Password`, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
    }

    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is Required"),
        password: Yup.string().required("Password is Required")

    })
    const handleSubmit = (values, { resetForm }) => {
        if (rollType === "Owner") {
            ownerLogin({
                email: values.email,
                password: values.password
            }).unwrap().then(() => {
                navigate("/")
                window.location.reload()
             
            }).catch((error) => {
                message()
                console.log(error)
            })
        }

        if (rollType === "Renter") {
            renterLogin({
                email: values.email,
                password: values.password
            }).unwrap().then(() => {
                navigate("/")
                window.location.reload()
       
            }).catch((error) => {
                console.log(error)
                message()
            })
        }

        resetForm()

    }


    return (
        <div className="w-[95%]  mt-28 lg:w-[30%] mx-auto">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                <Form className=" p-10 shadow-lg rounded-sm flex flex-col justify-start items-start space-y-3">
                    <h3 className=" text-2xl mb-4 font-medium text-gray-900 dark:text-gray-900 ">Sign in Your Account </h3>
                    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Type:</label>
                    <select onChange={(e) => setRollType(e.target.value)} id="type" name='type' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" autoComplete="off">
                        <option value="Renter">Renter</option>
                        <option value="Owner">Owner</option>
                    </select>
                    <Field type="text" id="email" name='email' placeholder="email" className="bg-gray-100 border border-gray-400 text-gray-900 shadow-sm text-md focus:outline-blue-500 block w-full p-3"></Field>
                    <ErrorMessage name="email" component="div" className="text-red-500 " />
                    <Field type="password" name='password' id="password" placeholder="password" className="shadow-sm bg-gray-100 border border-gray-400 text-gray-900 text-md focus:outline-blue-500 block w-full p-3"></Field>
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                    <span className=' p-1 text-center'>
                        <small className='headingText'>Do you have an account ? </small>
                        <Link className='headingText' to='/register' >Register</Link>
                    </span>
                    <button type="submit" className="text-white mt-2 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-full px-5 py-3 text-center">log in</button>
                </Form>
            </Formik>
        </div>
    )
}
export default Login;