webpackHotUpdate_N_E("pages/practicalities",{

/***/ "./components/Difficulty.tsx":
/*!***********************************!*\
  !*** ./components/Difficulty.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styling_difficultyStyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styling/difficultyStyles.scss */ "./styling/difficultyStyles.scss");
/* harmony import */ var _styling_difficultyStyles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styling_difficultyStyles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Difficulty.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



//CLSX
var Difficulty = function Difficulty(_ref) {
  var difficulty = _ref.difficulty;
  return __jsx("div", {
    className: "difficulty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "first active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "second ".concat(difficulty == "Intermediate" || difficulty == "Advanced" ? "active" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "third ".concat(difficulty == "Advanced" ? "active" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
};

_c = Difficulty;
/* harmony default export */ __webpack_exports__["default"] = (Difficulty);

var _c;

$RefreshReg$(_c, "Difficulty");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Filter.tsx":
/*!*******************************!*\
  !*** ./components/Filter.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/data.json */ "./models/data.json");
var _models_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../models/data.json */ "./models/data.json", 1);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _styling_filterStyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styling/filterStyles.scss */ "./styling/filterStyles.scss");
/* harmony import */ var _styling_filterStyles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styling_filterStyles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Filter.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Filter = function Filter(_ref) {
  _s();

  var onTagChange = _ref.onTagChange,
      onFavoriteChange = _ref.onFavoriteChange,
      selectedTags = _ref.selectedTags,
      showOnlyFavorites = _ref.showOnlyFavorites,
      className = _ref.className,
      type = _ref.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var toggle = function toggle() {
    setOpen(!open);
  };

  var addTag = function addTag(tag) {
    onTagChange(selectedTags.concat([tag]));
  };

  var removeTag = function removeTag(tag) {
    onTagChange(selectedTags.filter(function (t) {
      return t != tag;
    }));
  };

  return __jsx("div", {
    className: "filter-container ".concat(className, " ").concat(type || "slide-left"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "filter-button ".concat(open ? "open" : ""),
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "filter-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "filter ".concat(open ? "open" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "../static/close-24px.svg",
    className: "close",
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Filter by tag"), __jsx("div", {
    className: "favorite",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Show only your favorites: "), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ShowOnlyFavouritesButton"], {
    showOnlyFavorites: showOnlyFavorites,
    onClick: function onClick() {
      return onFavoriteChange(!showOnlyFavorites);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Active filters:"), selectedTags && selectedTags.map(function (tag) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["FilterTag"], {
      key: tag,
      name: tag,
      selected: true,
      onClick: function onClick() {
        return removeTag(tag);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    });
  })), __jsx("div", {
    className: "nonActive",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Click to select filters"), _models_data_json__WEBPACK_IMPORTED_MODULE_1__.program.tags.concat(_models_data_json__WEBPACK_IMPORTED_MODULE_1__.program.languages).filter(function (tag) {
    return selectedTags && !selectedTags.some(function (t) {
      return t == tag;
    });
  }).map(function (tag) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["FilterTag"], {
      key: tag,
      name: tag,
      onClick: function onClick() {
        return addTag(tag);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    });
  }))));
};

_s(Filter, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");

_c = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c;

$RefreshReg$(_c, "Filter");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Menu.tsx":
/*!*****************************!*\
  !*** ./components/Menu.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styling_menuStyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styling/menuStyles.scss */ "./styling/menuStyles.scss");
/* harmony import */ var _styling_menuStyles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styling_menuStyles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Menu.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Menu = function Menu() {
  return __jsx("nav", {
    role: "navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "menuToggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "menuButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "filter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "menuHeader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Menu"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/callForPresentations",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "link callForPresentations",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Call for Presentations")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/practicalities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "link practicalities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Practicalities")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/aboutUs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "link aboutUs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "About KDS")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "link location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Location")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/codeOfConduct",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "link codeOfConduct",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Code of Conduct")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "link logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Logo")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://kds-archive.knowit.no/schedule",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Last year's program")))));
};

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Pin.tsx":
/*!****************************!*\
  !*** ./components/Pin.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styling_pinStyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styling/pinStyles.scss */ "./styling/pinStyles.scss");
