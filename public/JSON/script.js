const fs = require('fs');
const path = require('path');

const filePath = (path.join(__dirname, 'keydb.json'));

fs.readFile(filePath, "utf8", (err, jsonString) => {
    data = JSON.parse(jsonString);

    for(var key1 in data) {
        for(var key2 in data[key1]) {
            for (var key3 in data[key1][key2]) {
                string = data[key1][key2][key3];

                if (string.startsWith("audio")) {
                    string = "./public/" + string;
                    data[key1][key2][key3] = string;
                }
            }
        }
    }

    console.log(data);
    output = JSON.stringify(data);

    fs.writeFile(path.join(__dirname, "test.json"), output, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Sucess");
        }
    })
});
