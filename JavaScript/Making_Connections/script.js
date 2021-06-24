console.log("page loaded...");

function accept(element) {
    //grab entire request li element
    var connectionRequest = element.parentNode.parentNode;
    //uses removeFromRequests to remove element
    hideElement(connectionRequest);
    //decrements the PENDING REQUESTS counter by 1 id="pending-requests"
    changeCount("pending-requests", -1);
    //increments the YOUR CONNECTIONS Counter by 1 id="total-connections"
    changeCount("total-connections", 1);
}

function decline(element) {
    //grab entire request li element
    var connectionRequest = element.parentNode.parentNode;
    //uses removeFromRequests to remove element
    hideElement(connectionRequest);
    //decrements the PENDING REQUESTS counter by 1 id="pending-requests"
    changeCount("pending-requests", -1);
}

//helper method for accept/decline
function hideElement(connectionRequest) {
    //remove the entire element from visbility - this will scoot the others up
    return connectionRequest.style.display = 'none';
}

function changeCount(id, changeAmount) {
    // "total-connections" or "pending-requests"
    var originalCount = document.getElementById(id).innerText;
    console.log(originalCount)
    var counterChange = parseInt(originalCount) + changeAmount;
    console.log(counterChange)
    return document.getElementById(id).innerText = counterChange;
}
