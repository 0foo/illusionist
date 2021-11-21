import { AnimatedSprite} from "@pixi/sprite-animated"; 
import { Sprite } from '@pixi/sprite';
import { Rectangle } from "@pixi/math";
import { Bodies, Body,Vector } from "matter-js"
import { Manager } from "../Machinery/Manager";

export class Laser extends Sprite {

    constructor(position, angle, shot_speed=2){

        super(Manager.loaderHelper.fetch('laser_01'))
        
        let translated_pos = Manager.physics.translate_by_angle(position, angle, 50)

        Manager.physics.initialize_pixi_sprite( this, {
            x: translated_pos.x, 
            y: translated_pos.y,
            scale: .2,
            angle: angle
        })
        

        this.matter_physics_body.frictionAir = 0
        this.shot_speed = shot_speed


        Manager.physics.apply_impulse(
            this.matter_physics_body,
            position, 
            angle,
            shot_speed
        )

    }


    update(){
        Manager.physics.update_pixi_sprite(this)
    }

}