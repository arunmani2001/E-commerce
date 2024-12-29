import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Routes, Route } from 'react-router-dom'
import AdminDashBoard from './AdminDashBoard'
import AdminViewItems from './AdminViewItems'
import Footer from './Footer'
import AdminAddProducts from './AdminAddProducts'
import Updateproducts from './Updateproducts'
import AdminAccountInfo from './AdminAccountInfo'



function AdminHomePage() {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route path='/' element={<AdminDashBoard />}></Route>
        <Route path='/viewproducts' element={<AdminViewItems />}></Route>
        <Route path='/addproducts' element={<AdminAddProducts />}></Route>
        <Route path='/updateproducts/:id' element={<Updateproducts />}></Route>
        <Route path='/viewAdmin/:id' element={<AdminAccountInfo />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default AdminHomePage