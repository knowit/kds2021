webpackHotUpdate_N_E("pages/callForPresentations",{

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
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Filter.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import "../styling/filterStyles.scss";

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIudHN4Il0sIm5hbWVzIjpbIkZpbHRlciIsIm9uVGFnQ2hhbmdlIiwib25GYXZvcml0ZUNoYW5nZSIsInNlbGVjdGVkVGFncyIsInNob3dPbmx5RmF2b3JpdGVzIiwiY2xhc3NOYW1lIiwidHlwZSIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJ0b2dnbGUiLCJhZGRUYWciLCJ0YWciLCJjb25jYXQiLCJyZW1vdmVUYWciLCJmaWx0ZXIiLCJ0IiwibWFwIiwiUHJvZ3JhbSIsInByb2dyYW0iLCJ0YWdzIiwibGFuZ3VhZ2VzIiwic29tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQVdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BT0k7QUFBQTs7QUFBQSxNQU5qQkMsV0FNaUIsUUFOakJBLFdBTWlCO0FBQUEsTUFMakJDLGdCQUtpQixRQUxqQkEsZ0JBS2lCO0FBQUEsTUFKakJDLFlBSWlCLFFBSmpCQSxZQUlpQjtBQUFBLE1BSGpCQyxpQkFHaUIsUUFIakJBLGlCQUdpQjtBQUFBLE1BRmpCQyxTQUVpQixRQUZqQkEsU0FFaUI7QUFBQSxNQURqQkMsSUFDaUIsUUFEakJBLElBQ2lCOztBQUNqQixrQkFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUFoQztBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJELFdBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBUztBQUN0QlgsZUFBVyxDQUFDRSxZQUFZLENBQUNVLE1BQWIsQ0FBb0IsQ0FBQ0QsR0FBRCxDQUFwQixDQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZ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YixDQUFrQixVQUFDTixDQUFEO0FBQUEsYUFBT0EsQ0FBQyxJQUFJSixHQUFaO0FBQUEsS0FBbEIsQ0FBMUI7QUFBQSxHQUhILEVBS0VLLEdBTEYsQ0FLTSxVQUFDTCxHQUFEO0FBQUEsV0FDSCxNQUFDLHFEQUFEO0FBQ0UsU0FBRyxFQUFFQSxHQURQO0FBRUUsVUFBSSxFQUFFQSxHQUZSO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTUQsTUFBTSxDQUFDQyxHQUFELENBQVo7QUFBQSxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERztBQUFBLEdBTE4sQ0FGSCxDQTNCRixDQVJGLENBREY7QUFzREQsQ0E1RUQ7O0dBQU1aLE07O0tBQUFBLE07QUE2RVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGxGb3JQcmVzZW50YXRpb25zLjk1MDkwZGM2Yjk4MTMxYjQxMmQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2dyYW0gZnJvbSBcIi4uL21vZGVscy9kYXRhLmpzb25cIjtcclxuaW1wb3J0IHsgRmlsdGVyVGFnLCBTaG93T25seUZhdm91cml0ZXNCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5cclxuLy9pbXBvcnQgXCIuLi9zdHlsaW5nL2ZpbHRlclN0eWxlcy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgRmlsdGVyUHJvcHMge1xyXG4gIG9uVGFnQ2hhbmdlOiAodGFnczogc3RyaW5nW10pID0+IHZvaWQ7XHJcbiAgb25GYXZvcml0ZUNoYW5nZTogKHZhbDogYm9vbGVhbikgPT4gdm9pZDtcclxuICBzZWxlY3RlZFRhZ3M6IHN0cmluZ1tdO1xyXG4gIHNob3dPbmx5RmF2b3JpdGVzOiBib29sZWFuO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICB0eXBlPzogXCJkcm9wZG93blwiIHwgXCJzbGlkZS1sZWZ0XCI7XHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlciA9ICh7XHJcbiAgb25UYWdDaGFuZ2UsXHJcbiAgb25GYXZvcml0ZUNoYW5nZSxcclxuICBzZWxlY3RlZFRhZ3MsXHJcbiAgc2hvd09ubHlGYXZvcml0ZXMsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHR5cGUsXHJcbn06IEZpbHRlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKCFvcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUYWcgPSAodGFnKSA9PiB7XHJcbiAgICBvblRhZ0NoYW5nZShzZWxlY3RlZFRhZ3MuY29uY2F0KFt0YWddKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVGFnID0gKHRhZykgPT4ge1xyXG4gICAgb25UYWdDaGFuZ2Uoc2VsZWN0ZWRUYWdzLmZpbHRlcigodCkgPT4gdCAhPSB0YWcpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmaWx0ZXItY29udGFpbmVyICR7Y2xhc3NOYW1lfSAke3R5cGUgfHwgXCJzbGlkZS1sZWZ0XCJ9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmlsdGVyLWJ1dHRvbiAke29wZW4gPyBcIm9wZW5cIiA6IFwiXCJ9YH0gb25DbGljaz17dG9nZ2xlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3BcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWlkZGxlXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvdHRvbVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpbHRlciAke29wZW4gPyBcIm9wZW5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2Nsb3NlLTI0cHguc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPkZpbHRlciBieSB0YWc8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPlNob3cgb25seSB5b3VyIGZhdm9yaXRlczogPC9wPlxyXG4gICAgICAgICAgPFNob3dPbmx5RmF2b3VyaXRlc0J1dHRvblxyXG4gICAgICAgICAgICBzaG93T25seUZhdm9yaXRlcz17c2hvd09ubHlGYXZvcml0ZXN9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRmF2b3JpdGVDaGFuZ2UoIXNob3dPbmx5RmF2b3JpdGVzKX1cclxuICAgICAgICAgID48L1Nob3dPbmx5RmF2b3VyaXRlc0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPkFjdGl2ZSBmaWx0ZXJzOjwvcD5cclxuICAgICAgICAgIHtzZWxlY3RlZFRhZ3MgJiZcclxuICAgICAgICAgICAgc2VsZWN0ZWRUYWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZpbHRlclRhZ1xyXG4gICAgICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXt0YWd9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgID48L0ZpbHRlclRhZz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub25BY3RpdmVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPkNsaWNrIHRvIHNlbGVjdCBmaWx0ZXJzPC9wPlxyXG4gICAgICAgICAge1Byb2dyYW0ucHJvZ3JhbS50YWdzXHJcbiAgICAgICAgICAgIC5jb25jYXQoUHJvZ3JhbS5wcm9ncmFtLmxhbmd1YWdlcylcclxuICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAodGFnKSA9PiBzZWxlY3RlZFRhZ3MgJiYgIXNlbGVjdGVkVGFncy5zb21lKCh0KSA9PiB0ID09IHRhZylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICA8RmlsdGVyVGFnXHJcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgICAgIG5hbWU9e3RhZ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgID48L0ZpbHRlclRhZz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9