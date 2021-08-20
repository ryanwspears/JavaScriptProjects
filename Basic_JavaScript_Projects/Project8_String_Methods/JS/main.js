// Utilizes concat()
function Sentence() {
    var a = "I am ";
    var b = "going to ";
    var c = "the store."
    var full = a.concat(b + c);
    document.getElementById("concatenation").innerHTML = full;
}

// Utilizes slice(), toUpperCase(), and search()
function slice_Method() {
    var sentence = "Ryan watches too much anime.";
    var section = sentence.slice(22, 27);
    document.getElementById("slice").innerHTML = section.toUpperCase();
    document.getElementById("place").innerHTML = sentence.search("anime");
}

// Utilizes toString()
function stringMethod() {
    var d = 50;
    document.getElementById("Numbers_to_String").innerHTML = d.toString();
}

// Utilizes toPrecision()
function precision_Method() {
    var e = 12342.125345232534523;
    document.getElementById("Precision").innerHTML = e.toPrecision(10);
}

// Utilizes toFixed()
function fixed_Method() {
    var f = 12342.125345232534523;
    var g = f.toFixed(1);
    document.getElementById("Fixed").innerHTML = g;
}

// Utilizes valueOf()
function value_Method() {
    var h = 50043;
    document.getElementById("Value").innerHTML = h.valueOf();
}