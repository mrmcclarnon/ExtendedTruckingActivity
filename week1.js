var gamewidth = 640;			//The width of the game
var gameheight = 480;			//The height of the game
var background;


//DO NOT CHANGE
var game = new Phaser.Game(gamewidth, gameheight, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	//game.load.image('background', 'backgroundnumbers.jpg');
	game.load.image('truck', 'truck.png');
	game.load.image('wheel', 'wheel.png');
	game.load.image('background', 'street.png');
}

function create() {
	background = game.add.sprite(0,0,'background');
	background.width = gamewidth;
  background.height = gameheight; 
	truck = game.add.sprite(200,300,'truck');
	truck.width = 400;
	truck.height = 200;
	truck.anchor.setTo(0.5,0.5);	
	wheel = game.add.sprite(330,370,'wheel');
	wheel.width = 40;
	wheel.height = wheel.width;
	wheel.anchor.setTo(0.5,0.5);
	wheel2 = game.add.sprite(107,370,'wheel');
	wheel2.width = 40;
	wheel2.height = wheel2.width;
	wheel2.anchor.setTo(0.5,0.5);
}

function update() {
	wheel.angle +=5;
	wheel2.angle +=5;
	truck.x +=2;
	wheel.x +=2;
	wheel2.x +=2;
}
