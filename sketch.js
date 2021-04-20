const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

var ground;

var division = [];
var plinko = [];
var partical = [];

var divheight = 300;

function setup(){
    createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,550,400,10);
    
    for(var i = 0; i<= width ; i+=80){
        division.push(new Division(i,405,10,divheight));
    }
    
    for(var k = 40; k<=width; k+=50){
        plinko.push(new Plinko(k,75));
    }
    
    for(var m = 15; m<=width; m+=50){
        plinko.push(new Plinko(m,125));
    }
    
    for(var o = 40; o<=width; o+=50){
        plinko.push(new Plinko(o,175));
    }
    
    for(var q = 15; q<=width; q+=50){
        plinko.push(new Plinko(q,225));
    }
    
}

function draw(){
    background(51);
    Engine.update(engine);

    text(mouseX+","+mouseY,mouseX,mouseY);

    ground.display();
    spawnPartical();

    
    for(var j = 0; j<division.length; j++){
        division[j].display();
    }

    
    
    for(var l = 0; l<plinko.length; l++){
        plinko[l].display();
    }
    
    
    for(var n = 0; n<plinko.length; n++){
        plinko[n].display();
    }

    
    for(var p = 0; p<plinko.length; p++){
        plinko[p].display();
    }
    
    
    for(var r = 0; r<plinko.length; r++){
        plinko[r].display();
    }
}

function spawnPartical(){
    if(frameCount%10 === 0){
        partical.push(new Partical(random(13,330),10))
    }
    for(var r = 0; r<partical.length; r++){
        partical[r].display();
    }
}
