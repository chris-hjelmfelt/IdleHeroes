// -------------------------------
// KONGREGATE API
// -------------------------------
/* 
var kongregate; 
// Begin the process of loading the Kongregate API:
kongregateAPI.loadAPI(onLoadCompleted);
// Called when the API is finished loading 
function onLoadCompleted(){
   // Get a global reference to the kongregate API. This way, pages included in the
   // iframe can access it by using "parent.kongregate"
   kongregate = kongregateAPI.getAPI();
} 
*/


// --------------------
// VARIABLES
// --------------------
var timeT = setInterval(timeTick, 500);
var tickCount = 0;
var power = 0;
var money = 0;
var reputation = 0;
var monsterhp = 500;
var monstermax = 500;
var monsterhealth = 500;
var selfDamage = 1;
var deadmonsterflag = false;
var messagetime = 0;
var manualmessagetime = 0;
var powermax = 20;
var powertick = 0;
var killtick = 0;
var pwidth = 0;
var testmess = "";
var selfupgrades = 0;
var heroupgrades = 0;
var selfimage = "f";
var firstshots = 5;
var numOfHeroes = 12;
var combinedDamage = 0;

// Array for monster images
var imgArray = new Array();
var monsters = 10;
for (var i = 0; i < monsters; i++){
	imgArray[i] = new Image();
	imgArray[i].src = 'monsters/monster' + (i+1) + '.jpg';
}

// Setup Game
getsaves();
setupHeroes();
displayUpgrades();
displayHeroUpgrades();
genderSelect(selfimage);

// used for mischance
if (selfupgrades > 3)
	selfupgrades = 3;

getmonster();
printall();

// -----------------------------------------
// FUNCTIONS 
// -----------------------------------------

// Update values displayed in HTML
function printall() {
	document.getElementById("monster").innerHTML = monsterhealth;
	document.getElementById("money").innerHTML = money;
	document.getElementById("rep").innerHTML = reputation;
	for (let i = 0; i < numOfHeroes; i++){
		let j = i + 1;
		document.getElementById("cost" + j).innerHTML = "cost = $"  + allheroes[i].cost;
		document.getElementById("pow" + j).innerHTML = "power = "  + (allheroes[i].quantity * allheroes[i].profit);
		document.getElementById("h" + j).innerHTML = allheroes[i].quantity;
	}
	document.getElementById("fightmess").innerHTML = "";
	//document.getElementById("testing").innerHTML = testmess;
}


// Stuff that happens on regular time intervals
function timeTick() {	
	if (messagetime != 0) {
		messagetime--;
	}else{
		document.getElementById("fightmess").innerHTML = "";
	}
	if (manualmessagetime != 0) {
		manualmessagetime--;
	}else{
		document.getElementById("action").innerHTML = "&nbsp; <br> &nbsp;";
	}
	if (deadmonsterflag == false){
		calculatePower();
		if (power > 0)
			fightmonster();			
	} else { power = 0; }
	updatesaves();
	printall();	
	setupHeroes();
 	tickCount++;		
}

// The damage that the combined heroes will do to the monster
function calculatePower(){
	combinedDamage = 0;
	for (let i = 0; i < numOfHeroes; i++){
		combinedDamage += allheroes[i].quantity * allheroes[i].profit;
	}
	power = combinedDamage;	
}

// Functionality for the Attack button
function manclick() {
	if (deadmonsterflag == false){
		document.getElementById("click").src = "images/clickblank.jpg";
		manualmessagetime = 3;	
		
		var rand1 = Math.ceil(Math.random() * 10);
		var rand2 = Math.ceil(Math.random() * 50);
		if (rand1 > 5){
			rand1 = 0;
		}
		if (rand2 == 50){
			rand1 = rand1 * 50;
		}
		
		if (firstshots > 0){
			misschance = 0;
			firstshots--;
			rand1 = Math.ceil(Math.random() * 5);
		} else { misschance = 3 - selfupgrades; }
		
		money = money + rand1;
		
		var rand3 = Math.ceil(Math.random() * (3 + misschance));
		if (rand3 > 3){
			rand3 = 0;
		}
		monsterhealth = monsterhealth - (rand3 * selfDamage);
		
		if (monsterhealth <= 0){
			killmonster(1);
		}
				
		if (rand3 > 0) {
			if (rand1 > 0) {
				document.getElementById("action").innerHTML = "You did <span style='color:red'>" + (rand3 * selfDamage) + "</span> damage to the monster and you got <span style='color:red'>$" + rand1 + "</span>";
			} else {
				document.getElementById("action").innerHTML = "You did <span style='color:red'>" + (rand3 * selfDamage) + "</span> damage to the monster.";
			}
		} else {
			document.getElementById("action").innerHTML = "You Missed";
		}
		document.getElementById("money").innerHTML = money;
		document.getElementById("monster").innerHTML = monsterhealth;
		monsterbar();
	}
}

// The heroes fight the monster 
function fightmonster() {
	var rand4 = Math.ceil(Math.random() * 10);
	if (rand4 == 10) {
		monsterhealth = monsterhealth - (power * 3);
		document.getElementById("fightmess").innerHTML = "Your team did x3 power damage!!";
		messagetime = 2;
	} else {
		monsterhealth = monsterhealth - power;
	}
	power = 0;
	if (monsterhealth <= 0){	
		killmonster(2);
	} else { killtick++; }
	document.getElementById("money").innerHTML = money;
	document.getElementById("monster").innerHTML = monsterhealth;
	document.getElementById("rep").innerHTML = reputation;
	monsterbar();
}


// updating the Monster Strength bar, when it's empty the monster dies
function monsterbar() {
    var elem = document.getElementById("monsterbar"); 
	if (monsterhealth > 0) {	
		var mwidth = (monsterhealth/monsterhp) * 100;
	} else {
		var mwidth = 0;
	}
	elem.style.width = mwidth + '%';
} 


// What happens when the heroes kill the monster
function killmonster(which) {
	deadmonsterflag = true;
	monsterhealth = 0;
	document.getElementById("monster").innerHTML = monsterhealth;
	document.getElementById("monsterimg").src = "images/Victorious.jpg";	
	if (killtick < 10) {  // powerbar size should increase over time
		monstermax = monstermax + Math.ceil(monsterhp/10);
	}
	killtick = Math.ceil(Math.random() * 4);	
	if (which == 2){  // If it was heroes that did the kill shot
		power = 0;
		powertick = 0;
	}
	money = money + Math.ceil(monsterhp/10);
	reputation = reputation + Math.ceil(monsterhp/20);
	setupHeroes();
	setTimeout(getmonster, 2000);	
}


// Displaying a new monster 
function getmonster() {
	newmonster = Math.ceil((Math.random() * monsters) - 1);
	document.getElementById("monsterimg").src = imgArray[newmonster].src;
	monsterhp = monstermax + Math.ceil(Math.random() * Math.ceil(monstermax/8)) - Math.ceil(Math.random() * Math.ceil(monstermax/8));
	monsterhealth = monsterhp;
	monsterbar();
	document.getElementById("monster").innerHTML = monsterhealth;
	deadmonsterflag = false;
}

//Change character pic depending on gender selected
function genderSelect(gender) {
	if (gender == "m"){
		document.getElementById("charImage").src = 'images/MainChar-Male1.png';
		selfimage = 'm';
	}else{
		document.getElementById("charImage").src = 'images/MainChar-Female1.png';
		selfimage = 'f';
	}
}