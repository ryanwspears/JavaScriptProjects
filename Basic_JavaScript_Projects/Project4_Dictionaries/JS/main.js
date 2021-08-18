// Creates a function
function dictionaryFunc() {
    // Created an object
    var Vehicle = {
        Sound: "Vroom!",
        Make: "Ford",
        Model: "Mustand",
        Year: 2018
    }
    // Deleted a KVP
    delete Vehicle.Year;
    // Attempts to output the deleted KVP
    document.getElementById("dictionary").innerHTML = Vehicle.Year;
}