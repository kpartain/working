//function to hide "this" clicked element
//the button must be a direct child of the desired element to be hidden
function hideElement(element) {
    //for clarity, select the parent element to be hidden
    var theSelectedParentElement = element.parentNode;
    //return that the element is hidden
    return (theSelectedParentElement.style.display = "none");
}

//when the user clicks on one of the cities in the navbar
//an alert generates saying "Loading Weather Report"
function alertMessage() {
    //push the alert window with the required string
    alert("Loading weather report...");
}
