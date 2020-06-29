let myVal = "Hello World !, Written by JavaScript.";
document.getElementById("para").innerHTML = myVal;

let firsrVar = 10;
let secondVar = 15;
console.log("First variable is = "+firsrVar+" And second variable is = "+secondVar);

let myArray = [1, 2, 3, 4, 5];
// document.write( myArray[0]);

document.getElementById("para1").innerHTML = 
"value at index 3 is = " + myArray[3]

let indexValue = myArray[3];
let numberToString = indexValue.toString();

document.getElementById("para2").innerHTML = 
"value at index 3 is converted to string and it is = " + numberToString+" which is now become a string.";

let totalMarks = 63 + 58 + 61 + 67 + 62;
document.getElementById("total").innerHTML = " Total marks = " + totalMarks;

let averageMarks = (63 + 58 + 61 + 67 + 62)/5;
document.getElementById("average").innerHTML = " Average marks = " + averageMarks;

// creating first function in JS.

function sumOFTwoNumbers(first , second){
    let add = first + second ;
    document.getElementById("func").innerHTML = ("sum of " +first+" And " + second + " is = " + add);
}
 sumOFTwoNumbers(45,4);

// Exploring Math functions in JS.
//Power function
document.getElementById("power").innerHTML = ("Value of " +5+" to the power " + 6 + " is = " + Math.pow(5,6));

//square root function
document.getElementById("sqroot").innerHTML = ("Squre root of " +81+" is = " + Math.sqrt(81));

// Absolute value function
document.getElementById("abs").innerHTML = ("Absolute value of " +(-43.63)+" is = " + Math.abs(-43.63));

// Random number function
let val = Math.random();
document.getElementById("rndm").innerHTML = ("displaying random number = " + val );
 
//ceil of random number
document.getElementById("ceilrndm").innerHTML = ("displaying ceil of random number is = " + Math.ceil(val) );

//floor of random number
document.getElementById("floorrndm").innerHTML = ("displaying floor of random number is = " + Math.floor(val) );

// Using sin function 
document.getElementById("sin").innerHTML = ("The value of sin "+60+" is = " + Math.sin(60) );

// Using sin function 
document.getElementById("cos").innerHTML = ("The value of cos "+45+" is = " + Math.cos(45) );