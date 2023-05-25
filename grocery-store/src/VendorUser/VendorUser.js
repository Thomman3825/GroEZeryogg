import React, { useEffect, useState } from 'react'
import { gstoreAPIs } from '../APIs/gstoreAPIs'

const VendorUser = () => {
    const [prodName,setProdName]=useState('')
    const [price, setPrice]=useState('')
    const [stock, setStock]=useState('')
    const [catId, setCat]=useState('')
    const [catName, setCatName]=useState('')
    const [catList, setCatList]=useState([])
    const [status, setStatus]=useState(false)

    async function getCategories(){
        
        // console.log(categories); 
        // categories.map((cat)=>{
        //     setCatList(cat)
        // })
        // console.log(catList)
    }
useEffect(() => {
    const getCategory =async()=>{
        const categories = await gstoreAPIs.getCategory()

        setCatList(categories)
       
    }
     getCategory()
     console.log(catList);
},[])


const onSubmit=(e)=>{
e.preventDefault()
const category={catId,catName}
const orderCart =[]
const product=[{
    prodName,
    price,
    stock,
    category,
    orderCart
}]
handleChange(product)
console.log(product);
console.log(catId);
}
async function handleChange(productData){
    console.log(productData);
    const res = await gstoreAPIs.addProduct(productData)
    console.log(res.status);
}
  return (
    <div>
        <h1>Add Product</h1>
        <form onSubmit={onSubmit}>
            <label>Product Name:</label>
            <input type="text" name="prodName" value={prodName} onChange={(e)=>setProdName(e.target.value)}></input>

            <label>Price:</label>
            <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}></input>

            <label>Stock:</label>
            <input type="text" name="stock" value={stock} onChange={(e)=>setStock(e.target.value)}></input>

            <select value={catId} onChange={(e)=>setCat(e.target.value)}>
                {catList && catList.map((cat)=><option key={cat.catId} value={cat.catId}>{cat.catName}</option>)}
            </select>
            <input type ="submit" value="Add Product" onSubmit={handleChange}></input>
        </form>


    </div>
  )
}

export default VendorUser