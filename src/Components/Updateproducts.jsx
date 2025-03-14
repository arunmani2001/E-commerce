import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../Style/Updateproducts.css'


function Updateproducts() {
    let [category, setcategory] = useState("")
    let [name, setName] = useState("")
    let [price, setprice] = useState("")
    let [image, setimage] = useState("")
    let [rating, setrating] = useState("")
    let [desc, setdesc] = useState("")

    let data = { category, name, price, image, rating, desc }

    function updateItem(e) {
        e.preventDefault();
        axios.put(`http://0.0.0.0:1000/Product/${param.id}`, data)
            .then((res) => {
                console.log(res);
                toast.success('item updated successfully')

            })
            .catch((err) => {
                console.log(err);
                toast.err('invalid data format')

            })
    }

    let param = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:1000/Product/${param.id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name)
                setcategory(res.data.category)
                setdesc(res.data.desc)
                setprice(res.data.price)
                setimage(res.data.image)
                setrating(res.data.rating)

            })
            .catch((err) => {
                console.log(err);

            })
    },[])
    return (
        <div className='updateproducts'>
            <form onSubmit={updateItem} action="">
                <fieldset>
                    <label htmlFor="">
                        Category:
                    </label>
                    <select required value={category} onChange={(e) => { setcategory(e.target.value) }}>
                        <option>Dress Materials</option>
                        <option>Mobile</option>
                        <option>Mobile Accessories</option>
                        <option>Electronics</option>
                        <option>Groceries</option>
                    </select>
                    <label htmlFor="">
                        ProductName:
                    </label>
                    <input required type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='enter the products' />
                    <label htmlFor="">
                        Product price:
                    </label>
                    <input type="text" value={price} onChange={(e) => { setprice(e.target.value) }} placeholder='enter the price' required />
                    <label htmlFor="">
                        Desc :
                    </label>
                    <textarea type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} rows="2" placeholder='enter the text' cols="30"></textarea>
                    <label htmlFor="">
                        Thumbnail :
                    </label>
                    <input type="text" value={image} onChange={(e) => { setimage(e.target.value) }} placeholder='enter the image address' required />
                    <label htmlFor="">
                        Rating :
                    </label>
                    <input type="text" value={rating} onChange={(e) => { setrating(e.target.value) }} placeholder='enter the ratings' required />
                    <button className='btn btn-primary'>submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Updateproducts