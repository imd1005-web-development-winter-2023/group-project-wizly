const DataModel = require('./data.js');

const getData = async (sublink) => {
    const data = await DataModel.findOne({ link: sublink }).select('data');
    return data;
}

module.exports = getData;