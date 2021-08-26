webpackHotUpdate_N_E("pages/index",{

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
var _this = undefined,
    _jsxFileName = "C:\\Users\\Johnny B\\Repos\\Newkds\\components\\Talk.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //import "../styling/talkStyles.scss";

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWxrLnRzeCJdLCJuYW1lcyI6WyJGYXZvdXJpdGVUYWxrQnV0dG9uTm9TU1IiLCJkeW5hbWljIiwic3NyIiwiVGFsayIsImhpZGRlbiIsImRheSIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJyb29tIiwib25GYXZvcml0ZUNoYW5nZSIsImlkIiwidHlwZSIsInRpdGxlIiwic3BlYWtlciIsImRlc2NyaXB0aW9uIiwidGFncyIsInNlbGVjdGVkVGFncyIsImxhbmd1YWdlIiwib25Ub2dnbGVUYWciLCJpc0luU2NoZWR1bGUiLCJmbGFnUGF0aCIsInRvU3RyaW5nIiwiY29sb3JDbGFzc0Zyb21Sb29tTmFtZSIsImRpZmYiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJpbmZvIiwiY29uY2F0IiwidGFnIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLHdCQUF3QixHQUFHQyxtREFBTyxNQUN0QztBQUFBLFNBQU0sMElBQU47QUFBQSxDQURzQyxFQUV0QztBQUNFQyxLQUFHLEVBQUUsS0FEUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSxtRUFDYjtBQUFBO0FBQUEsY0FEYSx1QkFDYjtBQUFBO0FBQUEsQ0FGc0MsQ0FBeEM7TUFBTUYsd0I7O0FBMEJOLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BaUJJO0FBQUEsTUFoQmZDLE1BZ0JlLFFBaEJmQSxNQWdCZTtBQUFBLE1BZmZDLEdBZWUsUUFmZkEsR0FlZTtBQUFBLE1BZGZDLFNBY2UsUUFkZkEsU0FjZTtBQUFBLE1BYmZDLE9BYWUsUUFiZkEsT0FhZTtBQUFBLE1BWmZDLElBWWUsUUFaZkEsSUFZZTtBQUFBLE1BWGZDLGdCQVdlLFFBWGZBLGdCQVdlO0FBQUEsTUFWZkMsRUFVZSxRQVZmQSxFQVVlO0FBQUEsTUFUZkMsSUFTZSxRQVRmQSxJQVNlO0FBQUEsTUFSZkMsS0FR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Q0U7QUFBRyxlQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdCWixPQUFPLENBQUNhLElBQWhDLENBREYsRUFFRTtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUJiLE9BQU8sQ0FBQ2MsSUFBN0IsQ0FGRixDQURGO0FBTUQsR0FSRCxDQXhCSixFQWlDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osSUFBSSxJQUNIRSxRQURELElBRUNGLElBQUksQ0FDRGEsTUFESCxDQUNVLENBQUNYLFFBQUQsQ0FEVixFQUVHTyxHQUZILENBRU8sVUFBQ0ssR0FBRDtBQUFBLFdBQ0gsTUFBQyxxREFBRDtBQUNFLFNBQUcsRUFBRUEsR0FEUDtBQUVFLFVBQUksRUFBRUEsR0FGUjtBQUdFLGNBQVEsRUFBRWIsWUFBWSxDQUFDYyxRQUFiLENBQXNCRCxHQUF0QixDQUhaO0FBSUUsYUFBTyxFQUFFO0FBQUEsZUFBTVgsV0FBVyxDQUFDVyxHQUFELENBQWpCO0FBQUEsT0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREc7QUFBQSxHQUZQLENBSEosQ0FqQ0YsRUErQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0NGLENBN0JGLENBREY7QUFpRkQsQ0F2R0Q7O01BQU0xQixJO0FBd0dTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45N2NlMWJkMjhlM2VhMzU4NTA3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IERpZmZpY3VsdHksIEZpbHRlclRhZywgUGluLCBTY2hlZHVsZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29sb3JDbGFzc0Zyb21Sb29tTmFtZSB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbi8vaW1wb3J0IFwiLi4vc3R5bGluZy90YWxrU3R5bGVzLnNjc3NcIjtcclxuXHJcbmNvbnN0IEZhdm91cml0ZVRhbGtCdXR0b25Ob1NTUiA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi9GYXZvdXJpdGVUYWxrQnV0dG9uXCIpLFxyXG4gIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbiAgfVxyXG4pO1xyXG5cclxuaW50ZXJmYWNlIFRhbGtQcm9wcyB7XHJcbiAgaGlkZGVuOiBib29sZWFuO1xyXG4gIGRheTogYW55O1xyXG4gIHRpbWVTdGFydDogYW55O1xyXG4gIHRpbWVFbmQ6IGFueTtcclxuICByb29tOiBhbnk7XHJcbiAgb25GYXZvcml0ZUNoYW5nZT86ICh2YWwpID0+IHZvaWQ7XHJcbiAgaWQ6IGFueTtcclxuICB0eXBlOiBhbnk7XHJcbiAgdGl0bGU6IGFueTtcclxuICBzcGVha2VyOiBhbnk7XHJcbiAgZGVzY3JpcHRpb24/OiBhbnk7XHJcbiAgdGFnczogYW55O1xyXG4gIHNlbGVjdGVkVGFnczogYW55O1xyXG4gIGxhbmd1YWdlOiBhbnk7XHJcbiAgb25Ub2dnbGVUYWc6IGFueTtcclxuICBpc0luU2NoZWR1bGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFRhbGsgPSAoe1xyXG4gIGhpZGRlbixcclxuICBkYXksXHJcbiAgdGltZVN0YXJ0LFxyXG4gIHRpbWVFbmQsXHJcbiAgcm9vbSxcclxuICBvbkZhdm9yaXRlQ2hhbmdlLFxyXG4gIGlkLFxyXG4gIHR5cGUsXHJcbiAgdGl0bGUsXHJcbiAgc3BlYWtlcixcclxuICBkZXNjcmlwdGlvbixcclxuICB0YWdzLFxyXG4gIHNlbGVjdGVkVGFncyxcclxuICBsYW5ndWFnZSxcclxuICBvblRvZ2dsZVRhZyxcclxuICBpc0luU2NoZWR1bGUsXHJcbn06IFRhbGtQcm9wcykgPT4ge1xyXG4gIFxyXG4gIC8vIGxpbmsgdG8gZmxhZyBpbWFnZXM6IGh0dHBzOi8vd3d3Lmdvc3F1YXJlZC5jb20vcmVzb3VyY2VzL2ZsYWctaWNvbnMvXHJcbiAgY29uc3QgZmxhZ1BhdGggPSBgLi4vc3RhdGljL2ltYWdlcy8ke2xhbmd1YWdlfS1mbGFnLnBuZ2A7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e2B0YWxrICR7aGlkZGVuID8gXCJ0YWxrLWhpZGRlblwiIDogXCJcIn1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9jbG9jay5zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLXRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZS10ZXh0LWRheVwiPlxyXG4gICAgICAgICAgICAgIHtkYXl9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAge3RpbWVTdGFydCAmJiB0aW1lU3RhcnQudG9TdHJpbmcoKX0gLXtcIiBcIn1cclxuICAgICAgICAgICAge3RpbWVFbmQgJiYgdGltZUVuZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxQaW4gY2xhc3NOYW1lPXtjb2xvckNsYXNzRnJvbVJvb21OYW1lKHJvb20pfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHJvb20tbmFtZVwiPntyb29tfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsYWctaW1hZ2VcIiBzcmM9e2ZsYWdQYXRofT48L2ltZz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgbGFuZ3VhZ2UtdGV4dFwiPlRhbGsgbGFuZ3VhZ2U8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydFwiPlxyXG4gICAgICAgICAgPEZhdm91cml0ZVRhbGtCdXR0b25Ob1NTUiB0YWxrSWQ9e2lkfSBvbkNsaWNrPXtvbkZhdm9yaXRlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWxrLWNvbnRlbnRcIj5cclxuICAgICAgICA8U2NoZWR1bGVUaXRsZSBpZD17aWR9IHRpdGxlPXt0aXRsZX0gaXNJblNjaGVkdWxlPXtpc0luU2NoZWR1bGV9IC8+XHJcbiAgICAgICAgeyFpc0luU2NoZWR1bGUgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF5LWFuZC10aW1lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRheVwiPntkYXl9OjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGltZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAge3RpbWVTdGFydCAmJiB0aW1lU3RhcnQudG9TdHJpbmcoKX0gLSB7dGltZUVuZCAmJiB0aW1lRW5kLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICB7aXNJblNjaGVkdWxlICYmXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lLWluZm9cIj5cclxuICAgICAgICAgICAge3RpbWVTdGFydCAmJiB0aW1lU3RhcnQudG9TdHJpbmcoKX0gLSB7dGltZUVuZCAmJiB0aW1lRW5kLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInR5cGUtaW5mb1wiPlxyXG4gICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxyXG4gICAgICAgICAgICAmbmJzcDsoXHJcbiAgICAgICAgICAgIHt0aW1lRW5kICYmIHRpbWVTdGFydCAmJiB0aW1lU3RhcnQuZGlmZih0aW1lRW5kKX0gbWluKVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPHA+e2Rlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgICAge3NwZWFrZXIgJiZcclxuICAgICAgICAgIHNwZWFrZXIubWFwKChzcGVha2VyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvL0xBR1QgVElMIElOREVYLCBGSkVSTiBJTkRFWCBJIE1BUCBIVklTIEFMVCBUUllORVJcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BlYWtlclwiPntzcGVha2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPntzcGVha2VyLmluZm99PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgICBsYW5ndWFnZSAmJlxyXG4gICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgICAgLmNvbmNhdChbbGFuZ3VhZ2VdKVxyXG4gICAgICAgICAgICAgIC5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZpbHRlclRhZ1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgbmFtZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRUYWdzLmluY2x1ZGVzKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlVGFnKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBlcmF0b3JcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRhbGs7Il0sInNvdXJjZVJvb3QiOiIifQ==