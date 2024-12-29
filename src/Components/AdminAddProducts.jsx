import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/AdminAddProduct.css'


function AdminAddProducts() {
    let [category,setcategory]=useState("")
    let [name,setName]=useState("")
    let [price,setprice]=useState("")
    let [image,setimage]=useState("")
    let [rating,setrating]=useState("")
    let [desc,setdesc]=useState("")

    let data={category,name,price,image,rating,desc}

    function addProduct(e){
        e.preventDefault();
        axios.post('http://localhost:1000/Product',data)
        .then((res)=>{
            console.log(res);
            toast.success('data added successfully')
        })
        .catch((err)=>{
            console.log(err);
            toast.error('invalid data')
            
        })
    }
  return (
    <div className='addproducts'>
        <h1>Product Details</h1>
        <form onSubmit={addProduct} action="">
            <fieldset>
                <label htmlFor="">
                    Category:
                </label>
                <select required  value={category} onChange={(e)=>{setcategory(e.target.value)}}> 
                    <option>Dress Materials</option>
                    <option>Mobile</option>
                    <option>Mobile Accessories</option> 
                    <option>Electronics</option>
                    <option>Groceries</option>
                </select>
                <label htmlFor="">
                    ProductName:
                </label>
                <input required type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='enter the products' />
                <label htmlFor="">
                    Product price:
                </label>
                <input  type="text" value={price} onChange={(e)=>{setprice(e.target.value)}} placeholder='enter the price' required/>
                <label htmlFor="">
                    Desc :
                </label>
                <textarea  type="text"  value={desc} onChange={(e)=>{setdesc(e.target.value)}} rows="2" placeholder='enter the text' cols="30"></textarea>
                <label htmlFor="">
                    Thumbnail :
                </label>
                <input  type="text"  value={image} onChange={(e)=>{setimage(e.target.value)}} placeholder='enter the image address' required/>
                <label htmlFor="">
                    Rating :
                </label>
                <input  type="text"  value={rating} onChange={(e)=>{setrating(e.target.value)}} placeholder='enter the ratings' required/>
                <button  className='btn btn-primary'>submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default AdminAddProducts