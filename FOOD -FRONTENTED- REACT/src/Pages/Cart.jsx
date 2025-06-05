import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import './Cart.css'

const Cart = () => {

  const {cartItems,food_list,removefromCart,getTotalcartAmt} = useContext(StoreContext)
  return (
    <div className="cart">
       <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>
        <br/>
        <hr/>
        {food_list.map((item,index) =>{
          if(cartItems[item._id]>0){
            return(
              <div>
              <div className='cart-items-title cart-items-item'>
                   <img src={item.image}/>
                   <p>{item.name}</p>
                   <p>${item.price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>${item.price*cartItems[item._id]}</p>
                   <p onClick={() =>removefromCart(item._id)}className='cart-items-item-cross'>x</p>
                </div>
                <hr/>
                </div>
            )
          }
        })}
       </div>
       <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalcartAmt()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalcartAmt()+2}</p>
            </div>
          </div>
          <buuton>Proceed to checkout</buuton>
        </div>
        <div className='cart-promocode'>
          <p>If you have Promo code ,enter it here</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='promo code'/>
            <button>SUbmit</button>
          </div>
        </div>
       </div>
         
      </div>
  )
}

export default Cart