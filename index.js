/*To view console (Inspect + click console)*/

/*.log used to print to the console*/
console.log("The start of JavaScript.");
/* \n adds a line on the console */
console.log("\n");

/*Creates an alert box within window*/
//window.alert("Testing alert box...");

/*Variables*/
/*(Declaration : var, let, const) (name) = (input)*/
/*let : a varible that can be changed*/
let aNumber;
aNumber = 6.23434;
aNumber += 2;
console.log("(Let) Number : " + aNumber);

/*const : a varible thats not meant to be changed*/
const PI = 3.1415;
console.log("(Const) PI is :", PI);
console.log("\n");

/* User input */
/* Window-box input */
let username = window.prompt("Enter a username :");
console.log("Entered username :", username);
console.log("\n");

/* Data types */
/*Num : Numbers*/
let age = 21;
age = age + 1;

/*, & + used to add additional items*/
console.log("(Num) Age :", age);

/*String : Characters*/
let name = "BRYAN";
console.log("(String) Name :", name);

/*Boolean : True/False*/
let student = false;
console.log("(Boolean) Student : ", student);
console.log("\n");

/* Data type conversion */
let a;
let b;
let c;

a = Number(3.14);
b = String(3.14);
c = Boolean(3.14);

/*typeof shows which type*/
console.log("Type is :", typeof a);
console.log("Type is :", typeof b);
console.log("Type is :", typeof c);
console.log("\n");

/* Arithmetic expressions (JS operates under BIDMAS")*/
let value1 = 10;
value1 = value1 + 3;
console.log("Added :", value1);
value1 = value1 - 3;
console.log("Subtract :", value1);
value1 = value1 * 3;
console.log("Multiplied :", value1);
value1 = value1 / 3;
console.log("Divided :", value1);

/* Remainder */
value1 = value1 % 4;
console.log("Remainder :", value1);
console.log("\n");

/* Re-assigning variable */
let value2 = 5;
value2 += 1;
console.log("Added value :", value2);
value2 -= 2;
console.log("Subtracted value :", value2);
value2 *= 2;
console.log("Multiplied value :", value2);
value2 /= 3;
console.log("divided value :", value2);
console.log("\n");

/* Math */
/*Some examples of Math methods*/
aNumber = Math.round(aNumber);
console.log("Rounded :", aNumber);

aNumber = Math.pow(aNumber, 2);
console.log("Power (2) :", aNumber);

/*Genrates number between 0-1*/
aNumber = Math.random();
console.log("Random number(0-1) :", aNumber);

/* Random number between 1-6 */
aNumber = Math.floor(aNumber * 6) + 1;
console.log("Dice :", aNumber);
console.log("\n");

/* Some string methods */
console.log("Username length :", username.length);
console.log("Username character (4) :", username.charAt(4));
console.log("Username uppercase :", username.toUpperCase());

/* Method chaining */
/*putting . between methods chains them together*/
console.log("Username first letter :", username.toUpperCase().charAt(0));
console.log("\n");

/* Creating a counter */
let count = 0;
/* document : Used for excuting code on web pages */
/* .getElementById : Returns ID */
/* .onclick : Excutes function when clicked */
/* function x() {} : A set of statements that preforms a task */
function increaseCount() {
  count += 1;
  document.getElementById("Count-label").innerHTML = count;
}

function decreaseCount() {
  count -= 1;
  document.getElementById("Count-label").innerHTML = count;
}

function resetCount() {
  count = 0;
  document.getElementById("Count-label").innerHTML = count;
}

/* IF statement */
let num1 = Math.floor(Math.random() * 6 + 2);
console.log("DICE :", num1);
if (num1 < 3) {
  console.log("BAD ROLL");
} else if (num1 == 3) {
  console.log("DECENT ROLL");
} else {
  console.log("GOOD ROLL");
}
console.log("\n");

