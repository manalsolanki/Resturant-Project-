window.onload = function (){
 var form = document.forms.subscriptionForm;
 form.onsubmit = function(){
   form.innerHTML = "Thanks for Subscribing."
     return false;
 }

}