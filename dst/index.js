'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['test ', ' huhuhuh ', ''], ['test ', ' huhuhuh ', '']),
    _templateObject2 = _taggedTemplateLiteral(['test'], ['test']),
    _templateObject3 = _taggedTemplateLiteral(['test ', ''], ['test ', '']),
    _templateObject4 = _taggedTemplateLiteral(['Test'], ['Test']);

var _logtag = require('./lib/logtag');

var _logtag2 = _interopRequireDefault(_logtag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _logtag2.default;


var i = 5;
console.log(_logtag2.default.error(_templateObject, new Error('Hallo'), new Error('Hallo 2')));
console.log(_logtag2.default.done(_templateObject2));
console.log(_logtag2.default.note(_templateObject3, { x: 1, y: 2 }));
console.log(_logtag2.default.request(_templateObject3, i));
console.log(_logtag2.default.warning(_templateObject2));
console.log(_logtag2.default.critical(_templateObject4));