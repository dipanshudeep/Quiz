import React from 'react'
import logo from '../../assets/logo.jpeg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
<header className="w-full shadow-lg  sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-cyan-500 shadow-cyan-500/10 text-white p-4">
    <nav className="border-gray-300  px-2 lg:px-3 py-2.5 w-full">
        <div className="mx-auto  max-w-screen-xl flex justify-between items-center">
            <div className="flex  items-center">
                <img
                    src={logo}
                    className="rounded mix-blend-soft-multiply  h-12 w-28"
                    alt="Logo"
                />
            </div>
            <div className="flex items-center lg:order-2">
                <Link
                    to="login"
                    className="text-white hover:bg-gray-700 focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Log in
                </Link>
            
            </div>
                <div className="flex items-center">
                    <button className='bg-blue-400 p-1.5 rounded-bl-lg rounded-tl-lg'>Search</button>
                    <input type="text" placeholder='Search Topic' className='bg-gray-100 p-1.5 px-3 w-xl rounded-br-lg rounded-tr-lg'/>
                </div>  
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li><NavLink to="/" className={({isActive}) =>
                        `block  shadow-cyan-500/10  pr-4 pl-3 duration-200  ${isActive ? 'text-orange-700  shadow-2xl shadow-blue-600': 'text-gray-300'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) =>
                        `block shadow-cyan-500/10 pr-4 pl-3 duration-200  ${isActive ? 'text-orange-700  shadow-md shadow-blue-600' : 'text-gray-300'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>About</NavLink></li>
                    <li><NavLink to="quizList" className={({isActive}) =>
                        `block shadow-cyan-500/10 pr-4 pl-3 duration-200  ${isActive ? 'text-orange-700  shadow-md shadow-blue-600' : 'text-gray-300'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>Quiz list</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) =>
                        `block shadow-cyan-500/10 pr-4 pl-3 duration-200  ${isActive ? 'text-orange-700  shadow-md shadow-blue-600' : 'text-gray-300'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>Contact</NavLink></li>
                   
                </ul>
            </div>
        </div>
    </nav>
</header>
</>
  )
}

export default Header