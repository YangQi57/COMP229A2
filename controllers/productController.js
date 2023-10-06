const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
    published: req.body.published  
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.updateProductById = async (req, res) => {
  const updatedProductData = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
    published: req.body.published  
  };

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProductData, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany();
    res.json({ message: 'All products deleted successfully' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getPublishedProducts = async (req, res) => {
  try {
    const products = await Product.find({ published: true });
    res.json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

/*exports.getProductsByName = async (req, res) => {
  try {
    const products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
    res.json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};*/
exports.getProductsByName = async (req, res) => {
  try {
    const keyword = req.query.name; // Retrieve the name query parameter from the request
    const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });
    res.json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

