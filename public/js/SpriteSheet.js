export default class SpriteSheet {
    constructor(image, width, height){
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();//this the buffer created below in the map
    }

    define(name, x, y){
        const buffer = document.createElement('canvas');//create a buffer to get the tile image
        buffer.width = this.width;
        buffer.height = this.height;
        buffer.
            getContext('2d')
            .drawImage(
                this.image, 
                x * this.width,
                y * this.height,
                this.width,
                this.height,
                0,
                0,
                this.width,
                this.height);// draw the subset of the image
        this.tiles.set(name , buffer);        
    }

    draw(name , context, x, y){
        const buffer = this.tiles.get(name);//retrive the buffer from the tile set
        context.drawImage(buffer, x, y);
    }
}