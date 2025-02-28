import React from 'react'

function Contact() {
  return (
    <>
     <div className="bg-gradient-to-br from-[#09203F] to-[#537895] min-h-screen flex items-center justify-center">
     <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-3/4 text-white">
  <h2 className="text-3xl font-bold text-cyan-400 text-center">Get in Touch</h2>
  <form className="mt-6 space-y-4">
    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-gray-700 text-white" />
    <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-gray-700 text-white" />
    <textarea placeholder="Your Message" className="w-full p-3 rounded-md bg-gray-700 text-white h-32"></textarea>
    <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 rounded-lg hover:from-pink-600 hover:to-pink-800 transition-all duration-300">
      Send Message
    </button>
    <div className="text-center mt-8">
  <p className="text-gray-300">Or follow me on:</p>
  <div className="space-x-4 mt-4">
    <a href="https://linkedin.com" className="text-cyan-400 hover:text-cyan-500">LinkedIn</a>
    <a href="https://github.com" className="text-cyan-400 hover:text-cyan-500">GitHub</a>
  </div>
</div>
  </form>
</div>

</div>


    </>
  )
}

export default Contact