import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <div className='bg-gradient-to-br from-black via-gray-900 to-gray-950 min-h-screen flex items-center justify-center'>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-8 rounded-2xl border border-cyan-500 shadow-lg shadow-cyan-500/20 w-full max-w-2xl h-auto md:h-3/4">
      <p className='text-cyan-500 mb-6 text-base md:text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio dolorum eligendi ea incidunt enim ut, tempora laboriosam recusandae labore eos cum fuga distinctio provident. Cumque, magnam eligendi incidunt quibusdam accusamus debitis magni odit fugiat similique ea minus earum optio. Eligendi, officia soluta fugiat sapiente quos totam dolor quae illo deleniti quasi consectetur error facilis, corporis nobis odio est quibusdam ipsa. Facere deleniti consectetur officiis impedit beatae unde dolores perspiciatis ratione delectus molestiae quidem voluptate recusandae accusantium, doloremque asperiores ea nisi, libero sunt expedita architecto aspernatur laborum est nobis. Quam, assumenda quae? Quam obcaecati doloremque non a. Et, autem at?
      </p>
      <Link to='/quizList'><button className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-pink-800 transition-all duration-300">
            Start Quiz --&gt;
          </button></Link>
        </div>
     </div>
    </>
  )
}

export default Home