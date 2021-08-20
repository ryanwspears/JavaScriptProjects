// Assigns a global variable
var a = 50;

function func() {
    // Assigns local variables *EDIT: I forgot to nest it.*
    var b = 50;
    function add() {
        var c = a + b;
    }
    document.getElementById("Scope_Time").innerHTML = c;
}

// Shows how to use an if statement
function func2() {
    if(new Date().getHours() < 17) {
        document.getElementById("date").innerHTML = "It is not 5pm yet.";
    }
    if(new Date().getMonth() == 7) {
        document.getElementById("month").innerHTML = "It's still August";
    }
}

// Shows how to use an else statement
function ageCheck() {
    var age = document.getElementById("age_input").value;
    if(age > 18) {
        document.getElementById("output").innerHTML = "You are allowed to enter."
    }
    else{
        document.getElementById("output").innerHTML = "You are not allowed to enter.";
    }
}

// Shows how to use an else if statement
function Time_Function() {
    var time = new Date().getHours();
    var Reply;
    if(time <= 12 == time > 0) {
        Reply = "It is morning time."
    }
    else if(time >= 12 == time < 18) {
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}