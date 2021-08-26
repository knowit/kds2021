webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styling/globalStyles.scss */ "./styling/globalStyles.scss");
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //import "../styling/headerStyles.scss";
//import "../styling/styling.scss";



var Layout = function Layout(_ref) {
  var hideLogo = _ref.hideLogo,
      header = _ref.header,
      background = _ref.background,
      title = _ref.title,
      children = _ref.children;
  return __jsx("div", {
    className: "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, title || "Knowit Developer Summit")), __jsx("div", {
    className: "menuAndHeader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, hideLogo !== true && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("img", {
    id: "KDSlogo",
    className: hideLogo ? "hide-".concat(hideLogo) : "",
    src: "../static/KDSsymbol.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }))), __jsx("div", {
    id: "KDSheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "By Developers, For Developers"), __jsx("h3", {
    className: "header-location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("img", {
    id: "location-img",
    src: "../static/location.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), "Stockholm, Sweden 12 - 13 November 2021", __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), header)), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), background && __jsx("img", {
    src: "../static/code.svg",
    className: "background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 22
    }
  }), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, children));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImhpZGVMb2dvIiwiaGVhZGVyIiwiYmFja2dyb3VuZCIsInRpdGxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBQ0E7O0FBU0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FNSTtBQUFBLE1BTGpCQyxRQUtpQixRQUxqQkEsUUFLaUI7QUFBQSxNQUpqQkMsTUFJaUIsUUFKakJBLE1BSWlCO0FBQUEsTUFIakJDLFVBR2lCLFFBSGpCQSxVQUdpQjtBQUFBLE1BRmpCQyxLQUVpQixRQUZqQkEsS0FFaUI7QUFBQSxNQURqQkMsUUFDaUIsUUFEakJBLFFBQ2lCO0FBQ2pCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRCxLQUFLLElBQUkseUJBQWpCLENBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxRQUFRLEtBQUssSUFBYixJQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsTUFBRSxFQUFDLFNBREw7QUFFRSxhQUFTLEVBQUVBLFFBQVEsa0JBQVdBLFFBQVgsSUFBd0IsRUFGN0M7QUFHRSxPQUFHLEVBQUMseUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FGSixFQVlFO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FERixFQUVFO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxjQUFSO0FBQXVCLE9BQUcsRUFBQyx3QkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLDZDQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUZGLEVBT0dDLE1BUEgsQ0FaRixDQURGLEVBdUJFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixDQUpGLEVBNkJHQyxVQUFVLElBQUk7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBOEIsYUFBUyxFQUFDLFlBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QmpCLEVBOEJFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQkUsUUFBMUIsQ0E5QkYsQ0FERjtBQWtDRCxDQXpDRDs7S0FBTUwsTTtBQTJDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjc1OTg4M2ExOGZjODE1YjM4N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEZpbHRlciwgTWVudSB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcblxyXG4vL2ltcG9ydCBcIi4uL3N0eWxpbmcvaGVhZGVyU3R5bGVzLnNjc3NcIjtcclxuLy9pbXBvcnQgXCIuLi9zdHlsaW5nL3N0eWxpbmcuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsaW5nL2dsb2JhbFN0eWxlcy5zY3NzXCJcclxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcclxuICBoaWRlTG9nbz86IFwic21hbGxcIiB8IFwibGFyZ2VcIiB8IGJvb2xlYW47XHJcbiAgaGVhZGVyPzogYW55O1xyXG4gIGJhY2tncm91bmQ/OiBib29sZWFuO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7XHJcbiAgaGlkZUxvZ28sXHJcbiAgaGVhZGVyLFxyXG4gIGJhY2tncm91bmQsXHJcbiAgdGl0bGUsXHJcbiAgY2hpbGRyZW4sXHJcbn06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGUgfHwgXCJLbm93aXQgRGV2ZWxvcGVyIFN1bW1pdFwifTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51QW5kSGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIHtoaWRlTG9nbyAhPT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiS0RTbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aGlkZUxvZ28gPyBgaGlkZS0ke2hpZGVMb2dvfWAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvS0RTc3ltYm9sLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgaWQ9XCJLRFNoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+QnkgRGV2ZWxvcGVycywgRm9yIERldmVsb3BlcnM8L2gyPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGVyLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBpZD1cImxvY2F0aW9uLWltZ1wiIHNyYz1cIi4uL3N0YXRpYy9sb2NhdGlvbi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgIFN0b2NraG9sbSwgU3dlZGVuIDEyIC0gMTMgTm92ZW1iZXIgMjAyMVxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICB7aGVhZGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1lbnUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtiYWNrZ3JvdW5kICYmIDxpbWcgc3JjPVwiLi4vc3RhdGljL2NvZGUuc3ZnXCIgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIC8+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9