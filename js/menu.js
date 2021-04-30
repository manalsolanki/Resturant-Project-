//EXECUTE "pageLoaded" FUNCTION AFTER THE PAGE HAS BEEN LOADED
window.onload = pageLoaded;

function pageLoaded(){
  //ACCESS HTML ELEMENTS
  var allBtn = document.getElementById("allBtn");
  var breakfastBtn = document.getElementById("breakfastBtn");
  var appetizerBtn = document.getElementById("appetizerBtn");
  var dinnerBtn = document.getElementById("dinnerBtn");
  var dessertBtn = document.getElementById("dessertBtn");
  var drinkBtn = document.getElementById("drinkBtn");
  var menuContent = document.getElementById("menu-content");
  var drinkSection = document.getElementById("drink1");
  var breakfastSection = document.getElementById("breakfast1");
  var appetizerSection = document.getElementById("appetizer1");
  var dinnerSection = document.getElementById("dinner1");
  var dessertSection = document.getElementById("dessert1");

  /*CREATE LISTENER EVENTS THAT DISPLAY EACH MENU'S INFO BY CLICKING
  ON THE TABS THAT ARE UNDER THE MENU HEADING */
  allBtn.onclick= allSection1;
  breakfastBtn.onclick= breakfastSection1;
  appetizerBtn.onclick= appetizerSection1;
  dinnerBtn.onclick= dinnerSection1;
  drinkBtn.onclick= drinkSection1;
  dessertBtn.onclick= dessertSection1;

  /* FUNCTIONS: DISPLAY ONLY ONE SECTION OF HIDDEN MESSAGE AND PICTURE BASED
  ON THE TAB THAT  THE USER  CLICKS ON. */
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
}

//JQUERY
//AFTER THE PAGE HAS BEEN LOADED
$(document).ready(function(){
  //CONTENT OF THE EACH SECTION AT THE MAIN PAGE WILL BE HIDDEN
  $(".breakfast-content").hide();
  $(".appetizer-content").hide();
  $(".dinner-content").hide();
  $(".dessert-content").hide();
  $(".drink-content").hide();

  //TOGGLE THE CONTENT OF EACH SECTION BY CLICKING THE HEADINGS.
  $("#breakfast").click(function(){
    $(".breakfast-content").fadeToggle();
  })
  $("#appetizer").click(function(){
    $(".appetizer-content").fadeToggle();
  })
  $(".dinner").click(function(){
    $(".dinner-content").fadeToggle();
  })
  $(".dessert").click(function(){
    $(".dessert-content").fadeToggle();
  })
  $(".drink").click(function(){
    $(".drink-content").fadeToggle();
  })
})