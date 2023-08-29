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
