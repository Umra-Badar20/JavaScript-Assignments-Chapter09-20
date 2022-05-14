// --------------------------- Chapter 14-16 Arrays --------------------------------


// 1. Declare an empty array using JS literal notation to store student names in future. 
//var students = [];

// 2. Declare an empty array using JS object notation to store student names in future. 
//var students = new Array();

// 3. Declare and initialize a strings array.
// var fruits = ["Apple", "Orange", "Mango", "Banana", "Blue Berry"];
// document.write("String Array : " + fruits + "<br/>" + "<br/>" + "<br/>");

// 4.  Declare and initialize a numbers array. 

// var number = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,]
// document.write("Number Array : " + number +"<br/>"+"<br/>")

// 5.  Declare and initialize a boolean array. 
// var bool = [true, false, false, true];
// document.write("Boolean Array: " + bool + "<br/>" + "<br/>");

// 6. Declare and initialize a mixed array. 
// var arr = ["Umra", "Badar", 20, true, false];
// document.write("Mixed Array: " + arr + "<br/>" + "<br/>");

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];

// for(var i=0; i<=7; i++){
//   document.write(i+1 +") "+qualifications[i] +"<br/>")
// }

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like: 

// var studentNames = ["Umra ","Tayyaba ","Hafsa "];
// var studentScores = [470, 433, 480]; 

// for(var i=0; i<=2; i++){
//     document.write( " Score of "+studentNames[i]+ " is " + studentScores[i] +" . Percentage : " +(studentScores[i]/500)*100 +"%" +". <br/>" )
// }

// 9. Initialize an array with color names. Display the array elements in your browser.
// var colorNames = [];

// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array..Display the updated array in your browser. 

// var userColor = prompt("What color you wants to add to the beginning?");
// colorNames.push(userColor);

// document.write("Updated array: " + colorNames + "<br/>");

// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. .Display the updated array in your browser.

// userColor = prompt("What color you wants to add to the end?");
// colorNames.push(userColor);

// document.write("Updated array: " + colorNames + "<br/>");

// // c. Add two more color to the beginning of the array. .Display the updated array in your browser.

// userColor = prompt("Add two more color to the beginning/Enter first color: ");
// colorNames.unshift(userColor);
// userColor = prompt("Add two more color to the beginning/Enter second color: ");
// colorNames.unshift(userColor);

// document.write("Updated array: " + colorNames + "<br/>");

// // d. Delete the first color in the array. .Display the updated array in your browser.

// colorNames.shift();

// document.write("Updated array: " + colorNames + "<br/>");

// // e. Delete the last color in the array.Display the updated array in your browser.

// colorNames.pop();

// document.write("Updated array: " + colorNames + "<br/>");

// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index..Display the updated array in your browser.

// var indexNo = +prompt("At which index you want add a color?")
// var userColor = prompt("Enter your color name here:")

// colorNames.splice(indexNo, 0, userColor)

// document.write("Updated array: " + colorNames + "<br/>");

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// // position/index. Display the updated array in your
// // browser.

// indexNo = +prompt("At which index you wants to delete a color: ");
// var deleteCount = +prompt("how many colors you want to delete ");
// colorNames.splice(indexNo, deleteCount);

// document.write("Updated array: " + colorNames + "<br/>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var studentMarks = [320,230,480,120];
// document.write("Score of Students: " + studentMarks + "<br/>");
// document.write("Ordered Score of Students: " + studentMarks.sort() + "<br/>" );

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
// document.write("Cities List:" + "<br/>" + cities + "<br/>" + "<br/>");
// var selectedCities = [];
// selectedCities = cities.slice(2, 5);
// document.write("Selected cities List:" + "<br/>" + selectedCities + "<br/>" + "<br/>" + "<br/>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ['This ', 'is ', ' my' , 'cat'];
// document.write("Array:" + "<br/>" + arr + "<br/>" + "<br/>");

// var joinArr = arr.join(" ");
// document.write("String:" + "<br/>" + joinArr + "<br/>" );

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var out;
// document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

// out = devices.shift();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.shift();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.shift();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.shift();
// document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var out;
// document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

// out = devices.pop();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.pop();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.pop();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.pop();
// document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");

// 15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for(var i= 0; i<=5; i++){
//     document.write("<option>" + phoneManufacturers[i] + "<option>");
// }
// document.write("<select/>");

//------------------X------------------X------------------X------------------X------------------X------------------X