import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../Style/UserViewItems.css'
import { Link } from 'react-router-dom'



function UserViewItems() {
  let [products, setProducts] = useState([])
  useEffect(() => {
    function fetchdata() {
      axios.get('http://localhost:1000/Product')
        .then((res) => {
          setProducts(res.data)
        })
        .catch((err) => {
          console.log(err);

        })
    }
    fetchdata()
  }, [])
  function Addtocart(id,image,price,name){
      let data={id,image,price,name}
      function fetchdata(){
        axios.post('http://localhost:1000/Cart',data)
        .then((res)=>{
          console.log(res.data);
          alert('addtocart successfully')
          
        })
        .catch((err)=>{
          console.log(err);
          alert('data is invalid')
        })
      }
      fetchdata()
  }

  console.log(products);


  return (
    <div className='UserViewItems'>
      {products.map((product) => {
        return (
          <div className="sub_items">
            <div className="card1">
            <Link to={`/userhomepage/productdetails/${product.id}`}>
              <div className="thumnail">
                <img src={product.image} alt="" />
              </div>
            </Link>
              <div className="description">
                <h3>{product.name}</h3>
                <span id='cost'>M.R.P : <big><strike>{product.price}</strike></big></span>
                <h5>Offer Price : 12% off $ {Math.round(product.price * 0.88)}</h5>
                <p>Description : {product.desc}</p>
                <span> Rating : <b>{product.rating}*</b></span>
                <br />
                <button onClick={()=>{Addtocart(product.id,product.image,product.price,product.name)}} className='btn btn-primary'>AddtoCart</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserViewItems