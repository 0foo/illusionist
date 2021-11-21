import * as PIXI from 'pixi.js';
import { LoaderHelper } from './LoaderHelper';
import { GameObjectManager } from './GameObjectManager'
import 'regenerator-runtime/runtime'
import { Physics } from './Physics';
import { Keyboard } from './Keyboard';


export class Manager {

    static initialize(config){
        // PIXI init
        Manager.pixi = new PIXI.Application(config);

        // stage init
        Manager.stage = new PIXI.Container();
        Manager.pixi.stage.addChild(Manager.stage);

        // ticker init
        Manager.ticker = Manager.pixi.ticker

        Manager.ticker_conf = {
            frames_elapsed: 0,
            milliseconds_elapsed: 0,
            seconds_elapsed: 0,
            minutes_elapsed: 0,
            delta_time: 0,
            time_since_last_frame: 0,
            FPS: Manager.ticker.FPS
        }

        // physics init
        Manager.physics = new Physics()

        // Manifest loader
        Manager.assetManifests = []

        // Game Object Manager
        Manager.GOM = new GameObjectManager()

        // Loader Helper
        Manager.loaderHelper = new LoaderHelper()

        // Keyboard init
        Keyboard.initialize()
        Manager.keyboard = Keyboard
    }

    static newScene(newScene){
         // remove old scene
         if (Manager.currentScene) {
            Manager.stage.removeChild(Manager.currentScene);
            Manager.currentScene.destroy();
            Manager.assetManifests = []
        }
        // Add new scene
        Manager.currentScene = newScene;
        Manager.stage.addChild(newScene)
    }

    static async startScene(){
        Manager.currentScene.preload()

        for (var i = 0; i < Manager.assetManifests.length; i++) {
            await Manager.loaderHelper.load(Manager.assetManifests[i])
        }

        // intitialize scene
        Manager.currentScene.initialize()

        // update
        Manager.ticker.add(Manager.update)
    }

    static update(delta_time){      
        
        // ticker conf
        Manager.ticker_conf.frames_elapsed = Math.round(Manager.ticker_conf.frames_elapsed + delta_time)
        Manager.ticker_conf.milliseconds_elapsed += Math.floor(Manager.ticker.deltaMS)
        Manager.ticker_conf.time_since_last_frame  = Manager.ticker.deltaMS

        if(Manager.ticker_conf.frames_elapsed > Manager.ticker_conf.FPS){
            Manager.ticker_conf.frames_elapsed = 0
        }

        if(Manager.ticker_conf.milliseconds_elapsed > 1000){
            Manager.ticker_conf.seconds_elapsed += 1
            Manager.ticker_conf.milliseconds_elapsed = 0
        }

        if(Manager.ticker_conf.seconds_elapsed >= 60){
            Manager.ticker_conf.minutes_elapsed += 1
            Manager.ticker_conf.seconds_elapsed = 0
        } 

        Manager.ticker_conf.delta_time = delta_time

        // call updates
        Manager.currentScene.update(Manager.ticker_conf)
        Manager.GOM.update(Manager.ticker_conf)
        Manager.physics.update(delta_time)
    }
} 