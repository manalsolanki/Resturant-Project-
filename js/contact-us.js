//Grabbing all form fields


window.onload = function(){



    var thankYouMsg = document.getElementById("thanksMsg");
    var formHandle = document.forms.contactUs;
    var reqField = document.getElementById("required-field");
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
        reqField.innerHTML = "<p>Please enter your first name</p>";
     
    
        return false;
    
    }
    
    // Checks if a valid phone number was inputed
    if(!validPhoneNumber.test(phoneNumber)){
    
        reqField.innerHTML = "<p>Please enter a valid phone number</p>";  
        return false;
    
    }
    // Checks if email was entered correctly 
    
    if(!validEmail.test(email)){
        reqField.innerHTML = "<p>Please enter a valid email address</p>";
        return false;
    
    }
    
    
    // Checks if message box was left blank
    if (feedback === "" || feedback === null){
        reqField.innerHTML = "<p>Dont forget to leave a comment!</p>";
        return false;
    
    }
    
    // Checks if checkbox was checked
    if(agreement === false){
        reqField.innerHTML = "<p>Please accept the terms and conditions before submitting!</p>";
        return false;
    
    }
    
    
    
    thankYouMsg.style.display = "block";
    formHandle.style.display = "none";
    return false;
    
    
    }
    
    
    
    
    }