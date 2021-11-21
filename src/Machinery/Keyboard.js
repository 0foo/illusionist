// can get event.codes from here
// https://keycode.info/

export class Keyboard {

    static initialize() {
        Keyboard.state = new Map();
        document.addEventListener("keydown", Keyboard.keyDown);
        document.addEventListener("keyup", Keyboard.keyUp);
    }

    static keyDown(KeyboardEvent){
        Keyboard.state.set(KeyboardEvent.code, true)
    }

    static keyUp(KeyboardEvent){
        Keyboard.state.set(KeyboardEvent.code, false)
    }

}
