webpackHotUpdate_N_E("pages/practicalities",{

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
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styling/globalStyles.scss */ "./styling/globalStyles.scss");
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4__);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2hlZHVsZVRpdGxlLnRzeCJdLCJuYW1lcyI6WyJTY2hlZHVsZVRpdGxlIiwidGl0bGUiLCJpZCIsImlzSW5TY2hlZHVsZSIsImNsYW1wZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwib3ZlciIsInNldE92ZXIiLCJ3b3JkQnJlYWsiLCJkaXNwbGF5IiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFRQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThDO0FBQUE7O0FBQUEsTUFBNUNDLEtBQTRDLFFBQTVDQSxLQUE0QztBQUFBLE1BQXJDQyxFQUFxQyxRQUFyQ0EsRUFBcUM7QUFBQSxNQUFqQ0MsWUFBaUMsUUFBakNBLFlBQWlDO0FBQUEsTUFBbkJDLE9BQW1CLFFBQW5CQSxPQUFtQjs7QUFFaEUsd0JBQXNCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF0QjtBQUFBO0FBQUEsTUFBS0MsSUFBTDtBQUFBLE1BQVdDLE9BQVg7O0FBRUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tMLFlBQVksSUFDVDtBQUNBLGVBQVcsRUFBRTtBQUFBLGFBQUlLLE9BQU8sQ0FBQyxJQUFELENBQVg7QUFBQSxLQURiO0FBRUEsY0FBVSxFQUFFO0FBQUEsYUFBSUEsT0FBTyxDQUFDLEtBQUQsQ0FBWDtBQUFBLEtBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDREQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUNDLGVBQVMsRUFBRSxZQUFaO0FBQXlCQyxhQUFPLEVBQUVILElBQUksR0FBRSxNQUFGLEdBQVc7QUFBakQsS0FEWDtBQUVZLGFBQVMsRUFBQyxPQUZ0QjtBQUdZLFFBQUksRUFBRU4sS0FIbEI7QUFJWSxXQUFPLEVBQUMsR0FKcEI7QUFLWSxZQUFRLEVBQUMsS0FMckI7QUFNWSxhQUFTLE1BTnJCO0FBT1ksV0FBTyxFQUFDLFNBUHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQUpBLEVBZ0JJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLGdDQUF5QlUsa0JBQWtCLENBQUNULEVBQUQsQ0FBM0MsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFzQixTQUFLLEVBQUU7QUFBQ1EsYUFBTyxFQUFFSCxJQUFJLEdBQUUsT0FBRixHQUFZO0FBQTFCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS04sS0FETCxDQURKLENBREosQ0FoQkosQ0FGUixFQTRCSyxDQUFDRSxZQUFELElBQ0csTUFBQyxnREFBRDtBQUFNLFFBQUksd0JBQWlCUSxrQkFBa0IsQ0FBQ1QsRUFBRCxDQUFuQyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQXNCLFNBQUssRUFBRTtBQUFDUSxhQUFPLEVBQUVILElBQUksR0FBRSxNQUFGLEdBQVc7QUFBekIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixLQURMLENBREosQ0FESixDQTdCUixDQURKO0FBd0NILENBNUNEOztHQUFNRCxhOztLQUFBQSxhO0FBNkNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcmFjdGljYWxpdGllcy44Zjc5MGU0YThkMTkwNzljMWZkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5lc0VsbGlwc2lzIGZyb20gJ3JlYWN0LWxpbmVzLWVsbGlwc2lzJzsgXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy9pbXBvcnQgXCIuLi9zdHlsaW5nL3N0eWxpbmcuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsaW5nL2dsb2JhbFN0eWxlcy5zY3NzXCJcclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZDogYW55O1xyXG4gICAgY2xhbXBlZD86IGJvb2xlYW47XHJcbiAgICBpc0luU2NoZWR1bGU6IGJvb2xlYW47IFxyXG59XHJcblxyXG5jb25zdCBTY2hlZHVsZVRpdGxlID0gKHt0aXRsZSwgaWQsIGlzSW5TY2hlZHVsZSwgY2xhbXBlZH06cHJvcHMpID0+IHtcclxuXHJcbiAgICBsZXQgW292ZXIsIHNldE92ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2lzSW5TY2hlZHVsZSAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCk9PnNldE92ZXIodHJ1ZSl9IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCk9PnNldE92ZXIoZmFsc2UpfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmVzRWxsaXBzaXNcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dvcmRCcmVhazogJ2JyZWFrLXdvcmQnLGRpc3BsYXk6IG92ZXI/ICdub25lJyA6ICdibG9jayd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGluZT0nMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbGlwc2lzPScuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmltUmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VkT249J2xldHRlcnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC4vdGFsa3NBbmRTcGVha2Vycy8jJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17e2Rpc3BsYXk6IG92ZXI/ICdibG9jaycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7IWlzSW5TY2hlZHVsZSAmJiAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC4vc2NoZWR1bGUvIyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7ZGlzcGxheTogb3Zlcj8gJ25vbmUnIDogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTY2hlZHVsZVRpdGxlOyJdLCJzb3VyY2VSb290IjoiIn0=