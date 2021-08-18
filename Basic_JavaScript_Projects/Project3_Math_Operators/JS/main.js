// Creates a function that begins when the page loads.
window.onload = function func1() {
    // Adds two nums together
    var a = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 = " + a;

    // Subtracts one num from another
    var b = 10 - 5;
    document.getElementById("subtraction").innerHTML = "10 - 5 = " + b;

    // Multiplies one num by another
    var c = 3 * 5;
    document.getElementById("multiplication").innerHTML = "3 * 5 = " + c;

    // Divides one num into another
    var d = 20 / 5;
    document.getElementById("division").innerHTML = "20 / 5 = " + d;

    // Solves an equation
    var e = (4 * 5) + 10 / 2 - 3;
    document.getElementById("equation").innerHTML = "(4 * 5) + 10 / 2 - 3 = " + e;

    // Finds the remainder 
    var f = 25 % 4;
    document.getElementById("modulus").innerHTML = "25 divided by 4 leaves a remainder of " + f;

    // Displays the negative form of a variable
    var g = 7;
    document.getElementById("negation").innerHTML = -g;

    // Adds 1 to a variable
    var h = 5;
    h++;
    document.getElementById("increment").innerHTML = h;

    // Subtracts 1 from a variable
    var i = 5;
    i--;
    document.getElementById("decrement").innerHTML = i;

    // Generates a random number and rounds it to the nearest integar
    var j = Math.random() * 100;
    var k = Math.round(j);
    document.getElementById("random").innerHTML = k;
}