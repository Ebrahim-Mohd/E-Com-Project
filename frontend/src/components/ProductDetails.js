import { Link } from "react-router-dom"
const ProductDetails= ({product})=> {
    return (
        <div className="product-box">
            <Link to={`/product/${product.title}`} className="product-link">
                <img className="product-img" src={product.img} alt={product.img}/>
                <p className="product-title">{product.title}</p>
                <p className="product-category"> Category: {product.category}</p>
                <p className="product-price">Price: ${product.price} </p>
            </Link>
        </div>
    )
}

export default ProductDetails