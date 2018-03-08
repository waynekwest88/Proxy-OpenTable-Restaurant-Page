webpackHotUpdate(0,{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//title section of the component
var Title = function Title(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { style: { marginTop: '15px', marginBottom: '15px', marginRight: '450px', marginLeft: '150px', borderBottom: '1px solid black' } },
      props.restaurant.name
    )
  );
};

exports.default = Title;

/***/ })

})