import {loadImage} from './loaders.js';
import SpriteSheet from './SpriteSheet.js';

export function loadMarioSprite(){
    return loadImage('/img/characters.gif')
    .then(image => {
    //implement SpriteSheet class 
    const sprites = new SpriteSheet(image, 16, 16); //define size 16, 16 
    sprites.define('idle', 17, 3, 16, 16);// define mario
    return sprites;
    });
}


export function loadBackgroundSprites(){
    return loadImage('/img/tiles.png')
    .then(image => {
    //implement SpriteSheet class 
    const sprites = new SpriteSheet(image, 16, 16); //define size 16, 16 
    sprites.defineTile('ground', 0, 0);// define location 0, 0
    sprites.defineTile('sky', 3, 23); // define sky sprite
    return sprites;
    });
}