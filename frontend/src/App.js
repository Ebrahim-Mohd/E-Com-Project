import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import { useState, useEffect } from 'react';
import OpenedProduct from './components/OpenedProduct';
import Cart from './components/Cart'

function App() {
  const [products, setProducts] = useState(null)
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
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
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
          path='/'
          element={<Home/>}/>
          <Route
          path='/categories/:category'
          element={<CategoryPage products={products}/>}/>
          <Route
          path='/product/:title'
          element={<OpenedProduct products={products} cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route 
          path='/cart'
          element={<Cart cartItems={cartItems}/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
