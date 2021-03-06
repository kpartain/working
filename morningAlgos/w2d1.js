//The Math Library
//Predict what each of the following will return. Can we predict the variable random?
var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor);
console.log(ceiling);
console.log(random);

//Dice Roller
//Using what we've learned about the Math library in JavaScript, complete the
//following function that should return a value between 1 through 6 at random.
function d6() {
    var roll = Math.ceil(Math.random() * 6);
    // your code here
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

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
    "Very doubtful.",
];

function consultTheOracle() {
    var answerIndex = Math.floor(Math.random() * lifesAnswers.length);
    return lifesAnswers[answerIndex];
}
console.log(consultTheOracle());

//Helper Function
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
