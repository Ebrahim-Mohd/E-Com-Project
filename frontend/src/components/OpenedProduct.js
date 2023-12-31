import React from "react"
import { useParams } from "react-router-dom"

const OpenedProduct= ({products})=> {
    const {title} = useParams()
    const filteredProducts = products.filter(product => product.title === title)
    return (
        <div>
            {filteredProducts && filteredProducts.map(product=>(
                <div>
                    <img className="product-img" src={product.img} alt={product.img}/>
                    <p>{product.title}</p>
                    <p> Category: {product.category}</p>
                    <p>Price: ${product.price} </p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default OpenedProduct