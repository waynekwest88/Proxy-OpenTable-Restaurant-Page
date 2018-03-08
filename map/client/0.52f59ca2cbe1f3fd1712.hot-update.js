webpackHotUpdate(0,{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Map = __webpack_require__(72);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//right column in the about section of the component
var RightAbout = function RightAbout(props) {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/149/149441.svg', style: { width: '60px', height: '20px' } }),
      ' ',
      _react2.default.createElement(
        'a',
        { href: props.restaurant.neighborhood, style: { color: 'red' } },
        props.restaurant.neighborhood
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'neighborhood', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/160/160268.svg', style: { width: '20px', height: '20px' } }),
      ' Neighborhood'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '2.5em' } },
      props.restaurant.neighborhood
    ),
    _react2.default.createElement(
      'p',
      { className: 'crossStreet', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/160/160260.svg', style: { width: '20px', height: '20px' } }),
      ' Cross Street'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '2.5em' } },
      props.restaurant.crossStreet
    ),
    _react2.default.createElement(
      'p',
      { className: 'parking', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/62/62820.svg', style: { width: '20px', height: '20px' } }),
      ' Parking'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '2.5em' } },
      props.restaurant.parking
    ),
    _react2.default.createElement(
      'p',
      { className: 'additional', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/149/149397.svg', style: { width: '20px', height: '20px' } }),
      ' Additional'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '2.5em' } },
      props.restaurant.additional.description
    )
  );
};

exports.default = RightAbout;


{/* <Maps item={props}/> */}

/***/ })

})