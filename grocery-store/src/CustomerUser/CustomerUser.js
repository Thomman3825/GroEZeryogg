import React, { useEffect } from 'react'
import { gstoreAPIs } from '../APIs/gstoreAPIs'
import { useState } from 'react'
import s from "./style.module.css"
import { useNavigate } from 'react-router'
import Cart from '../Cart/Cart'
import CustomCard from './CustomCard'
import { Button } from 'react-bootstrap'
import Nav from '../Nav'


const CustomerUser = () => {
  const [catList, setCatList]=useState([])
  const [productList,setProductList]=useState([])
const [prodtoCart, setProdToCart]=useState('')
const [cartItems, setCartItems]=useState([])
const [status, setStatus] =useState(false)
const [listStatus,setListStatus] =useState(true)
const [checkOut, setCheckOut]=useState(false)

const navigate = useNavigate()


  const catIdList=[catList.map((cat)=>cat.catId)]
  console.log(catIdList)

    async function getCategories(){
      const res =await gstoreAPIs.getCategory()
      setCatList(res)
    }


    async function getProducts(){
      const products = await gstoreAPIs.getProducts()
      setProductList(products)
    }
// console.log(productList[1].category.catId);
    useEffect(()=>{
      getCategories()
      getProducts()
    },[])

//    const onClick=(prodId)=>{
// console.log(prodId)
//  }

console.log(prodtoCart);
async function addToCart(){
const res =await gstoreAPIs.addToCart(prodtoCart)
const status = res.status
console.log(status);
}
const onClick=(e)=>{
  e.preventDefault();
  viewCart(cartItems)

}
 function viewCart(CartItems){
//  navigate("Cart")
 console.log(CartItems);
  setStatus(true)
  setListStatus(false)
 
 
return CartItems

}

const proceedTOCheckOut = ()=>{
setCheckOut(true)
}

  return (
    <div>
      {/* <div><Nav></Nav></div> */}
      <div className={s.Cont}>{listStatus&&catList&&catList.map((cat)=>{return <h1 key={cat.catId}>{cat.catName}
      <div className={s.CardContainer}>{productList&&productList.filter((prod)=>{return prod.category.catId === cat.catId}).map((prd)=>{return <div key={prd.prodId}
      ><div className={s.card}>{<CustomCard prodName={prd.prodName}></CustomCard>}</div>
      <div className={s.AddButton}><Button variant='success' onClick={(e)=>{e.preventDefault(); setProdToCart(prd); setCartItems([...cartItems,prd])}}>Add To Cart</Button></div>
      </div>})}</div>
      </h1>})}
      {listStatus&&<Button variant='success' onClick={onClick}>View Cart</Button>}
      </div>
        {status && <div>
          <div>
          <h1>Cart</h1>
          </div>
          <div>
            <div>
            {cartItems.map((items)=>{return <div key={items.prodId}>{items.prodName+"-"}{"Price:"+items.price}</div>})}
            </div>
            <div>
              {<button onClick={proceedTOCheckOut}>Proceed To Checkout</button>}
            </div>
          </div>
          <div>
            {checkOut && <div>We have recieved your order. Please pay on delivery</div>}
          </div>
          </div>}
    </div>
  )
}

export default CustomerUser