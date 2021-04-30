window.onload = pageReady;

function pageReady(){
  // all htmls elements stored to local variables
  var wrapperCon = document.getElementById("wrapper");
  var leftCon = document.getElementById("left-con");
  var rightCon = document.getElementById("right-con");
  var ulDiv = document.getElementById("ul");
  var leftArray = ['Home','About Us','Contact Us','Gift Cards','Location'];
  var rightArray = ['Menu','Events','Careers','Specials','Contests'];

  var a;
  var p;
  // ##### work to do #####
  // all links to pages
  var leftHrefArray = ["./index.html","./aboutus.html","./contact-us.html","./giftcards.html","./locations.html"];
  var rightHrefArray = ["./menu.html","./events.html","./career.html","./menu_specials.html","./contest.html"];
 

  // dynamically create a and p tags and show data from array
  for(var i = 0; i < leftArray.length; i++){
    a = document.createElement("a");
    p = document.createElement("p");
    a.innerHTML = leftArray[i];
    console.log(leftHrefArray[i])
    a.href = leftHrefArray[i];
    a.classList.add("anchor-link");
    p.appendChild(a);
    leftCon.appendChild(p);
  }

  // dynamically create a and p tags and show data from array
  for(var i = 0; i < rightArray.length; i++){
    a = document.createElement("a");
    p = document.createElement("p");
    a.innerHTML = rightArray[i];
    a.href= rightHrefArray[i];
    a.classList.add("anchor-link");
    p.appendChild(a);
    rightCon.appendChild(p);
  }
}
