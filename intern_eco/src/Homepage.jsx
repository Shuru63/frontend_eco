import React from 'react'
import Navbar from '../src/Componet/Navbar'
import Content from './Componet/Content'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Productview from './Componet/Productview'
import Contact from './Componet/Contact'
import Cart from './Componet/Cart'
import Checkout from './Componet/Checkout'
import About from './Componet/Abouts'
import { Navigate } from 'react-router-dom'
const Homepage = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/content" element={<Content />} />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/content/:id" element={<Productview/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="*" element={<Navigate to="/content" />} />
        </Routes>
      </Router>


    </div>
  )
}

export default Homepage
