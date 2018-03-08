webpackHotUpdate(0,{

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//the rating section that is located under the title section of the component
var Ratings = function Ratings(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'table',
      { style: { cellpadding: '50', marginTop: '15px', marginBottom: '15px', marginRight: '450px', marginLeft: '150px' } },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('img', { src: 'https://toyotaescondido.files.wordpress.com/2012/04/5_stars1.jpg', style: { width: '100px', height: '20px' } })
          ),
          _react2.default.createElement(
            'td',
            { style: { fontWeight: 'bold', fontSize: '14px', padding: '8px' } },
            props.restaurant.rating
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('img', { src: 'http://cdn.osxdaily.com/wp-content/uploads/2014/11/mac-messages-icon-300x276.jpg', style: { width: '20px', height: '20px' } })
          ),
          _react2.default.createElement(
            'td',
            { style: { fontWeight: 'bold', fontSize: '14px', padding: '8px' } },
            props.restaurant.reviews,
            ' reviews'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/631/631200.svg', style: { width: '20px', height: '20px' } })
          ),
          _react2.default.createElement(
            'td',
            { style: { fontWeight: 'bold', fontSize: '14px', padding: '8px' } },
            props.restaurant.priceRange
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('img', { src: 'https://image.flaticon.com/icons/svg/0/97.svg', style: { width: '20px', height: '20px' } })
          ),
          _react2.default.createElement(
            'td',
            { style: { fontWeight: 'bold', fontSize: '14px', padding: '8px' } },
            props.restaurant.cuisines
          )
        )
      )
    )
  );
};

exports.default = Ratings;

/***/ })

})