import React from 'react'
import { useState } from 'react'

const Product = ( { id, title, price, quantity, handleDeleteProduct, handleEditProduct } ) => {

  const [formTitle, setFormTitle] = useState('');
  const [formPrice, setFormPrice] = useState('');
  const [formQuantity, setFormQuantity] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
    

  const handleFormTitleChange = (e) => {
    setFormTitle(e.target.value);
  }

  const handleFormPriceChange = (e) => {
    setFormPrice(e.target.value);
  }

  const handleFormQuantityChange = (e) => {
    setFormQuantity(e.target.value);
  }

  const handleEditFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  }

  const handleDeleteClick = () => {
    handleDeleteProduct(id);
  }

  // const handleEditFormUpdate = (e) => {
  //   e.preventDefault();
  //   handleEditProduct();
  // }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity}</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleEditFormToggle}>
            Edit
          </button>
          {isFormVisible && (
            <form>
            <div className="input-group">
              <label for="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                value={formTitle}
                aria-label="Product Name"
                onChange={handleFormTitleChange}
              />
            </div>

            <div className="input-group">
              <label for="product-price">Price</label>
              <input
                type="number"
                id="product-price"
                value={formPrice}
                aria-label="Product Price"
                onChange={handleFormPriceChange}
              />
            </div>

            <div className="input-group">
              <label for="product-quantity">Quantity</label>
              <input
                type="number"
                id="product-quantity"
                value={formQuantity}
                aria-label="Product Quantity"
                onChange={handleFormQuantityChange}
              />
            </div>

            <div className="actions form-actions">
              <button type="submit" onClick={handleEditProduct}>Update</button>
              <button type="button" onClick={handleEditFormToggle}>Cancel</button>
            </div>
          </form>
          )}
        </div>
        <button className="delete-button" onClick={handleDeleteClick}><span>X</span></button>
      </div>
    </li>
  )
}

export default Product