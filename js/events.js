window.onload = function(){
  var cardBtn = document.getElementsByClassName("card-btn");
  //every button will lead to booking form
  for(var i = 0; i < cardBtn.length; i++){
    cardBtn[i].onclick = pageChange;
  }

  //redirected to booking form page
  function pageChange(){
    window.location = "./bookings.html";
  }
}
