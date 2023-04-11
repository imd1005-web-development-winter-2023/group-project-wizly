const DataModel = require('./data.js');

// gets data from database using inputted link (returns null if doesn't exist)
const getData = async (sublink) => {
    // find the data
    const data = await DataModel.findOne({ link: sublink }).select('data');

    // if it's null return the null
    if (data == null) {
        return null;
    }

    // otherwise return data.data (the actual key data)
    return data.data;
}

// export function
module.exports = getData;