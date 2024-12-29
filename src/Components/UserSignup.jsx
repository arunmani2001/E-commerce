import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../Style/UserSignup.css'
import {useState} from 'react'

const UserSignup=()=>{
  let [email,setemail]=useState("")
  let [password,setpassword]=useState("")
  let [phone,setphone]=useState("")
  let [name,setname]=useState("")

  let data={name,password,email,phone}

  function addUser(){
    axios.post('http://localhost:1000/User',data)
    .then((res)=>{
      console.log(res);
      alert('user creates successfully')
      
    })
    .catch((err)=>{
      console.log(err);
      alert('invalid credential')
      
    })
  }
  return (
    <div className='Usersignup'>
        <div className='bg_img'></div>
        <form onSubmit={addUser} action="">
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
export default UserSignup;
