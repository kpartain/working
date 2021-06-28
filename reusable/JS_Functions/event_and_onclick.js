//function to hide "this" clicked element
//the button must be a direct child of the desired element to be hidden
function hideElement(element) {
    //for clarity, select the parent element to be hidden
    var theSelectedParentElement = element.parentNode;
    //return that the element is hidden
    return (theSelectedParentElement.style.display = "none");
}