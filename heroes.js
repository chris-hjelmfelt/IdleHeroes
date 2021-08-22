/* -----------------------------------------------------------------------------
// Functions related to Heroes
// setupHeroes() displays the heroes available
// heroclick() is where a hero boost is purchased
// ---------------------------------------------------------------------------*/

// Hero Arrays
var heroNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var heroDam = [1,5,25,125,500,2500,12500,50000,250000,1250000,5000000,25000000];
var heroCost = [10,100,1000,10000,100000,1000000,10000000,100000000,1000000000,10000000000,100000000000,1000000000000]

// Display certain heroes depending on the players reputation level
function setupHeroes() {
	// Hero 1 always shows
	displayHeroElements(1);	
	
	if (reputation > 200) { // Hero 2
		document.getElementById("hero2").innerText = "Hal the Barbarian";
		displayHeroElements(2);	
	}
	if (reputation > 1000) {			
			document.getElementById("hero3").innerText = "Anders Hardiron";
			displayHeroElements(3);	
	}
	if (reputation > 10000) {
			document.getElementById("hero4").innerText = "Analis the Soldier";
			displayHeroElements(4);	
	}
	if (reputation > 100000) {
			document.getElementById("hero5").innerText = "Theresa Hamilton";
			displayHeroElements(5);	
	}
	if (reputation > 1000000) {
			document.getElementById("hero6").innerText = "Luna Moraith";
			displayHeroElements(6);	
	}
	if (reputation > 10000000) {
			document.getElementById("hero7").innerText = "Hamand the Riven";
			displayHeroElements(7);	
	}
	if (reputation > 100000000) {
			document.getElementById("hero8").innerText = "Koralee Anand";
			displayHeroElements(8);	
	}
	if (reputation > 1000000000) {
			document.getElementById("hero9").innerText = "Brogan Fairleaf";
			displayHeroElements(9);	
	}
	if (reputation > 10000000000) {
			document.getElementById("hero10").innerText = "Bagatha ";
			displayHeroElements(10);	
	}
	if (reputation > 100000000000) {
			document.getElementById("hero11").innerText = "Yio";
			displayHeroElements(11);	
	}
	if (reputation > 1000000000000) {
			document.getElementById("hero12").innerText = "Terin, Prince of Darkhold";
			displayHeroElements(12);	
	}			
}

// Elements to display for a given hero
function displayHeroElements(i){
	document.getElementById(i).style = "display: block";
	document.getElementById("b" + i).style = "visibility:visible";
	document.getElementById("h" + i).style = "visibility:visible";
	document.getElementById("um" + i).style = "visibility:visible";			
	document.getElementById("cost" + i).style = "visibility:visible";
	document.getElementById("pow" + i).style = "visibility:visible";
  document.getElementById("hbut" + i).style = "display:inline";
	document.getElementById("story" + i).style = "display:inline";
	document.getElementById("rep" + i).style = "visibility:hidden";
}

// If the user has enough money it buys a power boost for the selected hero
function heroclick(i) {
	if (money >= heroCost[i]){
		money = money - heroCost[i];
		heroCost[i] = heroCost[i] + Math.ceil(heroCost[i]/10);
		heroNum[i] = heroNum[i] + 1;
		printall();		
	}
}

