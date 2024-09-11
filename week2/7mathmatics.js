// Chapter 7 (Math Expression III);

// 1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?
var calculatedNum = 2 + 2 * 6;
console.log(calculatedNum);

// 2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?
var calculatednum = (2 + 2) * 6;
console.log(calculatednum);

// 3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?
var calculatenum = (2 + 2) * (4 + 2);
console.log(calculatenum);

// 4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?
var calculatnum = (2 + 2) * 4 + 2;
console.log(calculatnum);

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
var a = (2 + 2) * (4 + 10);
console.log(a);

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
var b = 2 + 2 * 4 + 10;
console.log(b);

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
var pressure = 4 / 2 + 4;
console.log(pressure);

// Chapter 8 (Concatenating Text Strings)
// 1. var num ="2" +"2"; what is the value of num?include qoutation marks.
var num = "2" + "2";
console.log(num);

// 2. message = ("hello" + "dolly"); What is the value of message? (Include the quotation marks.)Alert the statement
message = "hello" + "dolly";
alert(message);

// 3. alert("33" + 3); What message displays in the alert box?
alert("33" + 3);

// 4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad"
alert("Pakistan " + " Zindabad");

// 5. Write a statement that assigns to a variable the concatenation of a string with a number
let result = "NaseemWali " + 776;
console.log(result);

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
let a1 = "Naseem";
let a2 = "Wali";
let a3 = a1 + a2;
console.log(a3);

// Chapter 9 (Prompts)
// 1. Code a prompt with the message "Enter first name" . The user's response is assigned to firstName.
let c1 = "Enter your first name";
prompt(" First name", c1);

// 2. Code a prompt with the message "country?" and the default answer "china". The user's response is assigned to country.
let g = "China";
prompt("Country", g);

// Correct this statement var yourName = prompt(Enter Your name");
var yourName = prompt("Enter your name");

// Code a prompt that specifies a string as the message Include a default input.
let x = "Message";
prompt("", x);

// 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user&#39;s response to a third variable.
let g1="hello1";
let g2="hello2";
let g3=g1 + g2;
prompt(g3);

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:


// Take a number and assign it to a variable
let number = 10;  // You can change this to any number

// Perform some arithmetic operations
let addition = number + 5;
let subtraction = number - 3;
let multiplication = number * 2;
let division = number / 2;
let modulus = number % 3;

// Display the results in the browser
document.write("Original number: " + number + "<br>");
document.write("After adding 5: " + addition + "<br>");
document.write("After subtracting 3: " + subtraction + "<br>");
document.write("After multiplying by 2: " + multiplication + "<br>");
document.write("After dividing by 2: " + division + "<br>");
document.write("Remainder after dividing by 3: " + modulus + "<br>");


 // 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--; 
// After --a, a = 1
// After --b, b = 0
// After ++b, b = 1
// After b--, result uses b = 1, and then b becomes 0
// Final result = 1 - 0 + 1 + 1 = 3


