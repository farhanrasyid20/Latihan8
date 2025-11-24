const Product = require('../models/products.model');

exports.getProducts = (req, res) => {
  Product.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.getProductById = (req, res) => {
  Product.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result.length) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json(result[0]);
  });
};

exports.createProduct = (req, res) => {
  Product.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Produk ditambahkan', id: result.insertId });
  });
};

exports.updateProduct = (req, res) => {
  Product.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Produk diperbarui' });
  });
};

exports.deleteProduct = (req, res) => {
  Product.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Produk dihapus' });
  });
};
