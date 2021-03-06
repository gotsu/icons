'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconTwitter = function IconTwitter(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconTwitter'
    ),
    _react2.default.createElement('path', { d: 'M15.27,30.7a15.24,15.24,0,0,1-7.35-1.93s-.65-.36-.77-.81L6.91,27l1,.07A9.56,9.56,0,0,0,13.15,26a5.65,5.65,0,0,1-3.47-3.45l-.35-.91.61,0a5.78,5.78,0,0,1-.88-.9,5.54,5.54,0,0,1-1.22-3.48v-.94l.86.24A5.41,5.41,0,0,1,8,14.8a5.59,5.59,0,0,1,.63-4.06l.49-.86.65.75a13.77,13.77,0,0,0,9.07,4.9,5.85,5.85,0,0,1,.07-1.5,5.65,5.65,0,0,1,3.76-4.3,5.72,5.72,0,0,1,5.64,1.16.43.43,0,0,0,.11.08l2.85-1.05.38.26a.76.76,0,0,1,.28.7,2.78,2.78,0,0,1-.61,1.3l.08,0,.6-.11.52-.11.26.47c.26.49,0,.73-.79,1.52-.27.26-.57.55-.75.75l-.1.1c-.77.79-.88,1.08-.89,1.15A15,15,0,0,1,20.05,30,16,16,0,0,1,15.27,30.7Zm-4.83-2.32a13.51,13.51,0,0,0,18.41-12.5,3.53,3.53,0,0,1,1.23-2l-.36.08-.51.13-.3-.46a.74.74,0,0,1,.08-.89l.62-.68-.66.24A1.46,1.46,0,0,1,27.39,12a4.3,4.3,0,0,0-4.26-.88,4.25,4.25,0,0,0-2.83,3.25,4.58,4.58,0,0,0,0,1.24c0,.24,0,.49,0,.74v.76l-.75,0A15.24,15.24,0,0,1,9.46,12.36a4.47,4.47,0,0,0-.07,2.16,4.54,4.54,0,0,0,1.72,2.6l.48.39-.69,1.12-1.54-.44a4.24,4.24,0,0,0,.81,1.65,4.45,4.45,0,0,0,2.37,1.53l.63.18-.27,1.33L11.45,23A4.5,4.5,0,0,0,15,25h0l.47.06.26.95-.39.32A11.13,11.13,0,0,1,10.44,28.38Zm21-17h0Z' })
  );
};

IconTwitter.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconTwitter.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconTwitter;