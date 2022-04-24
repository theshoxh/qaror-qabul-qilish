var elCheckMood = document.querySelector("#id-mood");
var elCheckHomework = document.querySelector("#id-uy-ishi");
var elCheckSleep = document.querySelector("#id-sleep");
var elCheckSunday = document.querySelector("#id-sunday");

var elBtn = document.querySelector(".button");
var elOutput = document.querySelector(".output");

elBtn.addEventListener("click", function(e){
  e.preventDefault();
  var mood = elCheckMood.checked;
  var homework = elCheckHomework.checked;
  var sleep = elCheckSleep.checked;
  var sunday = elCheckSunday.checked;


  if((mood && homework) || (mood)){
    message = "Maktabga boramiz!!";
  }

  else if (sunday || sleep){
    message = "Maktabga bormaymiz!!";
  }

  elOutput.textContent = message;
})


