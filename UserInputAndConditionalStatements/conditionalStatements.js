// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”

// var city= prompt("Enter your city")
// if (city==="karachi") {
//     alert('welcome to the city of lights' );
// }
// else{
// alert('welcome to the ' + city);
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender=prompt("Enter your gender");
// if (gender==="male") {
//     alert('Good Morning Sir.')
// } else {
//     alert('Good Morning Maam')
// };

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var signalcolor=prompt("Enter SignalColor ");
// if (signalcolor==="red") {
//     alert('Must Stop')
// }
//   else if (signalcolor==="yellow") {
//   alert('ready to move')

// } else if(signalcolor==="green") {
//     alert('move now')

// }else{
//  alert('invalid color . please enter only green, yellow and red')
// };

//4. Write a program to take input remaining fuel in car (in
//    litres) from user. If the current fuel is less than 0.25litres,
//    show the message “Please refill the fuel in your car”


// var remaningfuel= prompt("Enter your remaining fuel in litres");
// if (remaningfuel<'0.25') {
//     alert('please refuel your car')
// };

//5. Run this script, & check whether alert message would be
//displayed or not. Record the outputs.

// a.
//  var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");

// };

//b.
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");

// };

//c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// };

//d.
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// };

//e.
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// };


// f.

//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     };


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// var percentage=prompt("Enter your percentage in %");

//   if (percentage>=80 ) {
//     alert('Grade A+ Excellent')
// }
// else if (percentage>=70) {
//  alert('Grade A Good')
// }
// else if (percentage>=60) {
// alert('Grade B  You need to improve')
// }
// else if (percentage<60) {
//     alert('sorry you are failed')
//    }
   

  //  7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a.
//  If user guesses the same number, show “Bingo! Correct answer”.
// var secretnumber='7';
// var usernumber=prompt('Guess the secret number');

// if ((usernumber)===secretnumber) {
//   alert('bingo! you caught the right answer.')
// }
// else{
//   alert('sorry you not.')
// }

  // b.
// If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretnumber=7;
// var usernumber=prompt('Guess the secret number');
// usernumber=Number(usernumber);

// if (usernumber===secretnumber) {
//   alert('bingo! you caught the right answer.')
// }
// else if(usernumber+1  === secretnumber){
// alert('you are near the secret number')
// }
// else{
//   alert('sorry you not.')
// }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var usernumber=prompt('enter your number');
//  usernumber=Number(usernumber)
// if (usernumber%3===0) {
//   alert('yes it is divisible by 3')
// }
// else{
//   alert('sorry it is not')
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var userinput=prompt('Enter your number ');
// userinput=Number(userinput)
// if (userinput%2===0) {
//   alert('hey its an even number')
// }
// else{
//   alert('hey its an odd number')
// };


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature=prompt('Enter the Temperature');
// temperature=Number(temperature)
// if (temperature>40) {
//   alert('it is too hot outside')
// } else if (temperature>30){
//   alert('the weather today is normal')
// } else if (temperature>20){
//   alert('the weather today is cool')
// } else if (temperature>10){
//   alert('the weather today is so cool')
// } 


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// var firstnum=Number(prompt('Enter first number'));
// var secondnum=Number(prompt('Enter the second number'));
// var operator=prompt('Enter the operation(+,-,*,/)');

// if (operator==='+') {
//   alert(firstnum+secondnum);
// }
// else if (operator==='-'){
//  alert(firstnum-secondnum);
// }
// else if (operator==='*'){
//   alert(firstnum*secondnum);
//  }
//  else if (operator==='/'){
//   if (secondnum !== 0) {
//     alert(firstnum / secondnum); 
//   } else {
//     alert(' division by zero is not allowed.');
//   }
//  }
//  else if (operator === '%') {
//   alert(firstnum % secondnum); 
// } else {
//   alert(' Please enter +, -, *, /, or %.');
// }






// assignment repeat just for practice
// 1
// var fullName='naseemwali';

// 2.
// var fatherName;
// var fatherName='naseem';

//3.
// var teamName='123';
// alert(teamName);

//4.
// var bestMan='charlie';
// var bestMan='watson';

//5
// declare a variable "caseQty"
// var caeQty;

//6.
// var caseQty=144;

//7.
//rewrite this statement so the variable can be used in a math operator?
// var num="9";
// answer var num=9;

//  var num;
//  num=2+3;

//8.
// var merchtotal=100;
// var shippingcharge=10;
// var ordertotal=merchtotal + shippingcharge;
// console.log(ordertotal);

//9.
// var num=12;
//  num=12+1;
//  num=12*2;
//  num=12/2;
//  num=18%2;
// console.log(num);

// var num;
// num=1;
// document.write('value after variable declaration is ' + num);

// 10

// var num;
// document.write('value after variable declaration is ' +  num)

// var num=5;
// document.write('initial value is ' + num); 

//   num++;
// document.write('value after increment is ' + num);

// var num1= num+7;
// document.write('value after addition is  ', num1);

// --num1;
// document.write('value after decrement is  ' + num1);

// var newnum=num1%3;
// document.write('the remainder is ' + newnum);

// var oneticketfee=600;
// var fiveticketfee=600*5;
// document.write('cost of five tickets is  '  + fiveticketfee  +  ' PKR')


