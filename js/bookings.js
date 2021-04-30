window.onload = function(){
  var formHandle = document.forms.booking;
  var reqField = document.getElementById("required-field");
  // calling processForm on form shubmit
  formHandle.onsubmit = processForm;

  function processForm(){
    // local variables
    var fname = formHandle.fname.value;
    var phoneNumber = formHandle.phone.value;
    var email = formHandle.email.value;
    var cname = formHandle.cardname.value;
    var ccnum = formHandle.cardnumber.value;
    var expmonth = formHandle.expmonth.value;
    var expyear = formHandle.expyear.value;
    var cvv = formHandle.cvv.value;
    // validation check
    var validPhoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var validCard = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var validYear = /^(?:19|20)\d{2}$/;
    var validEmail = /\S+@\S+\.\S+/;
    // Checks if first name was left blank
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

    // Checks if card name was left blank
    if (cname === "" || cname === null){
        reqField.innerHTML = "<p>Please enter a card name</p>";
        return false;
    }
    // Checks if expyear was entered correctly
    if (!validYear.test(expyear)){
        reqField.innerHTML = "<p>Please enter a valid year </p>";
        return false;
    }
    // Checks if expmonth was left blank
    if (expmonth === "" || expmonth === null){
        reqField.innerHTML = "<p>Please enter month of expiry</p>";
        return false;
    }
    // Checks if Card number was entered correctly
    if(!validCard.test(ccnum)){
        reqField.innerHTML = "<p>Please enter a valid card number</p>";
        return false;
    }
    // Checks if cvv was left blank
    if (cvv === "" || cvv === null){
        reqField.innerHTML = "<p>Please enter cvv number</p>";
        return false;
    }

    //  #### REDIRECT TO HOME ####
    //window.location = "./home.html";
    return false;
  }
}
