webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.purchase = _this.purchase.bind(_this);
    _this.property = _this.property.bind(_this);
    _this.city = _this.city.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'purchase',
    value: function purchase() {
      if (this.props.globalState.populateFormsData.purchase != undefined) {
        var purchase = this.props.globalState.populateFormsData.purchase;


        console.log(purchase);
        return purchase.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'property',
    value: function property() {
      if (this.props.globalState.populateFormsData.property != undefined) {
        var property = this.props.globalState.populateFormsData.property;


        console.log(property);
        return property.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'city',
    value: function city() {
      if (this.props.globalState.populateFormsData.city != undefined) {
        var city = this.props.globalState.populateFormsData.city;


        console.log(city);
        return city.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'select',
            { name: 'purchase', className: 'filters purchase', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All_purchase' },
              'Both'
            ),
            this.purchase()
          ),
          _react2.default.createElement(
            'select',
            { name: 'property', className: 'filters propertyType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All_Property' },
              'All Property'
            ),
            this.property()
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All_city' },
              'All City'
            ),
            this.city()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters bldg-size' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Bldge Size'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_bldg_size', className: 'min-bldg-size', onChange: this.props.change, value: this.props.globalState.min_bldg_size }),
            _react2.default.createElement('input', { type: 'text', name: 'max_bldg_size', className: 'max-bldg-size', onChange: this.props.change, value: this.props.globalState.max_bldg_size })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters acre-size' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Acre Size'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_acre_size', className: 'min-acre-size', onChange: this.props.change, value: this.props.globalState.min_acre_size }),
            _react2.default.createElement('input', { type: 'text', name: 'max_acre_size', className: 'max-acre-size', onChange: this.props.change, value: this.props.globalState.max_acre_size })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters year-built' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Year Built'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_year_built', className: 'min-year-built', onChange: this.props.change, value: this.props.globalState.min_year_built }),
            _react2.default.createElement('input', { type: 'text', name: 'max_year_built', className: 'max-year-built', onChange: this.props.change, value: this.props.globalState.max_year_built })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { name: 'elevators', value: 'elevators', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Parking Lot'
              ),
              _react2.default.createElement('input', { name: 'parking_lot', value: 'parking_lot', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'search-btn' },
            'Search'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'box') {
          // THIS IS BOX VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '09/24/2019'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.bldgsize,
                          'ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'rooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' rooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker',
                    'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        } else {
          // THIS IS LONG VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '09/24/2019'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.bldgsize,
                          'ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'rooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' rooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker',
                    'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '100 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true',
                onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true',
                onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  purchase: 'For Sale',
  address: '20 broadway',
  price: 238876,
  city: 'Boston',
  state: 'MA',
  rooms: 3,
  bldgsize: 20,
  acresize: 0,
  yearbuilt: 2006,
  extra: ['elevator', 'parking'],
  property: 'Restaurant',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5GhOzTVlykQs6opjQVXGrMmUxRHRkBST5tTX0_obmn9yoWrK'
}, {
  purchase: 'For Lease',
  address: '34 state',
  price: 282156,
  city: 'New York',
  state: 'NY',
  rooms: 6,
  bldgsize: 10000,
  acresize: 0,
  yearbuilt: 1980,
  extra: ['elevator', 'parking'],
  property: 'Retail',
  image: 'https://i.pinimg.com/originals/02/72/4b/02724b24e6f0ce695d539cb3635cc96d.jpg'
}, {
  purchase: 'For Lease',
  address: '52 ash',
  price: 503946,
  city: 'Seattle',
  state: 'OR',
  rooms: 15,
  bldgsize: 150,
  acresize: 2,
  yearbuilt: 2000,
  extra: ['elevator', 'parking'],
  property: 'Office',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HNS5Z5tetq2oipZo-DwAoKY42AskHveEIgEbGXexVg2xSw-P'
}, {
  purchase: 'For Sale',
  address: '60 sunshine',
  price: 2250,
  city: 'Portland',
  state: 'OR',
  rooms: 20,
  bldgsize: 1792,
  acresize: 0,
  yearbuilt: 2003,
  extra: ['elevator', 'parking'],
  property: 'Health',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchjz3ldJjSR5MLKnTAi3rwBavjOMRWYKnUUN4n_EssXgLPGJE'
}, {
  purchase: 'For Lease',
  address: '9 swamp',
  price: 220000,
  city: 'Phoenix',
  state: 'AZ',
  rooms: 115,
  bldgsize: 48000,
  acresize: 2000,
  yearbuilt: 2009,
  extra: ['elevator', 'parking'],
  property: 'Hospitality',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4Fv14Zedg5Lss0rSKFfA7VpxkRMVKbWeHW3ithec0DSnRQcy'
}, {
  purchase: 'For Sale',
  address: '100 cowboy',
  price: 90709,
  city: 'Houston',
  state: 'TX',
  rooms: 0,
  bldgsize: 0,
  acresize: 5000,
  yearbuilt: 1930,
  extra: ['elevator', 'parking'],
  property: 'Land',
  image: 'https://cdn.landflip.com/photos/177494/river-ranch-at-hico-hico-erath-county-texas-177494-JMbRzU.jpg'
}, {
  purchase: 'For Sale',
  address: '21 swampamn',
  price: 57010,
  city: 'Phoenix',
  state: 'AZ',
  rooms: 0,
  bldgsize: 0,
  acresize: 350,
  yearbuilt: 1920,
  extra: ['elevator', 'parking'],
  property: 'Land',
  image: 'https://cdn.landflip.com/photos/202489/73-acre-northern-az-ranch-258-mo-saint-johns-apache-county-arizona-202489-KnQ68K.jpg'
}, {
  purchase: 'For Sale',
  address: '20 broadway',
  price: 238876,
  city: 'Chicago',
  state: 'CA',
  rooms: 3,
  bldgsize: 20,
  acresize: 0,
  yearbuilt: 2006,
  extra: ['elevator', 'parking'],
  property: 'Restaurant',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5GhOzTVlykQs6opjQVXGrMmUxRHRkBST5tTX0_obmn9yoWrK'
}];

exports.default = listingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      listingsData: _listingsData2.default,

      min_price: 0,
      max_price: 1000000,
      min_bldg_size: 0,
      max_bldg_size: 50000,
      min_acre_size: 0,
      max_acre_size: 100000,
      min_year_built: 1900,
      max_year_built: 2019,
      elevators: false,
      parking_lot: false,
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.bldgsize >= _this3.state.min_bldg_size && item.bldgsize <= _this3.state.max_bldg_size && item.acresize >= _this3.state.min_acre_size && item.acresize <= _this3.state.max_acre_size && item.yearbuilt >= _this3.state.min_year_built && item.yearbuilt <= _this3.state.max_year_built;
      });

      if (this.state.purchase != "All_purchase") {
        newData = newData.filter(function (item) {
          return item.purchase == _this3.state.purchase;
        });
      }

      if (this.state.property != "All_Property") {
        newData = newData.filter(function (item) {
          return item.property == _this3.state.property;
        });
      }

      if (this.state.city != "All_city") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      // property
      var property = this.state.listingsData.map(function (item) {
        return item.property;
      });
      property = new Set(property);
      property = [].concat(_toConsumableArray(property));

      property = property.sort();

      // city
      var city = this.state.listingsData.map(function (item) {
        return item.city;
      });
      city = new Set(city);
      city = [].concat(_toConsumableArray(city));

      city = city.sort();

      // purchase
      var purchase = this.state.listingsData.map(function (item) {
        return item.purchase;
      });
      purchase = new Set(purchase);
      purchase = [].concat(_toConsumableArray(purchase));

      this.setState({
        populateFormsData: {
          property: property,
          purchase: purchase,
          city: city
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);