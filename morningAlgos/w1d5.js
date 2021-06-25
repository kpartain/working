//how to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);

//what do we expect to get back?
var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// while loops
var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

//reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...
//        ["a", "b", "c", "d", "e"];
//returns ["e", "d", "c", "b", "a"];
var myArray = ["a", "b", "c", "d", "e"];
function reverseArray(arr) {
    var j = arr.length;
    for (var i = 0; i < j; i++) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j--;
    }
    return arr;
}
var myReversedArray = ["e", "d", "c", "b", "a"];
console.log(myArray);
console.log(myReversedArray);
