var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
//   2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
//function randomInteger(min, max, incOrExc)
    // var numberPlaced = 0;
    // for(var k=0; k < 10; k++) {
    //     var whichArray = randomInteger(0, theDojo.length, "exclusive");
    //     var numberOfZeros = [];
    //     for(var z = 0; z < theDojo[whichArray].length; z++) {
    //         if(theDojo[whichArray][z] == 0) {
    //             numberOfZeros.push(z);
    //         }
    //     }
    //     if(numberOfZeros.length > 0) {
    //         var whichIndex = randomInteger(0, numberOfZeros.length, "exclusive");
    //         numberPlaced++;
    //         return theDojo[whichArray][numberOfZeros[whichIndex]] = 1;           
    //     }
    // }
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    // 3. if you click on a ninja you must restart the game 
    if(theDojo[i][j] != 0) {
        return location.reload();
    };
        console.log("Element " + element);
        console.log("i " + i);
        console.log("j " + j);
        //account for if we clicked first row
        var above = 0;
        if(i != 0) {
          var above = theDojo[i-1][j]; 
        }
        var aboveRight = 0;
        if(j != (theDojo[i].length - 1) && i != 0) {
            aboveRight = theDojo[i-1][j+1];
          }
        var aboveLeft = 0;
        if(j != 0 && i != 0) {
              aboveLeft = theDojo[i-1][j-1];
          }
        //account for if this is the last row
        var below = 0;
        if(i != (theDojo.length - 1)) {
            var below = theDojo[i+1][j];
        }
        var belowRight = 0;
        if(i != (theDojo.length - 1) && j != (theDojo[i].length - 1)) {
            belowRight = theDojo[i+1][j+1];
        }
        var belowLeft = 0;
        if(i != (theDojo.length - 1) && j != 0) {
            var belowLeft = theDojo[i+1][j-1];
        }
        //account for if we're in the first column
        var left = 0;
        if(j != 0) {
            var left = theDojo[i][j-1];
        }
        //account for if we're in the last column
        var right = 0;
        if(j != (theDojo[i].length - 1)) {
            var right = theDojo[i][j+1];
        }
        console.log("above " + above);
        console.log("aboveright " + aboveRight);
        console.log("aboveleft " + aboveLeft);
        console.log("right " + right);
        console.log("below " + below);
        console.log("belowleft " + belowLeft);
        console.log("belowright " + belowRight);
        console.log("left " + left);

        var theAnswer = above + aboveRight + aboveLeft +right + below + belowLeft + belowRight + left;
        console.log("the answer" + theAnswer);
        // 1. draw the number onto the button instead of alerting it
        element.innerHTML = theAnswer;
        //alert
        return alert("There are " + theAnswer + " ninjas around you.")
//   console.log({i, j});
//   alert("TODO - determine how many ninjas are hiding in adjacent squares");
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

//return a random integer between two values
function randomInteger(min, max, incOrExc) {
    var returnInteger = 0;
    if (incOrExc == "inclusive") {
        min = Math.ceil(min);
        max = Math.floor(max);
        returnInteger = Math.floor(Math.random() * (max - min + 1) + min);
    } else if (incOrExc == "exclusive") {
        min = Math.ceil(min);
        max = Math.floor(max);
        returnInteger = Math.floor(Math.random() * (max - min) + min);
    }
    return returnInteger;
}