/* Switch */
let num2 = Math.floor(Math.random() * 7 + 1);
switch (num2) {
  case 1:
    console.log("You rolled a 1 !");
    break;
  case 2:
    console.log("You rolled a 2 !");
    break;
  case 3:
    console.log("You rolled a 3 !");
    break;
  case 4:
    console.log("You rolled a 4 !");
    break;
  case 5:
    console.log("You rolled a 5 !");
    break;
  case 6:
    console.log("You rolled a 6 !");
    break;
  default:
    console.log(num2 + "... a dice doesnt go that high ???");
}
console.log("\n");

/* AND & OR operators */
let num3 = Math.floor(Math.random() * 24 + 1);
// && (and) : Both conditions must be true
if (num3 > 12 && num3 < 18) {
  console.log("It is the afternoon", num3 + ":00.");
} else {
  console.log("It is either morning or night", num3 + ":00.");
}

// || (or) : One condition must be true
let num4 = Math.floor(Math.random() * 6 + 1);
if (num4 == 1 || num4 == 6) {
  console.log("Either a 1 or 6 :", num4);
} else {
  console.log("One of these 2/3/4/5 :", num4);
}

/* NOT logical operator*/
let num5 = Math.floor(Math.random() * 6 + 1);
if (!(num5 > 3)) {
  console.log("Either less than 3 or equal to 3 :", num5);
} else {
  console.log("Greater than 3 :", num5);
}
console.log("\n");

/* Creating a check box & selector*/
const Checkbox = document.getElementById("Checkbox");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");

document.getElementById("Submit").onclick = function () {
  /*Must go in order of most specific case*/
  if (Checkbox.checked && optionA.checked) {
    window.alert("AGREED & OPTION A");
  } else if (Checkbox.checked && optionB.checked) {
    window.alert("AGREED & OPTION B");
  } else if (Checkbox.checked && optionC.checked) {
    window.alert("AGREED & OPTION C");
  } else if (Checkbox.checked) {
    window.alert("AGREED but no option selected");
  } else if (!Checkbox.checked) {
    window.alert("Please AGREE first before selecting an option.");
  }
};

/* While loops */
/*Will keep prompting until a username is given or canceled*/
while (username == "") {
  username = window.prompt("Enter a username : ");
}
console.log("Greetings", username.toUpperCase());

/* DO while loop */
let password;
do {
  password = window.prompt("Enter a password");
} while (password == "");
console.log("Password :", password);
console.log("\n");

/* For loop */
for (let i = 1; i <= 4; i += 1) {
  console.log("Numbers...", i);
}
console.log("\n");

/* Nested loop */
let rows = window.prompt("Enter number of rows :");
let columns = window.prompt("Enter number of columns :");

for (let i = 1; i <= rows; i += 1) {
  for (let j = 1; j <= columns; j += 1) {
    document.getElementById("Rectangle").innerHTML += "[ ]";
  }
  document.getElementById("Rectangle").innerHTML += "<br>";
}

/* Break & Continue */
for (let i = 1; i <= 8; i += 1) {
  if (i == 5) {
    /*continue : Skips the iteration when permeters meet*/
    continue;
  } else if (i == 7) {
    /*break : Ends the loop when permeters meet*/
    break;
  }
  console.log("Counting...", i);
}
console.log("\n");

/*Functions*/
let randomLocation = "UK";

function HELLO() {
  let randomName = "RANDY";
  let randomAge = 41;
  GREET(randomName, randomAge);
}
/*Varibles within functions must be added to 
the brackets of other functions*/
function GREET(randomName, randomAge) {
  console.log(
    "HELLO",
    randomName,
    "IS AGED",
    randomAge,
    "FROM",
    randomLocation
  );
}
HELLO();
console.log("\n");

/* Return */
let area;
let width = Math.floor(Math.random() * 5 + 1);
let height = Math.floor(Math.random() * 5 + 1);

area = getArea(width, height);

function getArea() {
  let theArea = width * height;
  /*return : specifies the value being returned to function caller*/
  return theArea;
}
console.log("Area :", area);
console.log("\n");

/* Ternary operator */
let num6 = Math.floor(Math.random() * 30 + 1);
/*? used like if else (Condition ? (if outcome) : (else outcome))*/
let anAdult = num6 >= 18 ? "Above 18" : "Below 18";
console.log(num6, anAdult);

