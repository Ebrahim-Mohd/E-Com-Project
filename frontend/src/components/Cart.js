import React from "react"
import ProductDetails from "./ProductDetails"

const Cart=({cartItems})=>{
    return (
        <div>
            {cartItems.length!==0 && <h1 className="cart-title">Cart</h1>}
            {cartItems.length===0 ? (<h1 className="cart-title">Your Cart is empty.</h1>) 
            : 
            (<div className="cart-page">
                {cartItems.map(product=>(
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>)}
        </div>
    )

}

export default Cart