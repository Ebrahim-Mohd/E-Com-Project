const ProductDetails= ({product})=> {
    return (
        <div>
            <img className="product-img" src={product.img} alt={product.img}/>
            <p>{product.title}</p>
            <p> Category: {product.category}</p>
            <p>Price: ${product.price} </p>
        </div>
    )
}

export default ProductDetails