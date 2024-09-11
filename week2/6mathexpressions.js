// Chapter 6 (Math Expression II)

//q1 Code a short form of x = x + 1; Use either of the two legal expressions.
let a=2;
++a
console.log(a)

// q2 If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
let x=100;
--x;
console.log("now value of x is ",x);

// q3 var z = 50; var y = z++; What is the value of y?
// The z++ is a post-increment operation, which means that the value of z is assigned to y before z is incremented.
// So, y gets the value of z before the increment (which is 50), and then z is incremented by 1, making z = 51 after this operation.
// y=50;
// z=51;

// q4  var y = 50; var z = --y; What is the value of z?
// The --y is a pre-decrement operation, meaning that the value of y is decremented first and then assigned to z.
// So, y is reduced by 1, making it 49, and then z is assigned that new value of y.
// z=49;
// y=49;


// q5 In a single statement, decrement num and assign its original value to newNum.
// let newNum = num--;

// q6. In a single statement add 1 to a variable and assign its original value to another variable.
// let d=e++;

// q7 Assign a number value to a variable. Increment the variable. Display the new value in an alert
let f=12;
f++;
alert(f)

