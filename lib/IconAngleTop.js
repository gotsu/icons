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

var IconAngleTop = function IconAngleTop(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconAngleTop'
    ),
    _react2.default.createElement('rect', { transform: 'translate(40 0) rotate(90)' }),
    _react2.default.createElement('path', { d: 'M18.09,12.88,5.67,25.3l1,1L19.08,13.88a1.34,1.34,0,0,1,1.84,0L33.39,26.35l1-1L21.91,12.88A2.77,2.77,0,0,0,18.09,12.88Z' })
  );
};

IconAngleTop.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconAngleTop.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconAngleTop;