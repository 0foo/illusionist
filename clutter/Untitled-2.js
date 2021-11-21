

    
    updatePoints(p) {
        
        var points = this.points = p.map((val, index) => val || this.points[index]);
        
        var s = this.lineWidth, c = this.lineColor;
        
        this.clear();
        this.lineStyle(s, c);
        this.moveTo(points[0], points[1]);
        this.lineTo(points[2], points[3]);
    }


    var graphics = new PIXI.Graphics();



container.addChild(graphics);



// var render = Render.create({
//     element: document.body,
//     engine: engine
// });
// Render.run(render);
// var runner = Runner.create();


     progressBar(){
        const loaderBarWidth = this.screen_width * 0.8;
        this.loaderBarFill = new Graphics();
        this.loaderBarFill.beginFill(0x008800, 1)
        this.loaderBarFill.drawRect(0, 0, loaderBarWidth, 50);
        this.loaderBarFill.endFill();
        this.loaderBarFill.scale.x = 0;

        this.loaderBarBoder = new Graphics();
        this.loaderBarBoder.lineStyle(10, 0x0, 1);
        this.loaderBarBoder.drawRect(0, 0, loaderBarWidth, 50);

        this.loaderBar = new Container();
        this.loaderBar.addChild(this.loaderBarFill);
        this.loaderBar.addChild(this.loaderBarBoder);
        this.loaderBar.position.x = (this.screen_width - this.loaderBar.width) / 2;
        this.loaderBar.position.y = (this.screen_height - this.loaderBar.height) / 2;
        this.addChild(this.loaderBar);
     }
     
     downloadProgress(loader){
         const progressRatio = loader.progress / 100;
         this.loaderBarFill.scale.x = progressRatio;
     }