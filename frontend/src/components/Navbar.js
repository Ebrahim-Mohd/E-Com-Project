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
    const uniqueCategories = products ? [... new Set(products.map(product=> product.category))] : []
    return (
        <nav>
            <h1>Congo Cart</h1>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li onClick={toggleCategories}>Categories</li>
                {categories && 
                (<ul>
                    {uniqueCategories && uniqueCategories.map((category, index)=><li key={index}><Link to={`categories/${category}`}>{category}</Link></li>)}
                </ul>)}
            </ul>
            <h1>Cart</h1>
        </nav>
    )
}

export default Navbar