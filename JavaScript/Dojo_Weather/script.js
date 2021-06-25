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
    //grab the "event" that was clicked
    var e = document.getElementById("list");
    //grab an array of all temperature LIs high and low
    var temperaturesLI = document.getElementsByClassName("temperature");
    //if user selected 0 to show "F" AND the current class is CELSIUS (prevents code running inappropriately)
    if (
        e.options[e.selectedIndex].value == 0 &&
        document.getElementById("list").className == "cel"
    ) {
        //F to C : (f − 32) × 5/9 = c
        for (var i = 0; i < temperaturesLI.length; i++) {
            //get the inner text xº for each li element
            var temp = temperaturesLI[i].innerText;
            //split that single inner text at the º character. index[0] is x
            var splitTempArray = temp.split("º");
            //convert the string to an integer
            var celsius = parseInt(splitTempArray[0]);
            //convert it from C to F
            var fahrenheit = celsius * (9 / 5) + 32;
            //round that result
            var fahrenheitRound = Math.round(fahrenheit);
            //take the rounded result, add a º, save that as the new inner text for the single li element
            temperaturesLI[i].innerText = fahrenheitRound + "º";
            //this will run through each one
        }
        //change the class name of the list to far so we can't select C multiple times and get incorrect math
        return (document.getElementById("list").className = "far");
        //otherwise if user selects value 1 to show temp in C AND the current class is in FARENHEIT (prevents code from running inappropriately)
    } else if (
        e.options[e.selectedIndex].value == 1 &&
        document.getElementById("list").className == "far"
    ) {
        //(c × 9/5) + 32 = f
        //conversion is reversed from above but all return is similar
        for (var i = 0; i < temperaturesLI.length; i++) {
            var temp = temperaturesLI[i].innerText;
            var splitTempArray = temp.split("º");
            var fahrenheit = parseInt(splitTempArray[0]);

            var celsius = ((fahrenheit - 32) * 5) / 9;
            var celsiusRound = Math.round(celsius);
            temperaturesLI[i].innerText = celsiusRound + "º";
        }
        return (document.getElementById("list").className = "cel");
    }
}
