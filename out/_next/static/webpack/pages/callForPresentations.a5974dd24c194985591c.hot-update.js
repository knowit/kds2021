webpackHotUpdate_N_E("pages/callForPresentations",{

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


var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\ScheduleTitle.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //import "../styling/styling.scss";

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2hlZHVsZVRpdGxlLnRzeCJdLCJuYW1lcyI6WyJTY2hlZHVsZVRpdGxlIiwidGl0bGUiLCJpZCIsImlzSW5TY2hlZHVsZSIsImNsYW1wZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwib3ZlciIsInNldE92ZXIiLCJ3b3JkQnJlYWsiLCJkaXNwbGF5IiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBU0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUE4QztBQUFBOztBQUFBLE1BQTVDQyxLQUE0QyxRQUE1Q0EsS0FBNEM7QUFBQSxNQUFyQ0MsRUFBcUMsUUFBckNBLEVBQXFDO0FBQUEsTUFBakNDLFlBQWlDLFFBQWpDQSxZQUFpQztBQUFBLE1BQW5CQyxPQUFtQixRQUFuQkEsT0FBbUI7O0FBRWhFLHdCQUFzQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBdEI7QUFBQTtBQUFBLE1BQUtDLElBQUw7QUFBQSxNQUFXQyxPQUFYOztBQUVBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxZQUFZLElBQ1Q7QUFDQSxlQUFXLEVBQUU7QUFBQSxhQUFJSyxPQUFPLENBQUMsSUFBRCxDQUFYO0FBQUEsS0FEYjtBQUVBLGNBQVUsRUFBRTtBQUFBLGFBQUlBLE9BQU8sQ0FBQyxLQUFELENBQVg7QUFBQSxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw0REFBRDtBQUNJLFNBQUssRUFBRTtBQUFDQyxlQUFTLEVBQUUsWUFBWjtBQUF5QkMsYUFBTyxFQUFFSCxJQUFJLEdBQUUsTUFBRixHQUFXO0FBQWpELEtBRFg7QUFFWSxhQUFTLEVBQUMsT0FGdEI7QUFHWSxRQUFJLEVBQUVOLEtBSGxCO0FBSVksV0FBTyxFQUFDLEdBSnBCO0FBS1ksWUFBUSxFQUFDLEtBTHJCO0FBTVksYUFBUyxNQU5yQjtBQU9ZLFdBQU8sRUFBQyxTQVBwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FKQSxFQWdCSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxnQ0FBeUJVLGtCQUFrQixDQUFDVCxFQUFELENBQTNDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBc0IsU0FBSyxFQUFFO0FBQUNRLGFBQU8sRUFBRUgsSUFBSSxHQUFFLE9BQUYsR0FBWTtBQUExQixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tOLEtBREwsQ0FESixDQURKLENBaEJKLENBRlIsRUE0QkssQ0FBQ0UsWUFBRCxJQUNHLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLHdCQUFpQlEsa0JBQWtCLENBQUNULEVBQUQsQ0FBbkMsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFzQixTQUFLLEVBQUU7QUFBQ1EsYUFBTyxFQUFFSCxJQUFJLEdBQUUsTUFBRixHQUFXO0FBQXpCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS04sS0FETCxDQURKLENBREosQ0E3QlIsQ0FESjtBQXdDSCxDQTVDRDs7R0FBTUQsYTs7S0FBQUEsYTtBQTZDU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsbEZvclByZXNlbnRhdGlvbnMuYTU5NzRkZDI0YzE5NDk4NTU5MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluZXNFbGxpcHNpcyBmcm9tICdyZWFjdC1saW5lcy1lbGxpcHNpcyc7IFxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vaW1wb3J0IFwiLi4vc3R5bGluZy9zdHlsaW5nLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWQ6IGFueTtcclxuICAgIGNsYW1wZWQ/OiBib29sZWFuO1xyXG4gICAgaXNJblNjaGVkdWxlOiBib29sZWFuOyBcclxufVxyXG5cclxuY29uc3QgU2NoZWR1bGVUaXRsZSA9ICh7dGl0bGUsIGlkLCBpc0luU2NoZWR1bGUsIGNsYW1wZWR9OnByb3BzKSA9PiB7XHJcblxyXG4gICAgbGV0IFtvdmVyLCBzZXRPdmVyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtpc0luU2NoZWR1bGUgJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpPT5zZXRPdmVyKHRydWUpfSBcclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpPT5zZXRPdmVyKGZhbHNlKX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5lc0VsbGlwc2lzXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3b3JkQnJlYWs6ICdicmVhay13b3JkJyxkaXNwbGF5OiBvdmVyPyAnbm9uZScgOiAnYmxvY2snfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExpbmU9JzMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGxpcHNpcz0nLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpbVJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlZE9uPSdsZXR0ZXJzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AuL3RhbGtzQW5kU3BlYWtlcnMvIyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3tkaXNwbGF5OiBvdmVyPyAnYmxvY2snIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeyFpc0luU2NoZWR1bGUgJiYgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AuL3NjaGVkdWxlLyMke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17e2Rpc3BsYXk6IG92ZXI/ICdub25lJyA6ICdibG9jayd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2NoZWR1bGVUaXRsZTsiXSwic291cmNlUm9vdCI6IiJ9