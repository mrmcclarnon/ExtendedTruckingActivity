//https://replit.com/@mrmcclarnon/AssessmentExtended#script.js
var gamewidth = 1280;			//The width of the game
var gameheight = 720;			//The height of the game
var track;
var truck;
var truckdirection = 3;
var truckspeed = 1;
var akey;
var skey;
var dkey;
var wkey;

var greentruck;
var greentruckdirection = 3;
var greentruckspeed = 1;
var upkey;
var downkey;
var leftkey;
var rightkey;


//DO NOT CHANGE
var game = new Phaser.Game(gamewidth, gameheight, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	game.load.image('track', 'track3.jpg');
	game.load.image('truck', 'redtrucktrans.png');
	game.load.image('greentruck', 'greentrucktrans.png');
}

function create() {
	//Show the track
	track = game.add.sprite(0,0,'track');
	track.width = gamewidth;
	track.height = gameheight;
	//Show the truck
	truck = game.add.sprite(100,50,'truck');
	truck.width = 40;
	truck.height = 60;
	truck.anchor.setTo(0.5,0.5);
	truck.angle = 180+90;
	//Set the keys to work
	cursors = game.input.keyboard.createCursorKeys();
	//Left key
	akey = game.input.keyboard.addKey(Phaser.Keyboard.A);
	//Right key
	dkey = game.input.keyboard.addKey(Phaser.Keyboard.D);
	//Up key
	wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
	//Down key
	skey = game.input.keyboard.addKey(Phaser.Keyboard.S);
	
	//Show the green truck
	greentruck = game.add.sprite(100,300,'greentruck');
	greentruck.width = 40;
	greentruck.height = 60;
	greentruck.anchor.setTo(0.5,0.5);
	greentruck.angle = 180+90;
	//Arrow left
	leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	//Arrow right
	rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	//Arrow up
	upkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	//Arrow down
	downkey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
 
}

function update() {
	if (dkey.isDown){
		truckdirection = 3;
		truck.x +=truckspeed;
  }
	if (akey.isDown){
		truckdirection = 9;
		truck.x -=truckspeed;
  }
	if (wkey.isDown){
		truckdirection = 12;
		truck.y -=truckspeed;
  }
	if (skey.isDown){
		truckdirection =6;
		truck.y +=truckspeed;
  }
	
	if(truckdirection == 3){
			truck.angle=90+90+90;		
	}
	if(truckdirection == 9){
			truck.angle=90;		
	}
	if(truckdirection == 12){
			truck.angle=90+90;		
	}
	if(truckdirection == 6){
			truck.angle=90+90+90+90;		
	}

	
	if (rightkey.isDown){
		greentruckdirection = 3;
		greentruck.x +=greentruckspeed;
  }
	if (leftkey.isDown){
		greentruckdirection = 9;
		greentruck.x -=greentruckspeed;
  }
	if (upkey.isDown){
		greentruckdirection = 12;
		greentruck.y -=greentruckspeed;
  }
	if (downkey.isDown){
		greentruckdirection =6;
		greentruck.y +=greentruckspeed;
  }
	
	if(greentruckdirection == 3){
			greentruck.angle=90+90+90;		
	}
	if(greentruckdirection == 9){
			greentruck.angle=90;		
	}
	if(greentruckdirection == 12){
			greentruck.angle=90+90;		
	}
	if(greentruckdirection == 6){
			greentruck.angle=90+90+90+90;		
	}
	

}
