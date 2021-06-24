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
function addDefinition(element){
    return element.style.display = "none";
}
//increase likes - look at THIS keyword?
function increaseLikes(element) {
    var parent = element.parentNode.id
    //grab current inner text of THIS
    var entireText = element.innerText;
    //split the string to isolate the string of the number
    var split = entireText.split(' ');
    //convert the string into an int, increment it by one
    var likeCount = parseInt(split[0]) + 1;
    //alert was liked
    alert(parent + " was liked")
    //return the element text to reflect increased value
    return element.innerText = likeCount + " Likes"
}
