const PRESSED = 1;
const RELEASED = 0;

export default class KeyBoardState {
    constructor(){
        //Holds the current state of a given key
        this.keyStates = new Map(); // to keep track whether the key is pressed or not

        //Holds the callback function for a key code
        this.keyMap = new Map();
    }

    addMapping(keyCode, callback){
        this.keyMap.set(keyCode, callback);
    }

    handleEvent(event){
        const {keyCode} = event;

        if(!this.keyMap.has(keyCode)){
            //doesnt have key mapped
            return;
        }

        //if the key is mapped we want to prevent it from doing the event in the browser
        event.preventDefault();

        const keyState = event.type === 'keydown' ? PRESSED : RELEASED

        if(this.keyStates.get(keyCode) === keyState){
            return;
        }

        this.keyStates.set(keyCode, keyState);
        console.log(this.keyStates);

        this.keyMap.get(keyCode)(keyState);

    }

    listenTo(window){
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, event => {
                this.handleEvent(event);
            });
        });   
    }
}