import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Tasks from './pages/Tasks/tasks'
import Nav from './components/navbar/navbar'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
