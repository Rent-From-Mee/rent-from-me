import {useState} from 'react'
import * as Yup from 'yup'
import {Form, Field,ErrorMessage, Formik} from 'formik'
// import itemsCover from '../assets/bg-item.png'
// import {useGetItemsQuery,useUpdateItemMutation} from '../Store/Api/item-slice'
import {toast} from'react-toastify'
import { useNavigate,useParams,Link } from 'react-router-dom'

import { useEffect } from 'react'


export default function RentItem() {
  const params  = useParams()
//   const { data: items = [], error } = useGetItemsQuery();
//   const [updateItem] =  useUpdateItemMutation()
  const navigate=  useNavigate()
  
  const message  = ()=>{
    toast.success("Item Updated  Success",{autoClose:500,POSITION:toast.POSITION.TOP_CENTER})
  }

const [initialValues,setInitialValues] =  useState({
  title:'',
  description:'',
  make:'',
  model:'',
  img_url :'',
  daily_cost: 0,
  available:false,
  condition:''
})


  const validationSchema = Yup.object({
    title:Yup.string().required("Title Required"),
     make:Yup.string().required("Make Required"),
     model:Yup.string().required("Model Required"),
     daily_cost:Yup.number().required("Daily Cost Required"),
     condition:Yup.string().required(" Condition Required"),
     description:Yup.string().required("description Required")
  })
  const handleSubmit  = (values,{resetForm})=>{
    




}



  return (
  <>
   <div className="mt-20 p-10 bg-red-500 text-white">
        <div className=" p-4">
          <div className="p-3">
            <h1 className="text-4xl tracking-tighter text-center">About Us</h1>
          </div>
          <span className="flex justify-center items-center space-x-4">
            <Link to="/" className="text-xl">Home</Link> <small>/</small> <span className="text-lg">Update</span>
          </span>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row  justify-evenly items-center space-x-2 p-2 space-y-3  md:w-[80%] w-[97%] mx-auto'>
        <img className='w-full lg:w-5/12 object-cover object-center' src={""} alt="item cover" />
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
          </Form>
        </Formik>
      </div>
  </>
  )
}
