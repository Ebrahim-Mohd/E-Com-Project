import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


const Navbar = () => {
    const [categories, setCategories] = useState(false)
    const [products, setProducts] = useState(null)

    const toggleCategories=()=>{
        setCategories(!categories)
    }
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch("http://localhost:4000/api/products")
            const json = await response.json()
            if (response.ok){
                setProducts(json)
            }
          
        }
        fetchData()
    }, [])
    const uniqueCategories = products ? [...new Set(products.map(product=> product.category))] : []
    return (
        <nav>
            <h1 className="nav-title">Congo Cart</h1>
            <ul className="nav-links">
                <li><Link to = '/' className="home-link">Home</Link></li>
                <li onClick={toggleCategories} className="cat-link">Categories</li>
                {categories && 
                (<ul>
                    {uniqueCategories && uniqueCategories.map((category, index)=><li key={index}><Link to={`categories/${category}`}>{category}</Link></li>)}
                </ul>)}
                <li><Link to='/cart' className="cart-link">Cart</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navbar