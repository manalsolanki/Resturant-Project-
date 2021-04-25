window.onload = pageReady;

function pageReady() {
    /*--------------------------  Script for Menu's Specials ------------------------------*/
    // Variables for displaying messages
    var daySpecial = document.getElementById("daily");
    var menuSpecials = document.getElementById('specials');

    // Getting the day of the week
    var todaysDate = new Date();
    todaysDate = todaysDate.getDay();
    console.log(todaysDate);
    
    // Logic to determine what special to show each day
    switch(todaysDate) {
        case 1:
            daySpecial.innerHTML = "Monday Special: ";
            menuSpecials.innerHTML ="Share a meal with our Steak Dinner for Two.";
            break;
        case 2:
            daySpecial.innerHTML = "Tuesday Special:";
            menuSpecials.innerHTML ="Epicly Cheap Three Course Meal";
            break;
        case 3:
            daySpecial.innerHTML = "Wednesday Special:";
            menuSpecials.innerHTML ="Family Feast. Feed a family of four.";
            break;
        case 4:
            daySpecial.innerHTML = "Thursday Special:";
            menuSpecials.innerHTML ="Thirsty Thursdays";
            break;
        case 5:
            daySpecial.innerHTML = "Friday Special:";
            menuSpecials.innerHTML = "Appy Hour. Half off all appetizers from 6pm to 9pm!";
            break;
        default:
            daySpecial.innerHTML = "Daily Special:";
            menuSpecials.innerHTML = "Free Epic Chinese Tea with every meal!";
            break;
    }
}