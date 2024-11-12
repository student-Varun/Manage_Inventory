
// Please ignore this file for while jab hum application ko scale up karenge then we consider it and procced further 


import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Product = mongoose.model('Product', productSchema, 'products'); 

export default Product;
