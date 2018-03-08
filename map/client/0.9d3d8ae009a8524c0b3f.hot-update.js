webpackHotUpdate(0,{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(185);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(194);

var _axios2 = _interopRequireDefault(_axios);

var _bluebird = __webpack_require__(213);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _Description = __webpack_require__(216);

var _Description2 = _interopRequireDefault(_Description);

var _LeftAbout = __webpack_require__(217);

var _LeftAbout2 = _interopRequireDefault(_LeftAbout);

var _Map = __webpack_require__(72);

var _Map2 = _interopRequireDefault(_Map);

var _Ratings = __webpack_require__(222);

var _Ratings2 = _interopRequireDefault(_Ratings);

var _RightAbout = __webpack_require__(223);

var _RightAbout2 = _interopRequireDefault(_RightAbout);

var _Title = __webpack_require__(224);

var _Title2 = _interopRequireDefault(_Title);

var _TopTags = __webpack_require__(225);

var _TopTags2 = _interopRequireDefault(_TopTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this.state = {
      restaurant: {},
      isLoading: true,
      readmore: false //readmore button not toggled
    };
    //this will be the object that will be taken from our database
    //this state will be passed to each of the child components so they can access 
    //each of the properties that are within the parent's stateful object
    return _this;
  }

  //create an onload search for a random item to render to the page since this component 
  //does not a specified search or anything for a specific item at the moment and is completely
  //reliant on the search component for all rendering of information

  //this will generate a random id number between 1-200 and will render the page initially


  _createClass(Map, [{
    key: 'randomSearch',
    value: function randomSearch() {
      // let randomId = Math.floor(Math.random() * (200 - 1)) + 1;
      var path = window.location.pathname;
      var id = path.split('/');
      //this axios request will send a concurrent request to the server to get
      //information for both the about and location sections
      // axios.all([this.getInformation(randomId), this.getLocation(randomId)])
      //   .then(axios.spread((information, location) => {
      //     console.log(information, location);
      //   }));
      this.getInformation(parseInt(id[2]));
    }

    //send GET request to get the about information for the restaurant 

  }, {
    key: 'getInformation',
    value: function getInformation(restaurant_id) {
      var _this2 = this;

      _axios2.default.get('http://localhost:1127/r/' + restaurant_id + '/about').then(function (response) {
        // console.log(response);
        _this2.setState({
          restaurant: response.data,
          isLoading: false
        });
        // console.log('this console log is from within the axios request success', this.state)
      }).catch(function (error) {
        console.log('error', error);
      });
    }

    //send GET request to get the location coordinates for the restaurant
    // getLocation(restaurant_id) {
    //   axios.get(`/restaurant/${restaurant_id}/location`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // }

    //use native Component Will Mount to invoke the randomSearch function above before rendering

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.randomSearch();
    }

    //will rerender the description when clicked

  }, {
    key: 'readMore',
    value: function readMore() {
      if (this.state.readmore === false) {
        this.setState(function (prevState) {
          return {
            readmore: !prevState.readmore
          };
        });
      }
    }

    //will rerender the description when clicked 

  }, {
    key: 'readLess',
    value: function readLess() {
      if (this.state.readmore === true) {
        this.setState(function (prevState) {
          return {
            readmore: !prevState.readmore
          };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isLoading) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'This Page Is Currently Loading'
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Title2.default, { restaurant: this.state.restaurant }),
          _react2.default.createElement(_Ratings2.default, { restaurant: this.state.restaurant }),
          _react2.default.createElement(_TopTags2.default, { restaurant: this.state.restaurant }),
          _react2.default.createElement(_Description2.default, { restaurant: this.state.restaurant, readMore: this.readMore.bind(this), readLess: this.readLess.bind(this), toggled: this.state.readmore }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'table',
              { style: { marginTop: '15px', marginBottom: '50px', marginRight: '300px', marginLeft: '300px' } },
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    { style: { width: '400px' } },
                    _react2.default.createElement(_LeftAbout2.default, { restaurant: this.state.restaurant })
                  ),
                  _react2.default.createElement(
                    'td',
                    { valign: 'top', className: 'right-about', style: { width: '300px' } },
                    _react2.default.createElement(_Map2.default, { restaurant: this.state.restaurant }),
                    _react2.default.createElement(_RightAbout2.default, { restaurant: this.state.restaurant })
                  )
                )
              )
            )
          )
        );
      }
    }
  }]);

  return Map;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Map, null), document.getElementById('map'));

/***/ })

})