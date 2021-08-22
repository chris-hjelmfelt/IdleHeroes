/* -----------------------------------------------------------------------------
// Functions related to saving data
// updatesaves() sets the values of the localStorage variables
// getsaves() gets the values from the localStorage variables
// The hero data in the game is in a 2D array so I use a for loop to 
// set localStorage variables for each element separately
// There is a method to save the entire array in a single localStorage
// variable using JSON but I couldn't get it to work and I was in a hurry.
// I think it would be worth trying again.
// ----------------------------------------------------------------------------*/

// Update saved data
function updatesaves(){
	localStorage.setItem("money3", money);
	localStorage.setItem("reputation3", reputation);
	localStorage.setItem("playerDam3", playerDam);
	localStorage.setItem("powermax3", powermax);
	localStorage.setItem("monstermax3", monstermax);
	localStorage.setItem("selfupgrades3", selfupgrades);
	localStorage.setItem("heroupgrades3", heroupgrades);
	localStorage.setItem("selfimage3", selfimage);
	for (var saved = 0; saved < 12; saved++){
		localStorage.setItem('heroNum3' + saved.toString(), heroNum[saved]);    
    localStorage.setItem('heroCost3' + saved.toString(), heroCost[saved]);
    localStorage.setItem('heroDam3' + saved.toString(), heroDam[saved]);
	}
}


// Get saved data
function getsaves() {
	if( localStorage.money3 )	
		money = parseInt(localStorage.getItem("money3"));
	if( localStorage.reputation3 )
		reputation = parseInt(localStorage.getItem("reputation3"));
	if( localStorage.playerDam3 )
		playerDam = parseInt(localStorage.getItem("playerDam3"));
	if( localStorage.powermax3 )
		powermax = parseInt(localStorage.getItem("powermax3"));
	if( localStorage.monstermax3 )
		monstermax = parseInt(localStorage.getItem("monstermax3"));
	if( localStorage.selfupgrades3 )
		selfupgrades = parseInt(localStorage.getItem("selfupgrades3"));
	if( localStorage.heroupgrades3 )
		heroupgrades = parseInt(localStorage.getItem("heroupgrades3"));
	if( localStorage.selfimage3 )
		selfimage = localStorage.getItem("selfimage3");
	if ( localStorage.heroNum30 ){
		for (var pulled = 0; pulled < 12; pulled++) {
			heroNum[pulled] = parseInt(localStorage.getItem('heroNum3' + pulled.toString()));  
      heroCost[pulled] = parseInt(localStorage.getItem('heroCost3' + pulled.toString()));
      heroDam[pulled] = parseInt(localStorage.getItem('heroDam3' + pulled.toString())); 
		}
	}
}


// Original save variables:
// money, reputation, damage, powermax, monsterhp, heroes00