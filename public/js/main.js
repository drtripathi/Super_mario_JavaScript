import SpriteSheet from './SpriteSheet.js';
import {loadImage} from  './loaders.js';



const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0,0,50,50);

loadImage('/img/tiles.png')
.then(image => {
    //implement SpriteSheet class 
    const sprites = new SpriteSheet(image, 16, 16); //define size 16, 16 
    sprites.define('ground', 0, 0);// define location 0, 0
    sprites.define('sky', 3, 23); // define sky sprite
    sprites.draw('sky', context, 45, 62); // draw the sprite on the context at location 45, 62

});