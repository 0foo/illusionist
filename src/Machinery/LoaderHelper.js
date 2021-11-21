import { Loader } from "pixi.js";

export class LoaderHelper {

    constructor(){
         this.loader = Loader.shared; // another way is to use the predefined pixi loader
        //const loader = new Loader();
    }

   load(asset_manifest){
        return new Promise((resolve, reject)=>{

            this.loader.add(asset_manifest);

            this.loader.onComplete.add(
                resolve
            );

            this.loader.onError.add(
                reject
            ); 
            
            this.loader.load();
            
        })
    }
    // use name from asset manifest
    fetch(identifier){
        return this.loader.resources[identifier].texture;
    }
 }