Drink(num6);
function Drink(num6) {
  num6 >= 18 ? console.log("You can drink") : console.log("You can't drink");
}
console.log("\n");

/* Var variable */
function getData() {
  /*var limited to the function*/
  var num7 = Math.floor(Math.random() * 30 + 1);
  return num7;
}
/*var shouldn't normally be used as a global varible*/
console.log("The number is :", getData());
console.log("\n");

/* Template literals */
let item1 = "Chocolate";
let item2 = 24;
let item3 = true;

/*using `` allows for inbredded varibles with ${}*/
let text1 = `Here are some varibles ${item1}, ${item2}, ${item3}`;
console.log(text1);

/* Formatting values */
/*Returns string with langauge sensitive representation of number*/
let num8 = 34084.2342;
num8 = num8.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(num8);
let num9 = 23231432.45452;
num9 = num9.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
console.log(num9);
let num10 = 0.15;
num10 = num10.toLocaleString(undefined, { style: "percent" });
console.log(num10);
let num11 = 64;
num11 = num11.toLocaleString(undefined, { style: "unit", unit: "celsius" });
console.log(num11);
console.log("\n");

/* Array */
/*Arrays can store multiple variables*/
let fruits = ["Pear", "Apple", "Mango"];
console.log(...fruits);

/*Adds and element*/
fruits.push("Orange");
fruits.push("Potato");
/*Removes last element (Potato in this case)*/
fruits.pop();
/*Adds element to beginning*/
fruits.unshift("Lemon");
fruits.unshift("Peas");
/*Removes element from beginning (Peas in this case)*/
fruits.shift();
console.log(fruits);

let length = fruits.length;
console.log(`Number of variables : ${length}`);
let index = fruits.indexOf("Pear");
/*always starts from 0 then 1,2,3...*/
console.log(`Index number of Pear : ${index}`);
console.log("\n");

/*Looping through an arrays*/
for (let i = 0; i < fruits.length; i += 1) {
  console.log(`${i + 1} : ${fruits[i]}`);
}
console.log("\n");

for (let fruit of fruits) {
  console.log(fruit);
}
console.log("\n");

/*Sorting array of strings*/
/*.sort() : sorts them in alphabetical order*/
/*.reverse() : Used to reverse the order*/
fruits = fruits.sort().reverse();

for (let fruit of fruits) {
  console.log(fruit);
}
console.log("\n");

/*2D Array*/
let meats = ["Beef", "Chicken", "Turkey"];
let fishes = ["Cod", "Sardine", "Tuna"];
let dairys = ["Milk", "Yogurt", "Butter"];

let foodList = [meats, fishes, dairys];

/*Arrange like a grid ([1][0] in this case is Cod)*/
console.log(`The item is : ${foodList[1][0]}`);
console.log("\n");

/*items can be changed similarly too 
(in this case now steak will be first)*/
foodList[0][0] = "Steak";

/*Goes through array of arrays*/
for (let foods of foodList) {
  /*Goes through specific array*/
  for (let food of foods) {
    console.log(food);
  }
}
console.log("\n");

/*Spread operator*/
/*... : Unpacks elements into individual pieces*/
let car = "bugatti";
console.log(...car);

let cars = ["SUV", "Coupe", "Sedan"];
console.log(...cars);

let moreCars = ["Crossover", "Minivan"];
/*Will insert the array not the individual cars*/
cars.push(moreCars);
console.log("Without ... : ", cars);
cars.pop(moreCars);
/*Unpacks and adds each car from the array into the other array*/
cars.push(...moreCars);
console.log("With ... : ", cars);
console.log("\n");

let num12 = [1, 4, 8, 64, 50, 9, 3];
/*... unpacks them into individual elements 
and .max() checks each one*/
let maxNum = Math.max(...num12);
console.log(`Max num of array : ${maxNum}`);

let num13 = [33, 487, 101, 8];
num12.push(...num13);
console.log(num12);
maxNum = Math.max(...num12);
console.log(`New max num of array : ${maxNum}`);
console.log("\n");

/*Rest parameter*/
/*... can be used to pack arguments into an array*/
let d = 1;
let e = 5;
let f = 23;

