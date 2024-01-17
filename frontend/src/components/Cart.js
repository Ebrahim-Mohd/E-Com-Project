import React from "react"
import ProductDetails from "./ProductDetails"

const Cart=({cartItems})=>{
    return (
        <div>
            <h1 className="cart-title">Cart</h1>
            {cartItems.length===0 ? (<p>Your Cart is empty.</p>) 
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