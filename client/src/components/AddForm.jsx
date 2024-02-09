import React, { useState } from 'react'
import axios from 'axios'

const AddForm = ({handleAddProduct}) => {

  const [divClassName, setDivClassName] = useState('add-form')
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  
  const handleClick = () => {
    divClassName === 'add-form' ? setDivClassName('add-form visible') : setDivClassName('add-form');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const formValues = {title, price, quantity}

  const handleAddClick = async(e) => {
    e.preventDefault();
    
    handleAddProduct(formValues);
  }

  return (
    <div className={divClassName}>
        <p><button className="add-product-button" onClick={handleClick}>Add A Product</button></p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label for="product-name">Product Name:</label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="input-group">
            <label for="product-price">Price:</label>
            <input
              type="number"
              id="product-price"
              name="product-price"
              min="0"
              step="0.01"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>
          <div className="input-group">
            <label for="product-quantity">Quantity:</label>
            <input
              type="number"
              id="product-quantity"
              name="product-quantity"
              min="0"
              value={quantity}
              onChange={handleQuantityChange}
              required
            />
          </div>
          <div className="actions form-actions">
            <button type="submit" onClick={handleAddClick}>Add</button>
            <button type="button" onClick={handleClick}>Cancel</button>
          </div>
        </form>
      </div>
  )
}


export default AddForm
