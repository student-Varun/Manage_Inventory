import express from 'express';
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




app.use(cors({
  origin: 'http://localhost:5173',  
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.get("/", (req,res)=>{
  return res.status(200).send(`${Math.floor(Date.now()/1000)}`);
})


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



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
