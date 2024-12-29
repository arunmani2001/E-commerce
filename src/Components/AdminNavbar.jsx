import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminAccount from './AdminDropdown'
import '../Style/AdminNavbar.css'

function AdminNavbar() {
    return (
        <div className='AdminNavbar'>
            <div className="logo">
                <h1>E <span>Kart</span></h1>
            </div>
            <div className="links">
                <Link to='/adminhomepage/addproducts'>Add Items</Link>
                <Link to='/adminhomepage/viewproducts'>Shopping lists</Link>
                <Link to='/adminhomepage/viewCart'> <ShoppingCartIcon/>Cart</Link>
            </div>
            <div className="account">
                <AdminAccount/>
            </div>
        </div>
    )
}

export default AdminNavbar