// Opens the hero story box
function openStory(i) {
	document.getElementById("story").style.height = "60%";
	switch(i){
		case 1:	
			document.getElementById("printStory").innerText = "John left his 6 siblings and rural home to seek fame and fortune in the wider world. He has little training but he's a willing partner in the fight against the creatures that prowl the wild places. He fights with a simple sword and has the advantage a strong constitution from years of field labor.";
			break;
		case 2:	
			document.getElementById("printStory").innerText = "Hal is a mid level street fighter. He makes some money in the underground fight rings. Given some time he might be a top notch brawler but he's still pretty young and has a lot to learn. He can fight with a knife or a club if necessary. He is interested in meeting new people, seeing other cultures and learning new skills. While he's not a the best fighter he has a lot of charisma that wins people over and makes it easy for him to make friends and gather information.";
			break;
		case 3:	
			document.getElementById("printStory").innerText = "Anders was a city guard. He got tired of manning the gates every day and decided it was time to travel and make some better money. He has joined your team to live a more exciting life. He has been taught basic combat with sword and shield. He has simple armor and has spent a couple of years handling the day to day guard duties of a small city - mostly drunks and theives but there were a couple of raids during his time.";
			break;
		case 4:	
			document.getElementById("printStory").innerText = "Analis fought in a few battles between the city states of her home region before deciding that her life and her sword were ment for something more. Fighting over territoy was stupid compared to fighting the vicious monsters that plagued the people near the wilds. She had heard of zombies, giant snakes, and werewolves that would eat hunters and travelers who dared travel outside of the settled and guarded areas of human civilization. She has seen serious combat and is well trained with sword and sheild as well as with spears. Spear and shield is her prefered combination and she carries several javelins that she can throw when an enemy is not in melee range.";
			break;
		case 5:	
			document.getElementById("printStory").innerText = "Theresa is a mother whos children were slaughtered by monsters. She has devoted her life to destroying monsters. She has learned to fight with several weapons but her favorite is a pair of twin swords. She has faced a number of monsters and can handle herself better than the average fighter. She vows that as long as she lives she will fight for children and the safety of all good creatures.";
			break;
		case 6:	
			document.getElementById("printStory").innerText = "Luna is an archer raised in the wilds, she has grown up fighting monsters from childhood. When she was 6 years old, she and the family dog killed a python. She was trained in wilderness survival and has become an excellent shoot with a bow. She carries a bow that was handed down to her by her aunt. It is named Aerulia, which means \"the unseen blow\". It is enchanted to hit even when a target is partially hidden or the person firing the bow can't stop to aim properly.";
			break;
		case 7:	
			document.getElementById("printStory").innerText = "Hamand is a desert nomad, his family was killed by bandits when he was a child and he was found by the nomads and raised among them. They taught him to move unseen, hide in the most barren of places, become invisible and live in the harshest of environments. He left them when he was 14 and joined a group of mercenaries fighting the same clan of bandits who once claimed his family. The mercenaries taught him to kill in a hundred different ways. He soon learned that revenge did not take away the feeling of loss and anger he felt, but he was no longer the helpless boy who could do nothing but watch his family murdered. He fights mostly with throwing knives and a machete. He moves like the wind and even his companions are unnerved by how he appears and disappears seemingly from nowhere, even on an empty flat plain.";
			break;
		case 8:	
			document.getElementById("printStory").innerText = "Koralee grew up in a nice middle class home in a midsize city near the sea. She was expected to marry well, settle down and raise a family but Koralee had other plans. She had always dreamed of being a hero. She had no idea how to accomplish such a feat however. The road from ordinary girl to monster fighter is not an obvious one. Her parents forbid her from becoming a soldier or learning to fight. She joined the temple of the dawn in order to escape marriage but that was a long way from the life she desired. However, she learned that their was a secret order that recruited from the temple. They would teach their recruits how to call upon the goddess of the dawn to grant magic. They also taught fighting skills and how to research lost lore from ancient sources. Koralee eagerly joined and has become a powerful magic user and can speak many languages, including some of those spoken by monsters. She can use runes and glypes to ward monsters from certain places, and trap them in others.";
			break;
		case 9:	
			document.getElementById("printStory").innerText = "Brogan is one of the lost fairy people. Thought to be just a myth he hides his heritage, looking like a particulary small preteen boy with strange eyes and faintly bluish skin. He dyes his hair and wears a cap to hide his ears. He has power to ensnare minds, make people fall in love with him, create illusions, cause some creatures to sleep or be dazzled by light. He can fly, fight, and make make himself partially invisible. He has escaped from the hidden fairy kingdom both in search of new adventure and because he gets along with humans better than other fairies. Despite being playful and adventurous, he dislikes pranks at the expense of other people and prefers playing pranks on bad people. The other fairies made fun of him for being too softhearted.";
			break;
		case 10:	
			document.getElementById("printStory").innerText = "Bagatha is a witch elder from the deep mountains, Bagatha is an unknown and strange addition to your group. She can sap the strength from her enemies and cause them fear. She seems barely to breath, standing unmoving as the fight rages around her, but the very wind seems to obey her silent command. When the party camps at night the weather does not touch them, the wild animals either stay far away or come to the edge of camp to visit her. Food of strange but delicious variety appears over the fire, warm bath water fills the wash basin. Despite her frightening appearance Bagatha enjoys the comfort of a well furnished camp and every member of the party benefits from it. Her only weapon is a heavy staff carved with strange symbols which she rarely uses. She almost never speaks to anyone, but when she does it is clear that she has been listening closely and that she is very wise.";
			break;
		case 11:	
			document.getElementById("printStory").innerText = "Yio was sent to train at the temple when he was just a little boy. He has trained under the master monks for many years. He can use his internal energy to crush the life force of his enemies. He can roll with any blow to avoid most injuries. He was sent by his masters to learn the ways of fighting against the most dangerous adversaries he can find. Only in facing the monsters he fears most can he learn to achieve true balance and inner peace. Although he knows that it will take a lifetime to achieve the title of \"master\" he is already considered a tremendously powerful fighter by most who watch him do battle with the raging hordes of vile creatures that inhabit the deepest of foul places. He shys away from no fight, he never seems to lose his cool, and he is always ready to lend a hand to those in ne";
			break;
		case 12:	
			document.getElementById("printStory").innerText = "Terin was once a seeker of great power who tried to sell his soul for immortality and endless riches. Fortunately he only half succeeded. He was forced into slavery to a demon for the rest of his human lifespan (70 years) and then the contract was fulfilled and he was left undead, immune to most types of attack, and with powerful arcane magic. He was also given a kingdom and riches, though that kingdom is a total wasteland and there are no humans within his domain. He destroyed the land and every living thing there during his time of slavery to the demon. He is haunted by his past deeds but he is filled with gratitude at having escaped the deal without losing his soul. In penance for the evil he did during his time serving the demon he fights the creatures of evil. ";
			break;
		case 13:	
			document.getElementById("printStory").innerText = "Your party of heroes has become legendary. Erith, a demi-Goddess, has joined with you to destroy the very most dangerous monsters, those who can threaten all of civilization. She is the daughter of a humble blacksmith and a godess of fire and light. It is her calling to vanquish all things that threaten the weak and helpless of the world. Animals are drawn to her gentle, powerful force of life. Monsters fear when they feel her coming. She burns through them with the fire of the stars themselves. With her by your side there is nothing you can't destroy.";
		default:
		// do nothing
	}
}

// Closes the hero story box
function closeStory() {
    document.getElementById("story").style.height = "0%";
}