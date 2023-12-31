import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import { useState, useEffect } from 'react';

function App() {
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
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
