import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserAccount from './UserDropdown'
import '../Style/UserNavbar.css'

function UserNavbar() {
    return (
        <div className='UserNavbar'>
            <div className="logo">
                <h1>E <span>Kart</span></h1>
            </div>
            <div className="links">
                <div className="link1">
                    <Link to='/userhomepage/viewproducts'>
                    <img  src="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" alt="" /><br />
                    Shopping lists</Link>
                </div>
                <div className="link2">
                    <Link to='/userhomepage/viewCart'>
                    <img src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg" alt="" /><br />
                    <ShoppingCartIcon/>Cart</Link>
                </div>
            </div>
            <div className="account">
                <UserAccount/>
            </div>
        </div>
    )
}

export default UserNavbar