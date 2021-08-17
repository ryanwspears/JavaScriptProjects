// Function that changes the font color and display text when a button is clicked.
function func1() {
    var a = "This is some text.";
    var b = "This is some more text.";

    var c = (a + b).fontcolor("blue");

    document.getElementById("clickHere").innerHTML = c;
}

// Function that concatenates two strings, changes their color, and outputs them when a button is clicked.
function func2() {
    var d = "Go to the store";
    d += " to buy some milk.";

    var e = d.fontcolor("red");

    document.getElementById("sentence").innerHTML = e;
}