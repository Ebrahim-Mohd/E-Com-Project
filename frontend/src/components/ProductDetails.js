import { Link } from "react-router-dom"
const ProductDetails= ({product})=> {
    return (
        <div>
            <Link to={`product/${product.title}`}>
                <img className="product-img" src={product.img} alt={product.img}/>
                <p>{product.title}</p>
                <p> Category: {product.category}</p>
                <p>Price: ${product.price} </p>
            </Link>
        </div>
    )
}

export default ProductDetails