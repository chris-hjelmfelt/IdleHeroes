/* -----------------------------------------------------------------------------
// Functions related to upgrades
// upgrades() is where an upgrade is purchased
// displayUpgrades() displays only certain upgrades to the player
// displayheroupgrades() displays boost multipliers
// openUpgrades() and closeUpgrades() handles the display of the menu
// upgrades have to be purchased in a specific order, so we can
// keep track of what has been purchased in selfupgrades and heroupgrades
// At the begining of the game those are only used to determine what
// upgrades to display. The specific effects are saved with the variables
// they effect (damage, hero.profit, etc.)
// ---------------------------------------------------------------------------*/


// All available upgrades - when they can be purchased and what effects they have
function upgrades(item) {
	if (item == 0 && money >= 1000){			
		selfDamage = selfDamage * 5;
		money = money - 1000;
		document.getElementById("up0").style = "display: none";		
		document.getElementById("up2").style = "display: block";
		selfupgrades++;
	}
	if (item == 1 && money >= 5000){
		allheroes[0].profit = allheroes[0].profit * 2;
		money = money - 5000;
		document.getElementById("up1").style = "display: none";
		document.getElementById("um1").innerHTML = "x2";		
		document.getElementById("up3").style = "display: block";
		heroupgrades++;
	}
	if (item == 2 && money >= 10000){
		selfDamage = selfDamage * 5;
		money = money - 5000;
		document.getElementById("up2").style = "display: none";		
		document.getElementById("up4").style = "display: block";
		selfupgrades++;
	}
	if (item == 3 && money >= 10000){
		allheroes[1].profit = allheroes[1].profit * 2;
		money = money - 10000;
		document.getElementById("up3").style = "display: none";
		document.getElementById("um2").innerHTML = "x2";		
		document.getElementById("up5").style = "display: block";
		heroupgrades++;
	}
	if (item == 4 && money >= 50000){
		selfDamage = selfDamage * 5;
		money = money - 10000;
		document.getElementById("up4").style = "display: none";		
		document.getElementById("up6").style = "display: block";
		selfupgrades++;
	}
	if (item == 5 && money >= 50000){
		allheroes[2].profit = allheroes[2].profit * 2;
		money = money - 20000;
		document.getElementById("up5").style = "display: none";
		document.getElementById("um3").innerHTML = "x2";
		document.getElementById("up7").style = "display: block";
		heroupgrades++;
	}
	if (item == 6 && money >= 100000){
		selfDamage = selfDamage * 5;
		money = money - 20000;
		document.getElementById("up6").style = "display: none";
		document.getElementById("up8").style = "display: block";
		selfupgrades++;
	}
	if (item == 7 && money >= 100000){
		allheroes[3].profit = allheroes[3].profit * 2;
		money = money - 40000;
		document.getElementById("up7").style = "display: none";
		document.getElementById("um4").innerHTML = "x2";
		document.getElementById("up9").style = "display: block";
		heroupgrades++;
	}
	if (item == 8 && money >= 500000){
		selfDamage = selfDamage * 5;
		money = money - 40000;
		document.getElementById("up8").style = "display: none";
		selfupgrades++;
	}
	if (item == 9 && money >= 500000){
		allheroes[4].profit = allheroes[4].profit * 2;
		money = money - 80000;
		document.getElementById("up9").style = "display: none";
		document.getElementById("um5").innerHTML = "x2";
		heroupgrades++;
	}
	printall();
}


// Determines which upgrades should be shown depending on which have
// been previously purchased (used only at initial game start/refresh)
function displayUpgrades(){
	switch(selfupgrades){
		case 0:
			document.getElementById("up0").style = "display: block";
			break;
		case 1:
			document.getElementById("up2").style = "display: block";
			break;
		case 2:
			document.getElementById("up4").style = "display: block";
			break;
		case 3:
			document.getElementById("up6").style = "display: block";
			break;
		case 4:
			document.getElementById("up8").style = "display: block";
			break;
		default:
			//do nothing	
	}
	switch(heroupgrades){
		case 0:
			document.getElementById("up1").style = "display: block";
			break;
		case 1:
			document.getElementById("up3").style = "display: block";
			break;
		case 2:
			document.getElementById("up5").style = "display: block";
			break;
		case 3:
			document.getElementById("up7").style = "display: block";
			break;
		case 4:
			document.getElementById("up9").style = "display: block";
			break;
		default:
			//do nothing	
	}
}


// Display a multiplier next to the hero boosts if an upgrade has been purchased
function displayHeroUpgrades(){
	if (heroupgrades > 0)
		document.getElementById("um1").innerHTML = "x2";
	if (heroupgrades > 1)
		document.getElementById("um2").innerHTML = "x2";
	if (heroupgrades > 2)
		document.getElementById("um3").innerHTML = "x2";
	if (heroupgrades > 3)
		document.getElementById("um4").innerHTML = "x2";
	if (heroupgrades > 4)
		document.getElementById("um5").innerHTML = "x2";
	if (heroupgrades > 5)
		document.getElementById("um6").innerHTML = "x2";
}

// Opens the upgrades menu
function openUpgrades() {
    document.getElementById("myNav").style.height = "100%";
}


// Closes the upgrades menu
function closeUpgrades() {
    document.getElementById("myNav").style.height = "0%";
}