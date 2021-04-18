var number = 6;
var colors = genrandomColors(number);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickeColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var tryit = document.querySelector("p");
var message = document.querySelector("#message");
var resetbutton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click" , function(){
	number =3;
	resett();
hard.classList.remove("selected");
easy.classList.add("selected");
});

hard.addEventListener("click" , function(){
	number =6;
	resett();
easy.classList.remove("selected");
hard.classList.add("selected");
});

resetbutton.addEventListener("click" , function(){
 colors = genrandomColors(number);
 pickeColor= pickColor();
colorDisplay.textContent = pickeColor;
for(var i = 0; i<squares.length ; i++)
{   if(colors[i])
	squares[i].style.background= colors[i];
	else
	squares[i].style.background= "none";
}
resetbutton.textContent = "NEW COLORS";
message.textContent = "";
h1.style.background= "steelblue";
});

colorDisplay.textContent = pickeColor;

for(var i = 0; i<squares.length ; i++){
	squares[i].style.background= colors[i];

	squares[i].addEventListener("click" , function(){
if(pickeColor === this.style.background)
{

message.textContent = "Correct!";
message.style.color="darkgreen";
resetbutton.textContent = "Play Again?";
changeColors(this.style.background);
h1.style.background = this.style.background;
}
else
{
this.style.background="#232323";
message.textContent = "Try Again";
message.style.color="darkred";
}
	});
}

function changeColors(color){
	for(var i = 0; i<squares.length ; i++)
{   if(colors[i])
	squares[i].style.background= color;
	else
	squares[i].style.background= "none";
}
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function genrandomColors(num){
var arr = [];

for (var i = 0 ; i<num ; i++)
arr.push(randomcolors());

return arr;

}

function randomcolors(){
	var r =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", " + b + ")";

}

function resett (){
colors = genrandomColors(number);
 pickeColor= pickColor();
colorDisplay.textContent = pickeColor;
for(var i = 0; i<squares.length ; i++)
{   if(colors[i])
	squares[i].style.background= colors[i];
	else
	squares[i].style.background= "none" ;
}
resetbutton.textContent = "NEW COLORS";
message.textContent = "";
h1.style.background= "steelblue";
}