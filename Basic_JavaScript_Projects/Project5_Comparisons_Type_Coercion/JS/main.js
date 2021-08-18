// Shows TypeOf
document.writeln(typeof "Anime");
document.write("<br>");

// Shows Coercion
document.writeln("20" + 5);
document.write("<br>");
document.write("<br>");

// Shows == operator
document.writeln(5 == 5);
document.write("<br>");

document.writeln(5 == 2);
document.write("<br>");
document.write("<br>");

// Shows === operator
var a = 5;
var b = 5;
document.writeln(a === b);
document.write("<br>");

var c = 5;
var d = "6";
document.writeln(c === d);
document.write("<br>");

var e = 5;
var f = "5";
document.writeln(e === f);
document.write("<br>");

var g = 5;
var h = 6;
document.writeln(g === h);
document.write("<br>");
document.write("<br>");

// Shows && and || operators
document.writeln(1 < 2 && 3 < 4);
document.write("<br>");

document.writeln(1 < 2 && 3 < 2);
document.write("<br>");

document.writeln(1 < 2 || 3 < 2);
document.write("<br>");

document.writeln(2 < 1 || 3 < 2);
document.write("<br>");
document.write("<br>");

// Shows the ! operator
document.writeln(!(5 > 10));
document.write("<br>");

document.writeln(!(5 < 10));
document.write("<br>");
document.write("<br>");

// Creates a function that shows NaN, isNaN, Infinity, -Infinity, and Booleans.
function myFunc() {
    document.getElementById("nan").innerHTML = 0/0;

    document.getElementById("true").innerHTML = isNaN('text');

    document.getElementById("false").innerHTML = isNaN('50');

    document.getElementById("infinity").innerHTML = 2E310;

    document.getElementById("nInfinity").innerHTML = -2E310;

    document.getElementById("boolTrue").innerHTML = 5 > 2;

    document.getElementById("boolFalse").innerHTML = 5 < 2;
}

// Shows an output to the console.
console.log(10 + 5);

console.log(10 < 6);