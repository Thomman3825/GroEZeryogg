import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'bootstrap'
import { useState } from 'react'
import s from "./style.module.css"
import { gstoreAPIs } from '../APIs/gstoreAPIs'
import { useNavigate } from 'react-router'
import Nav from "../Nav.js"

const Login = () => {
  const navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPass]=useState('')


    async function onSubmit(e) {

      e.preventDefault();

      const formData = {
        email,
        password
        }
        const res=await gstoreAPIs.loginUser(formData)
      try {
           if (res.message == "Email not exits")
           {
             alert("Email not exits");
           }
           else if(res.message == "Login Success")
           {
            console.log(res.userType)

            if(res.userType==="customer")
              {
                navigate('/Customer');
              }
              if(res.userType==="vendor")
              {
                navigate('/Vendor');
              }
              if(res.userType==="admin")
              {
                navigate('/Admin');
              }
           }
            else
           {
              alert("Incorrect Email and Password not match");
           }
}

       catch (err) {
        alert(err);
      }
    
    }


  return (
    <div className={s.Container}>
      {/* <div><Nav></Nav></div> */}
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="UserName">Enter user name :</label>
            <input type="text" name="UserName" onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
       
            <label htmlFor="password">Enter password:</label>
            <input type="password" name="Password" onChange={(e)=>{setPass(e.target.value)}} value={password} ></input>
        
            <input type="submit" value="Login" ></input>
        </form>
    </div>
  )
}

export default Login