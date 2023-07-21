import {Formik , Form,Field,ErrorMessage} from 'formik'
import { useEffect } from 'react';
import * as Yup from 'yup';
import {useOwnerRegistrationMutation} from '../Store/Api/Auth' 
function OwnerRegistration() {
  const [OwnerRegistration,{isSuccess,error = {}}]  = useOwnerRegistrationMutation()
  const initialValues = {
    first_name: '', 
    last_name :'',
    email :'',
    password:''
  }
  const validationSchema = Yup.object({
    first_name : Yup.string().required("First Name is required"),
    last_name : Yup.string().required("Last Name is required"),
    email : Yup.string().required("email is required"),
    password : Yup.string().required("Password is required")
  });

const handleSubmit  = (values)=>{
  
  OwnerRegistration({
    first_name:values.first_name, 
    last_name:values.last_name, 
    email: values.email, 
    password: values.password
  })
  console.log(error)

}
useEffect(()=>{
  if(isSuccess){
    console.log("registerd")
  }
},[isSuccess])
  return (
    <div className="max-w-md p-4 lg:max-w-5xl bg-white shadow-sm rounded-md md:max-w-3xl mx-auto">
   
   <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit =  {handleSubmit}
 >
<Form  className="bg-white p-8 shadow-md rounded-sm">
  <div className="mb-2 text-center flex justify-center ">
    <label className="block mb-2 text-3xl font-bold font-medium text-black lg:text-4xl dark:text-white">Owner Registration</label>
     </div>

  <div className="mb-2">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">First Name:</label>
    <Field type="text" id="first_name" name = 'first_name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" placeholder="Enter first Name" autoComplete="off"  />
    <ErrorMessage name="first_name" component="div" className="text-red-500" />
    
  </div>

  <div className="mb-2">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Last Name:</label>
    <Field type="text" id="last_name"name  = 'last_name'className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Last Name" autoComplete="off"  />
    <ErrorMessage name="last_name" component="div" className="text-red-500" />
    
  </div>

  <div className="mb-2">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email:</label>
    <Field type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Email" autoComplete="off"  />
    <ErrorMessage name="email" component="div" className="text-red-500" />
    
  </div>

  <div className="mb-4">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Password:</label>
    <Field type="password" id="password" name='password' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Password" autoComplete="off"  />
    <ErrorMessage name="password" component="div" className="text-red-500" />
    
  </div>
  
  
  <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
</Form>
</Formik>   
</div>
  )
}

export default OwnerRegistration