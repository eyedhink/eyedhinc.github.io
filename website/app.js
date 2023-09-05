function alertButton() {
    alert("Hello World!")
};

function myFunction() {
    var codeInput = prompt("enter the code")
    if (codeInput == 883189) {
        correct = true
    } else {
        correct = false
    }
    return correct
};
function reveal() {
    var correction = myFunction()
    if (correction == true) {
        document.getElementById("msgContent").innerHTML = "I cant belive it!! you have done this much!!"
        document.getElementById("mainbutton").style.display="block"
        alert("code is correct")
    } else {
        alert("code is incorrect")
    }
};
