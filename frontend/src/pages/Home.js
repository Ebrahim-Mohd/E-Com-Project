import {useEffect, useState} from 'react'
import ProductDetails from '../components/ProductDetails'

const Home = () => {
    const [products, setProducts] = useState(null)
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
    return (
        <div className="home">
            {products && products.map((product)=>(
                <ProductDetails key={product._id} product = {product}/>
            ))}
        </div>
    )
}

export default Home;