import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserDashBoard from './UserDashBoard'
import UserViewItems from './UserViewItems'
import Footer from './Footer'
import UserNavBar from './UserNavBar'
import UserViewCart from './UserViewCart'
import ProductDetails from './ProductDetails'

function UserHomePage() {
  return (
    <div>
      <UserNavBar/>
      <Routes>
        <Route path='/' element={<UserDashBoard/>}></Route>
        <Route path='/viewproducts' element={<UserViewItems/>}></Route>
        <Route path='/viewCart' element={<UserViewCart/>}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default UserHomePage