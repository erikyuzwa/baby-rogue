
'use strict';

const ROT = require('rot-js');

class Engine {

    constructor(options) {
        options = (options || {});
        this.width = options.width || 80;
        this.height = options.height || 20;

        this.display = new ROT.Display({
            width: this.width, 
            height: this.height
        });

        document.getElementById('root').appendChild(this.display.getContainer());
    }

    getDisplay() {
        return this.display;
    }

}

module.exports = Engine;