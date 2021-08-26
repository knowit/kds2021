webpackHotUpdate_N_E("pages/callForPresentations",{

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
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styling/globalStyles.scss */ "./styling/globalStyles.scss");
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Room.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import "../styling/roomStyles.scss";



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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLnRzeCJdLCJuYW1lcyI6WyJSb29tIiwiaW5kZXgiLCJyb29tIiwic2hvd1Jvb21IZWFkZXIiLCJjaGlsZHJlbiIsImNvbG9yIiwiY29sb3JDbGFzc0Zyb21Sb29tTmFtZSIsInN0eWxlIiwibXNHcmlkQ29sdW1uIiwibXNHcmlkUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFRQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEwRDtBQUFBLE1BQXZEQyxLQUF1RCxRQUF2REEsS0FBdUQ7QUFBQSxNQUFoREMsSUFBZ0QsUUFBaERBLElBQWdEO0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7QUFDckUsTUFBTUMsS0FBSyxHQUFHQyx1RUFBc0IsQ0FBQ0osSUFBRCxDQUFwQztBQUVBLE1BQU1LLEtBQUssR0FBRztBQUNaQyxnQkFBWSxFQUFFUCxLQUFLLEdBQUcsQ0FEVjtBQUVaUSxhQUFTLEVBQUU7QUFGQyxHQUFkO0FBS0EsU0FDRSxtRUFDR04sY0FBYyxJQUNiO0FBQ0UsYUFBUyx3QkFBaUJGLEtBQUssR0FBRyxDQUFSLElBQWEsQ0FBYixHQUFpQixXQUFqQixHQUErQixVQUFoRCxDQURYO0FBRUUsU0FBSyxFQUFFTSxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLCtDQUFEO0FBQUssYUFBUyxFQUFFRixLQUFoQjtBQUF1QixTQUFLLEVBQUUsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ0gsSUFBbkMsQ0FMRixDQUZKLEVBV0dFLFFBWEgsQ0FERjtBQWVELENBdkJEOztLQUFNSixJO0FBeUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxsRm9yUHJlc2VudGF0aW9ucy4xN2ExODQ3Y2MxODAxMmM2OTMyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb2xvckNsYXNzRnJvbVJvb21OYW1lIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuXHJcbi8vaW1wb3J0IFwiLi4vc3R5bGluZy9yb29tU3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGluZy9nbG9iYWxTdHlsZXMuc2Nzc1wiXHJcbmludGVyZmFjZSBSb29tUHJvcHMge1xyXG4gIGluZGV4PzogYW55O1xyXG4gIHJvb206IGFueTtcclxuICBzaG93Um9vbUhlYWRlcjogYm9vbGVhbjtcclxuICBjaGlsZHJlbjogYW55O1xyXG59XHJcblxyXG5jb25zdCBSb29tID0gKHsgaW5kZXgsIHJvb20sIHNob3dSb29tSGVhZGVyLCBjaGlsZHJlbiB9OiBSb29tUHJvcHMpID0+IHtcclxuICBjb25zdCBjb2xvciA9IGNvbG9yQ2xhc3NGcm9tUm9vbU5hbWUocm9vbSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgbXNHcmlkQ29sdW1uOiBpbmRleCArIDEsXHJcbiAgICBtc0dyaWRSb3c6IDEsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93Um9vbUhlYWRlciAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm9vbS1oZWFkZXIgJHtpbmRleCAlIDIgPT0gMCA/IFwicm9vbS1ldmVuXCIgOiBcInJvb20tb2RkXCJ9YH1cclxuICAgICAgICAgIHN0eWxlPXtzdHlsZSBhcyBDU1NQcm9wZXJ0aWVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQaW4gY2xhc3NOYW1lPXtjb2xvcn0gc21hbGw9e3RydWV9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20taGVhZGVyLXRleHRcIj57cm9vbX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9