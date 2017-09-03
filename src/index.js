
'use strict';

require('./styles/main.scss');
const pkg = require('../package.json');
const ROT = require('rot-js');
const Engine = require('./engine');

window.onload = () => {

    console.log('baby-rogue v' + pkg.version);

    if (!ROT.isSupported()) {
        throw new Error("The rot.js library isn't supported by your browser.");
    } 

    let engine = new Engine();

    let foreground = ROT.Color.toRGB([255, 255, 0]);
    let background = ROT.Color.toRGB([0, 0, 0]);
    let colors = "%c{" + foreground + "}%b{" + background + "}";
    engine.getDisplay().drawText(10, 10, colors + "Baby Rogue");
};
