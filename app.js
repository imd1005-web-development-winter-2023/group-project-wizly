const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, (error) => {
    if (error) console.log(error);
    console.log("Server listening on PORT: ", PORT);
});