const express = require('express');
const mongoose = require('mongoose');
const storeJSON = require('./extraJS/post.js');
const path = require('path');
const getData = require('./extraJS/getData.js');
const fs = require('fs');

const PORT = 3000;
const app = express();

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: "index.html",
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

// CONNECT TO DATABASE
mongoose.connect('mongodb://localhost:27017/KeyboardDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB', err));


// SEND STATIC FILES TO 

app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})



// PARSE INCOMING JSON
app.use(express.json());

// STORE INCOMING JSON IN DATABASE (middleware that imports post.js function storeJSON)
app.use(storeJSON);

// SERVER LISTEN
app.listen(PORT, () => {
    console.log('Server started on port:' + PORT);
});