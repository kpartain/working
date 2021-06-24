//Pizza class object
class Pizza {
    constructor(crustType, sauceType, cheeses, toppings) {
        this.crustType = crustType;
        this.sauceType = sauceType;
        this.cheeses = cheeses;
        this.toppings = toppings;
    }
}

//pizzaOven Function
function pizzaOven(crustType, sauceType, cheeses = [], toppings = []) {
    return new Pizza(crustType, sauceType, cheeses, toppings);
}

//elements for randomPizza function
var possibleCrustTypes = [
    "deep dish",
    "hand tossed",
    "thin crust",
    "pie crust",
    "brooklyn style",
    "chicago style",
    "new york style",
    "cauliflower",
];
var possibleSauceTypes = [
    "traditional",
    "marinara",
    "ranch",
    "chocolate",
    "white sauce",
    "vodka sauce",
    "olive oil",
    "sauceless",
    "BBQ sauce",
    "ketchup",
];
var possibleCheeses = [
    "mozzerella",
    "feta",
    "ricota",
    "cream cheese",
    "cheddar",
    "colby jack",
    "pepper jack",
    "gruyere",
    "brie",
    "roquefort",
    "humbolt fog",
    "burrata",
];
var possibleToppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "marshmallows",
    "chocolate chips",
    "bacon",
    "chicken",
    "graham crackers",
    "pineapple don't even argue about this",
    "ham",
    "anchovies",
    "crushed garlic",
    "spinach",
    "green olives",
    "hamburger",
    "pickles",
    "love",
];

//randomPizza function
function quantityRandom(min, max) {
    return Math.random() * (max - min) + min;
}
function indexRandom(array) {
    var returnIndex = Math.floor(Math.random() * (array.length - 1) + 1);
    return returnIndex;
}

function getRandom(array) {
    if (array == possibleCrustTypes || array == possibleSauceTypes) {
        //only 1 crust type or sauce types
        var item;
        var index = indexRandom(array);
        item = array[index];
        return item;
    } else if (array == possibleCheeses) {
        //maximum 3 cheeses, minimum 1
        var quantity = quantityRandom(1, 3);
        var randomCheeses = [];
        for (i = 0; i < quantity; i++) {
            var index = indexRandom(array);
            randomCheeses.push(array[index]);
        }
        return randomCheeses;
    } else if (array == possibleToppings) {
        //maximum 5 toppings, minimum 1
        var quantity = quantityRandom(1, 5);
        var randomToppings = [];
        for (i = 0; i < quantity; i++) {
            var index = indexRandom(array);
            randomToppings.push(array[index]);
        }
        return randomToppings;
    }
}
function randomPizza() {
    var crust = getRandom(possibleCrustTypes);
    var sauce = getRandom(possibleSauceTypes);
    var cheesesArray = getRandom(possibleCheeses);
    var toppingsArray = getRandom(possibleToppings);
    var aRandomPizza = pizzaOven(crust, sauce, cheesesArray, toppingsArray);
    return aRandomPizza;
}

//initial pizzas
var pizzaOne = pizzaOven(
    "deep dish",
    "traditional",
    ["mozzerella"],
    ["pepperoni", "sausage"]
);
console.log(pizzaOne);

var pizzaTwo = pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella", "feta"],
    ["mushrooms", "olives", "onions"]
);
console.log(pizzaTwo);

//2 or more pizzas with any toppings we like
var pizzaThree = pizzaOven(
    "thin crust",
    "ranch",
    ["cheddar", "mozzerella"],
    ["bacon", "chicken"]
);
console.log(pizzaThree);

var pizzaFour = pizzaOven(
    "pie crust",
    "chocolate",
    ["cream cheese"],
    ["chocolate chips", "marshmallows", "graham crackers"]
);
console.log(pizzaFour);

//test randomPizza - 4x to verify different results and no index out of bounds errors
var myRandomPizza = randomPizza();
console.log(myRandomPizza);

var myRandomPizza2 = randomPizza();
console.log(myRandomPizza2);

var myRandomPizza3 = randomPizza();
console.log(myRandomPizza3);

var myRandomPizza4 = randomPizza();
console.log(myRandomPizza4);
