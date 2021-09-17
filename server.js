const express = require('express');
const users = require('./routes/users');
const auth = require('./routes/auth');
const products = require('./routes/products');
const app = express();

// Define routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/products', products);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));