/* -----------------------------------------------------------------------------
// Functions related to Heroes
// setupHeroes() displays the heroes available
// heroclick() is where a hero boost is purchased
// ---------------------------------------------------------------------------*/

// Hero Arrays
var hero1 = {quantity:0, profit:1, cost:10};
var hero2 = {quantity:0, profit:5, cost:100};
var hero3 = {quantity:0, profit:25, cost:1000};
var hero4 = {quantity:0, profit:125, cost:10000};
var hero5 = {quantity:0, profit:500, cost:100000};
var hero6 = {quantity:0, profit:2500, cost:1000000};
var hero7 = {quantity:0, profit:12500, cost:10000000};
var hero8 = {quantity:0, profit:50000, cost:100000000};
var hero9 = {quantity:0, profit:250000, cost:1000000000};
var hero10 = {quantity:0, profit:1250000, cost:10000000000};
var hero11 = {quantity:0, profit:5000000, cost:100000000000};
var hero12 = {quantity:0, profit:25000000, cost:1000000000000};
var allheroes = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11, hero12];


// Display certain heroes depending on the players reputation level
function setupHeroes() {
	// Hero 1 always shows
	document.getElementById("1").style = "display: block";
	document.getElementById("b1").style = "visibility:visible";
	document.getElementById("h1").style = "visibility:visible";
	document.getElementById("um1").style = "visibility:visible";
	document.getElementById("cost1").style = "visibility:visible";
	
	if (reputation > 200) { // Hero 2
			document.getElementById("2").style = "display: block";
			document.getElementById("b2").style = "visibility:visible";
			document.getElementById("h2").style = "visibility:visible";
			document.getElementById("um2").style = "visibility:visible";
			document.getElementById("cost2").style = "visibility:visible";
	}
	if (reputation > 1000) {
			document.getElementById("3").style = "display: block";
			document.getElementById("b3").style = "visibility:visible";
			document.getElementById("h3").style = "visibility:visible";
			document.getElementById("um3").style = "visibility:visible";
			document.getElementById("cost3").style = "visibility:visible";
	}
	if (reputation > 10000) {
			document.getElementById("4").style = "display: block";
			document.getElementById("b4").style = "visibility:visible";
			document.getElementById("h4").style = "visibility:visible";
			document.getElementById("um4").style = "visibility:visible";
			document.getElementById("cost4").style = "visibility:visible";
	}
	if (reputation > 500000) {
			document.getElementById("5").style = "display: block";
			document.getElementById("b5").style = "visibility:visible";
			document.getElementById("h5").style = "visibility:visible";
			document.getElementById("um5").style = "visibility:visible";
			document.getElementById("cost5").style = "visibility:visible";
	}
	if (reputation > 5000000) {
			document.getElementById("6").style = "display: block";
			document.getElementById("b6").style = "visibility:visible";
			document.getElementById("h6").style = "visibility:visible";
			document.getElementById("um6").style = "visibility:visible";
			document.getElementById("cost6").style = "visibility:visible";
	}
	if (reputation > 50000000) {
			document.getElementById("7").style = "display: block";
			document.getElementById("b7").style = "visibility:visible";
			document.getElementById("h7").style = "visibility:visible";
			document.getElementById("um7").style = "visibility:visible";
			document.getElementById("cost7").style = "visibility:visible";
	}
	if (reputation > 500000000) {
			document.getElementById("8").style = "display: block";
			document.getElementById("b8").style = "visibility:visible";
			document.getElementById("h8").style = "visibility:visible";
			document.getElementById("um8").style = "visibility:visible";
			document.getElementById("cost8").style = "visibility:visible";
	}
	if (reputation > 5000000000) {
			document.getElementById("9").style = "display: block";
			document.getElementById("b9").style = "visibility:visible";
			document.getElementById("h9").style = "visibility:visible";
			document.getElementById("um9").style = "visibility:visible";
			document.getElementById("cost9").style = "visibility:visible";
	}
	if (reputation > 50000000000) {
			document.getElementById("10").style = "display: block";
			document.getElementById("b10").style = "visibility:visible";
			document.getElementById("h10").style = "visibility:visible";
			document.getElementById("um10").style = "visibility:visible";
			document.getElementById("cost10").style = "visibility:visible";
	}
	if (reputation > 500000000000) {
			document.getElementById("11").style = "display: block";
			document.getElementById("b11").style = "visibility:visible";
			document.getElementById("h11").style = "visibility:visible";
			document.getElementById("um11").style = "visibility:visible";
			document.getElementById("cost11").style = "visibility:visible";
	}
	if (reputation > 5000000000000) {
			document.getElementById("12").style = "display: block";
			document.getElementById("b12").style = "visibility:visible";
			document.getElementById("h12").style = "visibility:visible";
			document.getElementById("um12").style = "visibility:visible";
			document.getElementById("cost12").style = "visibility:visible";
	}			
}


// If the user has enough money it buys a power boost for the selected hero
function heroclick(i) {
	if (money >= allheroes[i].cost){
		money = money - allheroes[i].cost;
		allheroes[i].cost = allheroes[i].cost + Math.ceil(allheroes[i].cost/10);
		allheroes[i].quantity = allheroes[i].quantity + 1;
		printall();		
	}
}