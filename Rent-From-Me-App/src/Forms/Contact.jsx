import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import { GiWorld } from 'react-icons/gi';
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
      <div className='mt-20 mx-auto shadow rounded  w-[95%]  lg:w-[85%] grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-4 space-y-3 md:space-y-1 p-3'>

        <div className=' h-[30rem] flex flex-col justify-start items-start gap-3 p-3 bg-red-500 text-[#fff] space-y-5 font-serif'>

          <p className='ml-1 md:ml-4 mt-8 text-2xl font-medium tracking-widest '>Let's get in touch</p>
          <p className='ml-1 md:ml-4 text-xl font-medium tracking-normal'>We're open for any suggestion or just to have a chat</p>
          <p className='ml-1 md:ml-4 text-base md:font-medium tracking-widest flex flex-row justify-evenly items-start gap-3'> <GoLocation size={20}/> <span>Address <small className='ml-1 md:ml-2 text-base'> : Mogadishu-banadir</small></span></p>
          <p className='ml-1 md:ml-4 text-base md:font-medium tracking-widest flex flex-row justify-evenly items-start gap-3'> <AiOutlinePhone size={20}/> <span>Phone <small className='ml-1 md:ml-2 text-base'> : 61XXXXXXXXXX</small></span></p>
          <p className='ml-1 md:ml-4 text-base md:font-medium tracking-widest flex flex-row justify-evenly items-start gap-3'> <AiOutlineMail size={20}/> <span> Email <small className='ml-1 md:ml-2 text-base'> : rentFrome@gmail.com</small></span></p>
          <p className='ml-1 md:ml-4 text-base md:font-medium tracking-widest flex flex-row justify-evenly items-start gap-3'> <GiWorld size={20}/> <span>Website <small className='ml-1 md:ml-2 text-base'> : rentFromMe-vercel.app</small></span></p>

        </div>

        <form onSubmit={sendEmail} ref={form} className="flex flex-col justify-start items-start gap-3 space-y-3 p-2">
              <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="text" id="name"
                name='name'
                placeholder='Name' />
              <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="email" id="email"
                name='email'
                placeholder='Email' />
              <textarea className="shadow-sm bg-gray-50 border pl-2  border-gray-300 text-gray-900 text-lg h-40 focus:outline-blue-500 block w-full p-2.5"
                type="text" id="title"
                name='message'
                placeholder='Message' />
            <button type='submit' className='  w-full mb-4  outline-none  bg-red-500 text-center font-normal text-gray-100 px-4 py-3 rounded text-xl '>Submit </button>
          </form>


      </div>
    </>
  )
}
