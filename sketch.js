var movingBox, blueBox, orangeBox, purpleBox, greenBox;
var canvas, sound, edges;

function preload(){
    sound = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    movingBox = createSprite(random(20,750),15,25,25);
    movingBox.shapeColor = "white";
    movingBox.velocityX = 4;
    movingBox.velocityY = 5;

    blueBox = createSprite(75,580,170,40);
    blueBox.shapeColor = "blue";

    orangeBox = createSprite(280,580,170,40);
    orangeBox.shapeColor = "orange";

    purpleBox = createSprite(500,580,170,40);
    purpleBox.shapeColor = "purple";

    greenBox = createSprite(715,580,170,40);
    greenBox.shapeColor = "green";
}

function draw() {
    background("grey");
    edges = createEdgeSprites();
    movingBox.bounceOff(edges);

    if(blueBox.isTouching(movingBox) && movingBox.bounceOff(blueBox)) {
        movingBox.shapeColor = "blue";
        sound.play();
    }
    
    if(orangeBox.isTouching(movingBox) && movingBox.bounceOff(orangeBox)) {
        movingBox.shapeColor = "orange";
        movingBox.velocityX = 0;
        movingBox.velocityY = 0;
        sound.stop();
    }
    
    if(purpleBox.isTouching(movingBox) && movingBox.bounceOff(purpleBox)) {
        movingBox.shapeColor = "purple";
        sound.play();
    }

    if(greenBox.isTouching(movingBox) && movingBox.bounceOff(greenBox)) {
        movingBox.shapeColor = "green";
        sound.play();
    }

    drawSprites();
}
