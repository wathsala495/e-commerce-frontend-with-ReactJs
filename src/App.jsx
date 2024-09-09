

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'

import OrderConfirmation from './pages/OrderConfirmation'
import { useState } from 'react'
import FilterData from './pages/FilterData'
import ProductDetail from './pages/ProductDetail'

function App() {

  const [order,setorder]=useState(null)
 return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/filter-data" element={<FilterData/>}/>
    <Route path="/product/:id" element={<ProductDetail/>}/>
    <Route path="/checkout" element={<CheckOut setorder={setorder}/>}/>
    <Route path="/order-confimation" element={<OrderConfirmation order={order}/>}/>

   
  </Routes>
  <Footer/>
  </BrowserRouter>
 )
}

export default App
