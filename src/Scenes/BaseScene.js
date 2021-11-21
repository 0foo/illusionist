import { Container } from 'pixi.js';
import { Ship} from '../GameObjects/Ship'
import { Laser } from '../GameObjects/Laser';
import { Manager } from '../Machinery/Manager';



export class BaseScene extends Container {
    constructor(){
        super()
    }

    preload(){   
        Manager.assetManifests.push({
            name: 'ship_01',
            url: 'ship_01.png'
        })
        Manager.assetManifests.push({
            name: 'laser_01',
            url: 'laser_01.png'
        })
    }
    
    initialize(){
        Manager.GOM.add(new Ship())
    }


    update(time){
    }

}