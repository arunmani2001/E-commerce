import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../Style/Adminsignup.css'
import {useState} from 'react'

const AdminSignup=()=>{
  let [email,setemail]=useState("")
  let [password,setpassword]=useState("")
  let [phone,setphone]=useState("")
  let [name,setname]=useState("")

  let data={name,password,email,phone}

  function addAdmin(){
    axios.post('http://127.0.0.1:1000/Admin',data)
    .then((res)=>{
  console.log(res);
  alert('admin creates successfully')
      
    })
    .catch((err)=>{
      console.log(err);
      alert('invalid credential')
      
    })
  }
  return (
    <div className='Adminsignup'>
        <div className='bg_img'></div>
        <form onSubmit={addAdmin} action="">
          <label htmlFor="">Name:</label>
          <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the name'/> 
          <label htmlFor="">email:</label>
          <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter the name'/> 
          <label htmlFor="">password:</label>
          <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the name'/> 
          <label htmlFor="">Phone:</label>
          <input pattern='[0-9]{10}' value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder='Enter the name'/>

          <button className='btn btn-primary'>SignUp</button>
        </form>
    </div>
  )
}
export default AdminSignup;
