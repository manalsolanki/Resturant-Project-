//EXECUTE "pageLoaded" FUNCTION AFTER THE PAGE HAS BEEN LOADED
window.onload = pageLoaded;

function pageLoaded(){
  //ACCESS HTML ELEMENTS
  var messageTab = document.getElementById("messageBtn");
  var masterChefTab = document.getElementById("masterChefBtn");
  var waiterTab = document.getElementById("waiterBtn");
  var supervisorTab = document.getElementById("supervisorBtn");
  var juniorChefTab = document.getElementById("juniorChefBtn");
  var foodDeliveryTab = document.getElementById("foodDeliveryBtn");
  var dishWaherTab = document.getElementById("dishWaherBtn");
  var picture = document.getElementById("pic");

  var masterChefSection = document.getElementById("master-chef");
  var juniorChefSection = document.getElementById("junior-chef");
  var waiterSection = document.getElementById("waiters");
  var supervisorSection = document.getElementById("supervisors");
  var dishWasherSection = document.getElementById("dish-washer");
  var foodDeliveryManSection = document.getElementById("food-delivery-man");
  var messageSection = document.getElementById("message");

  /*CREATE LISTENER EVENTS THAT DISPLAY EACH POSITION'S INFO BY CLICKING
  ON THE TABS THAT ARE UNDER THE HEADER */
  masterChefTab.onclick = masterChefInfo;
  messageTab.onclick = messageInfo;
  juniorChefTab.onclick = juniorChefInfo;
  waiterTab.onclick = waiterInfo;
  supervisorTab.onclick = supervisorInfo;
  dishWaherTab.onclick = dishWasherInfo;
  foodDeliveryTab.onclick = foodDeliveryManInfo;
  
  /* FUNCTIONS: DISPLAY ONLY ONE SECTION OF HIDDEN MESSAGE AND PICTURE BASED
  ON THE TAB THAT  THE USER  CLICKS ON. */
  function masterChefInfo(){
    messageSection.style.display = "none";
    juniorChefSection.style.display = "none";
    waiterSection.style.display = "none";
    supervisorSection.style.display = "none";
    dishWasherSection.style.display = "none";
    foodDeliveryManSection.style.display = "none";
    masterChefSection.style.display = "block";
    picture.src = "./images/master-chef-tab.jfif";
  }

  function messageInfo(){
    messageSection.style.display = "block";
    masterChefSection.style.display = "none";
    juniorChefSection.style.display = "none";
    waiterSection.style.display = "none";
    supervisorSection.style.display = "none";
    dishWasherSection.style.display = "none";
    foodDeliveryManSection.style.display = "none";
    picture.src = "./images/career-Master-chef.jfif";
  }
  
  function juniorChefInfo(){
    messageSection.style.display = "none";
    masterChefSection.style.display = "none";
    waiterSection.style.display = "none";
    supervisorSection.style.display = "none";
    dishWasherSection.style.display = "none";
    foodDeliveryManSection.style.display = "none";
    juniorChefSection.style.display = "block";
    picture.src = "./images/junior-chef-tab.jfif";
  }

  function waiterInfo(){
    messageSection.style.display = "none";
    masterChefSection.style.display = "none";
    juniorChefSection.style.display = "none";
    supervisorSection.style.display = "none";
    dishWasherSection.style.display = "none";
    foodDeliveryManSection.style.display = "none";
    waiterSection.style.display = "block";
    picture.src = "images/waiter-tab.jfif";
  }

  function supervisorInfo(){
    messageSection.style.display = "none";
    masterChefSection.style.display = "none";
    juniorChefSection.style.display = "none";
    waiterSection.style.display = "none";
    dishWasherSection.style.display = "none";
    foodDeliveryManSection.style.display = "none";
    supervisorSection.style.display = "block";
    picture.src = "images/supervisor-tab.jfif";
  }

  function dishWasherInfo(){
    messageSection.style.display = "none";
    masterChefSection.style.display = "none";
    juniorChefSection.style.display = "none";
    waiterSection.style.display = "none";
    supervisorSection.style.display = "none";
    foodDeliveryManSection.style.display = "none";
    dishWasherSection.style.display = "block";
    picture.src = "./images/career-dish-washer.jpg";
  }

  function foodDeliveryManInfo(){
    messageSection.style.display = "none";
    masterChefSection.style.display = "none";
    juniorChefSection.style.display = "none";
    waiterSection.style.display = "none";
    supervisorSection.style.display = "none";
    dishWasherSection.style.display = "none";
    foodDeliveryManSection.style.display = "block";
    picture.src = "./images/career-food-delivery-man.jpg ";
  }

}