import { useState } from 'react'
import * as Yup from 'yup'

import { Form, Field, ErrorMessage, Formik } from 'formik'

import { useGetItemsQuery, useCreateItemMutation } from '../../Store/Api/item-slice'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import itemsCover from '../../assets/bg-item.png'

export default function ItemRegistration() {
  const [createItem] = useCreateItemMutation()
  const navigate = useNavigate()
  const message = () => {
    toast.success("Item Registered Success", { autoClose: 500, POSITION: toast.POSITION.TOP_CENTER })
  }

  const initialValues = {
    title: '',
    description: '',
    make: '',
    model: '',
    img_url: '',
    daily_cost: 0,
    available: false,
    condition: ''
  }
  const validationSchema = Yup.object({

    title: Yup.string().required("Title Required"),
    make: Yup.string().required("Make Required"),
    model: Yup.string().required("Model Required"),
    daily_cost: Yup.number().required("Daily Cost Required"),
    condition: Yup.string().required(" Condition Required"),
    description: Yup.string().required("description Required")
  })
  const handleSubmit = (values, { resetForm }) => {

    createItem({
      title: values.title,
      description: values.description,
      make: values.make,
      model: values.model,
      img_url: values.img_url,
      daily_cost: values.daily_cost,
      available: values.available,
      condition: values.condition
    }).unwrap().then(() => {

      resetForm()
      message()
      navigate("/")
    }).catch((error) => {
      console.log(error)
    })


  }



  return (
    <>
      <div className="mt-20 p-10 bg-red-500 text-white">
        <div className=" p-4">
          <div className="p-3">
            <h1 className="text-4xl tracking-tighter text-center">About Us</h1>
          </div>
          <span className="flex justify-center items-center space-x-4">
            <Link to="/" className="text-xl">Home</Link> <small>/</small> <span className="text-lg">Create Item</span>
          </span>
        </div>

      </div>
      <div className='flex flex-col lg:flex-row  justify-evenly items-center space-x-2 p-2 space-y-3  md:w-[80%] w-[97%] mx-auto'>
        <img className='w-full lg:w-5/12 object-cover object-center' src={itemsCover } alt="item cover" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize>
          <Form className="w-full p-5 shadow-lg rounded-sm grid grid-cols-1 md:grid-cols-2  gap-3">
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="text" id="title"
                name='title'
                placeholder='Title' />
              <ErrorMessage className='text-red-500 py-3' component='div' name="title" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='make' placeholder=' Make' />
              <ErrorMessage className='text-red-500 py-3' component='div' name="make" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='model' placeholder=' Model' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="model" />
            </div>
            <div>
              <span className="text-sm ml-3">Daily Cost</span>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="number" name='daily_cost' placeholder='Daily Cost' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="daily_cost" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='condition' placeholder=' condition' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="condition" />
            </div>
            <div>
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='description' placeholder=' Description' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="description" />
            </div>
            <div className=' space-y-3'>
              <span className="text-sm">Available</span>
              <Field
                name="available"
                className="ml-3 leading-tight"
                type="checkbox"
              />
              <ErrorMessage name="first_name" />
              <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" type="text" name='img_url' placeholder=' Image Url' />
              <ErrorMessage className='text-red-500 mt-3' component='div' name="condition" />
              <button type='submit' className='  w-full mb-4  outline-none  bg-red-500 text-center font-normal text-gray-100 px-4 py-3 rounded text-xl '>Register Item</button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}
