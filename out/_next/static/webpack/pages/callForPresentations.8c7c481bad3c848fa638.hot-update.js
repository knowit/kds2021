webpackHotUpdate_N_E("pages/callForPresentations",{

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

/***/ "./pages/callForPresentations.tsx":
/*!****************************************!*\
  !*** ./pages/callForPresentations.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styling/callForPresentationsStyles.scss */ "./styling/callForPresentationsStyles.scss");
/* harmony import */ var _styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\pages\\callForPresentations.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var CallForPresentations = function CallForPresentations() {
  return __jsx("div", {
    className: "callForPresentations page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    title: "Call for Presentations",
    header: __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["RegisterButton"], {
      url: "https://docs.google.com/forms/d/1-0n_08zyFXJGEHRJ2RM-sFxZZYepEbhxwQigECMXqfs",
      name: "Register your presentation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }),
    background: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "document cfp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Call for Presentations"), __jsx("div", {
    className: "info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Knowit Developer Summit (KDS) is Knowit's annual internal software developer conference. The 2021 conference will be held on 12 - 13 November at the Scandic Continental in Stockholm, Sweden.", " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "We are now looking for speakers for the conference, the basic idea is to share knowledge and experiences with other developers within Knowit. The length of a presentation can be 10, 30, 60 or 90 minutes. You decide!", " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "For more information about the conference, see the\xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/practicalities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "practical information")), "\xA0page."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Submission deadline is extended to the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 54
    }
  }, "1st of September 2021"), ". You may add just a brief abstract and complete it later; the most important thing right now is to get all the presentations registered. You may submit more than one presentation if you wish. You can also hold a joint presentation; maybe you and a colleague are working on something interesting and would like to present it together?"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "If you have any questions feel free to contact us at\xA0", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "link",
    href: "mailto:kds@knowit.no",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "kds@knowit.no"))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "The subject for a talk can vary widely, you can check out last years program\xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://kds-archive.knowit.no/schedule",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "here")), "\xA0for inspiration. If that is not inspiring enough, here are a few more ideas:"), __jsx("img", {
    className: "wordcloud",
    src: "../static/images/WordCloud2021.png",
    alt: "Wordcloud",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["RegisterButton"], {
    url: "https://docs.google.com/forms/d/1-0n_08zyFXJGEHRJ2RM-sFxZZYepEbhxwQigECMXqfs",
    name: "Register your presentation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))));
};

_c = CallForPresentations;
/* harmony default export */ __webpack_exports__["default"] = (CallForPresentations);

var _c;

$RefreshReg$(_c, "CallForPresentations");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EaWZmaWN1bHR5LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bpbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm9vbS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2NoZWR1bGVUaXRsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvd09ubHlGYXZvdXJpdGVzQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWxrLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbEZvclByZXNlbnRhdGlvbnMudHN4Il0sIm5hbWVzIjpbIkRpZmZpY3VsdHkiLCJkaWZmaWN1bHR5IiwiRmlsdGVyIiwib25UYWdDaGFuZ2UiLCJvbkZhdm9yaXRlQ2hhbmdlIiwic2VsZWN0ZWRUYWdzIiwic2hvd09ubHlGYXZvcml0ZXMiLCJjbGFzc05hbWUiLCJ0eXBlIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInRvZ2dsZSIsImFkZFRhZyIsInRhZyIsImNvbmNhdCIsInJlbW92ZVRhZyIsImZpbHRlciIsInQiLCJtYXAiLCJQcm9ncmFtIiwicHJvZ3JhbSIsInRhZ3MiLCJsYW5ndWFnZXMiLCJzb21lIiwiTWVudSIsIlBpbiIsInNtYWxsIiwiY29sb3IiLCJ1bmRlZmluZWQiLCJib3JkZXJDb2xvciIsIlJvb20iLCJpbmRleCIsInJvb20iLCJzaG93Um9vbUhlYWRlciIsImNoaWxkcmVuIiwiY29sb3JDbGFzc0Zyb21Sb29tTmFtZSIsInN0eWxlIiwibXNHcmlkQ29sdW1uIiwibXNHcmlkUm93IiwiU2NoZWR1bGVUaXRsZSIsInRpdGxlIiwiaWQiLCJpc0luU2NoZWR1bGUiLCJjbGFtcGVkIiwiUmVhY3QiLCJvdmVyIiwic2V0T3ZlciIsIndvcmRCcmVhayIsImRpc3BsYXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTaG93T25seUZhdm9yaXRlc0J1dHRvbiIsIm9uQ2xpY2siLCJGYXZvdXJpdGVUYWxrQnV0dG9uTm9TU1IiLCJkeW5hbWljIiwic3NyIiwiVGFsayIsImhpZGRlbiIsImRheSIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJzcGVha2VyIiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsIm9uVG9nZ2xlVGFnIiwiZmxhZ1BhdGgiLCJ0b1N0cmluZyIsImRpZmYiLCJuYW1lIiwiaW5mbyIsImluY2x1ZGVzIiwiQ2FsbEZvclByZXNlbnRhdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQU1BO0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUM7QUFBQSxNQUFsQ0MsVUFBa0MsUUFBbENBLFVBQWtDO0FBQ3RELFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQ0UsYUFBUyxtQkFDUEEsVUFBVSxJQUFJLGNBQWQsSUFBZ0NBLFVBQVUsSUFBSSxVQUE5QyxHQUNJLFFBREosR0FFSSxFQUhHLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBVUU7QUFDRSxhQUFTLGtCQUFXQSxVQUFVLElBQUksVUFBZCxHQUEyQixRQUEzQixHQUFzQyxFQUFqRCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURGO0FBZ0JELENBakJEOztLQUFNRCxVO0FBbUJTQSx5RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQSxJQTNDRixDQUZGLEVBK0NFLE1BQUMsMERBQUQ7QUFDRSxPQUFHLEVBQUMsOEVBRE47QUFFRSxRQUFJLEVBQUMsNEJBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9DRixDQVZGLENBREYsQ0FERjtBQW1FRCxDQXBFRDs7S0FBTUEsb0I7QUFzRVNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGxGb3JQcmVzZW50YXRpb25zLjhjN2M0ODFiYWQzYzg0OGZhNjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsaW5nL2RpZmZpY3VsdHlTdHlsZXMuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIERpZmZpY3VsdHlQcm9wcyB7XHJcbiAgZGlmZmljdWx0eTogYW55O1xyXG59XHJcblxyXG4vL0NMU1hcclxuXHJcbmNvbnN0IERpZmZpY3VsdHkgPSAoeyBkaWZmaWN1bHR5IH06IERpZmZpY3VsdHlQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpZmZpY3VsdHlcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZmlyc3QgYWN0aXZlYH0+PC9zcGFuPlxyXG4gICAgICB7LypjbHN4KFwic2Vjb25kXCIsIHthY3RpdmU6IGRpZmZpY3VsdHkgPT0gXCJJbnRlcm1lZGlhdGVcIiB8fCBkaWZmaWN1bHR5ID09IFwiQWR2YW5jZWRcIn0pICovfVxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17YHNlY29uZCAke1xyXG4gICAgICAgICAgZGlmZmljdWx0eSA9PSBcIkludGVybWVkaWF0ZVwiIHx8IGRpZmZpY3VsdHkgPT0gXCJBZHZhbmNlZFwiXHJcbiAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPjwvc3Bhbj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzc05hbWU9e2B0aGlyZCAke2RpZmZpY3VsdHkgPT0gXCJBZHZhbmNlZFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWZmaWN1bHR5O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2dyYW0gZnJvbSBcIi4uL21vZGVscy9kYXRhLmpzb25cIjtcclxuaW1wb3J0IHsgRmlsdGVyVGFnLCBTaG93T25seUZhdm91cml0ZXNCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGluZy9maWx0ZXJTdHlsZXMuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIEZpbHRlclByb3BzIHtcclxuICBvblRhZ0NoYW5nZTogKHRhZ3M6IHN0cmluZ1tdKSA9PiB2b2lkO1xyXG4gIG9uRmF2b3JpdGVDaGFuZ2U6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgc2VsZWN0ZWRUYWdzOiBzdHJpbmdbXTtcclxuICBzaG93T25seUZhdm9yaXRlczogYm9vbGVhbjtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgdHlwZT86IFwiZHJvcGRvd25cIiB8IFwic2xpZGUtbGVmdFwiO1xyXG59XHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoe1xyXG4gIG9uVGFnQ2hhbmdlLFxyXG4gIG9uRmF2b3JpdGVDaGFuZ2UsXHJcbiAgc2VsZWN0ZWRUYWdzLFxyXG4gIHNob3dPbmx5RmF2b3JpdGVzLFxyXG4gIGNsYXNzTmFtZSxcclxuICB0eXBlLFxyXG59OiBGaWx0ZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbighb3Blbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVGFnID0gKHRhZykgPT4ge1xyXG4gICAgb25UYWdDaGFuZ2Uoc2VsZWN0ZWRUYWdzLmNvbmNhdChbdGFnXSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVRhZyA9ICh0YWcpID0+IHtcclxuICAgIG9uVGFnQ2hhbmdlKHNlbGVjdGVkVGFncy5maWx0ZXIoKHQpID0+IHQgIT0gdGFnKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmlsdGVyLWNvbnRhaW5lciAke2NsYXNzTmFtZX0gJHt0eXBlIHx8IFwic2xpZGUtbGVmdFwifWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpbHRlci1idXR0b24gJHtvcGVuID8gXCJvcGVuXCIgOiBcIlwifWB9IG9uQ2xpY2s9e3RvZ2dsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9wXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1pZGRsZVwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib3R0b21cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaWx0ZXIgJHtvcGVuID8gXCJvcGVuXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9jbG9zZS0yNHB4LnN2Z1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XHJcbiAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj5GaWx0ZXIgYnkgdGFnPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5TaG93IG9ubHkgeW91ciBmYXZvcml0ZXM6IDwvcD5cclxuICAgICAgICAgIDxTaG93T25seUZhdm91cml0ZXNCdXR0b25cclxuICAgICAgICAgICAgc2hvd09ubHlGYXZvcml0ZXM9e3Nob3dPbmx5RmF2b3JpdGVzfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkZhdm9yaXRlQ2hhbmdlKCFzaG93T25seUZhdm9yaXRlcyl9XHJcbiAgICAgICAgICA+PC9TaG93T25seUZhdm91cml0ZXNCdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5BY3RpdmUgZmlsdGVyczo8L3A+XHJcbiAgICAgICAgICB7c2VsZWN0ZWRUYWdzICYmXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgIDxGaWx0ZXJUYWdcclxuICAgICAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVUYWcodGFnKX1cclxuICAgICAgICAgICAgICA+PC9GaWx0ZXJUYWc+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9uQWN0aXZlXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5DbGljayB0byBzZWxlY3QgZmlsdGVyczwvcD5cclxuICAgICAgICAgIHtQcm9ncmFtLnByb2dyYW0udGFnc1xyXG4gICAgICAgICAgICAuY29uY2F0KFByb2dyYW0ucHJvZ3JhbS5sYW5ndWFnZXMpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKHRhZykgPT4gc2VsZWN0ZWRUYWdzICYmICFzZWxlY3RlZFRhZ3Muc29tZSgodCkgPT4gdCA9PSB0YWcpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZpbHRlclRhZ1xyXG4gICAgICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXt0YWd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRUYWcodGFnKX1cclxuICAgICAgICAgICAgICA+PC9GaWx0ZXJUYWc+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsaW5nL21lbnVTdHlsZXMuc2Nzc1wiO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiByb2xlPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICA8ZGl2IGlkPVwibWVudVRvZ2dsZVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtZW51XCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVCdXR0b25cIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvcFwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGVcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm90dG9tXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImZpbHRlclwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJtZW51XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWVudUhlYWRlclwiPk1lbnU8L2gxPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYWxsRm9yUHJlc2VudGF0aW9uc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGNhbGxGb3JQcmVzZW50YXRpb25zXCI+Q2FsbCBmb3IgUHJlc2VudGF0aW9uczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJhY3RpY2FsaXRpZXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBwcmFjdGljYWxpdGllc1wiPlByYWN0aWNhbGl0aWVzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9zY2hlZHVsZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIHNjaGVkdWxlXCI+U2NoZWR1bGU8L2E+XHJcbiAgPC9MaW5rPiAqL31cclxuXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0VXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBhYm91dFVzXCI+QWJvdXQgS0RTPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvdGFsa3NBbmRTcGVha2Vyc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIHRhbGtzQW5kU3BlYWtlcnNcIj5UYWxrcyBhbmQgc3BlYWtlcnM8L2E+XHJcbiAgICAgICAgPC9MaW5rPiAgKi99XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmsgbG9jYXRpb25cIj5Mb2NhdGlvbjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kZU9mQ29uZHVjdFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGNvZGVPZkNvbmR1Y3RcIj5Db2RlIG9mIENvbmR1Y3Q8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ29cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBsb2dvXCI+TG9nbzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2tkcy1hcmNoaXZlLmtub3dpdC5uby9zY2hlZHVsZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+TGFzdCB5ZWFyJ3MgcHJvZ3JhbTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGluZy9waW5TdHlsZXMuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFBpblByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgc21hbGw/OiBib29sZWFuO1xyXG4gIGNvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQaW4gPSAoeyBjbGFzc05hbWUsIHNtYWxsLCBjb2xvciB9OiBQaW5Qcm9wcykgPT4ge1xyXG4gIGNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IFwiI0ZGMDBGRlwiIDogY29sb3I7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHBpbiAke3NtYWxsID8gXCJzbWFsbFwiIDogXCJcIn0gJHtjbGFzc05hbWV9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGNvbG9yIH19IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJib3R0b21cIlxyXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlckNvbG9yOiBgJHtjb2xvcn0gdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIHRyYW5zcGFyZW50YCB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpbjtcclxuIiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb2xvckNsYXNzRnJvbVJvb21OYW1lIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxpbmcvcm9vbVN0eWxlcy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgUm9vbVByb3BzIHtcclxuICBpbmRleD86IGFueTtcclxuICByb29tOiBhbnk7XHJcbiAgc2hvd1Jvb21IZWFkZXI6IGJvb2xlYW47XHJcbiAgY2hpbGRyZW46IGFueTtcclxufVxyXG5cclxuY29uc3QgUm9vbSA9ICh7IGluZGV4LCByb29tLCBzaG93Um9vbUhlYWRlciwgY2hpbGRyZW4gfTogUm9vbVByb3BzKSA9PiB7XHJcbiAgY29uc3QgY29sb3IgPSBjb2xvckNsYXNzRnJvbVJvb21OYW1lKHJvb20pO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIG1zR3JpZENvbHVtbjogaW5kZXggKyAxLFxyXG4gICAgbXNHcmlkUm93OiAxLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd1Jvb21IZWFkZXIgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHJvb20taGVhZGVyICR7aW5kZXggJSAyID09IDAgPyBcInJvb20tZXZlblwiIDogXCJyb29tLW9kZFwifWB9XHJcbiAgICAgICAgICBzdHlsZT17c3R5bGUgYXMgQ1NTUHJvcGVydGllc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGluIGNsYXNzTmFtZT17Y29sb3J9IHNtYWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWhlYWRlci10ZXh0XCI+e3Jvb219PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5lc0VsbGlwc2lzIGZyb20gJ3JlYWN0LWxpbmVzLWVsbGlwc2lzJzsgXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGluZy9zdHlsaW5nLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWQ6IGFueTtcclxuICAgIGNsYW1wZWQ/OiBib29sZWFuO1xyXG4gICAgaXNJblNjaGVkdWxlOiBib29sZWFuOyBcclxufVxyXG5cclxuY29uc3QgU2NoZWR1bGVUaXRsZSA9ICh7dGl0bGUsIGlkLCBpc0luU2NoZWR1bGUsIGNsYW1wZWR9OnByb3BzKSA9PiB7XHJcblxyXG4gICAgbGV0IFtvdmVyLCBzZXRPdmVyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtpc0luU2NoZWR1bGUgJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpPT5zZXRPdmVyKHRydWUpfSBcclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpPT5zZXRPdmVyKGZhbHNlKX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5lc0VsbGlwc2lzXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3b3JkQnJlYWs6ICdicmVhay13b3JkJyxkaXNwbGF5OiBvdmVyPyAnbm9uZScgOiAnYmxvY2snfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExpbmU9JzMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGxpcHNpcz0nLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpbVJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlZE9uPSdsZXR0ZXJzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AuL3RhbGtzQW5kU3BlYWtlcnMvIyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3tkaXNwbGF5OiBvdmVyPyAnYmxvY2snIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeyFpc0luU2NoZWR1bGUgJiYgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AuL3NjaGVkdWxlLyMke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17e2Rpc3BsYXk6IG92ZXI/ICdub25lJyA6ICdibG9jayd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2NoZWR1bGVUaXRsZTsiLCJpbXBvcnQgXCIuLi9zdHlsaW5nL29ubHlGYXZvcml0ZXNCdXR0b25TdHlsZXMuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFNob3dPbmx5RmF2b3VyaXRlc0J1dHRvblByb3BzIHtcclxuICBzaG93T25seUZhdm9yaXRlczogYW55O1xyXG4gIG9uQ2xpY2s6IGFueTtcclxufVxyXG5cclxuY29uc3QgU2hvd09ubHlGYXZvcml0ZXNCdXR0b24gPSAoe1xyXG4gIHNob3dPbmx5RmF2b3JpdGVzLFxyXG4gIG9uQ2xpY2ssXHJcbn06IFNob3dPbmx5RmF2b3VyaXRlc0J1dHRvblByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgc3dpdGNoICR7c2hvd09ubHlGYXZvcml0ZXMgPyBcIm9uXCIgOiBcIlwifWB9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soc2hvd09ubHlGYXZvcml0ZXMpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93T25seUZhdm9yaXRlc0J1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IERpZmZpY3VsdHksIEZpbHRlclRhZywgUGluLCBTY2hlZHVsZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29sb3JDbGFzc0Zyb21Sb29tTmFtZSB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxpbmcvdGFsa1N0eWxlcy5zY3NzXCI7XHJcblxyXG5jb25zdCBGYXZvdXJpdGVUYWxrQnV0dG9uTm9TU1IgPSBkeW5hbWljKFxyXG4gICgpID0+IGltcG9ydChcIi4vRmF2b3VyaXRlVGFsa0J1dHRvblwiKSxcclxuICB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG4gIH1cclxuKTtcclxuXHJcbmludGVyZmFjZSBUYWxrUHJvcHMge1xyXG4gIGhpZGRlbjogYm9vbGVhbjtcclxuICBkYXk6IGFueTtcclxuICB0aW1lU3RhcnQ6IGFueTtcclxuICB0aW1lRW5kOiBhbnk7XHJcbiAgcm9vbTogYW55O1xyXG4gIG9uRmF2b3JpdGVDaGFuZ2U/OiAodmFsKSA9PiB2b2lkO1xyXG4gIGlkOiBhbnk7XHJcbiAgdHlwZTogYW55O1xyXG4gIHRpdGxlOiBhbnk7XHJcbiAgc3BlYWtlcjogYW55O1xyXG4gIGRlc2NyaXB0aW9uPzogYW55O1xyXG4gIHRhZ3M6IGFueTtcclxuICBzZWxlY3RlZFRhZ3M6IGFueTtcclxuICBsYW5ndWFnZTogYW55O1xyXG4gIG9uVG9nZ2xlVGFnOiBhbnk7XHJcbiAgaXNJblNjaGVkdWxlOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBUYWxrID0gKHtcclxuICBoaWRkZW4sXHJcbiAgZGF5LFxyXG4gIHRpbWVTdGFydCxcclxuICB0aW1lRW5kLFxyXG4gIHJvb20sXHJcbiAgb25GYXZvcml0ZUNoYW5nZSxcclxuICBpZCxcclxuICB0eXBlLFxyXG4gIHRpdGxlLFxyXG4gIHNwZWFrZXIsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgdGFncyxcclxuICBzZWxlY3RlZFRhZ3MsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgb25Ub2dnbGVUYWcsXHJcbiAgaXNJblNjaGVkdWxlLFxyXG59OiBUYWxrUHJvcHMpID0+IHtcclxuICBcclxuICAvLyBsaW5rIHRvIGZsYWcgaW1hZ2VzOiBodHRwczovL3d3dy5nb3NxdWFyZWQuY29tL3Jlc291cmNlcy9mbGFnLWljb25zL1xyXG4gIGNvbnN0IGZsYWdQYXRoID0gYC4uL3N0YXRpYy9pbWFnZXMvJHtsYW5ndWFnZX0tZmxhZy5wbmdgO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtgdGFsayAke2hpZGRlbiA/IFwidGFsay1oaWRkZW5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvY2xvY2suc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZS10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtdGV4dC1kYXlcIj5cclxuICAgICAgICAgICAgICB7ZGF5fVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIHt0aW1lU3RhcnQgJiYgdGltZVN0YXJ0LnRvU3RyaW5nKCl9IC17XCIgXCJ9XHJcbiAgICAgICAgICAgIHt0aW1lRW5kICYmIHRpbWVFbmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb21cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8UGluIGNsYXNzTmFtZT17Y29sb3JDbGFzc0Zyb21Sb29tTmFtZShyb29tKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCByb29tLW5hbWVcIj57cm9vbX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbGFnLWltYWdlXCIgc3JjPXtmbGFnUGF0aH0+PC9pbWc+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IGxhbmd1YWdlLXRleHRcIj5UYWxrIGxhbmd1YWdlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cclxuICAgICAgICAgIDxGYXZvdXJpdGVUYWxrQnV0dG9uTm9TU1IgdGFsa0lkPXtpZH0gb25DbGljaz17b25GYXZvcml0ZUNoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFsay1jb250ZW50XCI+XHJcbiAgICAgICAgPFNjaGVkdWxlVGl0bGUgaWQ9e2lkfSB0aXRsZT17dGl0bGV9IGlzSW5TY2hlZHVsZT17aXNJblNjaGVkdWxlfSAvPlxyXG4gICAgICAgIHshaXNJblNjaGVkdWxlICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRheS1hbmQtdGltZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXlcIj57ZGF5fTo8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpbWUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIHt0aW1lU3RhcnQgJiYgdGltZVN0YXJ0LnRvU3RyaW5nKCl9IC0ge3RpbWVFbmQgJiYgdGltZUVuZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAge2lzSW5TY2hlZHVsZSAmJlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGltZS1pbmZvXCI+XHJcbiAgICAgICAgICAgIHt0aW1lU3RhcnQgJiYgdGltZVN0YXJ0LnRvU3RyaW5nKCl9IC0ge3RpbWVFbmQgJiYgdGltZUVuZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0eXBlLWluZm9cIj5cclxuICAgICAgICAgIHt0eXBlfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cclxuICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICB7dGltZUVuZCAmJiB0aW1lU3RhcnQgJiYgdGltZVN0YXJ0LmRpZmYodGltZUVuZCl9IG1pbilcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwPntkZXNjcmlwdGlvbn08L3A+fVxyXG4gICAgICAgIHtzcGVha2VyICYmXHJcbiAgICAgICAgICBzcGVha2VyLm1hcCgoc3BlYWtlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy9MQUdUIFRJTCBJTkRFWCwgRkpFUk4gSU5ERVggSSBNQVAgSFZJUyBBTFQgVFJZTkVSXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwZWFrZXJcIj57c3BlYWtlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj57c3BlYWtlci5pbmZvfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAge3RhZ3MgJiZcclxuICAgICAgICAgICAgbGFuZ3VhZ2UgJiZcclxuICAgICAgICAgICAgdGFnc1xyXG4gICAgICAgICAgICAgIC5jb25jYXQoW2xhbmd1YWdlXSlcclxuICAgICAgICAgICAgICAubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJUYWdcclxuICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkVGFncy5pbmNsdWRlcyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwZXJhdG9yXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUYWxrOyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTGF5b3V0LCBSZWdpc3RlckJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsaW5nL2NhbGxGb3JQcmVzZW50YXRpb25zU3R5bGVzLnNjc3NcIjtcclxuXHJcbmNvbnN0IENhbGxGb3JQcmVzZW50YXRpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGxGb3JQcmVzZW50YXRpb25zIHBhZ2VcIj5cclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHRpdGxlPVwiQ2FsbCBmb3IgUHJlc2VudGF0aW9uc1wiXHJcbiAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgIDxSZWdpc3RlckJ1dHRvblxyXG4gICAgICAgICAgICB1cmw9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzEtMG5fMDh6eUZYSkdFSFJKMlJNLXNGeFpaWWVwRWJoeHdRaWdFQ01YcWZzXCJcclxuICAgICAgICAgICAgbmFtZT1cIlJlZ2lzdGVyIHlvdXIgcHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgID48L1JlZ2lzdGVyQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrZ3JvdW5kPXt0cnVlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N1bWVudCBjZnBcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkNhbGwgZm9yIFByZXNlbnRhdGlvbnM8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEtub3dpdCBEZXZlbG9wZXIgU3VtbWl0IChLRFMpIGlzIEtub3dpdCdzIGFubnVhbCBpbnRlcm5hbCBzb2Z0d2FyZVxyXG4gICAgICAgICAgICAgIGRldmVsb3BlciBjb25mZXJlbmNlLiBUaGUgMjAyMSBjb25mZXJlbmNlIHdpbGwgYmUgaGVsZCBvbiAxMiAtIDEzXHJcbiAgICAgICAgICAgICAgTm92ZW1iZXIgYXQgdGhlIFNjYW5kaWMgQ29udGluZW50YWwgaW4gU3RvY2tob2xtLCBTd2VkZW4ue1wiIFwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFdlIGFyZSBub3cgbG9va2luZyBmb3Igc3BlYWtlcnMgZm9yIHRoZSBjb25mZXJlbmNlLCB0aGUgYmFzaWMgaWRlYVxyXG4gICAgICAgICAgICAgIGlzIHRvIHNoYXJlIGtub3dsZWRnZSBhbmQgZXhwZXJpZW5jZXMgd2l0aCBvdGhlciBkZXZlbG9wZXJzIHdpdGhpblxyXG4gICAgICAgICAgICAgIEtub3dpdC4gVGhlIGxlbmd0aCBvZiBhIHByZXNlbnRhdGlvbiBjYW4gYmUgMTAsIDMwLCA2MCBvciA5MFxyXG4gICAgICAgICAgICAgIG1pbnV0ZXMuIFlvdSBkZWNpZGUhe1wiIFwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPkZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb25mZXJlbmNlLCBzZWUgdGhlJm5ic3A7XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmFjdGljYWxpdGllc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPnByYWN0aWNhbCBpbmZvcm1hdGlvbjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgJm5ic3A7cGFnZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBTdWJtaXNzaW9uIGRlYWRsaW5lIGlzIGV4dGVuZGVkIHRvIHRoZSA8c3Ryb25nPjFzdCBvZiBTZXB0ZW1iZXIgMjAyMTwvc3Ryb25nPi4gWW91IG1heSBhZGQgXHJcbiAgICAgICAgICAgICAganVzdCBhIGJyaWVmIGFic3RyYWN0IGFuZCBjb21wbGV0ZSBpdCBsYXRlcjsgdGhlIG1vc3QgaW1wb3J0YW50IFxyXG4gICAgICAgICAgICAgIHRoaW5nIHJpZ2h0IG5vdyBpcyB0byBnZXQgYWxsIHRoZSBwcmVzZW50YXRpb25zIHJlZ2lzdGVyZWQuIFlvdSBtYXkgXHJcbiAgICAgICAgICAgICAgc3VibWl0IG1vcmUgdGhhbiBvbmUgcHJlc2VudGF0aW9uIGlmIHlvdSB3aXNoLiBZb3UgY2FuIGFsc28gaG9sZCBhIFxyXG4gICAgICAgICAgICAgIGpvaW50IHByZXNlbnRhdGlvbjsgbWF5YmUgeW91IGFuZCBhIGNvbGxlYWd1ZSBhcmUgd29ya2luZyBvbiBcclxuICAgICAgICAgICAgICBzb21ldGhpbmcgaW50ZXJlc3RpbmcgYW5kIHdvdWxkIGxpa2UgdG8gcHJlc2VudCBpdCB0b2dldGhlcj9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIGZlZWwgZnJlZSB0byBjb250YWN0IHVzIGF0Jm5ic3A7XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj1cIm1haWx0bzprZHNAa25vd2l0Lm5vXCI+XHJcbiAgICAgICAgICAgICAgICAgIGtkc0Brbm93aXQubm9cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgVGhlIHN1YmplY3QgZm9yIGEgdGFsayBjYW4gdmFyeSB3aWRlbHksIHlvdSBjYW4gY2hlY2sgb3V0IGxhc3RcclxuICAgICAgICAgICAgICB5ZWFycyBwcm9ncmFtJm5ic3A7XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8va2RzLWFyY2hpdmUua25vd2l0Lm5vL3NjaGVkdWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+aGVyZTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgJm5ic3A7Zm9yIGluc3BpcmF0aW9uLiBJZiB0aGF0IGlzIG5vdCBpbnNwaXJpbmcgZW5vdWdoLCBoZXJlIGFyZSBhXHJcbiAgICAgICAgICAgICAgZmV3IG1vcmUgaWRlYXM6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3b3JkY2xvdWRcIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL1dvcmRDbG91ZDIwMjEucG5nXCIgYWx0PVwiV29yZGNsb3VkXCI+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxSZWdpc3RlckJ1dHRvblxyXG4gICAgICAgICAgICB1cmw9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzEtMG5fMDh6eUZYSkdFSFJKMlJNLXNGeFpaWWVwRWJoeHdRaWdFQ01YcWZzXCJcclxuICAgICAgICAgICAgbmFtZT1cIlJlZ2lzdGVyIHlvdXIgcHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgID48L1JlZ2lzdGVyQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsRm9yUHJlc2VudGF0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==