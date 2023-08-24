/*To view console (Inspect + click console)*/

/*.log used to print to the console*/
console.log("The start of JavaScript.");
/* \n adds a line on the console */
console.log("\n");

/*Creates an alert box within window*/
window.alert("Testing alert box...");

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
let username = window.prompt("Enter username :");
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

/* Creating a counter */
let count = 0;

/* document : Used for excuting code on web pages */
/* .getElementById : Returns ID */
/* .onclick : Excutes function when clicked */
/* function(){} : A set of statements that preforms a task */
document.getElementById("Up-button").onclick = function () {
  count += 1;
  /* innerHTML : Used to get/change elements in HTML */
  document.getElementById("Count-label").innerHTML = count;
};

document.getElementById("Down-button").onclick = function () {
  count -= 1;
  document.getElementById("Count-label").innerHTML = count;
};

document.getElementById("Reset-button").onclick = function () {
  count = 0;
  document.getElementById("Count-label").innerHTML = count;
};