/* harmony import */ var _styling_pinStyles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styling_pinStyles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Pin.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Pin = function Pin(_ref) {
  var className = _ref.className,
      small = _ref.small,
      color = _ref.color;
  color = color === undefined ? "#FF00FF" : color;
  return __jsx("div", {
    className: "pin ".concat(small ? "small" : "", " ").concat(className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "top",
    style: {
      borderColor: color
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "bottom",
    style: {
      borderColor: "".concat(color, " transparent transparent  transparent")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

_c = Pin;
/* harmony default export */ __webpack_exports__["default"] = (Pin);

var _c;

$RefreshReg$(_c, "Pin");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Room.tsx":
/*!*****************************!*\
  !*** ./components/Room.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./helpers/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _styling_roomStyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styling/roomStyles.scss */ "./styling/roomStyles.scss");
/* harmony import */ var _styling_roomStyles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styling_roomStyles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Room.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Room = function Room(_ref) {
  var index = _ref.index,
      room = _ref.room,
      showRoomHeader = _ref.showRoomHeader,
      children = _ref.children;
  var color = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["colorClassFromRoomName"])(room);
  var style = {
    msGridColumn: index + 1,
    msGridRow: 1
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showRoomHeader && __jsx("div", {
    className: "room-header ".concat(index % 2 == 0 ? "room-even" : "room-odd"),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Pin"], {
    className: color,
    small: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "room-header-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, room)), children);
};

_c = Room;
/* harmony default export */ __webpack_exports__["default"] = (Room);

var _c;

$RefreshReg$(_c, "Room");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ScheduleTitle.tsx":
/*!**************************************!*\
  !*** ./components/ScheduleTitle.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lines_ellipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lines-ellipsis */ "./node_modules/react-lines-ellipsis/lib/index.modern.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styling_styling_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styling/styling.scss */ "./styling/styling.scss");
/* harmony import */ var _styling_styling_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styling_styling_scss__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\ScheduleTitle.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var ScheduleTitle = function ScheduleTitle(_ref) {
  _s();

  var title = _ref.title,
      id = _ref.id,
      isInSchedule = _ref.isInSchedule,
      clamped = _ref.clamped;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      over = _React$useState2[0],
      setOver = _React$useState2[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, isInSchedule && __jsx("div", {
    onMouseOver: function onMouseOver() {
      return setOver(true);
    },
    onMouseOut: function onMouseOut() {
      return setOver(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(react_lines_ellipsis__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      wordBreak: 'break-word',
      display: over ? 'none' : 'block'
    },
    className: "title",
    text: title,
    maxLine: "3",
    ellipsis: "...",
    trimRight: true,
    basedOn: "letters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./talksAndSpeakers/#".concat(encodeURIComponent(id)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "title-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("h1", {
    className: "title",
    style: {
      display: over ? 'block' : 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, title)))), !isInSchedule && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./schedule/#".concat(encodeURIComponent(id)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "title-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "title",
    style: {
      display: over ? 'none' : 'block'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, title))));
};

_s(ScheduleTitle, "siF0XJYDDBoO/CBRuKJBjeP7Iig=");

_c = ScheduleTitle;
/* harmony default export */ __webpack_exports__["default"] = (ScheduleTitle);

var _c;

$RefreshReg$(_c, "ScheduleTitle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ShowOnlyFavouritesButton.tsx":
/*!*************************************************!*\
  !*** ./components/ShowOnlyFavouritesButton.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styling_onlyFavoritesButtonStyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styling/onlyFavoritesButtonStyles.scss */ "./styling/onlyFavoritesButtonStyles.scss");
/* harmony import */ var _styling_onlyFavoritesButtonStyles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styling_onlyFavoritesButtonStyles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\ShowOnlyFavouritesButton.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ShowOnlyFavoritesButton = function ShowOnlyFavoritesButton(_ref) {
  var showOnlyFavorites = _ref.showOnlyFavorites,
      _onClick = _ref.onClick;
  return __jsx("div", {
    className: "switch ".concat(showOnlyFavorites ? "on" : ""),
    onClick: function onClick() {
      return _onClick(showOnlyFavorites);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "ball",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

_c = ShowOnlyFavoritesButton;
/* harmony default export */ __webpack_exports__["default"] = (ShowOnlyFavoritesButton);

var _c;

$RefreshReg$(_c, "ShowOnlyFavoritesButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Talk.tsx":
/*!*****************************!*\
  !*** ./components/Talk.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./helpers/index.ts");
/* harmony import */ var _styling_talkStyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styling/talkStyles.scss */ "./styling/talkStyles.scss");
/* harmony import */ var _styling_talkStyles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styling_talkStyles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Talk.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FavouriteTalkButtonNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./FavouriteTalkButton */ "./components/FavouriteTalkButton.tsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./FavouriteTalkButton */ "./components/FavouriteTalkButton.tsx")];
    },
    modules: ["./FavouriteTalkButton"]
  }
});
_c2 = FavouriteTalkButtonNoSSR;

var Talk = function Talk(_ref) {
  var hidden = _ref.hidden,
      day = _ref.day,
      timeStart = _ref.timeStart,
      timeEnd = _ref.timeEnd,
      room = _ref.room,
      onFavoriteChange = _ref.onFavoriteChange,
      id = _ref.id,
      type = _ref.type,
      title = _ref.title,
      speaker = _ref.speaker,
      description = _ref.description,
      tags = _ref.tags,
      selectedTags = _ref.selectedTags,
      language = _ref.language,
      onToggleTag = _ref.onToggleTag,
      isInSchedule = _ref.isInSchedule;
  // link to flag images: https://www.gosquared.com/resources/flag-icons/
  var flagPath = "../static/images/".concat(language, "-flag.png");
  return __jsx("div", {
    id: id,
    className: "talk ".concat(hidden ? "talk-hidden" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../../static/clock.svg",
    width: "24",
    height: "24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })), __jsx("span", {
    className: "time-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "time-text-day",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, day, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  })), timeStart && timeStart.toString(), " -", " ", timeEnd && timeEnd.toString())), __jsx("div", {
    className: "room",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Pin"], {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["colorClassFromRoomName"])(room),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })), __jsx("span", {
    className: "text room-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, room)), __jsx("div", {
    className: "language",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "flag-image",
    src: flagPath,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "text language-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Talk language")), __jsx("div", {
    className: "heart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(FavouriteTalkButtonNoSSR, {
    talkId: id,
    onClick: onFavoriteChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "talk-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ScheduleTitle"], {
    id: id,
    title: title,
    isInSchedule: isInSchedule,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), !isInSchedule && __jsx("div", {
    className: "day-and-time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "day",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, day, ":"), __jsx("p", {
    className: "time-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, timeStart && timeStart.toString(), " - ", timeEnd && timeEnd.toString())), isInSchedule && __jsx("p", {
    className: "time-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, timeStart && timeStart.toString(), " - ", timeEnd && timeEnd.toString()), __jsx("p", {
    className: "type-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, type, __jsx("span", {
    className: "duration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "\xA0(", timeEnd && timeStart && timeStart.diff(timeEnd), " min)")), description && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, description), speaker && speaker.map(function (speaker, index) {
    //LAGT TIL INDEX, FJERN INDEX I MAP HVIS ALT TRYNER
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "speaker",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, speaker.name), __jsx("p", {
      className: "info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, speaker.info));
  }), __jsx("div", {
    className: "tags",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, tags && language && tags.concat([language]).map(function (tag) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["FilterTag"], {
      key: tag,
      name: tag,
      selected: selectedTags.includes(tag),
      onClick: function onClick() {
        return onToggleTag(tag);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    });
  })), __jsx("hr", {
    className: "seperator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })));
};

_c3 = Talk;
/* harmony default export */ __webpack_exports__["default"] = (Talk);

var _c, _c2, _c3;

$RefreshReg$(_c, "FavouriteTalkButtonNoSSR$dynamic");
$RefreshReg$(_c2, "FavouriteTalkButtonNoSSR");
$RefreshReg$(_c3, "Talk");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/practicalities.tsx":
/*!**********************************!*\
  !*** ./pages/practicalities.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styling/callForPresentationsStyles.scss */ "./styling/callForPresentationsStyles.scss");
/* harmony import */ var _styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\pages\\practicalities.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Practicalities = function Practicalities() {
  return __jsx("div", {
    className: "practicalities page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    title: "Practical information",
    background: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "document content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "Practical information"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "The Call for Presentations is now open"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Knowit Developer Summit will be held 12th - 13th of November 2021 in Stockholm."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "If you have questions during or before the conference, please feel free to contact us on Slack. We have created a slack-channel,", " ", __jsx("a", {
    className: "paragraphLink",
    href: "https://knowit.slack.com/archives/kds2021",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "#kds2021"), ", for everything regarding the conference, join us and get the latest news! No account on slack? Then", " ", __jsx("a", {
    className: "paragraphLink",
    href: "https://knowit.slack.com/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "sign up"), " ", "first."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "COVID-19 and vaccines."), " Regarding the ongoing pandemic, we will continue to monitor the situation as it develops, and we will update our event policy accordingly. As the conference will be held in Stockholm, we will follow Sweden\u2019s national guidelines in addition to Knowit\u2019s internal COVID-19 guidelines. We will also take the situation in participants\u2019 home countries into consideration. In the event that the vaccine rollout is delayed, we might be forced to postpone the event."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Solidarity."), " As in previous years, we embrace solidarity at Knowit, which means that we all pay the same amount for the conference, regardless of whether we are a speaker or not, where we live, or whether we might need a hotel room. This also applies if you are interested in just holding a presentation and not attending the rest of the conference. Our ambition is that everyone attends the entire conference to meet and learn from fellow colleagues at other Knowit companies."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Payment."), " The fee for the conference will be 3900 SEK, excluding VAT. In addition to the conference, this includes lunch and dinner on Friday, and lunch on Saturday. For those travelling to Stockholm, an overnight stay in a shared double room and breakfast at the hotel on Saturday is also included. If you prefer, you can pay 600 SEK extra to get a single room. Travel costs for those who need to travel to Stockholm are not included."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Location"), " We have booked the Scandic Continental Hotel for accommodation and as our conference venue. It is located in the city center and is very easy to get to either by bus or Arlanda Express from the airport. The train station is also close by; we encourage taking an environmental approach to travelling! You can view the location of the venue", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "paragraphLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, " here")), "."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "More information to come...")))));
};

_c = Practicalities;
/* harmony default export */ __webpack_exports__["default"] = (Practicalities);

var _c;

$RefreshReg$(_c, "Practicalities");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EaWZmaWN1bHR5LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bpbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm9vbS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2NoZWR1bGVUaXRsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvd09ubHlGYXZvdXJpdGVzQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWxrLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJhY3RpY2FsaXRpZXMudHN4Il0sIm5hbWVzIjpbIkRpZmZpY3VsdHkiLCJkaWZmaWN1bHR5IiwiRmlsdGVyIiwib25UYWdDaGFuZ2UiLCJvbkZhdm9yaXRlQ2hhbmdlIiwic2VsZWN0ZWRUYWdzIiwic2hvd09ubHlGYXZvcml0ZXMiLCJjbGFzc05hbWUiLCJ0eXBlIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInRvZ2dsZSIsImFkZFRhZyIsInRhZyIsImNvbmNhdCIsInJlbW92ZVRhZyIsImZpbHRlciIsInQiLCJtYXAiLCJQcm9ncmFtIiwicHJvZ3JhbSIsInRhZ3MiLCJsYW5ndWFnZXMiLCJzb21lIiwiTWVudSIsIlBpbiIsInNtYWxsIiwiY29sb3IiLCJ1bmRlZmluZWQiLCJib3JkZXJDb2xvciIsIlJvb20iLCJpbmRleCIsInJvb20iLCJzaG93Um9vbUhlYWRlciIsImNoaWxkcmVuIiwiY29sb3JDbGFzc0Zyb21Sb29tTmFtZSIsInN0eWxlIiwibXNHcmlkQ29sdW1uIiwibXNHcmlkUm93IiwiU2NoZWR1bGVUaXRsZSIsInRpdGxlIiwiaWQiLCJpc0luU2NoZWR1bGUiLCJjbGFtcGVkIiwiUmVhY3QiLCJvdmVyIiwic2V0T3ZlciIsIndvcmRCcmVhayIsImRpc3BsYXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTaG93T25seUZhdm9yaXRlc0J1dHRvbiIsIm9uQ2xpY2siLCJGYXZvdXJpdGVUYWxrQnV0dG9uTm9TU1IiLCJkeW5hbWljIiwic3NyIiwiVGFsayIsImhpZGRlbiIsImRheSIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJzcGVha2VyIiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsIm9uVG9nZ2xlVGFnIiwiZmxhZ1BhdGgiLCJ0b1N0cmluZyIsImRpZmYiLCJuYW1lIiwiaW5mbyIsImluY2x1ZGVzIiwiUHJhY3RpY2FsaXRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQU1BO0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUM7QUFBQSxNQUFsQ0MsVUFBa0MsUUFBbENBLFVBQWtDO0FBQ3RELFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQ0UsYUFBUyxtQkFDUEEsVUFBVSxJQUFJLGNBQWQsSUFBZ0NBLFVBQVUsSUFBSSxVQUE5QyxHQUNJLFFBREosR0FFSSxFQUhHLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBVUU7QUFDRSxhQUFTLGtCQUFXQSxVQUFVLElBQUksVUFBZCxHQUEyQixRQUEzQixHQUFzQyxFQUFqRCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURGO0FBZ0JELENBakJEOztLQUFNRCxVO0FBbUJTQSx5RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxpbmcvZGlmZmljdWx0eVN0eWxlcy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgRGlmZmljdWx0eVByb3BzIHtcclxuICBkaWZmaWN1bHR5OiBhbnk7XHJcbn1cclxuXHJcbi8vQ0xTWFxyXG5cclxuY29uc3QgRGlmZmljdWx0eSA9ICh7IGRpZmZpY3VsdHkgfTogRGlmZmljdWx0eVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlmZmljdWx0eVwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2BmaXJzdCBhY3RpdmVgfT48L3NwYW4+XHJcbiAgICAgIHsvKmNsc3goXCJzZWNvbmRcIiwge2FjdGl2ZTogZGlmZmljdWx0eSA9PSBcIkludGVybWVkaWF0ZVwiIHx8IGRpZmZpY3VsdHkgPT0gXCJBZHZhbmNlZFwifSkgKi99XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgc2Vjb25kICR7XHJcbiAgICAgICAgICBkaWZmaWN1bHR5ID09IFwiSW50ZXJtZWRpYXRlXCIgfHwgZGlmZmljdWx0eSA9PSBcIkFkdmFuY2VkXCJcclxuICAgICAgICAgICAgPyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+PC9zcGFuPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17YHRoaXJkICR7ZGlmZmljdWx0eSA9PSBcIkFkdmFuY2VkXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICA+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpZmZpY3VsdHk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZ3JhbSBmcm9tIFwiLi4vbW9kZWxzL2RhdGEuanNvblwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJUYWcsIFNob3dPbmx5RmF2b3VyaXRlc0J1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsaW5nL2ZpbHRlclN0eWxlcy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgRmlsdGVyUHJvcHMge1xyXG4gIG9uVGFnQ2hhbmdlOiAodGFnczogc3RyaW5nW10pID0+IHZvaWQ7XHJcbiAgb25GYXZvcml0ZUNoYW5nZTogKHZhbDogYm9vbGVhbikgPT4gdm9pZDtcclxuICBzZWxlY3RlZFRhZ3M6IHN0cmluZ1tdO1xyXG4gIHNob3dPbmx5RmF2b3JpdGVzOiBib29sZWFuO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICB0eXBlPzogXCJkcm9wZG93blwiIHwgXCJzbGlkZS1sZWZ0XCI7XHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlciA9ICh7XHJcbiAgb25UYWdDaGFuZ2UsXHJcbiAgb25GYXZvcml0ZUNoYW5nZSxcclxuICBzZWxlY3RlZFRhZ3MsXHJcbiAgc2hvd09ubHlGYXZvcml0ZXMsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHR5cGUsXHJcbn06IEZpbHRlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKCFvcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUYWcgPSAodGFnKSA9PiB7XHJcbiAgICBvblRhZ0NoYW5nZShzZWxlY3RlZFRhZ3MuY29uY2F0KFt0YWddKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVGFnID0gKHRhZykgPT4ge1xyXG4gICAgb25UYWdDaGFuZ2Uoc2VsZWN0ZWRUYWdzLmZpbHRlcigodCkgPT4gdCAhPSB0YWcpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmaWx0ZXItY29udGFpbmVyICR7Y2xhc3NOYW1lfSAke3R5cGUgfHwgXCJzbGlkZS1sZWZ0XCJ9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmlsdGVyLWJ1dHRvbiAke29wZW4gPyBcIm9wZW5cIiA6IFwiXCJ9YH0gb25DbGljaz17dG9nZ2xlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3BcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWlkZGxlXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvdHRvbVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpbHRlciAke29wZW4gPyBcIm9wZW5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2Nsb3NlLTI0cHguc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPkZpbHRlciBieSB0YWc8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPlNob3cgb25seSB5b3VyIGZhdm9yaXRlczogPC9wPlxyXG4gICAgICAgICAgPFNob3dPbmx5RmF2b3VyaXRlc0J1dHRvblxyXG4gICAgICAgICAgICBzaG93T25seUZhdm9yaXRlcz17c2hvd09ubHlGYXZvcml0ZXN9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRmF2b3JpdGVDaGFuZ2UoIXNob3dPbmx5RmF2b3JpdGVzKX1cclxuICAgICAgICAgID48L1Nob3dPbmx5RmF2b3VyaXRlc0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPkFjdGl2ZSBmaWx0ZXJzOjwvcD5cclxuICAgICAgICAgIHtzZWxlY3RlZFRhZ3MgJiZcclxuICAgICAgICAgICAgc2VsZWN0ZWRUYWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZpbHRlclRhZ1xyXG4gICAgICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXt0YWd9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgID48L0ZpbHRlclRhZz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub25BY3RpdmVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPkNsaWNrIHRvIHNlbGVjdCBmaWx0ZXJzPC9wPlxyXG4gICAgICAgICAge1Byb2dyYW0ucHJvZ3JhbS50YWdzXHJcbiAgICAgICAgICAgIC5jb25jYXQoUHJvZ3JhbS5wcm9ncmFtLmxhbmd1YWdlcylcclxuICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAodGFnKSA9PiBzZWxlY3RlZFRhZ3MgJiYgIXNlbGVjdGVkVGFncy5zb21lKCh0KSA9PiB0ID09IHRhZylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICA8RmlsdGVyVGFnXHJcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgICAgIG5hbWU9e3RhZ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgID48L0ZpbHRlclRhZz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxpbmcvbWVudVN0eWxlcy5zY3NzXCI7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJtZW51VG9nZ2xlXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm1lbnVcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudUJ1dHRvblwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9wXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1pZGRsZVwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib3R0b21cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiZmlsdGVyXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZW51SGVhZGVyXCI+TWVudTwvaDE+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhbGxGb3JQcmVzZW50YXRpb25zXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmsgY2FsbEZvclByZXNlbnRhdGlvbnNcIj5DYWxsIGZvciBQcmVzZW50YXRpb25zPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmFjdGljYWxpdGllc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIHByYWN0aWNhbGl0aWVzXCI+UHJhY3RpY2FsaXRpZXM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL3NjaGVkdWxlXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmsgc2NoZWR1bGVcIj5TY2hlZHVsZTwvYT5cclxuICA8L0xpbms+ICovfVxyXG5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRVc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGFib3V0VXNcIj5BYm91dCBLRFM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgey8qPExpbmsgaHJlZj1cIi90YWxrc0FuZFNwZWFrZXJzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmsgdGFsa3NBbmRTcGVha2Vyc1wiPlRhbGtzIGFuZCBzcGVha2VyczwvYT5cclxuICAgICAgICA8L0xpbms+ICAqL31cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9jYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBsb2NhdGlvblwiPkxvY2F0aW9uPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RlT2ZDb25kdWN0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmsgY29kZU9mQ29uZHVjdFwiPkNvZGUgb2YgQ29uZHVjdDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGxvZ29cIj5Mb2dvPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8va2RzLWFyY2hpdmUua25vd2l0Lm5vL3NjaGVkdWxlXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj5MYXN0IHllYXIncyBwcm9ncmFtPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsaW5nL3BpblN0eWxlcy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgUGluUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBzbWFsbD86IGJvb2xlYW47XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBpbiA9ICh7IGNsYXNzTmFtZSwgc21hbGwsIGNvbG9yIH06IFBpblByb3BzKSA9PiB7XHJcbiAgY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gXCIjRkYwMEZGXCIgOiBjb2xvcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcGluICR7c21hbGwgPyBcInNtYWxsXCIgOiBcIlwifSAke2NsYXNzTmFtZX1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIiBzdHlsZT17eyBib3JkZXJDb2xvcjogY29sb3IgfX0gLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvdHRvbVwiXHJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGAke2NvbG9yfSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAgdHJhbnNwYXJlbnRgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGluO1xyXG4iLCJpbXBvcnQgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbG9yQ2xhc3NGcm9tUm9vbU5hbWUgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGluZy9yb29tU3R5bGVzLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBSb29tUHJvcHMge1xyXG4gIGluZGV4PzogYW55O1xyXG4gIHJvb206IGFueTtcclxuICBzaG93Um9vbUhlYWRlcjogYm9vbGVhbjtcclxuICBjaGlsZHJlbjogYW55O1xyXG59XHJcblxyXG5jb25zdCBSb29tID0gKHsgaW5kZXgsIHJvb20sIHNob3dSb29tSGVhZGVyLCBjaGlsZHJlbiB9OiBSb29tUHJvcHMpID0+IHtcclxuICBjb25zdCBjb2xvciA9IGNvbG9yQ2xhc3NGcm9tUm9vbU5hbWUocm9vbSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgbXNHcmlkQ29sdW1uOiBpbmRleCArIDEsXHJcbiAgICBtc0dyaWRSb3c6IDEsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93Um9vbUhlYWRlciAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm9vbS1oZWFkZXIgJHtpbmRleCAlIDIgPT0gMCA/IFwicm9vbS1ldmVuXCIgOiBcInJvb20tb2RkXCJ9YH1cclxuICAgICAgICAgIHN0eWxlPXtzdHlsZSBhcyBDU1NQcm9wZXJ0aWVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQaW4gY2xhc3NOYW1lPXtjb2xvcn0gc21hbGw9e3RydWV9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20taGVhZGVyLXRleHRcIj57cm9vbX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmVzRWxsaXBzaXMgZnJvbSAncmVhY3QtbGluZXMtZWxsaXBzaXMnOyBcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsaW5nL3N0eWxpbmcuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZDogYW55O1xyXG4gICAgY2xhbXBlZD86IGJvb2xlYW47XHJcbiAgICBpc0luU2NoZWR1bGU6IGJvb2xlYW47IFxyXG59XHJcblxyXG5jb25zdCBTY2hlZHVsZVRpdGxlID0gKHt0aXRsZSwgaWQsIGlzSW5TY2hlZHVsZSwgY2xhbXBlZH06cHJvcHMpID0+IHtcclxuXHJcbiAgICBsZXQgW292ZXIsIHNldE92ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2lzSW5TY2hlZHVsZSAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCk9PnNldE92ZXIodHJ1ZSl9IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCk9PnNldE92ZXIoZmFsc2UpfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmVzRWxsaXBzaXNcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dvcmRCcmVhazogJ2JyZWFrLXdvcmQnLGRpc3BsYXk6IG92ZXI/ICdub25lJyA6ICdibG9jayd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGluZT0nMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbGlwc2lzPScuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmltUmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VkT249J2xldHRlcnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC4vdGFsa3NBbmRTcGVha2Vycy8jJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17e2Rpc3BsYXk6IG92ZXI/ICdibG9jaycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7IWlzSW5TY2hlZHVsZSAmJiAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC4vc2NoZWR1bGUvIyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7ZGlzcGxheTogb3Zlcj8gJ25vbmUnIDogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTY2hlZHVsZVRpdGxlOyIsImltcG9ydCBcIi4uL3N0eWxpbmcvb25seUZhdm9yaXRlc0J1dHRvblN0eWxlcy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgU2hvd09ubHlGYXZvdXJpdGVzQnV0dG9uUHJvcHMge1xyXG4gIHNob3dPbmx5RmF2b3JpdGVzOiBhbnk7XHJcbiAgb25DbGljazogYW55O1xyXG59XHJcblxyXG5jb25zdCBTaG93T25seUZhdm9yaXRlc0J1dHRvbiA9ICh7XHJcbiAgc2hvd09ubHlGYXZvcml0ZXMsXHJcbiAgb25DbGljayxcclxufTogU2hvd09ubHlGYXZvdXJpdGVzQnV0dG9uUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Bzd2l0Y2ggJHtzaG93T25seUZhdm9yaXRlcyA/IFwib25cIiA6IFwiXCJ9YH1cclxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhzaG93T25seUZhdm9yaXRlcyl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dPbmx5RmF2b3JpdGVzQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgRGlmZmljdWx0eSwgRmlsdGVyVGFnLCBQaW4sIFNjaGVkdWxlVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBjb2xvckNsYXNzRnJvbVJvb21OYW1lIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGluZy90YWxrU3R5bGVzLnNjc3NcIjtcclxuXHJcbmNvbnN0IEZhdm91cml0ZVRhbGtCdXR0b25Ob1NTUiA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi9GYXZvdXJpdGVUYWxrQnV0dG9uXCIpLFxyXG4gIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbiAgfVxyXG4pO1xyXG5cclxuaW50ZXJmYWNlIFRhbGtQcm9wcyB7XHJcbiAgaGlkZGVuOiBib29sZWFuO1xyXG4gIGRheTogYW55O1xyXG4gIHRpbWVTdGFydDogYW55O1xyXG4gIHRpbWVFbmQ6IGFueTtcclxuICByb29tOiBhbnk7XHJcbiAgb25GYXZvcml0ZUNoYW5nZT86ICh2YWwpID0+IHZvaWQ7XHJcbiAgaWQ6IGFueTtcclxuICB0eXBlOiBhbnk7XHJcbiAgdGl0bGU6IGFueTtcclxuICBzcGVha2VyOiBhbnk7XHJcbiAgZGVzY3JpcHRpb24/OiBhbnk7XHJcbiAgdGFnczogYW55O1xyXG4gIHNlbGVjdGVkVGFnczogYW55O1xyXG4gIGxhbmd1YWdlOiBhbnk7XHJcbiAgb25Ub2dnbGVUYWc6IGFueTtcclxuICBpc0luU2NoZWR1bGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFRhbGsgPSAoe1xyXG4gIGhpZGRlbixcclxuICBkYXksXHJcbiAgdGltZVN0YXJ0LFxyXG4gIHRpbWVFbmQsXHJcbiAgcm9vbSxcclxuICBvbkZhdm9yaXRlQ2hhbmdlLFxyXG4gIGlkLFxyXG4gIHR5cGUsXHJcbiAgdGl0bGUsXHJcbiAgc3BlYWtlcixcclxuICBkZXNjcmlwdGlvbixcclxuICB0YWdzLFxyXG4gIHNlbGVjdGVkVGFncyxcclxuICBsYW5ndWFnZSxcclxuICBvblRvZ2dsZVRhZyxcclxuICBpc0luU2NoZWR1bGUsXHJcbn06IFRhbGtQcm9wcykgPT4ge1xyXG4gIFxyXG4gIC8vIGxpbmsgdG8gZmxhZyBpbWFnZXM6IGh0dHBzOi8vd3d3Lmdvc3F1YXJlZC5jb20vcmVzb3VyY2VzL2ZsYWctaWNvbnMvXHJcbiAgY29uc3QgZmxhZ1BhdGggPSBgLi4vc3RhdGljL2ltYWdlcy8ke2xhbmd1YWdlfS1mbGFnLnBuZ2A7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e2B0YWxrICR7aGlkZGVuID8gXCJ0YWxrLWhpZGRlblwiIDogXCJcIn1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9jbG9jay5zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLXRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZS10ZXh0LWRheVwiPlxyXG4gICAgICAgICAgICAgIHtkYXl9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAge3RpbWVTdGFydCAmJiB0aW1lU3RhcnQudG9TdHJpbmcoKX0gLXtcIiBcIn1cclxuICAgICAgICAgICAge3RpbWVFbmQgJiYgdGltZUVuZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxQaW4gY2xhc3NOYW1lPXtjb2xvckNsYXNzRnJvbVJvb21OYW1lKHJvb20pfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHJvb20tbmFtZVwiPntyb29tfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsYWctaW1hZ2VcIiBzcmM9e2ZsYWdQYXRofT48L2ltZz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgbGFuZ3VhZ2UtdGV4dFwiPlRhbGsgbGFuZ3VhZ2U8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydFwiPlxyXG4gICAgICAgICAgPEZhdm91cml0ZVRhbGtCdXR0b25Ob1NTUiB0YWxrSWQ9e2lkfSBvbkNsaWNrPXtvbkZhdm9yaXRlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWxrLWNvbnRlbnRcIj5cclxuICAgICAgICA8U2NoZWR1bGVUaXRsZSBpZD17aWR9IHRpdGxlPXt0aXRsZX0gaXNJblNjaGVkdWxlPXtpc0luU2NoZWR1bGV9IC8+XHJcbiAgICAgICAgeyFpc0luU2NoZWR1bGUgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF5LWFuZC10aW1lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRheVwiPntkYXl9OjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGltZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAge3RpbWVTdGFydCAmJiB0aW1lU3RhcnQudG9TdHJpbmcoKX0gLSB7dGltZUVuZCAmJiB0aW1lRW5kLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICB7aXNJblNjaGVkdWxlICYmXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lLWluZm9cIj5cclxuICAgICAgICAgICAge3RpbWVTdGFydCAmJiB0aW1lU3RhcnQudG9TdHJpbmcoKX0gLSB7dGltZUVuZCAmJiB0aW1lRW5kLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInR5cGUtaW5mb1wiPlxyXG4gICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxyXG4gICAgICAgICAgICAmbmJzcDsoXHJcbiAgICAgICAgICAgIHt0aW1lRW5kICYmIHRpbWVTdGFydCAmJiB0aW1lU3RhcnQuZGlmZih0aW1lRW5kKX0gbWluKVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPHA+e2Rlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgICAge3NwZWFrZXIgJiZcclxuICAgICAgICAgIHNwZWFrZXIubWFwKChzcGVha2VyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvL0xBR1QgVElMIElOREVYLCBGSkVSTiBJTkRFWCBJIE1BUCBIVklTIEFMVCBUUllORVJcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BlYWtlclwiPntzcGVha2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPntzcGVha2VyLmluZm99PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgICBsYW5ndWFnZSAmJlxyXG4gICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgICAgLmNvbmNhdChbbGFuZ3VhZ2VdKVxyXG4gICAgICAgICAgICAgIC5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZpbHRlclRhZ1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgbmFtZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRUYWdzLmluY2x1ZGVzKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlVGFnKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBlcmF0b3JcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRhbGs7IiwiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGluZy9jYWxsRm9yUHJlc2VudGF0aW9uc1N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgUHJhY3RpY2FsaXRpZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJhY3RpY2FsaXRpZXMgcGFnZVwiPlxyXG4gICAgICA8TGF5b3V0IHRpdGxlPVwiUHJhY3RpY2FsIGluZm9ybWF0aW9uXCIgYmFja2dyb3VuZD17dHJ1ZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N1bWVudCBjb250ZW50XCI+XHJcbiAgICAgICAgICA8aDE+UHJhY3RpY2FsIGluZm9ybWF0aW9uPC9oMT5cclxuICAgICAgICAgIDxwPlRoZSBDYWxsIGZvciBQcmVzZW50YXRpb25zIGlzIG5vdyBvcGVuPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEtub3dpdCBEZXZlbG9wZXIgU3VtbWl0IHdpbGwgYmUgaGVsZCAxMnRoIC0gMTN0aCBvZiBOb3ZlbWJlciAyMDIxIGluXHJcbiAgICAgICAgICAgIFN0b2NraG9sbS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBJZiB5b3UgaGF2ZSBxdWVzdGlvbnMgZHVyaW5nIG9yIGJlZm9yZSB0aGUgY29uZmVyZW5jZSwgcGxlYXNlIGZlZWxcclxuICAgICAgICAgICAgZnJlZSB0byBjb250YWN0IHVzIG9uIFNsYWNrLiBXZSBoYXZlIGNyZWF0ZWQgYSBzbGFjay1jaGFubmVsLHtcIiBcIn1cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhZ3JhcGhMaW5rXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9rbm93aXQuc2xhY2suY29tL2FyY2hpdmVzL2tkczIwMjFcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgI2tkczIwMjFcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAsIGZvciBldmVyeXRoaW5nIHJlZ2FyZGluZyB0aGUgY29uZmVyZW5jZSwgam9pbiB1cyBhbmQgZ2V0IHRoZVxyXG4gICAgICAgICAgICBsYXRlc3QgbmV3cyEgTm8gYWNjb3VudCBvbiBzbGFjaz8gVGhlbntcIiBcIn1cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFyYWdyYXBoTGlua1wiIGhyZWY9XCJodHRwczovL2tub3dpdC5zbGFjay5jb20vc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgc2lnbiB1cFxyXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICBmaXJzdC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkNPVklELTE5IGFuZCB2YWNjaW5lcy48L3N0cm9uZz4gUmVnYXJkaW5nIHRoZSBvbmdvaW5nIFxyXG4gICAgICAgICAgICBwYW5kZW1pYywgd2Ugd2lsbCBjb250aW51ZSB0byBtb25pdG9yIHRoZSBzaXR1YXRpb24gYXMgaXQgZGV2ZWxvcHMsIFxyXG4gICAgICAgICAgICBhbmQgd2Ugd2lsbCB1cGRhdGUgb3VyIGV2ZW50IHBvbGljeSBhY2NvcmRpbmdseS4gQXMgdGhlIGNvbmZlcmVuY2UgXHJcbiAgICAgICAgICAgIHdpbGwgYmUgaGVsZCBpbiBTdG9ja2hvbG0sIHdlIHdpbGwgZm9sbG93IFN3ZWRlbuKAmXMgbmF0aW9uYWwgXHJcbiAgICAgICAgICAgIGd1aWRlbGluZXMgaW4gYWRkaXRpb24gdG8gS25vd2l04oCZcyBpbnRlcm5hbCBDT1ZJRC0xOSBndWlkZWxpbmVzLiBcclxuICAgICAgICAgICAgV2Ugd2lsbCBhbHNvIHRha2UgdGhlIHNpdHVhdGlvbiBpbiBwYXJ0aWNpcGFudHPigJkgaG9tZSBjb3VudHJpZXMgaW50byBcclxuICAgICAgICAgICAgY29uc2lkZXJhdGlvbi4gSW4gdGhlIGV2ZW50IHRoYXQgdGhlIHZhY2NpbmUgcm9sbG91dCBpcyBkZWxheWVkLCB3ZSBcclxuICAgICAgICAgICAgbWlnaHQgYmUgZm9yY2VkIHRvIHBvc3Rwb25lIHRoZSBldmVudC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlNvbGlkYXJpdHkuPC9zdHJvbmc+IEFzIGluIHByZXZpb3VzIHllYXJzLCB3ZSBlbWJyYWNlIFxyXG4gICAgICAgICAgICBzb2xpZGFyaXR5IGF0IEtub3dpdCwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBhbGwgcGF5IHRoZSBzYW1lIGFtb3VudCBcclxuICAgICAgICAgICAgZm9yIHRoZSBjb25mZXJlbmNlLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgd2UgYXJlIGEgc3BlYWtlciBvciBub3QsIFxyXG4gICAgICAgICAgICB3aGVyZSB3ZSBsaXZlLCBvciB3aGV0aGVyIHdlIG1pZ2h0IG5lZWQgYSBob3RlbCByb29tLiBUaGlzIGFsc28gXHJcbiAgICAgICAgICAgIGFwcGxpZXMgaWYgeW91IGFyZSBpbnRlcmVzdGVkIGluIGp1c3QgaG9sZGluZyBhIHByZXNlbnRhdGlvbiBhbmQgXHJcbiAgICAgICAgICAgIG5vdCBhdHRlbmRpbmcgdGhlIHJlc3Qgb2YgdGhlIGNvbmZlcmVuY2UuIE91ciBhbWJpdGlvbiBpcyB0aGF0IFxyXG4gICAgICAgICAgICBldmVyeW9uZSBhdHRlbmRzIHRoZSBlbnRpcmUgY29uZmVyZW5jZSB0byBtZWV0IGFuZCBsZWFybiBmcm9tIFxyXG4gICAgICAgICAgICBmZWxsb3cgY29sbGVhZ3VlcyBhdCBvdGhlciBLbm93aXQgY29tcGFuaWVzLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+UGF5bWVudC48L3N0cm9uZz4gVGhlIGZlZSBmb3IgdGhlIGNvbmZlcmVuY2UgXHJcbiAgICAgICAgICAgIHdpbGwgYmUgMzkwMCBTRUssIGV4Y2x1ZGluZyBWQVQuIEluIGFkZGl0aW9uIHRvIHRoZSBcclxuICAgICAgICAgICAgY29uZmVyZW5jZSwgdGhpcyBpbmNsdWRlcyBsdW5jaCBhbmQgZGlubmVyIG9uIEZyaWRheSwgYW5kIGx1bmNoIG9uIFxyXG4gICAgICAgICAgICBTYXR1cmRheS4gRm9yIHRob3NlIHRyYXZlbGxpbmcgdG8gU3RvY2tob2xtLCBhbiBvdmVybmlnaHQgc3RheSBpbiBhIFxyXG4gICAgICAgICAgICBzaGFyZWQgZG91YmxlIHJvb20gYW5kIGJyZWFrZmFzdCBhdCB0aGUgaG90ZWwgb24gU2F0dXJkYXkgaXMgYWxzbyBcclxuICAgICAgICAgICAgaW5jbHVkZWQuIElmIHlvdSBwcmVmZXIsIHlvdSBjYW4gcGF5IDYwMCBTRUsgZXh0cmEgdG8gZ2V0IGEgc2luZ2xlIFxyXG4gICAgICAgICAgICByb29tLiBUcmF2ZWwgY29zdHMgZm9yIHRob3NlIHdobyBuZWVkIHRvIHRyYXZlbCB0byBTdG9ja2hvbG0gYXJlIG5vdCBcclxuICAgICAgICAgICAgaW5jbHVkZWQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHN0cm9uZz5Mb2NhdGlvbjwvc3Ryb25nPiBXZSBoYXZlIGJvb2tlZCB0aGUgU2NhbmRpYyBDb250aW5lbnRhbCBcclxuICAgICAgICAgICAgSG90ZWwgZm9yIGFjY29tbW9kYXRpb24gYW5kIGFzIG91ciBjb25mZXJlbmNlIHZlbnVlLiBJdCBpcyBsb2NhdGVkIFxyXG4gICAgICAgICAgICBpbiB0aGUgY2l0eSBjZW50ZXIgYW5kIGlzIHZlcnkgZWFzeSB0byBnZXQgdG8gZWl0aGVyIGJ5IGJ1cyBvciBcclxuICAgICAgICAgICAgQXJsYW5kYSBFeHByZXNzIGZyb20gdGhlIGFpcnBvcnQuIFRoZSB0cmFpbiBzdGF0aW9uIGlzIGFsc28gY2xvc2UgXHJcbiAgICAgICAgICAgIGJ5OyB3ZSBlbmNvdXJhZ2UgdGFraW5nIGFuIGVudmlyb25tZW50YWwgYXBwcm9hY2ggdG8gdHJhdmVsbGluZyFcclxuICAgICAgICAgICAgWW91IGNhbiB2aWV3IHRoZSBsb2NhdGlvbiBvZiB0aGUgdmVudWUgXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9jYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFyYWdyYXBoTGlua1wiPiBoZXJlPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Ryb25nPk1vcmUgaW5mb3JtYXRpb24gdG8gY29tZS4uLjwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgey8qPHA+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+RGlubmVyLjwvc3Ryb25nPiBXZSB3aWxsIGVhdCBkaW5uZXIgaW4gZGlmZmVyZW50IGdyb3VwcyBvblxyXG4gICAgICAgICAgICBGcmlkYXkuIEFsbCB3aG8gaGF2ZSBzYWlkIHllcyB0byBkaW5uZXIgd2hlbiB0aGV5IHNpZ25lZCB1cCBzaG91bGRcclxuICAgICAgICAgICAgaGF2ZSBnb3R0ZW4gYW4gZW1haWwgYWJvdXQgd2hlbiBhbmQgd2hlcmUgdGhleSBhcmUgaGF2aW5nIGRpbm5lci5cclxuICAgICAgICAgICAgQWZ0ZXIgZGlubmVyIHdlIHdpbGwgZ2F0aGVyIGF0IGEgbG9jYWwgYmFyIGNhbGxlZCBTYWxvbmcsIHdoZXJlIHlvdVxyXG4gICAgICAgICAgICBjYW4gdXNlIHlvdXIgZHJpbmsgdGlja2V0cy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Ryb25nPk5hbWUgYmFkZ2VzPC9zdHJvbmc+IHdpbGwgYmUgaGFuZGVkIG91dCBpbiBvcmRlciB0byBtYWtlIGl0XHJcbiAgICAgICAgICAgIGVhc2llciB3aXRoIG5hbWVzIGFuZCBjb21wYW5pZXMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHN0cm9uZz5Ib3RlbCBjaGVjayBpbm48L3N0cm9uZz4uIDE1LjAwLCB0aG91Z2ggdGhlcmUgbWlnaHQgYmUgc29tZVxyXG4gICAgICAgICAgICByb29tcyByZWFkeSBiZWZvcmUgaWYgeW91IGFycml2ZSBlYXJseS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkhvdGVsIGNoZWNrIG91dDwvc3Ryb25nPi4gMTIuMDBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBQbGVhc2Ugc3RheSB1bnRpbCB0aGUgZW5kIG9uIFNhdHVyZGF5LntcIiBcIn1cclxuICAgICAgICAgICAgPHN0cm9uZz5BbGwgc3BlYWtlcnMgZGVzZXJ2ZSBhbiBhdWRpZW5jZS48L3N0cm9uZz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBXZSBoYXZlLCBvbmNlIGFnYWluLCBtYWRlIGEgY29vbCA8c3Ryb25nPktEUyB0LXNoaXJ0PC9zdHJvbmc+LiBFdmVuXHJcbiAgICAgICAgICAgIHRob3VnaCB0aGV5wrRyZSBhd2Vzb21lLCB0aGVyZSBpcyBvbmx5IG9uZSBwZXIgcGVyc29uLiBBcyBzdWNoIGl0XHJcbiAgICAgICAgICAgIHdvdWxkIGJlIGdyZWF0IGlmIHlvdSBvbmx5IHRvb2sgdGhlIHNpemUgeW91IG9yZGVyZWQgYXQgc2lnbnVwLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+U2hhcmUhPC9zdHJvbmc+IFVzZSBoYXNodGFnIDxzdHJvbmc+I2tkczIwMjA8L3N0cm9uZz4gb25cclxuICAgICAgICAgICAgdHdpdHRlciwgYmxvZyBvbiB5b3VyIGNvbXBhbnkgYmxvZ3MgYW5kIG1ha2UgdGhpcyBjb25mZXJlbmNlIHZpc2libGVcclxuICAgICAgICAgICAgdG8gZXZlcnlvbmUhIFRoZXJlIGlzIGxvdHMgb2YgZ3JlYXQgY29udGVudCB0byBiZSBzaGFyZWQuIEJ1dCxcclxuICAgICAgICAgICAgcGxlYXNlIGJlIGNhcmVmdWwgbm90IHRvIHNoYXJlIHNvbWV0aGluZyB0aGF0IGlzIG1hcmtlZCBhc1xyXG4gICAgICAgICAgICBjb25maWRlbnRpYWwgb3IgaXMgY3VzdG9tZXIgcmVsYXRlZC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBXZSB3YW50IGV2ZXJ5Ym9keSB0byBoYXZlIGFuIGF3ZXNvbWUgdGltZS4gSWYgc29tZXRoaW5nIGhhcHBlbnMgdGhhdFxyXG4gICAgICAgICAgICB5b3UgYXJlIG5vdCBjb21mb3J0YWJsZSB3aXRoLCBwbGVhc2UgdGVsbCB1cyEgRm9yIG1vcmUgaW5mb3JtYXRpb24sXHJcbiAgICAgICAgICAgIGNoZWNrIG91dCBvdXIgQ29kZSBvZiBDb25kdWN0e1wiIFwifVxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYXJhZ3JhcGhMaW5rXCIgaHJlZj1cIi9jb2RlT2ZDb25kdWN0XCI+XHJcbiAgICAgICAgICAgICAgaGVyZVxyXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAuXHJcbiAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWxpdGllcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==