const db = require('../db'); 
const User = {

  getAll: (callback) => {
    db.query('SELECT * FROM users', callback);
  },

  
  getById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  },

 
  create: (data, callback) => {
    db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [data.name, data.email, data.password],
      callback
    );
  },


  update: (id, data, callback) => {
    db.query(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [data.name, data.email, id],
      callback
    );
  },

 
  delete: (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
  }
};

module.exports = User;