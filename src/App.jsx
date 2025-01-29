//import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage'
import './App.css'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={<Homepage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
