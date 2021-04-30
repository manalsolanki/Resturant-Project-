//#### Gift Cards ####

window.onload = pageReady;

function pageReady() {
  //CREATE A HANDLE FOR THE MAIN IMAGE
  var bigImage = document.getElementById("mainImg");

  //GET THE GALLERY IMAGES
  var image1 = document.getElementById("pic1");
  var image2 = document.getElementById("pic2");
  var image3 = document.getElementById("pic3");
  var image4 = document.getElementById("pic4");
  var image5 = document.getElementById("pic5");
  var image6 = document.getElementById("pic6");

  //SETUP LISTENERS FOR THE GALLERY IMAGES
  image1.onclick = switchPic1;
  image2.onclick = switchPic2;
  image3.onclick = switchPic3;
  image4.onclick = switchPic4;
  image5.onclick = switchPic5;
  image6.onclick = switchPic6;

  //CREATE FUNCTIONS TO CHANGE PICTURES
  function switchPic1() {
    bigImage.src = image1.src;
  }

  function switchPic2() {
    bigImage.src = image2.src;
  }

  function switchPic3() {
    bigImage.src = image3.src;
  }

  function switchPic4() {
    bigImage.src = image4.src;
  }

  function switchPic5() {
    bigImage.src = image5.src;
  }

  function switchPic6() {
    bigImage.src = image6.src;
  }
} //END onload FUNCTION