console.log(`Total of varibles : ${total1(d, e, f, 6, 9)}`);

/*Allows for unspecific amount of varibles to be used*/
/*... must be last perameter if mixing parameter*/
function total1(d, ...numbers) {
  let total = 0;
  total += d;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log("\n");

/*Callback*/
/*Function passed as an argument in another function*/
total2(4, 6, displayConsole1);

function total2(x, y, callback) {
  let result = x + y;
  callback(result);
}

function displayConsole1(output) {
  console.log(`The result is : ${output}`);
}
console.log("\n");

/*.forEach()*/
/*Goes through each individual array 
element (Callback function)*/
let totalCheckout = 0;
let cart = [2, 6, 13];
cart.forEach(checkout);
function checkout(element) {
  totalCheckout += element;
}
console.log(`Total checkout cost : ${totalCheckout}`);

let num14 = [22, 33, 88];
num14.forEach(value3);

/*The array[index] is needed to access the 
array for changes to each elements*/
function value3(element, index, array) {
  array[index] = element + 1;
}
console.log(`The values : ${num14}`);

let student2 = ["dave", "ryan", "dax"];
student2.forEach(cap);
student2.forEach(print);

function cap(element, index, array) {
  array[index] = element.toUpperCase();
}

function print(element) {
  console.log(element);
}
console.log("\n");

/*array.map()*/
/*executes provided callback function once for 
each array element & creates a new array*/
let num15 = [3, 5, 4, 8, 13];
let num15Squared = num15.map(square);

function square(element) {
  return Math.pow(element, 2);
}

console.log(`Squared array : ${num15Squared}`);
console.log("\n");

/*array.filter()*/
/*Creates a new array with all elements
that pass the test function provided*/

let ages = [12, 24, 16, 33, 23];
let adultAges = ages.filter(ageCheck);

function ageCheck(element) {
  return element >= 18;
}

console.log(`Adults ages : ${adultAges}`);
console.log("\n");

/*array.reduce()*/
/*Reduces array to a single value*/
let values1 = [2, 22, 14, 5, 4];
let accumulator = values1.reduce(checkOut);

function checkOut(accumulator, element) {
  return accumulator + element;
}

console.log(`Total of values : ${accumulator}`);
console.log("\n");

/*Sorting array of numbers*/
let marks1 = [67, 36, 88, 6, 22];
marks1 = marks1.sort(ascendingOrder);
/*Having the first varible - second varible makes it ascending order*/
function ascendingOrder(a, b) {
  return a - b;
}
console.log(`Marks 1 (ascending) : ${marks1}`);

/*Sorting array of numbers*/
let marks2 = [2, 44, 23, 96, 20];
marks2 = marks2.sort(descendingOrder);
/*Having the first varible - second varible makes it ascending order*/
function descendingOrder(a, b) {
  return b - a;
}
console.log(`Marks 2 (descending) : ${marks2}`);
console.log("\n");

/*Anonymous function expression*/
/*A function without a name to avoid polluting
the global scope*/
let count2 = 0;
document.getElementById("Up-button2").onclick = function () {
  count2 += 1;
  document.getElementById("Count-label2").innerHTML = count2;
};

/*Arrow function*/
/*Compact version of a traditional function*/
const greetings2 = (username) => console.log(`Hello again ${username}`);
greetings2(username);
const total3 = (x, y) => x + y;
console.log(`Total 1 : ${total3(10, 25)}`);

/*{} are needed if function has more than 1 statement*/
/*return should be used when something specific from mulitple statements
is needed to be returned*/
const total4 = (x, y) => {
  x = x * 2;
  x = x + y;
  return x;
};
console.log(`Total 2 : ${total4(36, 12)}`);
console.log("\n");

let marks3 = [22, 53, 42, 93, 34];
marks3.sort((x, y) => y - x);
marks3.forEach((element) => console.log("Mark :", element));
console.log("\n");

/*Down button using => function*/
document.getElementById("Down-button2").onclick = () => {
  count2 -= 1;
  document.getElementById("Count-label2").innerHTML = count2;
};

/*Shuffling array (COME BACK TO)*/
let letters = ["A", "B", "C", "D", "E", "F"];
shuffle(letters);

function shuffle(array) {
  /* Concept : Array is shifting around itself 
  around until it reaches index 0 */
  let currentIndex = array.length;
  while (currentIndex != 0) {
    /*genrates number between 0-1 * array.length then rounds down*/
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    /*temp holds the orginal letter at array[currentIndex]*/
    let temp = array[currentIndex];
    /*Switches the letter at array[currentIndex]
    with the letter at array[randomIndex]*/
    array[currentIndex] = array[randomIndex];
    /*This makes the Letter at array[randomIndex]
    the letter that array[currentIndex] orginally was*/
    array[randomIndex] = temp;
  }
}

console.log(letters);
document.getElementById("theLetters").innerHTML = letters;
console.log("\n");

/*Nested functions*/
/*Functions inside other functions*/
login();
function login() {
  displayname();
  displayMSG();
}
function displayname() {
  console.log(username);
}
function displayMSG() {
  console.log("WELCOME BACK !");
}
console.log("\n");

/*Map*/
/*Holds key-value pairs of any data type 
  (Does not allow duplicate keys)*/
const deck = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["D", 4],
  ["E", 5],
]);

