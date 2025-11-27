const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

const userRoutes = require('./routes/user.routes'); // routes untuk user
app.use('/api/users', userRoutes);

const productRoutes = require('./routes/products.routes'); // Routes untuk product
app.use('/api/products', productRoutes);

const authRoutes = require("./routes/auth.routes"); // routes untuk auth
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.listen(PORT, () =>{
console.log(`Server berjalan di http://localhost:${PORT}`);
});

require('dotenv').config();
