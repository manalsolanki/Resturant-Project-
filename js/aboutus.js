//#### About Us ####

//create page load listener
window.onload = pageReady;

//create page load function
function pageReady() {
  //creat variabl and array of all images
  var image = document.getElementById("res-image");
  var images = [
    "images/aboutuspage-1.jpg",
    "images/aboutuspage-2.jpg",
    "images/aboutuspage-3.jpg",
    "images/aboutuspage-4.jpg",
    "images/aboutuspage-5.jpg",
    "images/aboutuspage-6.jpg",
  ];

  //creat function to randomly change the image every 1500ms = 1.5s
  setInterval(function () {
    var random = Math.floor(Math.random() * 6);
    image.src = images[random];
  }, 1500);
}
