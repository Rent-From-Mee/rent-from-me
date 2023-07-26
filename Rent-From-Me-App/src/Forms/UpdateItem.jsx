import {useState} from 'react'
import * as Yup from 'yup'
import {Form, Field,ErrorMessage, Formik} from 'formik'
import office from '../assets/office2.png'
import {useGetItemsQuery,useUpdateItemMutation} from '../Store/Api/item-slice'
import {toast} from'react-toastify'
import { useNavigate,useParams } from 'react-router-dom'
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


 <div >
  <button type='submit'  className='  w-full mb-4  outline-1  bg-blue-600 text-center font-bold text-gray-100 p-4 rounded-lg text-xl '>Update Item</button>
 {/* w-1/2 absolute bottom-10 right-20 */}
 </div>
        </Form>
        </Formik>
    
 
      </div>
    </div>
  )
}
