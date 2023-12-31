import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const CategoryPage=({products})=> {
    const {category} = useParams()
    const filteredProducts = products.filter(product => product.category === category)
    return (
        <div className="cat-page">
            {filteredProducts && filteredProducts.map(product=>(
                <ProductDetails key={product._id} product={product}/>
            ))}
        </div>

    )
}

export default CategoryPage