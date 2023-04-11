const express = require('express');
const path = require('path');

const DataModel = require('./data.js');
const linkGen = require('./linkGen.js');


const app = express();

// FUNCTION THAT STORES JSON IN DATABASE AND RETURNS THE LINK
const storeJSON = app.post('/submitJSON', async (req, res) => {

    const jsonData = req.body; // get the jsonData from the request's body
    let sublink = linkGen(8); // generate random link
    let exists = await DataModel.findOne({ link: sublink }); // check if link exists

    // in case the link exists already
    while (exists != null) { 
        sublink = linkGen(8); // generate a new link
    }

    // instantiate new model using imported schema
    const dataExport = new DataModel({
        link: sublink, // set link to the generated sublink
        data: jsonData // set the data to the JSON data
    });

    // SAVE TO DATABASE
    dataExport.save()
        .catch((err) => console.log(err)); // error catch
    

    // create resData object and input the full link path
    const resData = {
        link: 'http://localhost:3000?share=' + sublink
    }

    // return resData to client
    res.json(resData);
});

// export module
module.exports = storeJSON;