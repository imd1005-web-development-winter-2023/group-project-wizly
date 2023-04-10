const express = require('express');
const DataModel = require('./data.js');
const linkGen = require('./linkGen.js');

const app = express();

const storeJSON = app.post('/submitJSON', (req, res) => {
    const jsonData = req.body;
    const sublink = linkGen(8);

    const dataExport = new DataModel({
        link: sublink,
        data: jsonData
    });

    dataExport.save()
        .catch((err) => console.log(err));

    res.send('JSON data stored!');

});

module.exports = storeJSON;