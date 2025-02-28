import React from 'react'

function About() {
  return (
    <>
  <div className="relative min-h-screen bg-gray-800">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-50 blur-lg"></div>
    <div className="relative flex items-center justify-center text-white">
        <div className="bg-gray-800 m-52 p-8 rounded-xl shadow-lg text-white w-3/4 text-center">
          <h1 className="text-3xl font-bold text-cyan-400">About This Quiz App</h1>
            <p className="mt-4 text-gray-300">
              This quiz app is designed to help users test their knowledge in HTML, CSS, and JavaScript.
              Choose a topic, answer the questions, and track your progress.
            </p>
      </div>
    </div>
  </div>
    </>
  )
}

export default About