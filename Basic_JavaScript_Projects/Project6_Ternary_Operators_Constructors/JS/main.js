// Determines if a person is tall enough to get on the ride
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

// Determines if a person is old enough to vote
function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

// Constructs a Vehicle object
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// Creates new instances of a Vehicle
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
// Outputs a Vehicle instance
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// Constructs an Anime object
function Anime(Title, Episodes) {
    this.Anime_Title = Title;
    this.Anime_Episodes = Episodes;
}
// Creates a new instance of Anime
var Naruto_Shippuden = new Anime("Naruto: Shippuden", 500);
// Outputs an Anime instance
function func() {
    document.getElementById("New_and_This").innerHTML = Naruto_Shippuden.Anime_Title + 
    " is an anime with " + Naruto_Shippuden.Anime_Episodes + " episodes.";
}

// Shows how to nest functions
function func2() {
    document.getElementById("Nested_Functions").innerHTML = func3();
    function func3() {
        var a = 100;
        function add_() {a += 150;}
        add_();
        return a;
    }
}