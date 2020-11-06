
//get input
var num = prompt("Please enter a number to convert from Fahrenheit to Celsius", "");

//convert to Celsius
tempC = (5/9) * (num - 32); 

//result has to be in one line to print
document.body.innerHTML = num + '\u00B0 F = ' + tempC + '\u00B0 C'

//get input for second conversion
var num2 = prompt("Please enter a number to convert from Celsius to Fahrenheit ", "");

//convert to Fahrenheit
tempF = num2 * 9 / 5 + 32

//print result
var string = num + '\u00B0 F = ' + tempC + "\u00B0 F\n" + num2 + '\u00B0 C = ' + tempF + '\u00B0 F'
console.log(string)
document.body.innerHTML = string

  
        