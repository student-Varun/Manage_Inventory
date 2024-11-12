import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function ProductInfo() {
  const [productData, setProductData] = useState({
    productName: '',
    quantity: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!productData.productName) formErrors.productName = 'Product name is required';
    if (!productData.quantity || isNaN(productData.quantity) || productData.quantity <= 0)
      formErrors.quantity = 'Please enter a valid quantity';
    if (!productData.price || isNaN(productData.price) || productData.price <= 0)
      formErrors.price = 'Please enter a valid price';
    if (!productData.category) formErrors.category = 'Category is required';
    if (!productData.image) formErrors.image = 'Product image is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      
      const formData = new FormData();
      formData.append('productName', productData.productName);
      formData.append('quantity', productData.quantity);
      formData.append('description', productData.description);
      formData.append('price', productData.price);
      formData.append('category', productData.category);
      formData.append('image', productData.image);

      try {
        const response = await axios.post('http://localhost:5000/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        });

        if (response.status === 201) {
          alert('Product added successfully!');
          setProductData({
            productName: '',
            quantity: '',
            description: '',
            price: '',
            category: '',
            image: null,
          });
        }
      } catch (error) {
        console.error('Error adding product:', error);
        alert('Failed to add product');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Add New Product</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={productData.productName}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter product name"
            />
            {errors.productName && <p className="text-red-500 text-xs mt-1">{errors.productName}</p>}
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter quantity"
            />
            {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
          </div>

      
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter product description"
              rows="4"
            ></textarea>
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>

  
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter product price"
            />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="household">Household</option>
              <option value="beauty">Beauty</option>
              <option value="sports">Sports</option>
              <option value="toys">Toys</option>
              <option value="books">Books</option>
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
          </div>

       
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="mt-2 block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding Product...' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default ProductInfo;
