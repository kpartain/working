//innerHTML of our display
var displayContent = document.getElementById("display").innerHTML;

var myEquation = [];
var someNumber = "";

//1st onclick, change innerHTML of display to number
function press(element){
    var e = element.innerHTML;
    if(element.className == "decimal") {
        someNumber = someNumber + e;
        document.getElementById("display").innerHTML = someNumber;
    }else if (e == 0 || e == 1 || e == 2 || e == 3 || e == 4 || e == 5 || e == 6 || e == 7 || e == 8 || e == 9){
        someNumber += e;
        document.getElementById("display").innerHTML = someNumber;
    } else {
            myEquation.push(parseInt(someNumber));
            someNumber = "";
            myEquation.push(e);
    }
}

function calculate() {
    return console.log(myEquation)
}

function clr(){
    //reset our equation operator to empty
    myEquation = [];
    return document.getElementById("display").innerHTML = 0;
}