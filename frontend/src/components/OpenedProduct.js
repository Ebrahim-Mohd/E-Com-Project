import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const OpenedProduct= ({products, cartItems, setCartItems})=> {
    const {title} = useParams()
    const [inCart, setInCart] = useState(cartItems.some(item=>item.title=== title))

    const [filteredProducts, setFilteredProducts] = useState(null)

    const handleCart=()=>{
        if (inCart){
            setCartItems(cartItems.filter(item=>item.title!== title))
            }
        else {
            const selectedProduct= products.find(product=> product.title === title)
            setCartItems([...cartItems, selectedProduct])
        }
        setInCart(!inCart)
    }
    
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch("http://localhost:4000/api/products")
            const json = await response.json()
            if (response.ok){
                setFilteredProducts(json.filter(product => product.title === title))
            }
          
        }
        fetchData()
    }, [title])

    console.log("Title from useParams:", title);
    console.log("Filtered Products:", filteredProducts);

    
    return (
        <div className="product-page">
            {filteredProducts && filteredProducts.map(product=>(
                <div key={product._id}>
                    <img className="openedproduct-img" src={product.img} alt={product.img}/>
                    <p className="openedproduct-title">{product.title}</p>
                    <p className="openedproduct-cat"> Category: {product.category}</p>
                    <p className="openedproduct-price">Price: ${product.price} </p>
                    <button className="add-to-cart-button" onClick={handleCart}>
                    {(inCart) ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default OpenedProduct