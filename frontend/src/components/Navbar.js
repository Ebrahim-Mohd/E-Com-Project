import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"


const Navbar = () => {
    const [categories, setCategories] = useState(false)
    const [products, setProducts] = useState(null)
    const dropdownRef = useRef(null)

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
    useEffect(() => {
  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.classList.contains("cat-link")
    ) {
      setCategories(false);
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };
}, []);
    
    const uniqueCategories = products ? [...new Set(products.map(product=> product.category))] : []
    return (
        <nav>
            <h1 className="nav-title">Congo Cart</h1>
            <ul className="nav-links">
                <li><Link to = '/' className="home-link">Home</Link></li>
                <li onClick={toggleCategories} className="cat-link">Categories</li>
                {categories && 
                (<div className="sub-menu" ref={dropdownRef}>
                    <ul>
                    {uniqueCategories.map((category, index)=><li key={index}><Link className="sub-link" to={`categories/${category}`}>{category}</Link></li>)}
                </ul>
                </div>)}
                <li><Link to='/cart' className="cart-link">Cart</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navbar