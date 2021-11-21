import {Manager} from './Machinery/Manager'
import {BaseScene} from './Scenes/BaseScene'


//let manager = new Manager()
Manager.initialize({
    view: document.getElementById("pixi-canvas"),
    backgroundAlpha: 0,
    width: 640,
    height: 480
})
Manager.newScene( new BaseScene() )
Manager.startScene()


//console.log(PIXI.Loader.shared.resources)
// async function main(){
//     console.log("start")
//     await new LoaderHelper().load()
//     PIXI.Sprite.from('test1')
//     console.log("complete")
// }
// main()
// callback test
// PIXI.Loader.shared.add('test', "static/loader_test/1 copy 32.png");
// PIXI.Loader.shared.onComplete.add(() => {
//     console.log("callbact test, completed")
//     PIXI.Sprite.from('test')
// });
// PIXI.Loader.shared.load();

// basic loader
// PIXI.Loader.shared.add('test2', "static/loader_test/1 copy 31.png");
// PIXI.Loader.shared.onComplete.add(() => {
//     PIXI.Sprite.from('test2')
// });
// PIXI.Loader.shared.load();


// async function manager(){
//     console.log("Loading Assets!")
//     await doTheLoad()
//     console.log("Assets Loaded!")
//     PIXI.Sprite.from('test2')
// }

// function doTheLoad(){
//     return new Promise((resolve,reject)=>{

//         PIXI.Loader.shared.add('test2', "static/loader_test/1 copy 31.png");

//         PIXI.Loader.shared.onComplete.add(() => {
//             console.log("async/await completed")
//         });

//         PIXI.Loader.shared.onComplete.add(
//             resolve
//         );
//         // PIXI.Loader.shared.onError.add(reject());
//         PIXI.Loader.shared.load();
        
//     })

// }

// PIXI.Loader.shared.add('test2', "static/loader_test/1 copy 31.png");
// PIXI.Loader.shared.load();
// PIXI.Sprite.from('test2')

// manager()





//PIXI.Sprite.from('test')






