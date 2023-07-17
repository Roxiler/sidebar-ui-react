import React, {useState} from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'



function App() {
  const [toggle ,setToggle]=useState(true)


  return (
    <>
  <Sidebar />
    </>
  )
}

export default App
