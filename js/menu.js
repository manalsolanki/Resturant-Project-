window.onload = pageLoaded;

function pageLoaded(){
  var allBtn = document.getElementById("allBtn");
  var breakfastBtn = document.getElementById("breakfastBtn");
  var appetizerBtn = document.getElementById("appetizerBtn");
  var dinnerBtn = document.getElementById("dinnerBtn");
  var dessertBtn = document.getElementById("dessertBtn");
  var drinkBtn = document.getElementById("drinkBtn");
  var breakfast = document.getElementById("breakfast");
  var menuContent = document.getElementById("menu-content");
  var drinkSection = document.getElementById("drink1");
  var breakfastSection = document.getElementById("breakfast1");
  var appetizerSection = document.getElementById("appetizer1");
  var dinnerSection = document.getElementById("dinner1");
  var dessertSection = document.getElementById("dessert1");

  function breakfastSection1(){
    menuContent.style.display = "none";
    breakfastSection.style.display = "block";
  }

  function allSection1(){
    menuContent.style.display = "block";
    breakfastSection.style.display = "none";
    appetizerSection.style.display = "none";
    dinnerSection.style.display = "none";
    drinkSection .style.display = "none";
    dessertSection.style.display = "none";
  }

  function appetizerSection1(){
    menuContent.style.display = "none";
    breakfastSection.style.display = "none";
    dinnerSection.style.display = "none";
    drinkSection .style.display = "none";
    dessertSection.style.display = "none";
    appetizerSection.style.display = "block";
  }

  function dinnerSection1(){
    menuContent.style.display = "none";
    breakfastSection.style.display = "none";
    appetizerSection.style.display = "none";
    drinkSection .style.display = "none";
    dessertSection.style.display = "none";
    dinnerSection.style.display = "block";
  }

  function drinkSection1(){
    menuContent.style.display = "none";
    breakfastSection.style.display = "none";
    appetizerSection.style.display = "none";
    dinnerSection.style.display = "none";
    dessertSection.style.display = "none";
    drinkSection .style.display = "block";
  }

  function dessertSection1(){
    menuContent.style.display = "none";
    breakfastSection.style.display = "none";
    appetizerSection.style.display = "none";
    dinnerSection.style.display = "none";
    drinkSection .style.display = "none";
    dessertSection.style.display = "block";
  }

  allBtn.onclick= allSection1;
  breakfastBtn.onclick= breakfastSection1;
  appetizerBtn.onclick= appetizerSection1;
  dinnerBtn.onclick= dinnerSection1;
  drinkBtn.onclick= drinkSection1;
  dessertBtn.onclick= dessertSection1;

}