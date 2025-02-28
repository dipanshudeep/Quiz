import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App' 
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import QuizList from './Components/QuizList/QuizList'
import QuizPage from './Components/QuizPage/QuizPage' // Import QuizPage
import Login from './Components/Login/Login'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='quizList' element={<QuizList/>}/>
      <Route path='quizPage' element={<QuizPage/>}/>  {/* ✅ Added this */}
      <Route path='login' element={<Login/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>

)
