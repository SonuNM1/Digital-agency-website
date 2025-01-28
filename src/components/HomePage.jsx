import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import About from './About'
import Product from './Product'
import Blog from './Blog'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About />
      <Product />
      <Blog />
      <Footer />
    </>
  )
}

export default HomePage