/*.set() adds a pair*/
deck.set("F", 6);
deck.delete("B", 1);

console.log(`Is there a "B" : ${deck.has("B")}`);
console.log(`How many pairs in the map : ${deck.size}`);

deck.forEach((value, key) => console.log(`${key} | ${value}`));

let total5 = 0;
total5 += deck.get("F");
total5 += deck.get("D");
console.log(`Total of selected items (F & D) : ${total5}`);
console.log("\n");

/*Objects*/
/*A group of properties & methods*/
const vechical1 = {
  type: "car",
  numWheels: 4,
  maxSpeed: 100,

  VechicalGO: function () {
    console.log("The vechical begins moving");
  },
  VechicalSTOP: function () {
    console.log(`The ${this.type} has stopped`);
  },
};

console.log(`${vechical1.type} || top speed : ${vechical1.maxSpeed}`);
vechical1.VechicalGO();
console.log("\n");

/*.this*/
/*used to refer to a particular object,
the object depends on the immediate context*/
const vechical2 = {
  type: "bike",
  numWheels: 2,
  maxSpeed: 15,

  VechicalGO: function () {
    console.log("The vechical begins moving");
  },
  VechicalSTOP: function () {
    /*this. refers to the object currently being worked with
    (in this case vechical2)*/
    console.log(`The ${this.type} has stopped `);
  },
};

vechical1.VechicalSTOP();
vechical2.VechicalSTOP();
console.log("\n");

/*Class*/
/*a template for creating objects*/
/*defines the structure & behavior of objects
that will be created in the class*/
class player {
  score = 0;

  pause() {
    console.log("GAME PAUSED");
  }
  exit() {
    console.log("EXITING GAME...");
  }
}

const player1 = new player();
const player2 = new player();

player1.score += 100;
console.log(`Player score : ${player1.score}`);
player2.score += 500;
console.log(`Player score : ${player2.score}`);

player1.pause();
player1.exit();
console.log("\n");

