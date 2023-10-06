const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://qyang57:Qiyang0....@cluster0.rkbczpp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Use routes
app.use(productRoutes);

// Root URL route
app.get('/', (req, res) => {
  res.send(JSON.stringify({ message: 'Welcome to DressStore application.' }));
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
