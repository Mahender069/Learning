import  { useState } from 'react'
import Window from './components/Window'
import './App.css'

export default function App() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
    <button className='w-40 h-15 bg-sky-400 rounded-xs cursor-pointer' onClick={()=>{
      setIsOpen(true)
    }}>
      Open Window
    </button>
    {
      isOpen ? <Window clickHandler={setIsOpen}/> : ''
    }
    </>
  )
}
