var gamewidth = 640;			//The width of the game
var gameheight = 480;			//The height of the game
var background;


//DO NOT CHANGE
var game = new Phaser.Game(gamewidth, gameheight, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	game.load.image('background', 'starbackground.jpg');
	game.load.image('earth', 'earth.png');
	game.load.image('mars', 'mars.png');
	game.load.image('spaceship', 'spaceship.png');
}

function create() {
	background = game.add.sprite(0,0,'background');
	background.width = gamewidth;
  background.height = gameheight; 

	mars = game.add.sprite(500,200,'mars');
	mars.width = 200;
	mars.height = 200;
	mars.anchor.setTo(0.5,0.5);	
	
	spaceship = game.add.sprite(0,250,'spaceship');
	spaceship.width = 100;
	spaceship.height = 100;
	spaceship.anchor.setTo(0.5,0.5);
	
	earth = game.add.sprite(100,300,'earth');
	earth.width = 300;
	earth.height = 300;
	earth.anchor.setTo(0.5,0.5);	

}

function update() {
	earth.angle +=1;
	mars.angle -=0.5;
	spaceship.x +=2;
}
