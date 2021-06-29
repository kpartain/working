let myEquation = [];
let someNumber = '';

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
            someNumber = '';
            myEquation.push(element.innerHTML);
            // someNumber += element.innerHTML;
            
    }
}


function calculate() {
    //add last number to the array 
    myEquation.push(someNumber);
    //reset the string someNumber to blank
    someNumber = '';
    console.log("myEquation in calculate(): " + myEquation);
    //turn the equation array into a string
    var resultString = myEquation.join(" ");
    console.log("resultString in calculate(): " + resultString);
    //we want to set the equation to empty
    myEquation = [];
    //but then push the finalResult
    var theAnswer = eval(resultString);
    myEquation.push(theAnswer)
    return console.log("Return of calculate(): " + theAnswer);

}



function clr(){
    //reset our equation operator to empty
    myEquation = [];
    //reset our someNumber to empty 
    someNumber = '';
    //return the display to default 0
    return document.getElementById("display").innerHTML = 0;
}