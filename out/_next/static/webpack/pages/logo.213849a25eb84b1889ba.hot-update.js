webpackHotUpdate_N_E("pages/logo",{

/***/ "./pages/logo.tsx":
/*!************************!*\
  !*** ./pages/logo.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styling/callForPresentationsStyles.scss */ "./styling/callForPresentationsStyles.scss");
/* harmony import */ var _styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styling_callForPresentationsStyles_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styling_logoStyles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styling/logoStyles.scss */ "./styling/logoStyles.scss");
/* harmony import */ var _styling_logoStyles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styling_logoStyles_scss__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _templateObject,
    _templateObject2,
    _templateObject3,
    _jsxFileName = "C:\\Repos\\KDS\\kds2021\\pages\\logo.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // This line must be included, or else main menu will break. 



var Logo = function Logo() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  "])));
  var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: left;\n  "])));
  var Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 200px;\n  "])));
  return __jsx("div", {
    className: "logo page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    title: "Logo",
    background: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "document content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Logo in .png format"), __jsx(Image, {
    src: "../static/KDS_Logo_2021.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Logo in .svg format"), __jsx(Image, {
    src: "../static/KDSsymbol.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })))));
};

_c = Logo;
/* harmony default export */ __webpack_exports__["default"] = (Logo);

var _c;

$RefreshReg$(_c, "Logo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9nby50c3giXSwibmFtZXMiOlsiTG9nbyIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsImgxIiwiSW1hZ2UiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHcUQ7O0FBQ3JEOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsTUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLDRQQUFmO0FBT0EsTUFBTUMsTUFBTSxHQUFHRix5REFBTSxDQUFDRyxFQUFWLDRLQUFaO0FBSUEsTUFBTUMsS0FBSyxHQUFHSix5REFBTSxDQUFDSyxHQUFWLHdLQUFYO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBcUIsY0FBVSxFQUFFLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFLE1BQUMsS0FBRDtBQUFPLE9BQUcsRUFBQyw2QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIRixFQUlFLE1BQUMsS0FBRDtBQUFPLE9BQUcsRUFBQyx5QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixDQURGLENBREYsQ0FERjtBQWNELENBOUJEOztLQUFNUCxJO0FBK0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dvLjIxMzg0OWEyNWViODRiMTg4OWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuXHJcbmltcG9ydCBcIi4uL3N0eWxpbmcvY2FsbEZvclByZXNlbnRhdGlvbnNTdHlsZXMuc2Nzc1wiOyAvLyBUaGlzIGxpbmUgbXVzdCBiZSBpbmNsdWRlZCwgb3IgZWxzZSBtYWluIG1lbnUgd2lsbCBicmVhay4gXHJcbmltcG9ydCBcIi4uL3N0eWxpbmcvbG9nb1N0eWxlcy5zY3NzXCI7XHJcblxyXG5jb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBgO1xyXG5cclxuICBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaDFgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGA7XHJcblxyXG4gIGNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICBgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIHBhZ2VcIj5cclxuICAgICAgPExheW91dCB0aXRsZT1cIkxvZ29cIiBiYWNrZ3JvdW5kPXt0cnVlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3VtZW50IGNvbnRlbnRcIj5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+TG9nbyBpbiAucG5nIGZvcm1hdDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiLi4vc3RhdGljL0tEU19Mb2dvXzIwMjEucG5nXCIgLz5cclxuICAgICAgICAgICAgPEhlYWRlcj5Mb2dvIGluIC5zdmcgZm9ybWF0PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIuLi9zdGF0aWMvS0RTc3ltYm9sLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dvOyJdLCJzb3VyY2VSb290IjoiIn0=