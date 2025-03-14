import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../Style/AdminViewItems.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AdminViewItems(){
  let [products, setProducts] = useState([])
  let [force,setForce]=useState(0)
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
  },[force])

  console.log(products);

function deleteProduct(id,name) {
    axios.delete(`http://127.0.0.1:1000/Product/${id}`)
      .then(() => {
        toast.success(`${name} Deleted Successfully`)
        setForce(force+1)
      })
      .catch(() => {
        toast.error('Data not present')

      })
  }
  let navigate = useNavigate()
  function editpage(id){
    navigate(`/adminhomepage/updateproducts/${id}`)
  }

  return (
    <div className='AdminViewItems'>
      {products.map((product) => {
        return (
          <div className="sub_items">
            <div className="card1">
              <div className="thumnail">
                <img src={product.image} alt="" />
              </div>
              <div className="description">
                <h3>{product.name}</h3>
                <h3>{product.category}</h3>
                <span id='cost'>M.R.P : <big><strike>{product.price}</strike></big></span>
                <h5>Offer Price : 12% off $ {Math.round(product.price * 0.88)}</h5>
                <p>Description : {product.desc}</p>
                <span> Rating : <b>{product.rating}*</b></span>
                <br />
                <button onClick={()=>{editpage(product.id)}} className='m-3 btn btn-warning'><EditIcon />update</button>
                <button onClick={()=>{deleteProduct(product.id,product.name)}} className='m-3 btn btn-danger'><DeleteIcon />Delete</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AdminViewItems