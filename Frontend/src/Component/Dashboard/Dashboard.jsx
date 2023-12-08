import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Features from './Features'
import Carousel from './Carousel'
import Product from './Product'
import Content from './Content'

const Dashboard = () => {
  return (
    <div>
    <Navbar/>
    <Carousel/>
   
    <div className="text-2xl font-bold italic text-center">Product & Services</div>
    <div className="grid grid-cols-1 sm:grid-cols-3">
    <Product/>
    <Product/>
    <Product/>
    </div>
    <Content/>
    <div className="text-2xl font-bold italic text-center">Customer Review</div>
    <Features/>
    <Footer/>
    </div>
  )
}

export default Dashboard