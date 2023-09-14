let snowMode = false; // A flag to indicate whether to draw "Black_Panther" or "Black_Panther_Snow"
let switchTime = 5000; // Define the time (in milliseconds) at which you want to switch to "Black_Panther_Snow"
let startTime; // Variable to store the starting time



function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(15);

  pScope.load_image("cloud","png");
  
  pScope.load_image("snowy_Ground","png");

  pScope.load_image("snowfall","png");

  pScope.load_image("snow_MT","png");

  pScope.load_image("Snow_flake_0","png");
  pScope.load_image("Snow_flake_1","png");
  pScope.load_image("Snow_flake_2","png");

  pScope.load_image("sun","png");

  pScope.load_image_sequence("Black_Panther_snow", "png", 12);

  pScope.load_image_sequence("Black_Panther", "png", 12);
 
  startTime = millis(); // Record the start time

}

function setup_layers(pScope){

  new PLayer(null, 10, 140, 180, 200);  //lets us draw the whole circle background, ignoring the boundaries

  let MTImage = new PLayer(MT);
  MTImage.mode(RING);
  MTImage.set_boundary(0,0); 

  var layer1 = new PLayer(SnowFall);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 300, 1000);

  var Ball = new PLayer(SnowBall);
  Ball.mode( SWIRL(4));
  Ball.set_boundary( 300, 1000 );

  let OuterImage = new PLayer(snow);
  OuterImage.mode(RING);
  OuterImage.set_boundary(0,0);  

  var pantherSequence = new PLayer(panther);
  pantherSequence.mode(RING);
  pantherSequence.set_boundary(0, 0);


  var CenterImage1 = new PLayer(SnowFlake);
  CenterImage1.mode( SWIRL(2) );
  CenterImage1.set_boundary(0, 300);  

  var CenterImage2 = new PLayer(SnowFlake1);
  CenterImage2.mode( SWIRL(1) );
  CenterImage2.set_boundary(300,100);  

  var CenterImage3 = new PLayer(SnowFlake2);
  CenterImage3.mode( SWIRL(2) );
  CenterImage3.set_boundary(0,300);  

  var CenterImage0 = new PLayer(sunshine);
  CenterImage0.mode(SWIRL(1));
  CenterImage0.set_boundary(0, 0); 

  var CenterImage = new PLayer(heart);
  CenterImage.mode(RING);
  CenterImage.set_boundary(0, 0); 
}

function heart(x, y, animation, pScope){
  scale(1.5);
  pScope.draw_image("cloud",30,200);
}


function SnowFlake(x, y, animation, pScope){
  scale(0.5);
  pScope.draw_image("Snow_flake_0", 0, 0, animation.frame);
}

function SnowFlake1(x, y, animation, pScope){
  scale(0.5);
  pScope.draw_image("Snow_flake_1", 0, 0, animation.frame);
}

function SnowFlake2(x, y, animation, pScope){
  scale(0.5);
  pScope.draw_image("Snow_flake_1", 0, 600, animation.frame);
}


function sunshine(x, y, animation,  pScope){
  scale(0.5);
  pScope.draw_image("sun",0,0);
}

function panther(x,y,animation,pScope){
  scale(1);
  if (!snowMode) {
    pScope.draw_image_from_sequence("Black_Panther", 175, 850, animation.frame);
  } else {
    pScope.draw_image_from_sequence("Black_Panther_snow", 175, 850, animation.frame);
  }

   //Check if it's time to switch to "Black_Panther_Snow"
  if (!snowMode && millis() - startTime >= switchTime) {
    snowMode = true; // Set the flag to switch to "Black_Panther_Snow"
  }

}



function snow(x,y,animation,pScope){
  scale(0.24);
  pScope.draw_image("snowy_Ground",0,4100);
}


function MT(x,y,animation,pScope){
  scale(0.3);
  pScope.draw_image("snow_MT",700,2700);
}

function SnowFall(x, y, animation, pScope){
  scale(1);
  pScope.draw_image("snowfall",500,250);
  scale(animation.frame*2);
}


function SnowBall(x, y, animation, pScope){
  
  ellipse(0,0,25,25); // draw head
  fill(30);
}

