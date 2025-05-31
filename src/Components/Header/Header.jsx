import React, { useState } from 'react'
import logo from '../../assets/logo.jpeg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full shadow-lg sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-cyan-500 shadow-cyan-500/10 text-white">
        <nav className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          {/* Logo and Home always visible */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              className="rounded mix-blend-soft-multiply h-10 w-20 md:h-12 md:w-28"
              alt="Logo"
            />
            <NavLink
              to="/"
              className={({ isActive }) =>
                `ml-2 px-3 py-2 rounded-lg font-semibold text-base md:text-lg duration-200 ${
                  isActive
                    ? 'text-orange-400 bg-gray-700'
                    : 'text-gray-100 hover:text-orange-400 hover:bg-gray-700'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </div>

          {/* Search bar always visible */}
          <form
            className="flex items-center flex-1 justify-end mr-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            onSubmit={e => e.preventDefault()}
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search topics, e.g. HTML, CSS..."
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-xs sm:text-sm md:text-base"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <button
              type="submit"
              className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-xs sm:text-sm md:text-base transition-all"
            >
              Search
            </button>
          </form>

          {/* Hamburger */}
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="navbar-menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Nav Links */}
          <div
            className={`w-full lg:w-auto lg:flex items-center transition-all duration-300 ${
              menuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-menu"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium">
              {/* Home link is now above, so skip here */}
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg duration-200 ${
                      isActive
                        ? 'text-orange-400 bg-gray-700'
                        : 'text-gray-300 hover:text-orange-400 hover:bg-gray-700'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/quizList"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg duration-200 ${
                      isActive
                        ? 'text-orange-400 bg-gray-700'
                        : 'text-gray-300 hover:text-orange-400 hover:bg-gray-700'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Quiz List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg duration-200 ${
                      isActive
                        ? 'text-orange-400 bg-gray-700'
                        : 'text-gray-300 hover:text-orange-400 hover:bg-gray-700'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              {/* Login button for mobile */}
              <li className="block lg:hidden mt-2">
                <Link
                  to="/login"
                  className="text-white bg-pink-600 hover:bg-pink-700 font-medium rounded-lg text-xs md:text-sm px-4 py-2 transition-all duration-300 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>

          {/* Login button for desktop */}
          <div className="hidden lg:flex items-center gap-4 ml-4">
            <Link
              to="/login"
              className="text-white bg-pink-600 hover:bg-pink-700 font-medium rounded-lg text-xs md:text-sm px-4 py-2 transition-all duration-300"
            >
              Log in
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header