//The Math Library
//Predict what each of the following will return. Can we predict the variable random?
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);


//Dice Roller
//Using what we've learned about the Math library in JavaScript, complete the 
//following function that should return a value between 1 through 6 at random.
function d6() {
    var max = 6;
    var min = 1;
    var roll = Math.floor(Math.random() * (max - min + 1) + min);
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
console.log("The player rolled: " + d6());
console.log("The player rolled: " + d6());
console.log("The player rolled: " + d6());
console.log("The player rolled: " + d6());
console.log("The player rolled: " + d6());
console.log("The player rolled: " + d6());
console.log("The player rolled: " + d6());

//Consult the Oracle
//Using the following array, 
//write a function that will answer all of our questions by randomly choosing a response
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function consultTheOracle(){
    var min = 0;
    var max = lifesAnswers.length;
    var answerIndex = Math.floor(Math.random() * (max - min));
    console.log(answerIndex);
    //look for 0 and 19
    return lifesAnswers[answerIndex];
    
}
console.log(consultTheOracle());