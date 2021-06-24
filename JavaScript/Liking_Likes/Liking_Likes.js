function increaseLikes(element) {
    //change the count on the button and the prior element per assignment *button is extra
    return [element.innerText = likeSplit(element.innerText), element.parentElement.childNodes[3].innerText = likeSplit(element.parentElement.childNodes[3].innerText) ];
}

//helper function to remove redundancy of incrementing inner text likes
function likeSplit(textFromElement) {
    var split = textFromElement.split(" ");
    var likeCount = parseInt(split[0]) + 1;
    var returnTextForElement = likeCount + " Like(s)";
    return returnTextForElement;
}
