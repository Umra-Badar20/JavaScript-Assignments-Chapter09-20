// --------------------------chapter 9-11--------------------------------------//


//1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt('Enter your City name here:');
// if(city === "Karachi"){
//  alert("Welcome to city of lights");
// }
// var gender = prompt("Enter your Gender");
// if(gender ==="Male" || gender === "male"){
//     alert("Good Morning Sir")
// }
// else if(gender==="Female" || gender === "female"){
//     alert("Good Morning  Ma'am")
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// var color = prompt("Enter color of road traffic signal");
// if(color=== "red" || color==="Red"){
//     alert("Must stop")
// }
// else if(color=== "yellow" || color==="Yellow"){
//     alert("Ready to move")
// }
// else if(color=== "green" || color==="Green"){
//     alert("Move now")
// }
// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
// var fuel = +prompt("Enter amount of fuel remaining in your car")
// if(fuel<0.25){
//     alert( "Please refill the fuel in your car")
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
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
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// var obtMarks = +prompt("Enter your obtained marks in three subjects")
// var total = +prompt('Enter your Total marks of three subjects')
// var percentage = (obtMarks/total)*100
// percentage = percentage.toFixed(2);

// document.write("<h1>" +"MarkSheet"+"</h1>"+ "<br>");
// document.write("Total Marks : " + total +"<br>");
// document.write("Obtained Marks : " + obtMarks +"<br>");
// document.write("Percentage : " + percentage+"%" +"<br>");

// var grade;
// var remarks;
// if(percentage>=80){
//     grade = "A-one"
//     remarks = "Excellent"
// }
// else if(percentage>=70){
//     grade = "A"
//     remarks = "Good"
// }
// else if(percentage>=60){
//     grade = "B"
//     remarks = "You need to improve"
// }
// else{
//     grade = "Fail"
//     remarks = "Sorry"
// }
// document.write("Grade : " + grade +"<br>")
// document.write("Remarks : " + remarks +"<br>")

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretNum = 6;
// var userNum= +prompt("Enter your Number here")
// if(userNum===secretNum){
//     alert("Bingo! Correct answer")
// }
// else if(userNum=== ++secretNum){
//     alert("Close enough to the correct answer!")
// }
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var userNum= +prompt("Enter your Number here");
// if(userNum % 3 ===0){
//     alert(userNum +" is divisible by 3!")
// }
// else{
//     alert(userNum+ " is not divisible by 3!")
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

//  var userNum= +prompt("Enter your Number here");
// if(userNum % 2 ===0){
//     alert(userNum +" is an Even Number!")
// }
// else{
//     alert(userNum+ " is an Odd Number!")
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var temp= +prompt("Enter the Temperature here");
// if(temp>40){
//     alert("It is too hot outside.")
// }
// else if(temp>30){
//     alert("The weather today is Normal.")
// }
// else if(temp>20){
//     alert("Today's Weather is Cool.")
// }
// else if(temp>10){
//     alert("OMG! Today's Weather is so Cool.")
// }
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var num1 =+prompt("Enter your 1st Number here")
// var operator = prompt("Enter your operator here")
// var num2 =+prompt("Enter your 2nd Number here")

// if(operator==="+"){
//     alert(num1 + num2)
// }
// else if(operator==="-"){
//     alert(num1 - num2)
// }
// else if(operator==="/"){
//     alert(num1 / num2)
// }
// else if(operator==="*"){
//     alert(num1 * num2)
// }
// else if(operator==="%"){
//     alert(num1 % num2)
// }
//----------------X-------------------X-------------------X_------------------X-------------------X------------------
