import React from 'react'

const Header = (props) => {
  return(
    <div className='card flex'>
      <div onClick={()=> props.handleShowCart(true)}>
        Shopping Cart App
        </div>
      <div onClick={()=> props.handleShowCart(false)}>
        Cart
      <sup>{props.count}</sup>
      </div>
    </div>
    )
}
export default Header
