webpackHotUpdate(0,{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//top tags section of the component 
var TopTags = function TopTags(props) {
  // console.log('this is props', props.restaurant.topTags);
  return _react2.default.createElement(
    'table',
    { className: 'TagRow', style: { marginTop: '15px', marginBottom: '15px', marginRight: '400px', marginLeft: '300px' } },
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'tags', style: { fontWeight: 'bold' } },
          'Top Tags:'
        ),
        props.restaurant.topTags.map(function (tag, index) {
          return _react2.default.createElement(
            'td',
            { key: index, style: { border: '1px solid black', backgroundClip: 'padding-box',
                borderRadius: '15px', padding: '6px', fontColor: 'grey', font: '14px arial' } },
            tag
          );
        })
      )
    )
  );
};

exports.default = TopTags;

/***/ })

})