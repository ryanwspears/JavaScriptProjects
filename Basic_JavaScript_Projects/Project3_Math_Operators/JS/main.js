window.onload = function func1() {
    var a = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 = " + a;

    var b = 10 - 5;
    document.getElementById("subtraction").innerHTML = "10 - 5 = " + b;

    var c = 3 * 5;
    document.getElementById("multiplication").innerHTML = "3 * 5 = " + c;

    var d = 20 / 5;
    document.getElementById("division").innerHTML = "20 / 5 = " + d;

    var e = (4 * 5) + 10 / 2 - 3;
    document.getElementById("equation").innerHTML = "(4 * 5) + 10 / 2 - 3 = " + e;

    var f = 25 % 4;
    document.getElementById("modulus").innerHTML = "25 divided by 4 leaves a remainder of " + f;
}