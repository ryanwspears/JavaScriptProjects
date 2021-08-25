function submitFunc() {
    var output;
    var choice = document.getElementById("choiceInput").value;
    var choiceString = " is a nice instrument!";
    switch(choice) {
        case "Guitar":
            output = "A guitar" + choiceString;
        break;
        case "Piano":
            output = "A piano" + choiceString;
        break;
        case "Harp":
            output = "A harp" + choiceString;
        break;
        case "Trumpet":
            output = "A trumpet" + choiceString;
        break;
        case "Flute":
            output = "A flute" + choiceString;
        break;
        default:
            output = "Please input an instrument exactly as shown above.";
    }
    document.getElementById("output").innerHTML = output;
}

function func() {
    var A = document.getElementsByClassName("text");
    A[0].innerHTML = "This is a changed heading";
}

function colorCanvas() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}

function colorCanvas2() {
    var c = document.getElementById("canvas2");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}

arrowFunc = () => document.getElementById("arrowText").innerHTML = "This is an arrow function.";