const DataModel = require('./data.js');

const getData = async (sublink) => {
    const data = await DataModel.findOne({ link: sublink }).select('data');
    if (data == null) {
        return data;
    }
    return data.data;
}

module.exports = getData;