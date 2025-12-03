// import { useState } from 'react'
import axios from "axios"
import Login from "./login/Login.jsx"
import SignUp from './signup/Signup.jsx'
import Home from "./Home/Home.jsx"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import { useEffect } from "react"
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute"

// import './App.css'

function App() {

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
         <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
