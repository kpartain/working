//login/logout
function loginLogout() {
    var btn = document.getElementById("loginLogout");
    if (btn.innerText == "login") {
        btn.innerText = "logout";
    } else {
        btn.innerText = "login";
    }
}
//add a word

//increase likes - look at THIS keyword?
function increaseLikes(element) {
    //grab current inner text of THIS
    var entireText = element.innerText;
    //split the string to isolate the string of the number
    var split = entireText.split(' ');
    //convert the string into an int, increment it by one
    var likeCount = parseInt(split[0]) + 1;
    //return the element text to reflect increased value
    return element.innerText = likeCount + " Likes"
}
