webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styling/globalStyles.scss */ "./styling/globalStyles.scss");
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIudHN4Il0sIm5hbWVzIjpbIkZpbHRlciIsIm9uVGFnQ2hhbmdlIiwib25GYXZvcml0ZUNoYW5nZSIsInNlbGVjdGVkVGFncyIsInNob3dPbmx5RmF2b3JpdGVzIiwiY2xhc3NOYW1lIiwidHlwZSIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJ0b2dnbGUiLCJhZGRUYWciLCJ0YWciLCJjb25jYXQiLCJyZW1vdmVUYWciLCJmaWx0ZXIiLCJ0IiwibWFwIiwiUHJvZ3JhbSIsInByb2dyYW0iLCJ0YWdzIiwibGFuZ3VhZ2VzIiwic29tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7O0FBVUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FPSTtBQUFBOztBQUFBLE1BTmpCQyxXQU1pQixRQU5qQkEsV0FNaUI7QUFBQSxNQUxqQkMsZ0JBS2lCLFFBTGpCQSxnQkFLaUI7QUFBQSxNQUpqQkMsWUFJaUIsUUFKakJBLFlBSWlCO0FBQUEsTUFIakJDLGlCQUdpQixRQUhqQkEsaUJBR2lCO0FBQUEsTUFGakJDLFNBRWlCLFFBRmpCQSxTQUVpQjtBQUFBLE1BRGpCQyxJQUNpQixRQURqQkEsSUFDaUI7O0FBQ2pCLGtCQUF3QkMsc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkQsV0FBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3RCWCxlQUFXLENBQUNFLFlBQVksQ0FBQ1UsTUFBYixDQUFvQixDQUFDRCxHQUFELENBQXBCLENBQUQsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUUsU0FBUyxHQUFHLFNB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QUNtQixJQUFiLENBQWtCLFVBQUNOLENBQUQ7QUFBQSxhQUFPQSxDQUFDLElBQUlKLEdBQVo7QUFBQSxLQUFsQixDQUExQjtBQUFBLEdBSEgsRUFLRUssR0FMRixDQUtNLFVBQUNMLEdBQUQ7QUFBQSxXQUNILE1BQUMscURBQUQ7QUFDRSxTQUFHLEVBQUVBLEdBRFA7QUFFRSxVQUFJLEVBQUVBLEdBRlI7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNRCxNQUFNLENBQUNDLEdBQUQsQ0FBWjtBQUFBLE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURHO0FBQUEsR0FMTixDQUZILENBM0JGLENBUkYsQ0FERjtBQXNERCxDQTVFRDs7R0FBTVosTTs7S0FBQUEsTTtBQTZFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDgzOGJlZGQ0YzZhNWJiNDBmMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZ3JhbSBmcm9tIFwiLi4vbW9kZWxzL2RhdGEuanNvblwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJUYWcsIFNob3dPbmx5RmF2b3VyaXRlc0J1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcblxyXG4vL2ltcG9ydCBcIi4uL3N0eWxpbmcvZmlsdGVyU3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGluZy9nbG9iYWxTdHlsZXMuc2Nzc1wiXHJcbmludGVyZmFjZSBGaWx0ZXJQcm9wcyB7XHJcbiAgb25UYWdDaGFuZ2U6ICh0YWdzOiBzdHJpbmdbXSkgPT4gdm9pZDtcclxuICBvbkZhdm9yaXRlQ2hhbmdlOiAodmFsOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHNlbGVjdGVkVGFnczogc3RyaW5nW107XHJcbiAgc2hvd09ubHlGYXZvcml0ZXM6IGJvb2xlYW47XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHR5cGU/OiBcImRyb3Bkb3duXCIgfCBcInNsaWRlLWxlZnRcIjtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyID0gKHtcclxuICBvblRhZ0NoYW5nZSxcclxuICBvbkZhdm9yaXRlQ2hhbmdlLFxyXG4gIHNlbGVjdGVkVGFncyxcclxuICBzaG93T25seUZhdm9yaXRlcyxcclxuICBjbGFzc05hbWUsXHJcbiAgdHlwZSxcclxufTogRmlsdGVyUHJvcHMpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRhZyA9ICh0YWcpID0+IHtcclxuICAgIG9uVGFnQ2hhbmdlKHNlbGVjdGVkVGFncy5jb25jYXQoW3RhZ10pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVUYWcgPSAodGFnKSA9PiB7XHJcbiAgICBvblRhZ0NoYW5nZShzZWxlY3RlZFRhZ3MuZmlsdGVyKCh0KSA9PiB0ICE9IHRhZykpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZpbHRlci1jb250YWluZXIgJHtjbGFzc05hbWV9ICR7dHlwZSB8fCBcInNsaWRlLWxlZnRcIn1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaWx0ZXItYnV0dG9uICR7b3BlbiA/IFwib3BlblwiIDogXCJcIn1gfSBvbkNsaWNrPXt0b2dnbGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvcFwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGVcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm90dG9tXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmlsdGVyICR7b3BlbiA/IFwib3BlblwiIDogXCJcIn1gfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvY2xvc2UtMjRweC5zdmdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+RmlsdGVyIGJ5IHRhZzwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+U2hvdyBvbmx5IHlvdXIgZmF2b3JpdGVzOiA8L3A+XHJcbiAgICAgICAgICA8U2hvd09ubHlGYXZvdXJpdGVzQnV0dG9uXHJcbiAgICAgICAgICAgIHNob3dPbmx5RmF2b3JpdGVzPXtzaG93T25seUZhdm9yaXRlc31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25GYXZvcml0ZUNoYW5nZSghc2hvd09ubHlGYXZvcml0ZXMpfVxyXG4gICAgICAgICAgPjwvU2hvd09ubHlGYXZvdXJpdGVzQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+QWN0aXZlIGZpbHRlcnM6PC9wPlxyXG4gICAgICAgICAge3NlbGVjdGVkVGFncyAmJlxyXG4gICAgICAgICAgICBzZWxlY3RlZFRhZ3MubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICA8RmlsdGVyVGFnXHJcbiAgICAgICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgICAgIG5hbWU9e3RhZ31cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVGFnKHRhZyl9XHJcbiAgICAgICAgICAgICAgPjwvRmlsdGVyVGFnPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vbkFjdGl2ZVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+Q2xpY2sgdG8gc2VsZWN0IGZpbHRlcnM8L3A+XHJcbiAgICAgICAgICB7UHJvZ3JhbS5wcm9ncmFtLnRhZ3NcclxuICAgICAgICAgICAgLmNvbmNhdChQcm9ncmFtLnByb2dyYW0ubGFuZ3VhZ2VzKVxyXG4gICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICh0YWcpID0+IHNlbGVjdGVkVGFncyAmJiAhc2VsZWN0ZWRUYWdzLnNvbWUoKHQpID0+IHQgPT0gdGFnKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgIDxGaWx0ZXJUYWdcclxuICAgICAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVGFnKHRhZyl9XHJcbiAgICAgICAgICAgICAgPjwvRmlsdGVyVGFnPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=