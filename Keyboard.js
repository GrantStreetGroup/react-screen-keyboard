var Keyboard = require('./lib/Keyboard');
var KeyboardButton = require('./lib/KeyboardButton');
var LatinLayout = require('./lib/layouts/LatinLayout');
var CyrillicLayout = require('./lib/layouts/CyrillicLayout');
var NumPadLayout = require('./lib/layouts/NumPadLayout');

module.exports = Keyboard.default || Keyboard;
module.exports.KeyboardButton = KeyboardButton.default || KeyboardButton;
module.exports.LatinLayout =  LatinLayout.default || LatinLayout;
module.exports.CyrillicLayout =  CyrillicLayout.default || CyrillicLayout;
module.exports.NumPadLayout = NumPadLayout.default || NumPadLayout;
