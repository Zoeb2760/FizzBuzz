$(document).ready(function() { 

 // Create a function for the action
function fizzBuzz () {

  for (var a = 1; a <= 101; a++) { 
    if (a % 3 == 0 && a %5 >0) { // if value is divisible by the number 3 
         document.writeln("Fizz")/*console.log("fizz")*/ ; }
    else if (a % 5 == 0 &&  a %3 >0) { 
         document.writeln("Buzz"); }
    else if (a % 5 == 0 && a %3 == 0) {
         document.writeln("FizzBuzz");
         } else{ document.writeln(a); } }
                      }

  


                 
 

   $('#mybutton').on('click',  (function  () {
    // When mybutton is clicked call the function
    var items = fizzBuzz() 
    //Add(items);
    }));




 });

