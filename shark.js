var gamewidth = 640;			//The width of the game
var gameheight = 480;			//The height of the game
var background;
var sharkspeed = 3;
var sharkdirection = 3;
var seaspeed = 1;
var skyspeed = seaspeed / 2;
var seasound;


//DO NOT CHANGE
var game = new Phaser.Game(gamewidth, gameheight, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	game.load.audio('seasound','sea.wav');
	game.load.image('sea', 'sea.png');
	game.load.image('sky', 'sky.png');
	game.load.image('shark', 'shark.png');
	game.load.image('seabottom', 'seabottom.png');

}

function create() {
	//Play a sea sound
	seasound = game.add.audio('seasound');
	seasound.loop = true;
	seasound.play();
	//Show the sky
	sky = game.add.sprite(0,0,'sky');
	sky.width = gamewidth + 100;
	sky.height = 130;
	//show the sea
	sea = game.add.sprite(0,130,'sea');
	sea.width = gamewidth + 200;
	sea.height = 480-130;
	//show the shark
	shark = game.add.sprite(0,255,'shark');
	shark.width = 200;
	shark.height = 100;
	shark.anchor.setTo(0.5,0.5);
	//show the seabottom
	seabottom = game.add.sprite(0,260,'seabottom');
	seabottom.width = gamewidth + 200;
	seabottom.height = 130;
}

function update() {
	if(sharkdirection == 3){
		shark.x +=sharkspeed;
		sea.x -=seaspeed;
		seabottom.x -=seaspeed;
		sky.x -=skyspeed;
	}
		if(sharkdirection ==9){
			shark.x -=sharkspeed;
			sea.x +=seaspeed;
			seabottom.x +=seaspeed;
			sky.x +=skyspeed;
	}
	
	if(shark.x > 580){
		sharkdirection = 9;
		shark.scale.x *= -1;
	}
	if(shark.x < 20){
		sharkdirection = 3;
		shark.scale.x *= -1;
	}
	
	
}
