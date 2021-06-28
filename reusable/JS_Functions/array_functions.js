// Array Reverse
// Write a function that will reverse the values an array and return them.
function reverseArray(arr) {
    var rightPointer = arr.length - 1;
    for(var leftPointer = 0; leftPointer <= rightPointer; leftPointer++) {
        [arr[leftPointer],arr[rightPointer]]=[arr[rightPointer],arr[leftPointer]];
        rightPointer--;
    }
    return arr;
}