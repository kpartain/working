//return a random integer between two values
function randomInteger(min, max, incOrExc) {
    var returnInteger = 0;
    if (incOrExc == "inclusive") {
        min = Math.ceil(min);
        max = Math.floor(max);
        returnInteger = Math.floor(Math.random() * (max - min + 1) + min);
    } else if (incOrExc == "exclusive") {
        min = Math.ceil(min);
        max = Math.floor(max);
        returnInteger = Math.floor(Math.random() * (max - min) + min);
    }
    return returnInteger;
}
