import React from 'react'
import Main from './Main'
import Header from './Header'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  let [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const result = await axios.get("http://localhost:5001/api/products");
      setProducts(result.data)
    } catch (e) {
      console.error(e.message)
    }
  }

  const handleAddProduct = async(values) => {
    try {
       const response = await axios.post('http://localhost:5001/api/products', { ...values })
       console.log('data posted:', response.data)
    } catch(error) {
      console.error(error.message)
    }
    fetchProducts();
  }

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5001/api/products/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
  
    } catch(error) {
      console.error(error.message);
    }
  }

  const handleEditProduct = async (productId) => {
    try {
      await axios.put(`http://localhost:5001/api/products/${productId}`);
    } catch(error) {
      console.error(error.message)
    }
  }
  
  return (
    <div id="app">
      <Header />
      <Main products= {products}
      handleAddProduct={handleAddProduct}
      handleDeleteProduct={handleDeleteProduct}
      handleEditProduct={handleEditProduct}/>
    </div>
  )
}

export default App