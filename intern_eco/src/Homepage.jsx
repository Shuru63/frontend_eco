import React from 'react'
import Navbar from '../src/Componet/Navbar'
import Content from './Componet/Content'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Productview from './Componet/Productview'
import Contact from './Componet/Contact'
import Cart from './Componet/Cart'
const Homepage = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/content" element={<Content />} />

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup/>} />
          <Route path="/content/:id" element={<Productview/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          
        </Routes>
      </Router>


    </div>
  )
}

export default Homepage
