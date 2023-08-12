import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import * as Yup from 'yup'
import { Form, ErrorMessage, Formik } from 'formik'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
export default function Contact() {
  const [sent, setSent] = useState(false);
  
  const form = useRef();
  // sending email

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sx8ijrf', 'template_xre2je2', form.current, 'yg-pw2IPmMolifFc7')
      .then((result) => {
          console.log(result.text);
          setSent(true)
          setTimeout(()=>{
            window.location.reload()
          },2000)
      }, (error) => {
          console.log(error.text);
      });
  };
  const navigate = useNavigate()
  const message = () => {
    toast.success("Thanks For You Contacting", { autoClose: 500, POSITION: toast.POSITION.TOP_CENTER })
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

      </div>{sent && (
        <div className="p-4 max-w-xs m-auto mt-2 bg-red-400 rounded-lg shadow-md">
          <span className="font-bold textlg">Thanks for your contacting!</span> we contact you ASAP!.
        </div>
      )}
      <div className='flex flex-col lg:flex-row  justify-evenly items-center space-x-2 p-2 space-y-3  md:w-[80%] w-[97%] mx-auto'>

          <form onSubmit={sendEmail} ref={form} className="w-full p-5 shadow-lg rounded-sm grid grid-cols-1 md:grid-cols-1  gap-3">
            <div>
              <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="text" id="name"
                name='name'
                placeholder='Name' />
              
            </div>
            <div>
              <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="email" id="email"
                name='email'
                placeholder='Email' />
              
            </div>
            <div>
              <textarea className="shadow-sm bg-gray-50 border pl-2  border-gray-300 text-gray-900 text-lg h-40 focus:outline-blue-500 block w-full p-2.5"
                type="text" id="title"
                name='message'
                placeholder='Message' />
              
            </div>
            <div>
            <button type='submit' className='  w-full mb-4  outline-none  bg-red-500 text-center font-normal text-gray-100 px-4 py-3 rounded text-xl '>Submit </button>
               
            
            </div>
          
          
           
          
          </form>
      </div>
    </>
  )
}
