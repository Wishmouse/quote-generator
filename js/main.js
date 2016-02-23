
function randomNumber() {
   var mathRandom =  Math.floor(Math.random()* 8+1);



 if (mathRandom === 1) {
    document.getElementById("quote").innerHTML = "A balanced diet is a cupcake in each hand.";
  } else if (mathRandom === 2) {
    document.getElementById("quote").innerHTML = "Stressed is dessert spelt backwards."; 
  } else if (mathRandom === 3) {
    document.getElementById("quote").innerHTML = "Life is too short, eat dessert first."; 
  } else if (mathRandom === 4) {
    document.getElementById("quote").innerHTML = "A party without cake is just a meeting."; 
  } else if (mathRandom === 5) {
    document.getElementById("quote").innerHTML = "Never underestimate the power of chocolate"; 
  } else if (mathRandom === 6) {
    document.getElementById("quote").innerHTML = "You cannot buy happiness, but you can buy a cupcake and they are the same thing."; 
  } else if (mathRandom === 7) {
    document.getElementById("quote").innerHTML = "I want to have a good body, just not as much as I want dessert.";
  } else {
    document.getElementById("quote").innerHTML = "Happiness is eating dessert before lunch.";
  }
};

/*
switch (newQuote) {
  case <= 0.1:
    return "quote1";
    break;
  case <= 0.2:
    return "quote2";
    break;
  case <= 0.3:
    return "quote3";
    break;
  case <= 0.4:
    return "quote4";
    break;
  case <= 0.5:
    return "quote5";
    break;
  case <= 0.6:
    return "quote6";
    break;
  case <= 0.7:
    return "quote7";
    break;
  case <= 0.8:
    return "quote8";
    break;
  case <= 0.9:
    return "quote9";
    break;
  case <= 1:
    return "quote10";
    break;

}



//$(document).ready(function(){
    //button click
    //$("button").click(function(){
        //$("p:first").replaceWith("\"Life is uncertain. Eat dessert first.\" -Ernestine Ulmer");
    //});



//});//end of document ready function
*/