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

document.getElementById("list").addEventListener("click", changeTemperatures);
function changeTemperatures() {
    var e = document.getElementById("list");
    var temperaturesLI = document.getElementsByClassName("temperature");
    if (
        e.options[e.selectedIndex].value == 0 &&
        document.getElementById("list").className == "cel"
    ) {
        for (var i = 0; i < temperaturesLI.length; i++) {
            temperaturesLI[i].innerText =
                Math.round(
                    parseInt(temperaturesLI[i].innerText.split("º")) * (9 / 5) +
                        32
                ) + "º";
        }
        return (document.getElementById("list").className = "far");
    } else if (
        e.options[e.selectedIndex].value == 1 &&
        document.getElementById("list").className == "far"
    ) {
        for (var i = 0; i < temperaturesLI.length; i++) {
            temperaturesLI[i].innerText =
                Math.round(
                    ((parseInt(temperaturesLI[i].innerText.split("º")) - 32) *
                        5) /
                        9
                ) + "º";
        }
        return (document.getElementById("list").className = "cel");
    }
}
