   /* 
        * Translate bodies to match PIXI co-ordinates

        * properties: https://brm.io/matter-js/docs/classes/Body.html#properties
        * translate to match Pixi Coordinates: 
            * https://github.com/liabru/matter-js/issues/211
            * https://github.com/liabru/matter-js/issues/186#issuecomment-167688714
            * https://github.com/liabru/matter-js/issues/876
            * another way is to translate pixi to match matter co-ord's: 
                * https://codepen.io/celsowhite/pen/XWbEzpx
    */

import * as Matter from 'matter-js';
import { PhysicsRender } from './PhysicsRender';

export class Physics {
    constructor(){

        // create the engine
        this.engine = Matter.Engine.create()
        this.engine.gravity.y = 0
        this.engine.gravity.x = 0            

        this.width = 640
        this.height = 480
        this.render = new PhysicsRender(this.width, this.height, this.engine)

        //constants
        this.RADIAN_TO_DEGREE=57.2958

    }
    
    update(time){
        Matter.Engine.update(this.engine, time)
        this.render.render_update(time)
    }

    add_to_world(body_item_or_array){
        Matter.Composite.add(this.engine.world, body_item_or_array)
    }

    new_rectangle_body(x, y, width, height, properties=false){
        if(properties){
            var new_body = Matter.Bodies.rectangle(x, y, width, height, properties)
        } else {
            var new_body = Matter.Bodies.rectangle(x, y, width, height)
        }
        return new_body
    }

    top_left_of(body){
        return Matter.Vector.sub(body.bounds.min, body.position)
    }

    add_new_rectangle_body(x, y, width, height, properties=false){
        let the_body = this.new_rectangle_body(x,y,width,height,properties=false)
        this.add_to_world(the_body)
        return the_body
    }

    // apply_impulse(body, force){
    //     Matter.Body.applyForce(body, body.position,  {
    //         x: Math.cos(body.angle) * force,
    //         y: Math.sin(body.angle) * force
    //     })
    // }

    apply_impulse(body, position, angle, force ){
        Matter.Body.applyForce(body, position,  {
            x: Math.cos(angle) * force,
            y: Math.sin(angle) * force
        })
    }

    rotate(body, direction){
        Matter.Body.rotate(body, direction)
    }

    initialize_pixi_sprite(sprite, config={}){
        let init = {
            x: 0,
            y: 0,
            scale: 1,
            angle: 0
        }

        if('scale' in config){
            sprite.height = sprite.height * config.scale;
            sprite.width = sprite.width * config.scale;
        }

        if('x' in config){ init.x = config.x }
        if('y' in config){ init.y = config.y }
        if('angle' in config){ init.angle = config.angle }


        // setup pixi/matter sync
        sprite.anchor={x:.5, y:.5} //needed to match matter JS physics engine physics center of mass
        sprite.matter_physics_body = this.add_new_rectangle_body(init.x, init.y, sprite.width, sprite.height)
        Matter.Body.setAngle(sprite.matter_physics_body, init.angle)
        sprite.position=sprite.matter_physics_body.position
        sprite.rotation=sprite.matter_physics_body.angle
    
    }
    // updates the pixi sprite location/rotation, 
    // all measurements are from the center of the physics body
    update_pixi_sprite(pixi_sprite){
        let matter_physics_body = pixi_sprite.matter_physics_body
        pixi_sprite.position = matter_physics_body.position
        pixi_sprite.x = matter_physics_body.position.x;
        pixi_sprite.y = matter_physics_body.position.y;
        pixi_sprite.rotation= matter_physics_body.angle;

        // make the angle not go beyond +/-360 degrees(6.2 blah blah radians)
        if( Math.abs(pixi_sprite.matter_physics_body.angle) >= 6.28319){
            Matter.Body.setAngle(pixi_sprite.matter_physics_body, 0)
        }  
    }

    translate_by_angle(position, angle, distance){
        let out = {
            x: (Math.cos(angle) * distance) + position.x ,
            y: (Math.sin(angle) * distance) + position.y
        }

        return out
    }

    // https://stackoverflow.com/questions/32683832/javascript-matter-js-disable-collision-for-one-body
    disable_collisions(body){
        // turns off collisions
        body.collisionFilter = {
            'group': -1,
            'category': 2,
            'mask': 0,
        };
    }
    

    // TBI
    resize_body(){
        //TBI
    }

    // TBI
    test_scene(){
        // let the_body_1 = this.add_new_rectangle_body(600, 100, 40, 40, { isStatic: true })
        // let the_body = this.add_new_rectangle_body(100,100,100,100)
    }

    // TBI
    new_from_vertices_body(){
        // let vertices = [
        //     {x : 0 , y : 0},
        //     {x : 40 , y : 0},
        //     {x : 40 , y : 40},
        //     {x: 0, y: 40}
        // ]

        //var line = Matter.Bodies.fromVertices(600, 100, vertices, {isStatic : true})
    }
}