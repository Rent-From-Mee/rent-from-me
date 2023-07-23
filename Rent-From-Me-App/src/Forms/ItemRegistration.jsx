import React from 'react'
import {Form, Field,ErrorMessage, Formik} from 'formik'
import {AiOutlineUser} from 'react-icons/ai'
export default function ItemRegistration() {
  return (
    <div className=' w-full   mx-auto max-h-[700px] shadow-lg  bg-gray-50  flex-col lg:flex lg:flex-row   sm:w-8/12 mt-4 rounded-lg '>
      <div className='w-full lg:w-1/2 '>

      <img className='w-full   max-h-[300px] sm:max-h-[500px] md:max-h-[700px] lg:max-h-[700px]  object-cover object-center'  src="https://images.pexels.com/photos/2194399/pexels-photo-2194399.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </div>
      <div className=' p-3 bg-blue-0 mx-auto lg:ml-10 '>

      <h2 className=' text-[26px] sm:text-4xl   font-bold tracking-norma md:text-green-900 lg:text-4xl sm:text-blue-400'>Create Your Account Here</h2>

        <Formik>
        <Form className='w-full '>
     <div className='mb-2 relative '>

    <label className=" mb-3 mt-5 text-[24px]  text-black tracking-wide px-5 block  ">First Name</label>
    <Field className = 'rounded-lg h-[50px] w-full pl-10 text-2xl outline-0 tracking-wider p-5' type="text" id="first_name" name = 'first_name' placeholder='First Name' />
      <AiOutlineUser className='absolute bottom-3 'size={30}/>  
    <ErrorMessage name="first_name"  />
     </div>
     <div className='mb-2 relative'>

<label className=" mb-3 mt-5 text-[24px] text-black tracking-wide px-5 block  ">Last Name</label>
<Field className = 'rounded-lg h-[50px] w-full pl-10 text-2xl outline-0 tracking-wider p-5' type="text" id="first_name" name = 'first_name' placeholder=' Last Name' />
<AiOutlineUser className='absolute bottom-3 'size={30}/>  
<ErrorMessage name="first_name"  />
 </div>
 <div className='mb-2 relative'>

<label className=" mb-5 mt-5 text-2xl  text-black tracking-wide px-5 block  ">Email </label>
<Field className = 'rounded-lg h-[50px] w-full pl-10 text-2xl outline-0 tracking-wider p-5' type="text" id="first_name" name = 'first_name' placeholder=' Email' />
<AiOutlineUser className='absolute bottom-3 'size={30}/>  
<ErrorMessage name="first_name"  />
 </div>
 <div className='mb-2 relative'>

<label className=" mb-5 mt-5 text-2xl  text-black tracking-wide px-5 block  ">Password</label>
<Field className = ' h-[50px] w-full pl-10 text-2xl outline-0 tracking-wider p-5' type="text" id="first_name" name = 'first_name' placeholder=' Password' />
<AiOutlineUser className='absolute bottom-3 'size={30}/>  
<ErrorMessage name="first_name"  />
 </div>
 <div className='mb-10 mt-10 '>
  <button className='w-full bg-blue-600 text-center font-bold text-gray-100 p-4 rounded-lg text-xl '>Sign Up</button>

 </div>
        </Form>
        </Formik>
    
 
      </div>
    </div>
  )
}
