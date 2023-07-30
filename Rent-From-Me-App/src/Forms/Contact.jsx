
import * as Yup from 'yup'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'


export default function Contact() {
  const navigate = useNavigate()
  const message = () => {
    toast.success("Thanks For You Contacting", { autoClose: 500, POSITION: toast.POSITION.TOP_CENTER })
  }

  const initialValues = {
    name: '',
    email: '',
    message: '',

  }
  const validationSchema = Yup.object({

    name: Yup.string().required("Name Required"),
    email: Yup.string().required("Email Required"),
    message: Yup.string().required("Message Required"),

  })
  const handleSubmit = (values, { resetForm }) => {
      resetForm()
      message()
      navigate("/")
  }



  return (
    <>
      <div className="mt-20 p-10 bg-red-500 text-white">
        <div className=" p-4">
          <div className="p-3">
            <h1 className="text-4xl tracking-tighter text-center">About Us</h1>
          </div>
          <span className="flex justify-center items-center space-x-4">
            <Link to="/" className="text-xl">Home</Link> <small>/</small> <span className="text-lg">Contact</span>
          </span>
        </div>

      </div>
      <div className='flex flex-col lg:flex-row  justify-evenly items-center space-x-2 p-2 space-y-3  md:w-[80%] w-[97%] mx-auto'>
      
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize>
          <Form className="w-full p-5 shadow-lg rounded-sm grid grid-cols-1 md:grid-cols-1  gap-3">
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="text" id="name"
                name='name'
                placeholder='Name' />
              <ErrorMessage className='text-red-500 py-3' component='div' name="name" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="email" id="email"
                name='email'
                placeholder='Email' />
              <ErrorMessage className='text-red-500 py-3' component='div' name="email" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border pl-2  border-gray-300 text-gray-900 text-lg h-40 focus:outline-blue-500 block w-full p-2.5"
                type="text" id="title"
                name='message'
                placeholder='Message' />
              <ErrorMessage className='text-red-500 py-3' component='div' name="message" />
            </div>
            <div>
            <button type='submit' className='  w-full mb-4  outline-none  bg-red-500 text-center font-normal text-gray-100 px-4 py-3 rounded text-xl '>Submit </button>
               
            
            </div>
          
          
           
          
          </Form>
        </Formik>
      </div>
    </>
  )
}
