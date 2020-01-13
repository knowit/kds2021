webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./pages/components/Pin.tsx":
/*!**********************************!*\
  !*** ./pages/components/Pin.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styling_pinStyles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styling/pinStyles.scss */ "./styling/pinStyles.scss");
/* harmony import */ var _styling_pinStyles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styling_pinStyles_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/jobb/Projects/KDS/program.kds.knowit.no/pages/components/Pin.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nwidth: 0;\n      height: 0;\n      margin-top: -7px;\n      margin-left: 1px;\n      border-left: 11px solid transparent;\n      border-right: 11px solid transparent;\n      border-top: 15px solid $border-color;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbox-sizing: border-box;\n      -moz-box-sizing: border-box;\n      -webkit-box-sizing: border-box;\n      border-radius: 50%;\n      border: 8px solid $border-color;\n      width: 24px;\n      height: 24px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nheight: 30px;\n    width: 22px;\n    margin-left: auto;\n    margin-right: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n width: 0;\n      height: 0;\n      margin-top: -5px;\n      margin-left: 1px;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-top: 12px solid $border-color;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      -webkit-box-sizing: border-box;\n      border-radius: 50%;\n      border: 6px solid $border-color;\n      width: 18px;\n      height: 18px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 20px;\n    width: 16px;\n    margin-left: auto;\n    margin-right: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Pin =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Pin, _React$Component);

  function Pin() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Pin);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Pin).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Pin, [{
    key: "showSmallPin",
    value: function showSmallPin() {
      return __jsx(SmallPin, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx(SmallTop, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), __jsx(SmallBottom, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    }
  }, {
    key: "showLargePin",
    value: function showLargePin() {}
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "pin ".concat(this.props.small ? 'small' : '', " ").concat(this.props.className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("div", {
        className: "top",
        style: {
          borderColor: '#FF00FF'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx("div", {
        className: "bottom",
        style: {
          borderColor: "#FF00FF transparent transparent  transparent"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }]);

  return Pin;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var SmallPin = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
var SmallTop = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
var SmallBottom = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject3());
var LargePin = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject4());
var LargeTop = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject5());
var LargeBottom = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject6());
/* harmony default export */ __webpack_exports__["default"] = (Pin);

/***/ })

})
//# sourceMappingURL=schedule.js.60553e5ed163a9da1ab1.hot-update.js.map