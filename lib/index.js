"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _arrowUp = _interopRequireDefault(require("react-icons/lib/ti/arrow-up"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: fixed;\n  right: 5%;\n  bottom: 10%;\n  padding: 15px;\n  border-radius: 10px;\n  border: 2px solid black;\n  font-weight: bold;\n  background-color: white;\n  cursor: pointer;\n  transition: all 0.5s;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n\n  ...props.style;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: fixed;\n  right: 5%;\n  bottom: 5%;\n  padding: 10px;\n  z-index: 10;\n  border-radius: 50%;\n  ...props.style;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArrowUp = function ArrowUp() {
  return _react.default.createElement(_arrowUp.default, {
    style: {
      fontSize: "2.25em"
    }
  });
};

var ScrollToTopButton = _styledComponents.default.button(_templateObject);

var MobileScrollToTopButton = ScrollToTopButton.extend(_templateObject2);

var ScrollTop =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollTop, _Component);

  function ScrollTop(props) {
    var _this;

    _classCallCheck(this, ScrollTop);

    _this = _possibleConstructorReturn(this, (ScrollTop.__proto__ || Object.getPrototypeOf(ScrollTop)).call(this, props));
    _this.state = {
      isMobile: false,
      showScrollToTop: null
    };
    _this.checkWindowSize = _this.checkWindowSize.bind(_assertThisInitialized(_this));
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    _this.scrollUp = _this.scrollUp.bind(_assertThisInitialized(_this));
    _this.getScrollTop = _this.getScrollTop.bind(_assertThisInitialized(_this));
    _this.setScrollTop = _this.setScrollTop.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScrollTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkWindowSize();
      this.checkForScrollToTop();
      window.addEventListener("resize", this.checkWindowSize);
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.checkWindowSize);
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "checkWindowSize",
    value: function checkWindowSize() {
      this.setState({
        isMobile: window.innerWidth < this.props.breakpoint
      });
    }
  }, {
    key: "checkForScrollToTop",
    value: function checkForScrollToTop() {
      if (document.body.scrollTop > this.props.distance || document.documentElement.scrollTop > this.props.distance) {
        this.setState({
          showScrollToTop: true
        });
      } else {
        this.setState({
          showScrollToTop: false
        });
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.checkForScrollToTop();
      });
    }
  }, {
    key: "scrollUp",
    value: function scrollUp() {
      var _window = window,
          performance = _window.performance,
          requestAnimationFrame = _window.requestAnimationFrame;
      var _props = this.props,
          speed = _props.speed,
          target = _props.target;

      if (speed <= 0 || typeof performance === "undefined" || typeof requestAnimationFrame === "undefined") {
        return this.setScrollTop(target);
      }

      var start = performance.now();
      var initScrollTop = this.getScrollTop();
      var pxsToScrollBy = initScrollTop - target;
      var that = this;
      requestAnimationFrame(step);

      function step(timestamp) {
        var delta = timestamp - start;
        var progress = Math.min(delta / speed, 1);
        that.setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      return document.body.scrollTop || document.documentElement && document.documentElement.scrollTop || 0;
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop(value) {
      document.body.scrollTop = value;

      if (document.documentElement) {
        document.documentElement.scrollTop = value;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = "react-scrolltop-button";

      if (this.props.className) {
        className = "".concat(className, " ").concat(this.props.className);
      }

      if (this.state.isMobile) {
        className = "".concat(className, " react-scrolltop-button-mobile");
      } // Clone this.props and then delete Component specific props so we can
      // spread the rest into the button.


      var rest = _extends({}, this.props);

      delete rest.text;
      delete rest.style;
      delete rest.className;
      delete rest.breakpoint;
      delete rest.distance;
      return _react.default.createElement(_react.default.Fragment, null, this.state.showScrollToTop && this.state.isMobile ? _react.default.createElement(MobileScrollToTopButton, _extends({
        style: this.props.style
      }, rest, {
        className: className,
        onClick: this.scrollUp
      }), this.props.icon ? this.props.icon : _react.default.createElement(ArrowUp, null)) : this.state.showScrollToTop && _react.default.createElement(ScrollToTopButton, _extends({
        style: this.props.style
      }, rest, {
        className: className,
        onClick: this.scrollUp
      }), this.props.text));
    }
  }]);

  return ScrollTop;
}(_react.Component);

ScrollTop.propTypes = {
  text: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  distance: _propTypes.default.number,
  breakpoint: _propTypes.default.number,
  icon: _propTypes.default.element,
  speed: _propTypes.default.number,
  target: _propTypes.default.number
};
ScrollTop.defaultProps = {
  text: "back to top",
  distance: 50,
  breakpoint: 991,
  speed: 250,
  target: 0
};
var _default = ScrollTop;
exports.default = _default;