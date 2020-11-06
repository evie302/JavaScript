// funtion and loop

function fnalertmsg(name){
    //amend the string    
    let string = "Your name is " + name + "\n\nIs that correct?";
       
    return string;
}

//loop until correct name is entered
do {

    //ask for input
    var name = prompt("Please enter your name", "");

    //get a string for popup box using the function
    var string = fnalertmsg(name);

    //returns true or false
    var response = confirm(string);


} while (response == false);

    
//print result

console.log("Hello " + name + "!")
document.body.innerHTML = "Hello " + name + "!"
        