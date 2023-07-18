import React from 'react';



const AddItem= () => {


    return(
       <div className="max-w-md p-4 lg:max-w-5xl bg-white shadow-sm rounded-md mt-20 md:max-w-3xl m-auto">
            <form className="bg-white p-8 shadow-md rounded-sm">
              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Title:</label>
                <input type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Title" autoComplete="off" required />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Description:</label>
                <input type="text" id="description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Description" autoComplete="off" required />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Make:</label>
                <input type="text" id="make" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Make" autoComplete="off" required />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Model:</label>
                <input type="text" id="model" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Model" autoComplete="off" required />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Image URL:</label>
                <input type="text" id="img_url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Image URL" autoComplete="off" required />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Daily Rate:</label>
                <input type="text" id="daily_rate" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Daily Rate" autoComplete="off" required />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Available:</label>
                <input type="text" id="available" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Availability" autoComplete="off" required />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Condition:</label>
                <input type="text" id="condition" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:outline-blue-500 block w-full p-2.5" placeholder="Enter Condition" autoComplete="off" required />
              </div>

            
              <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</button>

            </form>

      </div>



    )




}

export default AddItem;