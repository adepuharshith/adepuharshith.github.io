var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
if ( username == "adminc" && password == "admin123"){
alert ("Login successfully");
window.location = "../publications/index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("Username").disabled = true;
document.getElementById("Password").disabled = true;
document.getElementById("Submit").disabled = true;
return false;
}
}
}
