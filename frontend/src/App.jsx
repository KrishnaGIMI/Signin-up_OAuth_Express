// import { useState } from 'react'
import Login from "./login/Login.jsx"
import SignUp from './signup/Signup.jsx'
import {BrowserRouter,Routes, Route} from "react-router-dom"
// import './App.css'
function Home (){
  return <p>home page</p>
}
function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
