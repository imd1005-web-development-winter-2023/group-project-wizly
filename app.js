const express = require('express');
const mongoose = require('mongoose');
const storeJSON = require('./extraJS/post.js');

const PORT = 3000;
const app = express();

// CONNECT TO DATABASE
mongoose.connect('mongodb://localhost:27017/KeyboardDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB', err));

// SEND DATA TO CLIENT
app.use(express.static('static'));
app.use(express.static('public'));

// PARSE INCOMING JSON
app.use(express.json());

// STORE INCOMING JSON IN DATABASE (middleware that imports post.js function storeJSON)
app.use(storeJSON);

// SERVER LISTEN
app.listen(PORT, () => {
    console.log('Server started on port:' + PORT);
});