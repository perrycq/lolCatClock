var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var time = new Date().getHours();

var partyButtonPressed = document.getElementById("partyTimeButton");

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyButtonPressed.innerText = "PARTY OVER!";
      partyButtonPressed.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyButtonPressed.innerText = "PARTY TIME!";
      partyButtonPressed.style.backgroundColor = "#222";
   }
};

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function(){
var messageText;
var timeEvent = document.getElementById("timeEvent");
var lolCatImage = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}

timeEvent.innerText = messageText;
lolCatImage.src = image;
showCurrentTime();
};

var wakeUpEvent = function() {
	wakeupTime = wakeUpTimeSelector.value;
};

var lunchTimeEvent = function() {
	lunchTime = lunchTimeSelector.value;
};

var napTimeEvent = function() {
	napTime = napTimeSelector.value;
};


var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

partyButtonPressed.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);
