//innerHTML of our display
var displayContent = document.getElementById("display").innerHTML;

let myEquation = [];
let someNumber = "";

//1st onclick, change innerHTML of display to number
function press(element){
    if(element.className == "decimal") {
        someNumber += element.innerHTML;
        document.getElementById("display").innerHTML = someNumber;
    }else if (element.className == "number"){
        someNumber += element.innerHTML;
        document.getElementById("display").innerHTML = someNumber;
    } else if(element.className == "operator"){
            myEquation.push(someNumber);
            myEquation.push(element.innerHTML);
            someNumber = "";
    }
}

function calculate(element) {
    myEquation += someNumber;
    console.log(myEquation);
    var resultString = myEquation.join(', ');
    return console.log(resultString)
    // someNumber = "";
    // console.log(eval(resultString));
}

function clr(){
    //reset our equation operator to empty
    myEquation = [];
    return document.getElementById("display").innerHTML = 0;
}