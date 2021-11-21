import { Utils } from "./Utils"
import { Manager } from "./Manager"

export class GameObjectManager {
    constructor(){
        this.game_objects = {}
    }
    update(ticker_conf){
        for (var key of Object.keys(this.game_objects)) {
            let cur_obj = this.game_objects[key]

            if(typeof cur_obj.update === 'function') {
                cur_obj.update(ticker_conf)
            }
        }
    }
    
    add(game_object, name=''){
        if(!name){
            var name = Utils.makeid(8)
        }
        this.game_objects[name] = game_object
        Manager.currentScene.addChild(game_object)
    }

}