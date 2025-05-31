import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="w-full shadow static bottom-64 z-50 bg-gray-300">
        <div className="text-center p-2 md:p-3 text-xs md:text-base" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2021 Quiz App:
          <a className="text-dark" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer