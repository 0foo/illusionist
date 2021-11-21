import * as Matter from 'matter-js';

export class PhysicsRender {
    constructor(width, height, engine){
        this.engine = engine

        // matter renderer
        this.render = Matter.Render.create({
            width: width,
            height: height,
            canvas: document.getElementById("physics-canvas"),
            background: "11111",
            //wireframeBackground: "transparent",
            engine: engine,
            wireframes:true,
            showAngleIndicator: true
            
        });
        Matter.Render.run(this.render);
        this.runner = Matter.Runner.create();
    }
    render_update(time){
        Matter.Runner.tick(this.runner, this.engine, time)
    }
}