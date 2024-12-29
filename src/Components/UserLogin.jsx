import React,{useEffect, useState} from 'react'
import '../Style/UserLogin.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UserLogin(){
  let [username,setusername]=useState("");
  let [password,setpassword]=useState("");
  let [User,setUser]=useState([])
  useEffect(()=>{
    async function fetchUser(){
      let data=await fetch('http://localhost:1000/User')
      let res=await data.json();
      setUser(res)
      
    }fetchUser()
  },[])

  let naviagate = useNavigate();

  function login(){
    let val=User.filter((x)=>{
      return x.email === username && x.password === password})
    if (val.length>0){
      alert('login successfully')
      naviagate('/userhomepage')
    }else{
      alert('invalid username password')
    }
  }  
  
  return (
    <div className='Userlogin'>
      <form action="">
        <label htmlFor="">username:</label>
        <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='enter the username' required /> 
        <label htmlFor="">password</label>
        <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='enter the password' required />
        <br />
        <button onClick={login}>login</button>
        <span>Click here to <Link to='/usersignup'>Signup</Link></span>
      </form>
    </div>
  )
}

export default UserLogin;
