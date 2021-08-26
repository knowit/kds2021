webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tLnRzeCJdLCJuYW1lcyI6WyJSb29tIiwiaW5kZXgiLCJyb29tIiwic2hvd1Jvb21IZWFkZXIiLCJjaGlsZHJlbiIsImNvbG9yIiwiY29sb3JDbGFzc0Zyb21Sb29tTmFtZSIsInN0eWxlIiwibXNHcmlkQ29sdW1uIiwibXNHcmlkUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0NBR0E7O0FBU0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBMEQ7QUFBQSxNQUF2REMsS0FBdUQsUUFBdkRBLEtBQXVEO0FBQUEsTUFBaERDLElBQWdELFFBQWhEQSxJQUFnRDtBQUFBLE1BQTFDQyxjQUEwQyxRQUExQ0EsY0FBMEM7QUFBQSxNQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQ3JFLE1BQU1DLEtBQUssR0FBR0MsdUVBQXNCLENBQUNKLElBQUQsQ0FBcEM7QUFFQSxNQUFNSyxLQUFLLEdBQUc7QUFDWkMsZ0JBQVksRUFBRVAsS0FBSyxHQUFHLENBRFY7QUFFWlEsYUFBUyxFQUFFO0FBRkMsR0FBZDtBQUtBLFNBQ0UsbUVBQ0dOLGNBQWMsSUFDYjtBQUNFLGFBQVMsd0JBQWlCRixLQUFLLEdBQUcsQ0FBUixJQUFhLENBQWIsR0FBaUIsV0FBakIsR0FBK0IsVUFBaEQsQ0FEWDtBQUVFLFNBQUssRUFBRU0sS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQywrQ0FBRDtBQUFLLGFBQVMsRUFBRUYsS0FBaEI7QUFBdUIsU0FBSyxFQUFFLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNILElBQW5DLENBTEYsQ0FGSixFQVdHRSxRQVhILENBREY7QUFlRCxDQXZCRDs7S0FBTUosSTtBQXlCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTFmZWViODlkNTBkMjZlNjM5Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29sb3JDbGFzc0Zyb21Sb29tTmFtZSB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcblxyXG4vL2ltcG9ydCBcIi4uL3N0eWxpbmcvcm9vbVN0eWxlcy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgUm9vbVByb3BzIHtcclxuICBpbmRleD86IGFueTtcclxuICByb29tOiBhbnk7XHJcbiAgc2hvd1Jvb21IZWFkZXI6IGJvb2xlYW47XHJcbiAgY2hpbGRyZW46IGFueTtcclxufVxyXG5cclxuY29uc3QgUm9vbSA9ICh7IGluZGV4LCByb29tLCBzaG93Um9vbUhlYWRlciwgY2hpbGRyZW4gfTogUm9vbVByb3BzKSA9PiB7XHJcbiAgY29uc3QgY29sb3IgPSBjb2xvckNsYXNzRnJvbVJvb21OYW1lKHJvb20pO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIG1zR3JpZENvbHVtbjogaW5kZXggKyAxLFxyXG4gICAgbXNHcmlkUm93OiAxLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd1Jvb21IZWFkZXIgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHJvb20taGVhZGVyICR7aW5kZXggJSAyID09IDAgPyBcInJvb20tZXZlblwiIDogXCJyb29tLW9kZFwifWB9XHJcbiAgICAgICAgICBzdHlsZT17c3R5bGUgYXMgQ1NTUHJvcGVydGllc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGluIGNsYXNzTmFtZT17Y29sb3J9IHNtYWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWhlYWRlci10ZXh0XCI+e3Jvb219PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==