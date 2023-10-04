import React from 'react'
// import './index.css'
// import './animation.css'
// import './Solarsystem.css'
import Solar from './Solar'
import { Route, Routes } from 'react-router-dom'
import Quiz from './Quiz'
import Random from './Random'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Solar/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/random' element={<Random/>}/>
        
    </Routes>
 
  )
}

export default App
