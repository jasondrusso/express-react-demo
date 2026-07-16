const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const productsModule = require('./routes/products.mjs');

const app = express();
const port = 8080;

// Use the routers
app.use(cors());
app.use('/users', usersRouter);
app.use('/products', productsModule.router);

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Main application home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});