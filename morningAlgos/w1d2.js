//ctrl / to make comments, alt z to wrap text
//use semi-colons!!

//how to view console.logs - in the console of browser, in the output, or use an extension

//**EXAMPLE ONE**/
var a = 25;
a = a - 13;
console.log(a / 2);
//a is not mutated inside this function
a = "hello";
console.log(a + " hello");

//T-Chart Example 1
//Variable | Value
// a       | 25 -> 12 ->
// c.l     | 6

//**EXAMPLE TWO**/
for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);

//T-Chart Example 1
//Variable | Value
// i       | 0 -> 3 -> 4 -> 7 -> 8 -> 11 -> 12
// c.l     | 0 -> 4 -> 8 - > "outside of the loop 12"


function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
      
    for(var i=0; i<arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
      console.log("the current sum is: " + sum); 
    }
      
    console.log("the total is: " + sum);
      
  }
      
  getTotal([1, 3, 5]);

//T-Chart Example 1
//Variable | Value
// 
// 
