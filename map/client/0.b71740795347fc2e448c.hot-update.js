webpackHotUpdate(0,{

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//left column in the about section of the component
var LeftAbout = function LeftAbout(props) {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'p',
      { className: 'diningStyle', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/701/701965.svg', style: { width: '20px', height: '20px' } }),
      ' Dining Style'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '2em' } },
      props.restaurant.diningStyle
    ),
    _react2.default.createElement(
      'p',
      { className: 'cuisine', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/0/97.svg', style: { width: '20px', height: '20px' } }),
      ' Cuisine'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      props.restaurant.cuisines
    ),
    _react2.default.createElement(
      'p',
      { className: 'hoursOfOperations', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/59/59252.svg', style: { width: '20px', height: '20px' } }),
      ' Hours of Operation'
    ),
    _react2.default.createElement(
      'p',
      { className: 'monday', style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Monday - Thursday'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Lunch: ',
      props.restaurant.hoursOfOperations.monday.lunch
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Dinner: ',
      props.restaurant.hoursOfOperations.monday.dinner
    ),
    _react2.default.createElement(
      'p',
      { className: 'friday', style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Friday'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Lunch: ',
      props.restaurant.hoursOfOperations.friday.lunch
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Dinner: ',
      props.restaurant.hoursOfOperations.friday.dinner
    ),
    _react2.default.createElement(
      'p',
      { className: 'saturday', style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Saturday'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Lunch: ',
      props.restaurant.hoursOfOperations.saturday.lunch
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      'Dinner:',
      props.restaurant.hoursOfOperations.saturday.dinner
    ),
    _react2.default.createElement(
      'p',
      { className: 'phone', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/684/684812.svg', style: { width: '20px', height: '20px' } }),
      ' Phone Number'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      props.restaurant.phoneNumber
    ),
    _react2.default.createElement(
      'p',
      { className: 'website', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/109/109476.svg', style: { width: '20px', height: '20px' } }),
      ' Website'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      _react2.default.createElement(
        'a',
        { href: props.restaurant.website, style: { color: 'red' } },
        props.restaurant.website
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'payment', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/271/271035.svg', style: { width: '20px', height: '20px' } }),
      ' Payment'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      'AMEX, Visa, Discover, Master'
    ),
    _react2.default.createElement(
      'p',
      { className: 'dressCode', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/141/141585.svg', style: { width: '20px', height: '20px' } }),
      ' Dress Code'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      props.restaurant.dressCode
    ),
    _react2.default.createElement(
      'p',
      { className: 'chef', style: { fontWeight: 'bold', fontSize: '14px' } },
      _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/129/129226.svg', style: { width: '20px', height: '20px' } }),
      ' Executive Chef'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontSize: '14px', marginLeft: '1.7em' } },
      props.restaurant.executiveChef
    )
  );
};

exports.default = LeftAbout;

/***/ })

})