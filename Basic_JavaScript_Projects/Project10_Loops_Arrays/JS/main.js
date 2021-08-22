// Declaring global variables
var a = 0;
var Instruments = ["Piano", "Guitar", "Snare Drum", "Flute", "Trombone", "Clarinet", "Bells"];
var c;
var Instrument = "";

// Creates a while loop
function Call_Loop() {
    while(a < 11) {
        document.getElementById("loop").innerHTML = "Looping...";
        delay(a);
        a++;
    }
}

// Creates a delay for the while loop
function delay(a) {
    setTimeout(function() {
        document.getElementById("counter").innerHTML = a;
    }, 1000 * a);
}

// Gets the length of b
function stringLength() {
    let b = "Rick and Morty";
    document.getElementById("string").innerHTML = b.length;
}

// Creates a for loop
function forLoop() {
    for(c = 0; c < Instruments.length; c++) {
        Instrument += Instruments[c] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = Instrument;
}

// Creates an Array and outputs index 2
function arrayFunc() {
    var ArrayList = ["list1", "list2", "list3", "list4"];
    document.getElementById("arrayText").innerHTML = ArrayList[2];
}

// Creates a const and changes it's properties
function constFunc() {
    const dog = {breed: "Husky", color: "white"}
    dog.color = "grey";
    dog.eyeColor = "blue";
    document.getElementById("constText").innerHTML = "My dog is a " + dog.color + " " + dog.breed + " with " + dog.eyeColor + " eyes.";
}

// Shows how to use return
function returnFunc(name) {
    return "Hello " + name;
}
document.getElementById("returnText").innerHTML = returnFunc("Ryan");

let Band = {
    Genre: "rock",
    BandName: "Panic! At The Disco",
    Members: "Brendon Urie",
    Description : function() {
        return this.BandName + " is a " + this.Genre + " band led by " + this.Members + ".";
    }
};
document.getElementById("bandObject").innerHTML = Band.Description();

// Declares global variables and creates a for loop thats breaks when e === 7 and then continues
var d = "";
var e;
for(e = 0; e < 10; e++) {
    if(e === 7) {
        break;
    }
    d = "The number is " + e;
    document.getElementById("number").innerHTML = d;
    continue;
}