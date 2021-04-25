//Grabbing all form fields


window.onload = function(){



var thankYouMsg = document.getElementById("thanksMsg");
var formHandle = document.forms.contactUs;
formHandle.onsubmit = processForm;

function processForm(){


var fname = formHandle.fname.value;
var feedback = formHandle.feedback.value;
var agreement = formHandle.iAgree.checked;
var phoneNumber = formHandle.phone.value;
var email = formHandle.email.value;
var validPhoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var validEmail = /\S+@\S+\.\S+/;


if (fname === "" || fname === null){
    alert("A name must be entered");

    return false;

}

// Checks if a valid phone number was inputed
if(!validPhoneNumber.test(phoneNumber)){

    alert("Please enter a valid phone number");
    return false;

}
// Checks if email was entered correctly 

if(!validEmail.test(email)){
    alert("Please enter a valid email");
    return false;

}


// Checks if message box was left blank
if (feedback === "" || feedback === null){
    alert("This can't be left blank")
    return false;

}

// Checks if checkbox was checked
if(agreement === false){
    alert("Please accept the terms and conditions before submitting")
    return false;

}



thankYouMsg.style.display = "block";
formHandle.style.display = "none";
return false;


}




}