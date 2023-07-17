
function OwnerRegistration() {

  return (
    <div className="max-w-md p-4 lg:max-w-5xl bg-white shadow-sm rounded-md md:max-w-3xl mx-auto">
      
<form  className="bg-white p-8 shadow-md rounded-sm">
  <div className="mb-2 text-center flex justify-center ">
    <label className="block mb-2 text-3xl font-bold font-medium text-black lg:text-4xl dark:text-white">Owner Registration</label>
     </div>

  <div className="mb-2">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">First Name:</label>
    <input type="text" id="first_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" placeholder="Enter first Name" autoComplete="off" required />
  </div>

  <div className="mb-2">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Last Name:</label>
    <input type="text" id="last_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Last Name" autoComplete="off" required />
  </div>

  <div className="mb-2">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email:</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Email" autoComplete="off" required />
  </div>

  <div className="mb-4">
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Password:</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Password" autoComplete="off" required />
  </div>
  
  
  <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
</form>
</div>
  )
}

export default OwnerRegistration