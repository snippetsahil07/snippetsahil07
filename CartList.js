import React,{useEffect, useState} from 'react'

const CartList = ({cart}) => {
    const[CART,setCART]=useState([])
    useEffect(()=>{
      setCART(cart)
    },[cart])
  return(
    <div>
      {
        CART?.map((cartItem,cartIndex)=>
        {
          return(
          <div>
            <img src={cartItem.url} width='40%' />
           <span> {cartItem.name}</span>
            <span><button
onClick={()=>{
              const _CART= CART.map((item,index)=>{
                return cartIndex === index?{...item,quantity:item.quantity >0? item.quantity -1:0}:item
              })
              setCART(_CART)
            }}
            >-</button></span>
            <span>{cartItem.quantity}</span>
            <span><button 
onClick={()=>{
              const _CART= CART.map((item,index)=>{
                return cartIndex === index?{...item,quantity:item.quantity +1}:item
              })
              setCART(_CART)
            }}>+</button></span>
           <span>Rs. {cartItem.price}/-</span>
          </div>
          )
        })
      }
       <p>
         Total <span></span>{
           CART.map(item=> item.price*item.quantity).reduce((total, value)=> total+value,0)
         }
       </p>
      
      </div>
  )
}
export default CartList
