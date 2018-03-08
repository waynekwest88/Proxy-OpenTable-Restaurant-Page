webpackHotUpdate(0,{

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//description section of the component
var Description = function Description(props) {
  var less = props.restaurant.description;
  var more = props.restaurant.description + props.restaurant.description;

  if (props.toggled === true) {
    return _react2.default.createElement(
      'div',
      { style: { marginTop: '15px', marginBottom: '15px', marginRight: '400px', marginLeft: '30px', font: 'arial' } },
      more,
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'button',
        { style: { color: 'red', border: 'none', padding: '10px', background: 'none' }, onClick: props.readLess },
        '- Read less'
      )
    );
  } else if (props.toggled === false) {
    return _react2.default.createElement(
      'div',
      { style: { marginTop: '15px', marginBottom: '15px', marginRight: '400px', marginLeft: '30px', font: 'arial' } },
      less,
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'button',
        { style: { color: 'red', border: 'none', padding: '0', background: 'none' }, onClick: props.readMore },
        '+ Read more'
      )
    );
  }
};

exports.default = Description;

/***/ })

})