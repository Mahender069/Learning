import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
// import Contact from './components/Contact'
const Contact =lazy(()=>import('./components/Contact'))
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}
