import { useState } from 'react'
import * as Yup from 'yup'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import { toast } from 'react-toastify'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useGetItemsQuery } from '../../Store/Api/item-slice'
import { useRentAnItemMutation,useRentedItemsQuery } from '../../Store/Api/Renter'
export default function RentItem() {
    const {data:items = []} =  useGetItemsQuery()
    const {data:rentedItems = []} =  useRentedItemsQuery()
    const [rentAnItem] =  useRentAnItemMutation()
    const params = useParams()
    const currentItem  = items.find((item)=>item.id === Number(params.id))
    const navigate = useNavigate()

    const message = () => {
        toast.success("Item REnted  Success", { autoClose: 500, POSITION: toast.POSITION.TOP_CENTER })
    }
    const [initialValues, setInitialValues] = useState({
        start_date: '',
        end_date: '',
        total_cost:0
    })
    const validationSchema = Yup.object({
        start_date: Yup.string().required("Start Date Required"),
        end_date: Yup.string().required("End Date Required"),
        total_cost: Yup.string().required("Total Cost Required"),
    })
    const handleSubmit = (values, { resetForm }) => {
        rentAnItem({
                id: Number(params.id),
                item: values
       }).unwrap().then(()=>{
           message()
           resetForm()
         navigate("/")
       }).catch((error)=>{
        console.log(error)
       })
    console.log("values",values)
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
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize>
                    <Form className="w-full p-5 shadow-lg rounded-sm   lg:flex ">
                        <div className=" lg:flex-col  w-full   flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row    hover:bg-gray-100 ">
                            <img className="object-cover w-full rounded-t-lg h-96   md:rounded-none md:rounded-l-lg " src="https://images.pexels.com/photos/13009437/pexels-photo-13009437.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{currentItem&&(currentItem.description)} </p>
                            </div>
                        </div>
                        <div className='lg:ml-10 bg-blue-90 w-full'>
                            <div className='space-y-3 mb-3 '>
                                <label htmlFor="date" className=' text-xl pl-2 leading-normal   '>Start Date</label>
                                <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                                    type="date" id="start_date"
                                    name='start_date'
                                />
                                <ErrorMessage className='text-red-500 py-3' component='div' name="date" />
                            </div>
                            <div className='space-y-3'>
                                <label htmlFor="date" className=' text-xl pl-2 leading-normal '>End Date</label>
                                <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                                    type="date" id="end_date"
                                    name='end_date'
                                />
                                <ErrorMessage className='text-red-500 py-3' component='div' name="end_date" />
                            </div>
                            <div className='space-y-3'>
                                <label htmlFor="total_cost" className=' text-xl pl-2 leading-normal '>Total Cost</label>
                                <Field className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                                    type="number" id="total_cost"
                                    name='total_cost'
                                />
                                <ErrorMessage className='text-red-500 py-3' component='div' name="total_cost" />
                                <button className='p-3 mt-4  mb-3 text-gray-100 leading-normal w-full bg-red-500' type = "submit">Rent Item</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
            )
}
