import Compositor from './Compositor.js';
import Entity from './Entity.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, createSpriteLayer} from './layers.js';
import Timer from './Timer.js';
import KeyBoardState from './KeyBoardState.js';






const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


Promise.all([
    createMario(),
    loadBackgroundSprites(),
    loadLevel('1-1'),
])
.then(([mario, backgroundSprites, level]) => {
    console.log('Level loader', level);

    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);

    const gravity = 1500; // to move mario from up to down
    
    mario.pos.set(90, 210);

    const SPACE = 32;
    const input = new KeyBoardState();
    input.addMapping(SPACE, keyState => {
        if(keyState){
            mario.jump.start();
        }
        else {
            mario.jump.cancel();
        }
        console.log(keyState);
    });
    input.listenTo(window);

    const spriteLayer = createSpriteLayer(mario);
    comp.layers.push(spriteLayer);

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        comp.draw(context);
        mario.update(deltaTime);
        mario.vel.y += gravity * deltaTime;
    }

    timer.start();
});
