import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Style/UserViewCart.css'
import { toast } from 'react-toastify';


function UserViewCart() {
    let [Cart,setProducts] = useState([])
    let [force,setForce] = useState(0)
    useEffect(()=>{
        function fetchdata(){
            axios.get('http://127.0.0.1:1000/Cart')
            .then((res)=>{
                setProducts(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        fetchdata()
    },[force])

    console.log(Cart);
     
function DeleteCart(id){
    axios.delete(`http://127.0.0.1:1000/Cart/${id}`)
    .then(()=>{
        toast.success('deleted successfully')
        setForce(force+1)
    })
    .catch((err)=>{
        console.log(err);
        
        toast.error('invalid credential')
    })
}

  return (
    <div className="userviewcart">
        {Cart.map((Carts)=>{
            return(
                <div className="items">
                    <div className="item">
                        <img src={Carts.image} alt="" />
                        <h3>{Carts.price}</h3>
                        <h5>{Carts.name}</h5>
                    </div>
                    <div className="item">
                        <button onClick={()=>{DeleteCart(Carts.id)}} className='btn btn-danger'>deletecart</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default UserViewCart