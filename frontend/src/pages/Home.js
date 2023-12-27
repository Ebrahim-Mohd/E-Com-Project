import {useEffect, useState} from 'react'

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
                <p key = {product._id}>{product.title}</p>
            ))}
        </div>
    )
}

export default Home;