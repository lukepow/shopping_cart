import React from 'react'
import Product from './Product'
import AddForm from './AddForm'
import axios from 'axios'


const Main = ({ products, handleAddProduct, handleDeleteProduct, handleEditProduct }) => {


  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {products.map(product => (
            <Product key={product._id}
            id ={product._id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            handleDeleteProduct={handleDeleteProduct}
            handleEditProduct={handleEditProduct}/> 
          ))}
        </ul>
      </div>
      <AddForm handleAddProduct={handleAddProduct}/>
    </main>
  )
}

export default Main