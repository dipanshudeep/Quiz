import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import DataContextProvider from './Context/DataContextProvider'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <DataContextProvider>
    <Header/>
    <Outlet/>
    <Footer />
    </DataContextProvider>
    </>
  )
}

export default App
