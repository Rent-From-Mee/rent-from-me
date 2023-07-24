import {useState} from 'react'
import * as Yup from 'yup'

import {Form, Field,ErrorMessage, Formik} from 'formik'

import office from '../assets/office2.png'
import {useGetItemsQuery,useCreateItemMutation} from '../Store/Api/item-slice'
import {toast} from'react-toastify'


export default function ItemRegistration() {
 
  // const{getAllItems} =  useGetUserQuery()
  const { data: items = [], error } = useGetItemsQuery();
  const [createItem] =  useCreateItemMutation()

  const message  = ()=>{
    toast.success("Item Registered Success",{autoClose:500,POSITION:toast.POSITION.TOP_CENTER})
  }
  // console.log(ownerData)
  // const [getAllItems] =  useGetAllItemsQuery()
  const initialValues = {
    title:'',
    description:'',
    make:'',
    model:'',
    img_url :'',
    daily_cost: 0,
    available:false,
    condition:''
  }
  const validationSchema = Yup.object({

    title:Yup.string().required("Title Required"),
     make:Yup.string().required("Make Required"),
     model:Yup.string().required("Model Required"),
     daily_cost:Yup.number().required("Daily Cost Required"),
     condition:Yup.string().required(" Condition Required"),
     description:Yup.string().required("description Required")
  })
  const handleSubmit  = (values,{resetForm})=>{
    
    createItem({
    title:values.title,
    description:values.description,
    make:values.make,
    model:values.model,
    img_url:values.img_url,
    daily_cost:values.daily_cost,
    available:values.available,
    condition:values.condition
   })
resetForm()
message()


}
  console.log(items)


  return (
    <div className=' w-full  mx-auto max-h-[700px]   bg-gray-50  flex-col lg:flex lg:flex-row lg:w-4/5  sm:w-full   mt-4 rounded-lg '>
      {/* <div className='w-full lg:w-1/2  lg:max-h-[700px ] '>

      </div> */}
      <img className='w-full    max-h-[300px] sm:max-h-[700px] object-cover object-center'  src={office} alt="" />
      <div className='w-full  sm:p-0 bg-blue-0 mx-auto lg:ml-10   '>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
          
        <Form className=' w-full relative  '>
     <div className='mb-4 relative '>

   
    <Field className = ' h-[50px] w-full   text-lg border-2 outline-0 tracking-wider p-1'
     type="text" id="title" 
     name = 'title'
      placeholder='Title' />
    <ErrorMessage className='text-red-500 py-3' component='div' name="title"  />
     </div>
     <div className='mb-4 relative'>
<Field className = 'h-[50px] w-full   text-lg border-2 outline-0 tracking-wider p-1' type="text" name = 'make' placeholder=' Make' />

<ErrorMessage className='text-red-500 py-3' component='div' name="make"  />
 </div>
 <div className='mb-4 relative'>
<Field className = 'h-[50px] w-full  text-lg border-2 outline-0 tracking-wider p-1' type="text"  name = 'model' placeholder=' Model' />

<ErrorMessage className='text-red-500 mt-3' component='div'  name="model"  />
 </div>

 <div className='mb-4 relative'>
 <span className="text-sm ml-3">Daily Cost</span>

<Field className = ' h-[50px] w-full text-lg border-2 outline-0   tracking-wider p-1' type="number" name = 'daily_cost' placeholder='Daily Cost' />

<ErrorMessage  className='text-red-500 mt-3' component='div' name="daily_cost"  />
 </div>
 <div className='mb-4 relative'>
<Field className = ' h-[50px] w-full text-lg border-2 outline-0    tracking-wider p-1' type="text"  name = 'condition' placeholder=' condition' />

<ErrorMessage  className='text-red-500 mt-3' component='div' name="condition"  />
 </div>
 <div className='mb-4 relative'>
<Field className = ' h-[80px] w-full  text-lg border-2  outline-0   tracking-wider p-1' type="text" name = 'description' placeholder=' Description' />
{/* <Field className = ' h-[50px] w-full pl-10 text-2xl tracking-wider p-5' type="checkbox"  />Check m */}

<ErrorMessage  className='text-red-500 mt-3' component='div'  name="description"  />
 </div>
 <div className='mb-4 relative flex items-center'>

<label className="text-gray-500 font-bold" >
                  <Field
                    name="available"
                    className="mr-2 leading-tight"
                    type="checkbox"
                  />
                  <span className="text-sm ml-5">Available</span>
                </label>

<ErrorMessage name="first_name"  />
 </div>
 <div className='mb-4 relative'>
<Field className = ' h-[50px] w-full text-lg border-2 outline-0    tracking-wider p-1' type="text"  name = 'img_url' placeholder=' Image Url' />

<ErrorMessage  className='text-red-500 mt-3' component='div' name="condition"  />
 </div>

 {/* <div className='mb-4 rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-gray-500 relative '>


  <input className = 'absolute bottom-10 left-[110px] sm:left-[160px] md:left-[160px]  text-[18px] flex ' type="file" id="image_url" name = 'image_url'
 onChange = {(event)=>{
  setImage(URL.createObjectURL(event.target.files[0]))
  setImage2(URL.createObjectURL(event.target.files[0]))

  console.log(event.target.files[0])
 }}  />
       <img className='w-full rounded-full  h-[100px]  object-cover  overflow-hidden'  src={image} alt="" />

 </div> */}

 <div >
  <button type='submit'  className='  w-full mb-4  outline-1  bg-blue-600 text-center font-bold text-gray-100 p-4 rounded-lg text-xl '>Register Item</button>
 {/* w-1/2 absolute bottom-10 right-20 */}
 </div>
        </Form>
        </Formik>
    
 
      </div>
    </div>
  )
}
