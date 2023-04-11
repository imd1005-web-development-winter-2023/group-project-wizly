// REQUIRE EXPRESS (for server), MONGOOSE (for Mongo database), path
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// CUSTOM IMPORTS 
const getData = require('./extraJS/getData.js');
const storeJSON = require('./extraJS/post.js');

// DEFINE PORT AND APP
const PORT = 3000;
const app = express();

// CONNECT TO DATABASE 
mongoose.connect('mongodb://localhost:27017/KeyboardDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB', err));


// SEND STATIC FILES TO /PUBLIC SO INDEX.HTML CAN ACCESS
app.use('/public', express.static(path.join(__dirname, 'public')));

// REQUEST FOR JSON DATTA FROM SERVER
app.get('/data/:link', async (req, res) => {
  console.log(req.params.link); 
  data = await getData(req.params.link); // use getData to get the data with the inputted link
  res.json(data); // send the data in the response
})

// SEND INDEX DOCUMENT TO ROOT 
app.get('/', async (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // SEND THE INDEX DOCUMENT
})

// PARSE INCOMING JSON
app.use(express.json());

// STORE INCOMING JSON IN DATABASE
app.use(storeJSON); // use storeJSON middleware to store the incoming json in a database

// SERVER ON
app.listen(PORT, () => {
    console.log('Server started on port:' + PORT);
});