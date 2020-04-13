class CommandPalette {
    constructor(upKey, rightKey, downKey, leftKey, subscriber) {
        this.up = upKey;
        this.right = rightKey;
        this.down = downKey;
        this.left = leftKey;

        this.currentDirection = [0, -1];
        subscriber.addEventListener('keydown', e => this.checkKey(e))
    }

    checkKey(e) {
        const pressedKey = e.key;
        if (pressedKey === this.up) {
            this.setCurrentDirection([0, -1]);
        }
        else if (pressedKey === this.right) {
            this.setCurrentDirection([1, 0]);
        }
        else if (pressedKey === this.down) {
            this.setCurrentDirection([0, 1]);
        }
        else if (pressedKey === this.left) {
            this.setCurrentDirection([-1, 0]);
        }
    }

    setCurrentDirection(direction) {
        this.currentDirection = direction;
    }


}

export { CommandPalette as default };