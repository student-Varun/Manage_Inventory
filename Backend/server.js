import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import fs from 'fs';  
import cors from 'cors';  
import { fileURLToPath } from 'url';  
import { dirname } from 'path';  


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

const mongoURI = 'mongodb://localhost:27017/Product';  
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


app.use(cors({
  origin: 'http://localhost:5173',  
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
}));


const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);  
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);  
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${timestamp}${ext}`);  
  }
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const Product = mongoose.model('Product', new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
}));


app.post('/products', upload.single('image'), async (req, res) => {
  try {
    const { productName, quantity, description, price, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Image upload failed' });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    const newProduct = new Product({
      productName,
      quantity,
      description,
      price,
      category,
      image: imagePath,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).json({ error: 'Failed to add product', details: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
