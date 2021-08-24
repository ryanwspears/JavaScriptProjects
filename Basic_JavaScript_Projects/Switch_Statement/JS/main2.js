function validate() {
    let a = document.forms["form"]["fname"].value;
    let b = document.forms["form"]["lname"].value;
    if(a == "Ryan" && b == "Spears") {
        window.alert("Success!");
    }
    else {
        window.alert("Failed!");
    }
}