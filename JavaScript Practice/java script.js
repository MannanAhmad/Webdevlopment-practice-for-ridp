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