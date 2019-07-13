// Array for monster images
var imgArray = new Array();
var monsters = 5;

for (var i = 0; i < monsters; i++){
	imgArray[i] = new Image();
	imgArray[i].src = 'monsters/monster' + (i+1) + '.jpg';
}

