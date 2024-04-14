const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db');

const app = express();
const productRouter = require('./routes/productRouter');

const env = require('dotenv').config({path: '../.env'});

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to A Fresh Tart"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api/', productRouter);