/*Constructor*/
/*a special method of a class, 
accepts arguments and assign properties*/
class student3 {
  /*Permeters*/
  constructor(name, age, marks4) {
    /*Properties of this class*/
    this.name = name;
    this.age = age;
    this.marks4 = marks4;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

/*Permeters must be passed through*/
const studentA = new student3("Kyle", 28, 53);
const studentB = new student3("Brian", 31, 68);

console.log(`${studentA.name} | ${studentB.name}`);
console.log(`Current marks : ${studentA.marks4} | ${studentB.marks4}`);
studentA.study();
studentB.sleep();
console.log("\n");

/*Static keyword*/
/*Belongs to the class not the objects*/
class someCars {
  /*Without static each type of car has its own copy */
  totalCarsA = 0;
  /*static makes the class have the only copy*/
  static totalCarsB = 0;
  constructor(type) {
    this.type = type;
    this.totalCarsA += 1;
    /*its stored in the class*/
    someCars.totalCarsB += 1;
  }
  static startRace() {
    console.log("3,2,1... Go!");
  }
}

const car1 = new someCars("Ford");
const car2 = new someCars("Mini");
const car3 = new someCars("Fiesta");

console.log(`without static : ${car1.totalCarsA}`);
console.log(`without static : ${car3.totalCarsA}`);
/*Must call the class as its stored 
within the class not within each object*/
console.log(`with STATIC : ${someCars.totalCarsB}`);

/*Object cannot use the static function either
acts as a utility function of sorts*/
someCars.startRace();
console.log("\n");

/*Inheritence*/
/*a child class can inherit all the methods and propertises 
from another class (parent class)*/
/*Adult class*/
class Animal {
  alive = true;
  eat() {
    console.log(`${this.name} is eatting...`);
  }
  sleep() {
    console.log(`${this.name} is sleeping...`);
  }
}
/*Child class*/
/*exstends is used to allow the child class to inherit
the methods and propertises of the adult class*/
class Dog extends Animal {
  name = "Dog";
  run() {
    console.log(`${this.name} is runnning!`);
  }
}
class Fish extends Animal {
  name = "Fish";
  swim() {
    console.log(`${this.name} is swimming.`);
  }
}
class Bird extends Animal {
  name = "Bird";
  flying() {
    console.log(`${this.name} is flying.`);
  }
}

const dog = new Dog();
const fish = new Fish();
const bird = new Bird();

console.log(`Alive status : ${dog.alive}`);
dog.run();
fish.eat();
fish.swim();
bird.sleep();
console.log("\n");

/*super*/
/*refers to parent class & commonly used 
to envoke constructors of the parent class*/
class differentCars {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

class FORD extends differentCars {
  constructor(name, color) {
    super(name, color);
  }
}
class MINI extends differentCars {
  constructor(name, color) {
    super(name, color);
  }
}

const Ford = new FORD("Ford", "Blue");
const Mini = new MINI("Mini", "Green");
console.log(`The ${Ford.name} is ${Ford.color}`);
console.log(`The ${Mini.name} is ${Mini.color}`);
console.log("\n");

/*getters & setters*/
/*get : binds an object property to a function
when that proprty is accesssed*/
/*set : binds an object property to a function
when that property is assigned a value*/
class character {
  constructor(name, health, mana) {
    /*_ in front of name means its protected 
    and shouldnt be messed with*/
    this._name = name;
    this._health = health;
    this._mana = mana;
  }
  get name() {
    return `${this._name}`;
  }
  get health() {
    return `${this._health} HP`;
  }
  get mana() {
    return `${this._mana} MP`;
  }
  set health(value) {
    this._health = value;
  }
  set mana(value) {
    this._mana = value;
  }
  greeting() {
    console.log(`Greetins hero ${this.name}!`);
  }
}

const Brian = new character("Brian", 100, 100);

/*This(in this case "username") will not change 
the value as its protected*/
Brian.name = "RYAN";
console.log(`${Brian.name}`);
console.log(`${Brian.health}`);
console.log(`! Player hit -10hp !`);
Brian.health = 90;
console.log(`${Brian.health}`);
console.log("\n");

/*Objects as arguments*/
const Rhiana = new character("Rhiana", 75, 150);

manaUpdate(Rhiana, 150);
displayCharacter(Rhiana);

function displayCharacter(character) {
  console.log(character.name);
  console.log(character.health);
  console.log(character.mana);
}

function manaUpdate(character, newMana) {
  character.mana = newMana;
}
console.log("\n");

/*Array of objects*/
const Terry = new character("Terry", 140, 60);

const characters = [Brian, Rhiana, Terry];
console.log(characters[0].name, characters[0].health);
console.log(characters[1].name, characters[1].health);
console.log(characters[2].name, characters[2].health);
characters[0].greeting();
console.log("\n");

greetHeros(characters);
function greetHeros(characters) {
  for (const character of characters) {
    character.greeting();
  }
}
console.log("\n");

/*Anonymous objects*/
/*Objects without names*/
class storeItems {
  constructor(item, value) {
    this.item = item;
    this.value = value;
  }
}

/*Cant directly access object via name*/
const items = [
  new storeItems("Apple", 1),
  new storeItems("Banana", 0.55),
  new storeItems("Orange", 0.75),
  new storeItems("Pear", 1.2),
];

items.forEach((Ranitem) => console.log(`${Ranitem.item} is $${Ranitem.value}`));

console.log("\n");

/*error*/
/*object with a desciption something went wrong*/
/*throw*/
/*excutes user defined error*/
try {
  let randomNUMBER = window.prompt("Enter a random NUMBER:");
  randomNUMBER = Number(randomNUMBER);
  /*if this is true throw this as the error*/
  if (isNaN(randomNUMBER)) throw "That's NOT a RANDOM number";
  if (randomNUMBER == "") throw "You didn't write a RANDOM number";
  console.log(`Random NUMBER : ${randomNUMBER}`);
} catch (error) {
  /*if something goes wrong do something else*/
  console.log(error);
} /*excute something even if error (For clean up)*/ finally {
  console.log("Cleaning up RANDOM number test...");
}

/*setTimeout()*/
/*invokes function after a period of time*/
let aMSG1 = "WHY...";
let timer1 = setTimeout(Popup1, 10000, aMSG1);
let timer2 = setTimeout(Popup2, 10000, aMSG1);

function Popup1() {
  alert(`RANDOM POP UP ! ${aMSG1}`);
}

function Popup2() {
  alert(`ANOTHER POP UP ! ${aMSG1}`);
}

document.getElementById("Popup").onclick = function () {
  /*Cancel and clear setTimout methods*/
  clearTimeout(timer1);
  clearTimeout(timer2);
  alert("THEY HAVE BEEN STOPPED... ?");
};

/*setInterval()*/
/*invokes function after period of time repeatedly*/
/*Varible must be before setInterval otherwise reverts
back to the orginal number each rotation*/
let count3 = 2;

const myTimer = setInterval(countDown, 10000);
function countDown() {
  count3 -= 1;
  alert(`${count3}...`);
  if (count3 == 1) {
    clearInterval(myTimer);
  }
}
console.log("\n");

/*Date & Time*/
/*Current date & time*/
let date1 = new Date();
/*Get specific part of date & time*/
let year = date1.getFullYear();
let hour = date1.getHours();
/*Simplifes date structure*/
date1 = date1.toLocaleString();

console.log(`1) Current date & time : ${date1}`);
console.log(`The year : ${year}`);
console.log(`The hour : ${hour}`);

/*Set date & time*/
let date2 = new Date();
date2.setFullYear(2000);
date2.setMonth(0);
date2.setHours(24);
date2.setMinutes(0);
date2.setSeconds(0);
date2 = date2.toLocaleString();
console.log(`2) Set date : ${date2}`);

/*Choosen date & time*/
let date3 = new Date("June 6, 1999 06:66");
date3 = date3.toLocaleString();
console.log(`3) Choosen date : ${date3}`);

/*Formatting date*/
/*.toLocaleString must be removed for formatting*/
let date4 = new Date();

console.log(`4) Formatting date : ${FormattingDate(date4)}`);

function FormattingDate(date) {
  let theYear = date.getFullYear();
  let theMonth = date.getMonth() + 1;
  let theDate = date.getDate();
  return `${theYear}/${theMonth}/${theDate}`;
}

/*Clock*/
const myClock = document.getElementById("Clock");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myClock.innerHTML = FormattingDate(date);

  function FormattingDate(date) {
    let theHour = date.getHours();
    let theMin = date.getMinutes();
    let theSec = date.getSeconds();

    return `${theHour}:${theMin}:${theSec}`;
  }
}

/*Asynchronous code*/
/*code outside the sequence (e.g. setInterval())*/
setTimeout(() => console.log("\n RANDOM TIMED MSG"), 5000);
console.log("\n");

/*console.time()*/
/*used to track how long a synchronous operationg takes*/
console.time();
alert("CLICK OK...");
console.timeEnd();
