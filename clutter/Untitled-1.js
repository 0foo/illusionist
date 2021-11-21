        // Matter init
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite;

        this.engine = Engine.create();
        this.engine.gravity.y = 15;
        this.engine.gravity.x = 5;
    


        // // load the gom in the current scene
        //Manager.currentScene.loadGOM()

        // load all asset manifests
        // for (var key of Object.keys(Manager.GOM.classes)) {
        //     if(Manager.GOM.classes[key].asset_manifest()){
        //         let manifest = Manager.GOM.classes[key].asset_manifest()
        //         await Manager.loaderHelper.load(manifest)
        //     }
        // }

        
     // Game Object Manager = GOM
        //Manager.GOM = new GameObjectManager()


{
	view: document.getElementById("pixi-canvas"),
	resolution: window.devicePixelRatio || 1,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
}


            // check object collisions
            // this.detectCollisions(the_object, key)

            // check the object bounds
            this.checkBounds(the_object)

            // set to processed 
            // this.keysProcessed.add(key)
        }
       // this.keysProcessed = new Set()



	   //x, y, width, height
var boxA = Bodies.rectangle(0, 0, 80, 80);
var ground = Bodies.rectangle(0, 480, 700, 10, { isStatic: true });
Composite.add(engine.world, [boxA, ground]);






let { min, max } = boxA.bounds
boxA.width = max.x - min.x
boxA.height = max.y - min.y
let square = Line.get_square({x: boxA.position.x, y: boxA.position.y}, boxA.width)
container.addChild(square);


app.ticker.add(update) // also can use this apparently(haven't tried): app.ticker.deltaMS()
let new_sprite = new PIXI.Sprite.from("ship_01.png")
console.log(new_sprite.width)
// new_sprite.height = new_sprite.height * .1;
// new_sprite.width= new_sprite.width * .1;

container.addChild(new_sprite);
console.log(new_sprite.width, new_sprite.height)

function update(time) {
    //app.render()
    //console.log("test")
    Engine.update(engine, time)
    //console.log({x: boxA.position.x, y: boxA.position.y})
    square.moveXY({x: boxA.position.x, y: boxA.position.y})

    
    
 //square.moveme({x:0, y:1})
 //Runner.tick(runner, engine, time)
 //console.log(boxA.position.x)
 //console.log(boxA.position.x)
}