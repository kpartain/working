//Code Flow - Functions
var x = 5;

function setX(newValue) {
    x = newValue;
}

console.log(x);
setX(15);
console.log(x);
//T-Chart Example X
//Variable | Value
// x       | 5 ; 15
//         |
//         |
//         |
// c.log() | 5 ; 15

//The Return of return
var x = 5;

function addToX(amount) {
    return x + amount;
    console.log("hello there"); //this is never reached
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);
//T-Chart Example X
//Variable | Value
//  x      | 5 ;
//  result | -5 ;
// c.log() | 5 ; -5 ; 5

//Code Flow - Is the Array a Palindrome
function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
//T-Chart 1
//Variable | Value
//  result1| "not a pal-indrome!"
// f left  | 0 ; 1 ;; 0 ; 1 ; 2 ; 3
// f right | 4 ; 3 ;; 5 ; 4 ; 3
// result2 | "Pal-indrome!"
// c.log() | "not a pal-indrome!" ; "Pal-indrome!"
