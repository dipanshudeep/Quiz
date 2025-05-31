import React from 'react'

function Login() {
  return (
    <>
     <div className="bg-gradient-to-br from-[#09203F] to-[#537895] min-h-screen flex items-center justify-center">
     <div className="bg-gray-800 p-4 md:p-8 rounded-xl shadow-lg w-full max-w-xs md:max-w-md text-white">
  <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 text-center">Login</h2>
  <form className="mt-6 space-y-4">
  <div className="relative">
  <input type="email" id="email" className="peer w-full p-3 rounded-md bg-gray-700 text-white" placeholder=" " />
  <label htmlFor="email" className="absolute text-gray-400 top-1/2 left-4 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-focus:text-cyan-400">Email</label>
</div>
    <input type="password" placeholder="Password" className="w-full p-3 rounded-md bg-gray-700 text-white" />
    
    <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 rounded-lg hover:from-pink-600 hover:to-pink-800 transition-all duration-300">
      Login
    </button>
  </form>
  <div className="text-center mt-4">
    <a href="#" className="text-cyan-400 hover:text-cyan-500">Forgot Password?</a>
  </div>
  <div className="text-center mt-4">
    <p className="text-gray-300">Don't have an account? <a href="#" className="text-cyan-400 hover:text-cyan-500">Sign Up</a></p>
  </div>
</div>

</div>
    </>
  )
}

export default Login