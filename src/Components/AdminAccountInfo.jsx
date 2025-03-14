import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function AdminAccountInfo() {
  let [admin,setAdmin] = useState([])

  let param = useParams()

  useEffect(()=>{
    function fetchdata(){
      axios.get(`http://127.0.0.1:1000/Admin/${param.id}`)
      .then((res)=>{
        setAdmin(res.data)
        
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    fetchdata()
  },[])
  return (
    <div className="AdminAccountInfo">
      {admin.map((info)=>{
        return(
          <div className="information">
            <h1>{info.name}</h1>
            <h1>{info.email}</h1>
            <h1>{info.phone}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default AdminAccountInfo