import React,{useEffect, useState} from 'react'
import '../Style/Adminlogin.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminLogin(){
  let [username,setusername]=useState("");
  let [password,setpassword]=useState("");
  let [Admin,setAdmin]=useState([])
  useEffect(()=>{
    async function fetchAdmin(){
      let data=await fetch('http://127.0.0.1:1000/Admin')
      let res=await data.json();
      setAdmin(res)
      
    }fetchAdmin()
  },[])

  let naviagate = useNavigate();

  function login(){
    let val=Admin.filter((x)=>{
      return x.email === username && x.password === password})
    if (val.length>0){
      toast.success('login successfully')
      naviagate('/adminhomepage')
    }else{
      toast.error('invalid username password')
    }
  }  
  
  return (
    <div className='Adminlogin'>
      <form action="">
        <label htmlFor="">username:</label>
        <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='enter the username' required /> 
        <label htmlFor="">password</label>
        <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='enter the password' required />
        <br />
        <button onClick={login}>login</button>
        <span>Click here to <Link to='/adminsignup'>Signup</Link></span>
      </form>
    </div>
  )
}

export default AdminLogin;
