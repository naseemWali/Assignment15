// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var userInput=prompt('Enter a number or string');
// if (userInput>='A' && userInput<='Z') {
//     alert('uppercase')
// }
// else if(userInput>='a' && userInput<='z'){
// alert('lowercase')
// }
// else if (userInput>=0 && userInput<=9) {
// alert('number')
// }
// else{
//     alert('not number or string')
// }


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var integer1=prompt('Enter first integer');
// var integer2=prompt('Enter second integer');

// if (integer1 > integer2) {
//     alert('interger1 is greater than integer2')
// }
// else if(integer2 > integer1){
//     alert('integer2 is greater than integer1')
// }
// else if (integer1===integer2){
//     alert('both integers are equal')
// }
// else{
//     alert('invalid ')
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var userinput= prompt('Enter number');
// userinput=Number(userinput);

// if (userinput>0) {
//     alert('positive number')
// }
// else if(userinput<0){
//  alert('negative number')
// }
// else {
// alert('zero')
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// var useranswer=prompt('Enter a string');


// if (useranswer==='a' || useranswer=== 'e' || useranswer=== 'i' || useranswer=== 'o' ||  useranswer==='u') {
//     alert('true');
// }
// else{
//     alert('false');
// }



// 5. Write a program that
// a. Store correct password in a JS variable.

// var password1='123naseem';
// var password2=prompt('Please enter your password');

// if (password1===password2) {
//     alert('Correct! The password you entered matches the original password')
// }
// else{
//     alert('Incorrect password')
// }



// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

  
//  var greeting;
//  var hour = 13;
// if (hour < 18) {
//  greeting = "Good day";
// }
//  else{
//  greeting = "Good evening";
// }

// document.write(greeting);


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var array1=['naseem','ali','afsheen'];
// var array2=[320,430,400];

// for (let index = 0; index < array2.length; index++) {
//     let x=(array2[index])/ 500 * 100;
//     document.write(' score of ' + array1[index]  +  array2[index]  +    x.toFixed(1) + ' %  <br>');
  
// }


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


// var user=prompt('enter color to begging');
// let arrcolors=['red','purple','yellow','grey'];
// arrcolors.unshift(user);
// document.write(arrcolors);



// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.


// var userask=prompt('Enter color that you want to the end of array')
// var colorsarr=['red','purple','yellow','grey'];
// colorsarr.push(userask);
// document.write(colorsarr);



//c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// var colorsarr=['red','purple','yellow','grey'];
// colorsarr.unshift('black','green');
// document.write(colorsarr);



//d. Delete the first color in the array. Display the updated
//  array in your browser.

// var colorsarr=['red','purple','yellow','grey'];
// colorsarr.shift();
// document.write(colorsarr);


// e. Delete the last color in the array. Display the updated
// array in your browser.

// var colorsarr=['red','purple','yellow','grey'];
// colorsarr.pop();
// document.write(colorsarr);



// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// var a=parseInt(prompt('At which index you want to add color'));
// var c=parseInt('how many elements you want to delete');
// var b=prompt('Now Enter a color name of your choice');

// var arr=['purple','yellow','grey','silver'];
// arr.splice(a,c,b)
// document.write(arr);



// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
//   position/index. . Display the updated array in your
//  browser.


//  var a=parseInt(prompt('At which index you want to delete color'));
//  var c=parseInt(prompt('how many elements you want to delete'));

//  var arr=['purple','yellow','grey','silver'];
//  arr.splice(a,c,'');
//  document.write(arr);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// for ascending order

// var arr=[320,230,120,480];
// arr.sort(function(a,b){
// return a-b;
// });
// document.write('scores of students ' + arr);

// for descending order
// var arr=[320,230,120,480];
// arr.sort(function(a,b){
// return b-a;
// });
// document.write('ordered scores of students ' + arr);




// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities=['new york','banglore','islamabad','bejing','lahore'];

// let selectedcities=cities.slice(0,3);
// document.write(selectedcities);
// document.write(cities)




// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


//  var arr = ["This ",  " is ",  " my  ",  " cat"];
//   let result=arr.join( ' ')
//   document.write('Array => ',arr,'<br>') 
//   document.write('String => ',result);
  


//   13. Create a new array. Store values one by one in such a way
//   that you can access the values in the order in which they
//   were stored. (FIFO-First In First Out)

// // Create an empty array to act as the queue
// const queue = [];

// // Function to add an element to the end of the queue
// function enqueue(element) {
//     queue.push(element);
// }

// // Function to remove and return the front element of the queue
// function dequeue() {
//     if (queue.length === 0) {
//         return "Queue is empty";
//     }
//     return queue.shift(); // Removes the first element
// }

// // Function to check if the queue is empty
// function isEmpty() {
//     return queue.length === 0;
// }

// // Function to get the front element of the queue without removing it
// function peek() {
//     if (isEmpty()) {
//         return "Queue is empty";
//     }
//     return queue[0];
// }

// // Function to get the current size of the queue
// function size() {
//     return queue.length;
// }

// // Function to print the queue elements
// function print() {
//     console.log(queue.join(" <- "));
// }

// // Example usage
// enqueue(1);
// enqueue(2);
// enqueue(3);
// print(); // Output: 1 <- 2 <- 3

// console.log(dequeue()); // Output: 1
// print(); // Output: 2 <- 3

// console.log(peek()); // Output: 2
// console.log(size()); // Output: 2



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


// Step 1: Create an empty array to act as the stack
// const stack = [];

// // Step 2: Add values to the stack (LIFO)
// stack.push(1); // Add 1 to the stack
// stack.push(2); // Add 2 to the stack
// stack.push(3); // Add 3 to the stack

// console.log(stack); // Output: [1, 2, 3]

// // Step 3: Remove values from the stack (LIFO)
// const lastValue = stack.pop(); // Removes the last element (3)
// console.log(lastValue); // Output: 3
// console.log(stack); // Output: [1, 2]

// // Accessing remaining values in reverse order
// const secondLastValue = stack.pop(); // Removes the next last element (2)
// console.log(secondLastValue); // Output: 2
// console.log(stack); // Output: [1]

// // Continue to pop the last value
// const firstValue = stack.pop(); // Removes the last remaining element (1)
// console.log(firstValue); // Output: 1
// console.log(stack); // Output: []
