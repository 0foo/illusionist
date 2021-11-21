import * as PIXI from 'pixi.js';

export {
    Line
}

// creates a line from any number of point objects {x: x, y: y}
// the first point is the starting location
class Line extends PIXI.Graphics {

    static get_square(start_point, size){
        return new this([
            {x: start_point.x, y:start_point.y},
            {x: start_point.x + size, y: start_point.y}, 
            {x: start_point.x + size, y: start_point.y + size},
            {x: start_point.x, y: start_point.y + size},
            {x: start_point.x, y:start_point.y}
        ])
    }

    static get_rectangle(x, y, width, height){
        return new this([
            {x: x, y: y},
            {x: x + width, y: y}, 
            {x: x + width, y: y + height},
            {x: x, y: start_point.y + size},
            {x: x, y:start_point.y}
        ])
    }

    constructor(points, config={}) {
        super();
        
        this.lineWidth = 1;
        this.lineColor = "0xFF0000";
        this.points = points;
        this.renderme()    
    }

    moveVector(move_vector){
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].x = this.points[i].x + move_vector.x
            this.points[i].y = this.points[i].y + move_vector.y
        }  
        this.renderme()
    }

    moveXY(new_XY){
        let x_difference = new_XY.x - this.points[0].x 
        let y_difference = new_XY.y - this.points[0].y 

        for (var i = 0; i < this.points.length; i++) {
            this.points[i].x = this.points[i].x + x_difference
            this.points[i].y = this.points[i].y + y_difference
        }  
        this.renderme()
    }

    renderme(){
        this.clear();
        this.lineStyle(this.lineWidth, this.lineColor)
        this.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < this.points.length; i++) {
            this.lineTo(this.points[i].x, this.points[i].y);
        }     
    }
}