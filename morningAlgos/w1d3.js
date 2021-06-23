// EXAMPLE ONE**********************************
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

//T-Chart Example 1
//Variable | Value
// isSunny     | true
//temperature  | 45
// isRaining   | false
// whatToBring | "I should bring: " -> "I should bring: sunglasses, " -> "I should bring sunglasses, a coat, "-> "I should bring: sunglasses, a coat, and a smile!"
//c.l()        | "I should bring: sunglasses, a coat, and a smile!"

// EXAMPLE TWO **************************************

for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");

//T-Chart Example 2
//Variable | Value
// i       | 10 ; 9 ; 8 ; 7 ; 6 ; 5 ; 4 ; 3 ; 2 ; 1 ; 0
// c.log() | 10 ; 9 ; 8 ; 7 ; 6 ; 5 ; 4 ; 3 ; ignition! ; 1

// EXAMPLE THREE*************************************

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositives++;
    } else {
        //do nothing
    }
}
console.log("there are " + countPositives + " positive values");

//T-Chart Example 3
//Variable | Value
// countPositives| 0 1 2 3 4
// numbers       | [3, 4, -2, 7, 16, -8, 0]
// i             | 0 1 2 3 4 5 6 7
// c.log() | "there are 4 positive values"
