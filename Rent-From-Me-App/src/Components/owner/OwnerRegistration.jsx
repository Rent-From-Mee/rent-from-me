
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useState } from 'react';
import { useOwnerRegistrationMutation } from '../../Store/Api/Auth'
import { useRenterRegistrationMutation } from '../../Store/Api/Renter'

function OwnerRegistration() {
  const [OwnerRegistration] = useOwnerRegistrationMutation()
  const [renterRegistration] = useRenterRegistrationMutation()
  const navigate = useNavigate()
  function message(type) {
    toast.success(`${type} Registration Success`, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
  }

  const [rollType, setRollType] = useState("Renter")


  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().required("email is required"),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = (values) => {



    if (rollType === "Owner") {
      OwnerRegistration({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password
      }).then(() => {
        console.log("OWNER", values)
        message("Owner")
        navigate("/login")
      })
    }
    if (rollType === "Renter") {
      renterRegistration({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password
      }).then(() => {
        console.log("RENTER", values)
        message("Renter")
        navigate("/login")
      })
    }

    console.log("rollType", rollType)

    // console.log(error)

  }

  return (
    <div className="flex justify-center items-center mt-24 lg:w-[70%] mx-auto">

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="lg:w-5/12 p-5 shadow-lg rounded-sm flex flex-col justify-start items-start space-y-3 w-[90%]">
          <label className="block mb-2 text-3xl font-bold text-red-500 lg:text-4xl dark:text-white">Registration</label>
          <Field type="text" id="first_name" name='first_name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" placeholder="Enter first Name" autoComplete="off" />
          <ErrorMessage name="first_name" component="div" className="text-red-500" />
          <Field type="text" id="last_name" name='last_name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Last Name" autoComplete="off" />
          <ErrorMessage name="last_name" component="div" className="text-red-500" />
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Type:</label>
          <select onChange={(e) => setRollType(e.target.value)} id="type" name='type' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" autoComplete="off">
            <option value="Renter">Renter</option>
            <option value="Owner">Owner</option>
          </select>
          <Field type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Email" autoComplete="off" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <Field type="password" id="password" name='password' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Password" autoComplete="off" />
          <ErrorMessage name="password" component="div" className="text-red-500" />
          <span className='mt-2 p-1 text-center'>
            <small className='headingText'> Do you have already an account ? </small>
            <Link className='headingText' to='/Login' >Login</Link>
          </span>
          <button type="submit" className="text-white w-full mt-3 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default OwnerRegistration