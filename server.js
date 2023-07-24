const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

// Import file db.js
require('./datauye');

// Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://raihan-fe.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(bodyParser.json());
app.use('/img', express.static(path.join(__dirname, 'img')))

// Import dan gunakan productRoutes
const productRoutes = require('./routes/productRoute');
app.use('/api', productRoutes);

const authController = require('./controllers/authController');
app.post('/register', authController.register);
app.post('/login', authController.login);


// Start the server
const port = 3001; // Anda bisa mengganti port sesuai kebutuhan
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
