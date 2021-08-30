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

upgradeSelfCost = [100, 500, 1000, 5000, 10000, 50000, 100000];
upgradeHeroCost = [200, 1000, 5000, 10000, 50000, 100000, 1000000, 10000000];
var numOfUpgrades = 10;
var upgraded = false;

// All available upgrades - when they can be purchased and what effects they have
function upgrades(item) {
	if (item == 0 && money >= upgradeSelfCost[0]){			
		playerDam = playerDam * 5;
		money = money - upgradeSelfCost[0];    
		selfupgrades++;
    upgraded = true;
	}
	if (item == 1 && money >= upgradeHeroCost[0]){
		heroDam[0] = heroDam[0] * 2;
		money = money - upgradeHeroCost[0];
		heroupgrades++;
    upgraded = true;
	}
	if (item == 2 && money >= upgradeSelfCost[1]){
		playerDam = playerDam * 5;
		money = money - upgradeSelfCost[1];		
		selfupgrades++;
    upgraded = true;
	}
	if (item == 3 && money >= upgradeHeroCost[1]){
		heroDam[1] = heroDam[1] * 2;
		money = money - upgradeHeroCost[1];
		heroupgrades++;
    upgraded = true;
	}
	if (item == 4 && money >= upgradeSelfCost[2]){
		playerDam = playerDam * 5;
		money = money - upgradeSelfCost[2];	
		selfupgrades++;
    upgraded = true;
	}
	if (item == 5 && money >= upgradeHeroCost[2]){
		heroDam[2] = heroDam[2] * 2;
		money = money - upgradeHeroCost[2];
		heroupgrades++;
    upgraded = true;
	}
	if (item == 6 && money >= upgradeSelfCost[3]){
		playerDam = playerDam * 5;
		money = money - upgradeSelfCost[3];
		selfupgrades++;
    upgraded = true;
	}
	if (item == 7 && money >= upgradeHeroCost[3]){
		heroDam[3] = heroDam[3] * 2;
		money = money - upgradeHeroCost[3];
		heroupgrades++;
    upgraded = true;
	}
	if (item == 8 && money >= upgradeSelfCost[4]){
		playerDam = playerDam * 5;
		money = money - upgradeSelfCost[4];
		selfupgrades++;
    upgraded = true;
	}
	if (item == 9 && money >= upgradeHeroCost[4]){
		heroDam[4] = heroDam[4] * 2;
		money = money - upgradeHeroCost[4];
		heroupgrades++;
    upgraded = true;
	}

  // stuff for all upgrades
  if (upgraded == true) {
    displayUpgrades();
    displayHeroUpgrades()
    printall();
    newUpgrade = 5;   // counter
    upgraded = false;
  }	
}


// Determines which upgrades should be shown depending on which have
// been previously purchased (used only at initial game start/refresh)
function displayUpgrades(){
  // start with all upgrades hidden
  for (var i=0; i < numOfUpgrades; i++) {
    document.getElementById("up" + i.toString()).style = "display: none";
  }
  // show the next upgrade to player damage
	switch(selfupgrades){
		case 0:
			document.getElementById("up0").style = "display: block";
      document.getElementById("up0").innerHTML = "X5 Power to Manual Attack $" + upgradeSelfCost[0];
			break;
		case 1:
			document.getElementById("up2").style = "display: block";
      document.getElementById("up2").innerHTML = "X5 Power to Manual Attack $" + upgradeSelfCost[1];
			break;
		case 2:
			document.getElementById("up4").style = "display: block";
      document.getElementById("up4").innerHTML = "X5 Power to Manual Attack $" + upgradeSelfCost[2];
			break;
		case 3:
			document.getElementById("up6").style = "display: block";
      document.getElementById("up6").innerHTML = "X5 Power to Manual Attack $" + upgradeSelfCost[3];
			break;
		case 4:
			document.getElementById("up8").style = "display: block";
      document.getElementById("up8").innerHTML = "X5 Power to Manual Attack $" + upgradeSelfCost[4];
			break;
		default:
			//do nothing	
	}
  // show the next upgrade to hero damage
	switch(heroupgrades){
		case 0:
			document.getElementById("up1").style = "display: block";
      document.getElementById("up1").innerHTML = "X2 Power to Hero 1 $" + upgradeHeroCost[0];
			break;
		case 1:
			document.getElementById("up3").style = "display: block";
      document.getElementById("up3").innerHTML = "X2 Power to Hero 2 $" + upgradeHeroCost[1];
			break;
		case 2:
			document.getElementById("up5").style = "display: block";
      document.getElementById("up5").innerHTML = "X2 Power to Hero 3 $" + upgradeHeroCost[2];
			break;
		case 3:
			document.getElementById("up7").style = "display: block";
      document.getElementById("up7").innerHTML = "X2 Power to Hero 4 $" + upgradeHeroCost[3];
			break;
		case 4:
			document.getElementById("up9").style = "display: block";
      document.getElementById("up9").innerHTML = "X2 Power to Hero 5 $" + upgradeHeroCost[4];
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
  displayUpgrades();
  document.getElementById("myNav").style.height = "100%";
}


// Closes the upgrades menu
function closeUpgrades() {
  document.getElementById("myNav").style.height = "0%";
}