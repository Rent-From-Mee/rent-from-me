import {useState} from 'react'
import * as Yup from 'yup'
import {Form, Field,ErrorMessage, Formik} from 'formik'
import itemsCover from '../../assets/bg-item.png'
import {useGetItemsQuery,useUpdateItemMutation} from '../../Store/Api/item-slice'
import {toast} from'react-toastify'
import { useNavigate,useParams,Link } from 'react-router-dom'

import { useEffect } from 'react'


export default function UpdateItem() {
  const params  = useParams()
  const { data: items = [], error } = useGetItemsQuery();
  const [updateItem] =  useUpdateItemMutation()
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
useEffect(()=>{
    const currentItem = items.find((item)=>item.id  === Number(params.id))

    if(currentItem){
        setInitialValues({
        title:currentItem.title,
        description:currentItem.description,
        make:currentItem.make,
        model:currentItem.model,
        img_url :currentItem.img_url,
        daily_cost: currentItem.daily_cost,
        available:currentItem.available,
        condition:currentItem.condition
    })
}
},[items,params.id])

  const validationSchema = Yup.object({
    title:Yup.string().required("Title Required"),
     make:Yup.string().required("Make Required"),
     model:Yup.string().required("Model Required"),
     daily_cost:Yup.number().required("Daily Cost Required"),
     condition:Yup.string().required(" Condition Required"),
     description:Yup.string().required("description Required")
  })
  const handleSubmit  = (values,{resetForm})=>{
    
    updateItem({
        id: Number(params.id),
        updatedItem: values,
   }).unwrap().then(()=>{

       message()
       resetForm()
     navigate("/")
   }).catch((error)=>{
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
            <Link to="/" className="text-xl">Home</Link> <small>/</small> <span className="text-lg">Update</span>
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
              <button type='submit' className='  w-full mb-4  outline-none  bg-red-500 text-center font-normal text-gray-100 px-4 py-3 rounded text-xl '>Update Item</button>
            </div>
          </Form>
        </Formik>
      </div>
  </>
  )
}
