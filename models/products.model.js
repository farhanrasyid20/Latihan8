const db = require('../db');

const Product = {
  getAll: (cb) => {
    db.query("SELECT * FROM products", cb);
  },

  getById: (id, cb) => {
    db.query("SELECT * FROM products WHERE id=?", [id], cb);
  },

  create: (data, cb) => {
    db.query(
      "INSERT INTO products (nama, deskripsi, harga, foto) VALUES (?, ?, ?, ?)",
      [data.nama, data.deskripsi, data.harga, data.foto],
      cb
    );
  },

  update: (id, data, cb) => {
    db.query(
      "UPDATE products SET nama=?, deskripsi=?, harga=?, foto=? WHERE id=?",
      [data.nama, data.deskripsi, data.harga, data.foto, id],
      cb
    );
  },

  delete: (id, cb) => {
    db.query("DELETE FROM products WHERE id=?", [id], cb);
  },
};

module.exports = Product;
