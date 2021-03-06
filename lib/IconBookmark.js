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

var IconBookmark = function IconBookmark(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'Bookmark'
    ),
    _react2.default.createElement('path', { d: 'M12,34.71h7.3v4.4L23,36.83l3.71,2.28v-4.4h6V4H12a4.71,4.71,0,0,0-4.7,4.7V30A4.72,4.72,0,0,0,12,34.71Zm13.3,1.87L23,35.17l-2.29,1.41V29.46h4.59ZM12,5.43h19.3V24.05H12A4.7,4.7,0,0,0,8.75,25.4V8.72A3.29,3.29,0,0,1,12,5.43Zm0,20h19.3v7.83H26.75V28.05H19.34v5.24H12A3.29,3.29,0,0,1,8.75,30V28.76A3.29,3.29,0,0,1,12,25.46Z' })
  );
};

IconBookmark.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconBookmark.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconBookmark;