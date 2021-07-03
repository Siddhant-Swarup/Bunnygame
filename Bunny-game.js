
function preload() {
    crt = loadImage("images/carrot.png");
    bg = loadImage("images/bg.png");
    snake1 = loadImage("images/snake.png");
    snake2 = loadImage("images/snake2.png");
    rabbit = loadImage("images/bunny.png");

}

function setup() {

    createCanvas(1280, 600);


    bunny = createSprite(20, 300, 20, 20);
    bunny.addImage(rabbit);
    bunny.scale = 0.1;

    carrot = createSprite(1200, 300, 40, 40);
    carrot.addImage(crt);
    carrot.scale = 0.1;

    edges = createEdgeSprites();
    create_obstacle_property();


}

function draw() {
    background(bg);
    obstacle_velocity();

    textSize(50);//Bunny Controls
    if (keyDown("up")) {
        bunny.y = bunny.y - 4;
    }
    if (keyDown("down")) {
        bunny.y = bunny.y + 4;
    }
    if (keyDown("left")) {
        bunny.x = bunny.x - 4;
    }
    if (keyDown("right")) {
        bunny.x = bunny.x + 4;
    }


    //Obstacles When they touch Bunny
    if (bunny.isTouching(obs1)) {
        text("You Lose", 600, 300);
        bunny.x = 20;
        bunny.y = 300;
    }
    if (bunny.isTouching(obs2)) {
        text("You Lose", 600, 300);
        bunny.x = 20;
        bunny.y = 300;
    }
    if (bunny.isTouching(obs3)) {
        text("You Lose", 600, 300);
        bunny.x = 20;
        bunny.y = 300;
    }
    if (bunny.isTouching(obs4)) {
        text("You Lose", 600, 300);
        bunny.x = 20;
        bunny.y = 300;
    }
    if (bunny.isTouching(obs5)) {
        text("You Lose", 600, 300);
        bunny.x = 20;
        bunny.y = 300;
    }

   
    //Target 
    if (bunny.isTouching(carrot)) {
        text("You Win", 600, 300);
        bunny.x = 20;
        bunny.y = 300;
    }

    drawSprites();
}


// Create the Obstacles for the Bunny.
function create_obstacle_property() {
    obs1 = createSprite(150, 300, 15, 30);
    obs1.velocityY = random(10, 15);
    obs1.shapeColor = "red";
    obs1.addImage(snake1);
    obs1.scale = 0.08;


    obs2 = createSprite(350, 300, 15, 30);
    obs2.velocityY = random(-10, -15);
    obs2.shapeColor = "red";
    obs2.addImage(snake2);
    obs2.scale = 0.05;

    obs3 = createSprite(600, 300, 5, 50);
    obs3.velocityY = -15;
    obs3.shapeColor = "yellow";
    obs3.addImage(snake1);
    obs3.scale = 0.08;

    obs4 = createSprite(800, 300, 15, 30);
    obs4.velocityY = 15;
    obs4.shapeColor = "red";
    obs4.addImage(snake2);
    obs4.scale = 0.05;

    obs5 = createSprite(1000, 300, 5, 50);
    obs5.velocityY = -15;
    obs5.shapeColor = "yellow";
    obs5.addImage(snake1);
    obs5.scale = 0.08;

    


}


//Obstacles Velocity
function obstacle_velocity() {
    edges = createEdgeSprites();


    obs1.bounceOff(edges[0]);
    obs1.bounceOff(edges[1]);
    obs1.bounceOff(edges[2]);
    obs1.bounceOff(edges[3]);

    obs2.bounceOff(edges[0]);
    obs2.bounceOff(edges[1]);
    obs2.bounceOff(edges[2]);
    obs2.bounceOff(edges[3]);


    obs3.bounceOff(edges[0]);
    obs3.bounceOff(edges[1]);
    obs3.bounceOff(edges[2]);
    obs3.bounceOff(edges[3]);

    obs4.bounceOff(edges[0]);
    obs4.bounceOff(edges[1]);
    obs4.bounceOff(edges[2]);
    obs4.bounceOff(edges[3]);

    obs5.bounceOff(edges[0]);
    obs5.bounceOff(edges[1]);
    obs5.bounceOff(edges[2]);
    obs5.bounceOff(edges[3]);

    

}


