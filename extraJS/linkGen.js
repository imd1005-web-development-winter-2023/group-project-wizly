// all characters that can be used in the linkgen funciton (.split to convert to array)
const charArray = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');

// LINK GENERATOR FUNCTION (takes a length value)
function linkGen(len) {
    let sublink = '';

    // loop through the length inputted
    for (i = 0; i < len; i++) {

        // randomly generate a number X the length of the characters available (and floor it (round it to nearest integer))
        let random = Math.floor(Math.random() * charArray.length); // this will generate an index randomly for the array of chars above
        sublink += charArray[random]; // add the character to the sublink at the random index
    }

    // return the sublink
    return sublink;
}

// export the linkgen function
module.exports = linkGen;