//var name1 = prompt("What is Player 1's preferred name?");
//var name2 = prompt("What is Player 2's preferred name?");

/*This does not work as it will ask for names after each refresh

document.querySelector(".p1").textContent = name1; --> this is correct
document.querySelector(".p2").setAttribute("p", name2);
*/

//Minimum = 1, Maximum = 6
var randomVariable1 = Math.floor(Math.random()* 6) + 1;
//var randomDiceImage1 = "dice" + randomVariable1 + ".png";
//document.querySelectorAll("img")[0].setAttribute("src", "images\\dice" + randomVariable1 +".png")
document.querySelector(".img1").setAttribute("src", "dice" + randomVariable1 +".png");

var randomVariable2 = Math.floor(Math.random()* 6) + 1;
document.querySelector(".img2").setAttribute("src", "dice" + randomVariable2 +".png");

if (randomVariable1 == randomVariable2){
  document.querySelector("h1").innerHTML = "🕵️It's a ‍draw!"
}
else if(randomVariable1 > randomVariable2){
  document.querySelector("h1").innerHTML = "🎉Player 1 wins!!"
}
else{
  document.querySelector("h1").innerHTML = "🎉Player 2 wins!!"
}
