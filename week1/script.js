 // Declare two numbers
 var num1 = 5;
 var num2 = 10;

 // Add the two numbers and store the result in a new variable
 var sum = num1 + num2;

 // Show the result in the browser
 document.getElementById("result").textContent = "The sum of " + num1 + " and " + num2 + " is: " + sum;


   // Declare two numbers
   var num1 = 20;
   var num2 = 6;

   // Perform arithmetic operations
   var sum = num1 + num2;
   var difference = num1 - num2;
   var product = num1 * num2;
   var quotient = num1 / num2;
   var modulus = num1 % num2;

   // Display the results in the browser
   document.getElementById("addition").textContent = "The sum of " + num1 + " and " + num2 + " is: " + sum;
   document.getElementById("subtraction").textContent = "The difference between " + num1 + " and " + num2 + " is: " + difference;
   document.getElementById("multiplication").textContent = "The product of " + num1 + " and " + num2 + " is: " + product;
   document.getElementById("division").textContent = "The quotient of " + num1 + " divided by " + num2 + " is: " + quotient;
   document.getElementById("modulus").textContent = "The modulus of " + num1 + " and " + num2 + " is: " + modulus;


     // a. Declare a variable
     var myVar;

     // b. Show the value of the variable after declaration
     document.getElementById("step1").textContent = "Value after variable declaration is: " + myVar;

     // c. Initialize the variable with a number
     myVar = 5;

     // d. Show the initial value of the variable
     document.getElementById("step2").textContent = "Initial value: " + myVar;

     // e. Increment the variable
     myVar++;

     // f. Show the value after increment
     document.getElementById("step3").textContent = "Value after increment is: " + myVar;

     // g. Add 7 to the variable
     myVar += 7;

     // h. Show the value after adding 7
     document.getElementById("step4").textContent = "Value after adding 7 is: " + myVar;

     // Optional: Demonstrating another increment
     myVar++;

     // Show final value
     document.getElementById("step5").textContent = "Final value after another increment: " + myVar;


        // a. Declare a variable
        var myVar;

        // b. Show the value of the variable after declaration
        document.getElementById("step1").textContent = "Value after variable declaration is: " + myVar;

        // c. Initialize the variable with a number
        myVar = 5;

        // d. Show the initial value of the variable
        document.getElementById("step2").textContent = "Initial value: " + myVar;

        // e. Increment the variable
        myVar++;

        // f. Show the value after increment
        document.getElementById("step3").textContent = "Value after increment is: " + myVar;

        // g. Add 7 to the variable
        myVar += 7;

        // h. Show the value after adding 7
        document.getElementById("step4").textContent = "Value after adding 7 is: " + myVar;

        // i. Decrement the variable
        myVar--;

        // j. Show the value after decrement
        document.getElementById("step5").textContent = "Value after decrement is: " + myVar;

        // k. Show the remainder after dividing the variable's value by 3
        var remainder = myVar % 3;

        // l. Show the remainder result
        document.getElementById("step6").textContent = "The remainder is: " + remainder;


          // Store the price of one ticket in a variable
       var ticketPrice = 600;

       // Calculate the cost of 5 tickets
       var totalCost = ticketPrice * 5;

       // Display the total cost in the browser
       document.getElementById("ticketCost").textContent = "The cost of buying 5 movie tickets is: " + totalCost + " PKR";
       



        // Store the number for which you want to generate the multiplication table
        var number = 7; // Change this value to generate the table for any number

        // Create an empty string to store the table
        var multiplicationTable = "";

        // Loop through 1 to 10 to generate the table
        for (var i = 1; i <= 10; i++) {
            multiplicationTable += number + " x " + i + " = " + (number * i) + "<br>";
        }

        // Display the multiplication table in the browser
        document.getElementById("table").innerHTML = multiplicationTable;


         // a. Store a Celsius temperature into a variable
       var celsiusTemp = 30; // Change this to any Celsius value

       // b. Convert Celsius to Fahrenheit
       var fahrenheitTempFromCelsius = (celsiusTemp * 9/5) + 32;

       // Output the conversion result
       document.getElementById("celsiusToFahrenheit").textContent = celsiusTemp + "°C is " + fahrenheitTempFromCelsius + "°F";

       // c. Store a Fahrenheit temperature into a variable
       var fahrenheitTemp = 86; // Change this to any Fahrenheit value

       // d. Convert Fahrenheit to Celsius
       var celsiusTempFromFahrenheit = (fahrenheitTemp - 32) * 5/9;

       // Output the conversion result
       document.getElementById("fahrenheitToCelsius").textContent = fahrenheitTemp + "°F is " + celsiusTempFromFahrenheit.toFixed(2) + "°C";




         // Store total marks and marks obtained by a student
         var totalMarks = 500; // Example: Total marks out of 500
         var marksObtained = 380; // Example: Marks obtained by the student
 
         // Compute the percentage
         var percentage = (marksObtained / totalMarks) * 100;
 
         // Display the result in the browser
         document.getElementById("result").textContent = "The percentage is: " + percentage.toFixed(2) + "%";



          // Conversion rates
       var usdToPkr = 104.80; // 1 US Dollar = 104.80 PKR
       var riyalToPkr = 28; // 1 Saudi Riyal = 28 PKR

       // Currency amounts
       var dollars = 10; // 10 US dollars
       var riyals = 25; // 25 Saudi Riyals

       // Perform the total conversion in one expression
       var totalInPKR = (dollars * usdToPkr) + (riyals * riyalToPkr);

       // Display the total in Pakistani Rupees
       document.getElementById("totalPKR").textContent = "The total amount in Pakistani Rupees is: " + totalInPKR.toFixed(2) + " PKR";


          // Initialize a variable with a number
          var number = 4; // You can change this number

          // Perform the arithmetic sequence in a single expression
          var result = ((number + 5) * 10) / 2;
  
          // Display the result
          document.getElementById("arithmeticResult").textContent = "The result of the calculation is: " + result;


                  // a. Store the current year in a variable
       var currentYear = new Date().getFullYear(); // Gets the current year dynamically

       // b. Store their birth year in a variable
       var birthYear = 1990; // Replace this with the actual birth year

       // c. Calculate their two possible ages
       var age = currentYear - birthYear; // Age if they have already had their birthday this year
       var ageNextYear = age + 1; // Age if they haven't had their birthday yet this year

       // Output the results to the screen
       document.getElementById("ageResult").textContent = "They are either " + age + " or " + ageNextYear + " years old.";




               // a. Store the radius into a variable
               var radius = 5; // Replace this with the actual radius

               // b. Calculate the circumference
               var pi = 3.142; // Value of π
               var circumference = 2 * pi * radius;
       
               // Display the circumference
               document.getElementById("circumference").textContent = "The circumference is " + circumference.toFixed(2);
       
               // Calculate the area
               var area = pi * radius * radius;
       
               // Display the area
               document.getElementById("area").textContent = "The area is " + area.toFixed(2);
       
               


                  // a. Store your favorite snack into a variable
       var snack = "chocolate bars"; // Replace with your favorite snack

       // b. Store your current age into a variable
       var currentAge = 25; // Replace with your current age

       // c. Store a maximum age into a variable
       var maxAge = 80; // Replace with your expected maximum age

       // d. Store an estimated amount per day (as a number)
       var amountPerDay = 2; // Replace with the estimated amount consumed per day

       // e. Calculate how many of the snack you would eat for the rest of your life
       var totalDays = (maxAge - currentAge) * 365; // Calculate the number of days left
       var totalAmount = totalDays * amountPerDay; // Calculate the total amount needed

       // Output the result to the screen
       document.getElementById("lifetimeSupply").textContent = 
           "You will need " + totalAmount + " " + snack + " to last you until the ripe old age of " + maxAge + ".";
       

        
           
             // a. Price of item 1
       var priceItem1 = 50; // Replace with actual price of item 1

       // b. Price of item 2
       var priceItem2 = 30; // Replace with actual price of item 2

       // c. Ordered quantity of item 1
       var quantityItem1 = 3; // Replace with actual quantity of item 1

       // d. Ordered quantity of item 2
       var quantityItem2 = 2; // Replace with actual quantity of item 2

       // e. Shipping charges
       var shippingCharges = 10; // Replace with actual shipping charges

       // Compute the total cost
       var totalCostItem1 = priceItem1 * quantityItem1;
       var totalCostItem2 = priceItem2 * quantityItem2;
       var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

       // Display the receipt
       document.getElementById("receipt").innerHTML =
           "<h2>Receipt</h2>" +
           "<p>Price of item 1: $" + priceItem1.toFixed(2) + "</p>" +
           "<p>Quantity of item 1: " + quantityItem1 + "</p>" +
           "<p>Total cost of item 1: $" + totalCostItem1.toFixed(2) + "</p>" +
           "<p>Price of item 2: $" + priceItem2.toFixed(2) + "</p>" +
           "<p>Quantity of item 2: " + quantityItem2 + "</p>" +
           "<p>Total cost of item 2: $" + totalCostItem2.toFixed(2) + "</p>" +
           "<p>Shipping Charges: $" + shippingCharges.toFixed(2) + "</p>" +
           "<h3>Total Cost: $" + totalCost.toFixed(2) + "</h3>"; 