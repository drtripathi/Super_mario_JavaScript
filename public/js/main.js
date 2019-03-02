import SpriteSheet from './SpriteSheet.js';
import {loadImage, loadLevel} from  './loaders.js';


function drawBackground(background, context, sprites){
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        //create the background image with sky sprite defined above
        for(let x =x1; x < x2; ++x){
            for(let y = y1; y < y2;  ++y){
                sprites.drawTile(background.tile, context, x , y );
            }
        }
    });
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


loadImage('/img/tiles.png')
.then(image => {
    //implement SpriteSheet class 
    const sprites = new SpriteSheet(image, 16, 16); //define size 16, 16 
    sprites.define('ground', 0, 0);// define location 0, 0
    sprites.define('sky', 3, 23); // define sky sprite

    loadLevel('1-1')
    .then(level => {
        console.log(level); 
        level.backgrounds.forEach(background => {
        drawBackground(background, context, sprites);
        }); 
    }); 

});