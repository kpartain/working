function increaseLikes(element) {
    //change the count on the button and the prior element per assignment *button is extra
    return [
        (element.innerText = likeSplit(element.innerText)),
        (document.querySelector("#likeCount").innerText = likeSplit(
            document.querySelector("#likeCount").innerText
        )),
    ];
}

//helper function to remove redundancy of incrementing inner text likes
function likeSplit(textFromElement) {
    var split = textFromElement.split(" ");
    var likeCount = parseInt(split[0]) + 1;
    var returnTextForElement = likeCount + " Like(s)";
    return returnTextForElement;
}
