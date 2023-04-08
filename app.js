const express = require('express');
const mongoose = require('mongoose');
const KeyData = require('./Data.js');
const PORT = 3000;

const app = express();

//mongoose.connect('mongodb://localhost:27017');

app.use(express.static('public'));

app.use(express.json());

app.post('/submitdata', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('JSON data received and stored successfully!');
});

app.listen(PORT, () => {
    console.log('Server started on port:' + PORT);
});