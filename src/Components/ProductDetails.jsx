import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ProductDetails() {
  let [product, setProduct] = useState([])
  let {id} = useParams()
  useEffect(() => {
    function fetchdata() {
      axios.get(`http://127.0.0.1:1000/Product/${id}`)
        .then((res) => {
          setProduct(res.data)
        })
        .catch((err) => {
          console.log(err);

        })
    }
    fetchdata()
  }, [])


  function Addtocart(id,image,price){
    let data={id,image,price}
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
  return (
    <div className="sub_items">
      <div className="card1">
          <div className="thumnail">
            <img src={product.image} alt="" />
          </div>
        <div className="description">
          <h3>{product.name}</h3>
          <span id='cost'>M.R.P : <big><strike>{product.price}</strike></big></span>
          <h5>Offer Price : 12% off $ {Math.round(product.price * 0.88)}</h5>
          <p>Description : {product.desc}</p>
          <span> Rating : <b>{product.rating}*</b></span>
          <br />
          <button onClick={() => {Addtocart(product.id, product.image, product.price) }} className='btn btn-primary'>AddtoCart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails