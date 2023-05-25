import React from 'react'
import { useState } from 'react'
import { gstoreAPIs } from '../APIs/gstoreAPIs'

const AdminUser = () => {
    const [catName, setCategory]=useState('')
    const onSubmit= (e)=>{
        e.preventDefault()
        const categoryData =[{
            catName
        }]

        handleChange(categoryData)
        console.log(JSON.stringify(categoryData));
    }
    
    async function  handleChange (categoryData){
        await gstoreAPIs.addCategory(categoryData)

    }
  return (
    <div>
        <h1>Add Category</h1>
        <form onSubmit={onSubmit}>
            <input type= "text" name="catName" onChange={(e)=>{setCategory(e.target.value)}} value={catName}></input>
            <input type="submit" value="Add Category"></input>
        </form>
    </div>
  )
}

export default AdminUser