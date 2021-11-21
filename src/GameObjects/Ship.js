import { AnimatedSprite} from "@pixi/sprite-animated"; 
import { Sprite } from '@pixi/sprite';
import { Rectangle } from "@pixi/math";
import Matter, { Bodies, Body,Vector } from "matter-js"
import { Manager } from "../Machinery/Manager";
import { Keyboard } from "../Machinery/Keyboard";
import { LaserGun } from "./LaserGun";


export class Ship extends Sprite {

    constructor(config={}){
        super(Manager.loaderHelper.fetch('ship_01'))

        Manager.physics.initialize_pixi_sprite( this, {
            x: Manager.pixi.screen.width / 2, 
            y: Manager.pixi.screen.height / 2,
            scale: .1
        })        

        this.gun = new LaserGun(this.matter_physics_body)
        
    }

    update(ticker_conf){
        this.keys(ticker_conf)
        Manager.physics.update_pixi_sprite(this)
        console.log(this.matter_physics_body.angle)
        
    }

    time_window(){
        window_top = this.milliseconds_elapsed + 500
        if(window_top > 1000){
            window_bottom = window_top - 1000
        }else{
            window_bottom = this.milliseconds_elapsed
        }
    }


    keys(ticker_conf, rotation_quant =.1, impulse_force=1){
        if(Keyboard.state.get("ArrowLeft")){
            Manager.physics.rotate(this.matter_physics_body, -rotation_quant)
        }
        if(Keyboard.state.get("ArrowRight")){
            Manager.physics.rotate(this.matter_physics_body, rotation_quant)
        }
        if(Keyboard.state.get("ArrowUp")){
            Manager.physics.apply_impulse(
                this.matter_physics_body, 
                this.matter_physics_body.position, 
                this.matter_physics_body.angle,
                impulse_force
            )
        }
        if(Keyboard.state.get("ArrowDown")){
            Manager.physics.apply_impulse(
                this.matter_physics_body, 
                this.matter_physics_body.position, 
                this.matter_physics_body.angle,
                -impulse_force
            )
        }
        if(Keyboard.state.get("Space")){
            this.gun.single_shot_down()
        }
        if(!Keyboard.state.get("Space")){
            this.gun.single_shot_up()
        }
    }
}  