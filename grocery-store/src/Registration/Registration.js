import React, { useEffect, useState } from 'react'
import { gstoreAPIs } from '../APIs/gstoreAPIs'
import s from "./style.module.css"
import { useNavigate } from 'react-router'
import { Form } from 'react-bootstrap/Form'
import logo from "../logo.jpg"

const Registration = () => {
    const navigate = useNavigate()
    const [userName,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPass]=useState('')
    const [fullName, setFullName]= useState('')
    const [userType, setUserType]=useState('')
    const [status, setStatus]=useState(false)

    useEffect(()=>{
        navigate("/registration")
        setStatus(false)
    },[])
    

//    const formEl = document.querySelector('.form')

// formEl.addEventListener('submit',e=>{
    

// })
const onSubmit = (e)=>
{
const formData = [{
fullName,  
userName,
email,
password,
userType
}]
    e.preventDefault()
    
    
    
    // const data = new URLSearchParams(formData)
    handleChange(formData)
    //showStatus()
   //console.log(JSON.stringify(formData) )

}
    

    async function handleChange(formData){
        const res =await gstoreAPIs.addUser(formData)
        if (res.status===200){
            setStatus(true)
            console.log("User Added");
            console.log(formData);
        }

    }
    const showStatus=()=>{
        if (status){
            return "User Added"
        }
        else {
            return "User Not Added"
        }
    }

    const goToLogin=()=>{

        navigate("/")
    }

    // console.log(name)
  return (

    <div className={s.Container}>
        <div className={s.header}>
        <h1 className={s.heading}>Register</h1>
        <img src={logo} className={s.image}/>
        </div>
        <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="FullName">Enter name:</label>
            <input type="text" name="FullName" onChange={(e)=>{setFullName(e.target.value)}} value={fullName}></input>

            <label htmlFor="UserName">Enter user name :</label>
            <input type="text" name="UserName" onChange={(e)=>{setName(e.target.value)}} value={userName}></input>

            <label htmlFor="email">Enter email:</label>
            <input type="email" name="Email"onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input>

            <label htmlFor="password">Enter password:</label>
            <input type="password" name="Password" onChange={(e)=>{setPass(e.target.value)}} value={password} ></input>
                
                <div className={s.SelectContainer}>
            <select className={s.Select} name= "userType" onChange={(e)=>{setUserType(e.target.value)}} value={userType}>
                <option value="vendor" >Vendor</option>
                <option value="customer">Customer</option>
            </select>
               </div>
            <input type="submit" value="Register" onSubmit={handleChange}></input>
        </form>
        </div>
        <div className={s.SecondContainer}>
        
            {status && <div className={s.Status}> {showStatus()}</div>}
        
        
            {status && <button className={s.GoToLogin} onClick={goToLogin}>Go to Login</button>}
        
        </div>
    </div>
  )
}

export default Registration