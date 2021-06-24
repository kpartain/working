console.log("page loaded...");

function accept(element) {
    hideElement(element);
    changeCount("pending-requests", -1);
    changeCount("total-connections", 1);
}

function decline(element) {
    hideElement(element);
    changeCount("pending-requests", -1);
}

function hideElement(connectionRequest) {
    var connectionVisbility = connectionRequest.parentNode.parentNode;
    return (connectionVisbility.style.display = "none");
}

function changeCount(id, changeAmount) {
    var originalCount = document.getElementById(id).innerText;
    var counterChange = parseInt(originalCount) + changeAmount;
    return (document.getElementById(id).innerText = counterChange);
}

var randomNamesArray = [
    "I'm Baby",
    "YOLO Wolf",
    "Asymmetrical Cold-Pressed",
    "Artisan Sartorial",
    "Four Dollar Toast",
    "Kitsch Umami",
];

function changeUserName() {
    return (document.getElementById("userName").innerText =
        randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)]);
}
