import * as Matter from 'matter-js';
// import Sprite from './GameObjects/Sprite'


console.log('hello world')

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
}); 

let body = Matter.Body.create({
    
})

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
boxA.testSprite = {
    x: "test"
}
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground, body]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);