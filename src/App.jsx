import { useState } from 'react'
import Layout from './Layout'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
         
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
