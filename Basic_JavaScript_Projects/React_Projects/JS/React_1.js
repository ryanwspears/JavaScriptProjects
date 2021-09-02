// Challenge 3
function validate() {
    let a = document.forms["form"]["name"].value;
    let b = document.forms["form"]["pnumber"].value;
    if(a == "" && b == "") {
        window.alert("Please enter your NAME and PHONE NUMBER...");
    } else {
        window.alert("Success!");
    }
}