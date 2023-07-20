function Login(){
    return(
        <div className="block bg-white flex justify-center items-center mt-8 max-w-md mx-auto md:w-3/4 lg:w-1/2">
           
            <form className="bg-white p-10 shadow-lg rounded-sm">

                <div className="mb-3">
                <h3 className=" text-2xl mb-4 font-medium text-gray-900 dark:text-gray-900 ">Sign in Your Account </h3>
                </div>

                <div className="mb-3">
                    <label className="block mb-4 text-sm font-medium md:text-xl text-gray-700 dark:text-white">Email</label>
                    <input type="text" id="email" placeholder="email" className="bg-gray-100 border border-gray-400 text-gray-900 shadow-sm text-md focus:outline-blue-500 block w-96 p-3"></input>
                </div>
                    
                <div className="mb-3">
                    <label className="block mb-4 text-sm font-medium md:text-xl text-gray-700 dark:text-white">Password </label>
                    <input type="password" id="password" placeholder="password" className="shadow-sm bg-gray-100 border border-gray-400 text-gray-900 text-md focus:outline-blue-500 block w-96 p-3"></input>
                </div>

                    <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-96 px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-900">log in</button>
            </form>
        </div>
    )
}
export default Login;