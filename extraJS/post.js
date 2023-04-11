const express = require('express');
const DataModel = require('./data.js');
const linkGen = require('./linkGen.js');
const path = require('path');

const app = express();

const storeJSON = app.post('/submitJSON', async (req, res) => {
    const jsonData = req.body;
    let sublink = linkGen(8);
    let exists = await DataModel.findOne({ link: sublink });

    while (exists != null) {
        sublink = linkGen(8);
    }

    const dataExport = new DataModel({
        link: sublink,
        data: jsonData
    });

    dataExport.save()
        .catch((err) => console.log(err));

    
    data = {
        link: 'http://localhost:3000?share=' + sublink
    }

    res.json(data);
});

module.exports = storeJSON;