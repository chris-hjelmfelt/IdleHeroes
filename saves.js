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
	localStorage.setItem("money2", money);
	localStorage.setItem("reputation2", reputation);
	localStorage.setItem("damage2", damage);
	localStorage.setItem("powermax2", powermax);
	localStorage.setItem("monstermax", monstermax);
	localStorage.setItem("selfupgrades", selfupgrades);
	localStorage.setItem("heroupgrades", heroupgrades);
	localStorage.setItem("selfimage", selfimage);
	for (var saved = 0; saved < 12; saved++){
		localStorage.setItem('heroes_1' + saved, allheroes[saved].quantity);
		localStorage.setItem('heroes_2' + saved, allheroes[saved].profit);
		localStorage.setItem('heroes_3' + saved, allheroes[saved].cost);
	}
}


// Get saved data
function getsaves() {
	if( localStorage.money2 )	
		money = parseInt(localStorage.getItem("money2"));
	if( localStorage.reputation2 )
		reputation = parseInt(localStorage.getItem("reputation2"));
	if( localStorage.damage2 )
		damage = parseInt(localStorage.getItem("damage2"));
	if( localStorage.powermax2 )
		powermax = parseInt(localStorage.getItem("powermax2"));
	if( localStorage.monstermax )
		monstermax = parseInt(localStorage.getItem("monstermax"));
	if( localStorage.selfupgrades )
		selfupgrades = parseInt(localStorage.getItem("selfupgrades"));
	if( localStorage.heroupgrades )
		heroupgrades = parseInt(localStorage.getItem("heroupgrades"));
	if( localStorage.selfimage )
		selfimage = localStorage.getItem("selfimage");
	if (localStorage.heroes_10 ){
		for (var pulled = 0; pulled < 12; pulled++) {
			allheroes[pulled].quantity = parseInt(localStorage.getItem('heroes_1' + pulled));
			allheroes[pulled].profit = parseInt(localStorage.getItem('heroes_2' + pulled));
			allheroes[pulled].cost = parseInt(localStorage.getItem('heroes_3' + pulled));
		}
	}
}


// Original save variables:
// money, reputation, damage, powermax, monsterhp, heroes00