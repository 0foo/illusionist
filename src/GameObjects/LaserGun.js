import { Manager } from "../Machinery/Manager";
import { Laser } from "./Laser";

export class LaserGun{
    
    constructor(mount_point_physics_body){
        this.mount_point_physics_body = mount_point_physics_body
        this.fired = false
        this.fire_mode = 'single'
    }

    fire_down(){
       if(this.fire_mode == 'single'){
           this.single_shot_down()
       }
    }

    fire_up(){
        if(this.fire_mode == 'single'){
            this.single_shot_up()
        }
    }

    make_laser(){
        let shot = new Laser(
            this.mount_point_physics_body.position,
            this.mount_point_physics_body.angle
        )

        Manager.GOM.add(shot)
    }

    single_shot_down(){
        if(!this.fired){
            this.make_laser()
        }
        this.fired=true
    }

    single_shot_up(){
        this.fired = false
    }

    auto(rate_of_fire){

    }
}