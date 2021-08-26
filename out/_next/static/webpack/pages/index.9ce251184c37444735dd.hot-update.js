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
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styling/globalStyles.scss */ "./styling/globalStyles.scss");
/* harmony import */ var _styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styling_globalStyles_scss__WEBPACK_IMPORTED_MODULE_4__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWxrLnRzeCJdLCJuYW1lcyI6WyJGYXZvdXJpdGVUYWxrQnV0dG9uTm9TU1IiLCJkeW5hbWljIiwic3NyIiwiVGFsayIsImhpZGRlbiIsImRheSIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJyb29tIiwib25GYXZvcml0ZUNoYW5nZSIsImlkIiwidHlwZSIsInRpdGxlIiwic3BlYWtlciIsImRlc2NyaXB0aW9uIiwidGFncyIsInNlbGVjdGVkVGFncyIsImxhbmd1YWdlIiwib25Ub2dnbGVUYWciLCJpc0luU2NoZWR1bGUiLCJmbGFnUGF0aCIsInRvU3RyaW5nIiwiY29sb3JDbGFzc0Zyb21Sb29tTmFtZSIsImRpZmYiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJpbmZvIiwiY29uY2F0IiwidGFnIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQSxJQUFNQSx3QkFBd0IsR0FBR0MsbURBQU8sTUFDdEM7QUFBQSxTQUFNLDBJQUFOO0FBQUEsQ0FEc0MsRUFFdEM7QUFDRUMsS0FBRyxFQUFFLEtBRFA7QUFBQTtBQUFBO0FBQUEsa0NBRGEsbUVBQ2I7QUFBQTtBQUFBLGNBRGEsdUJBQ2I7QUFBQTtBQUFBLENBRnNDLENBQXhDO01BQU1GLHdCOztBQTBCTixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQWlCSTtBQUFBLE1BaEJmQyxNQWdCZSxRQWhCZkEsTUFnQmU7QUFBQSxNQWZmQyxHQWVlLFFBZmZBLEdBZWU7QUFBQSxNQWRmQyxTQWNlLFFBZGZBLFNBY2U7QUFBQSxNQWJmQyxPQWFlLFFBYmZBLE9BYWU7QUFBQSxNQVpmQyxJQVllLFFBWmZBLElBWWU7QUFBQSxNQVhmQyxnQkFXZSxRQVhmQSxnQkFXZTtBQUFBLE1BVmZDLEVBVWUsUUFWZkEsRUFVZTtBQUFBLE1BVGZDLElBU2UsUUFUZkEsSUFTZTtBQUFBLE1B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QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3QlosT0FBTyxDQUFDYSxJQUFoQyxDQURGLEVBRUU7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCYixPQUFPLENBQUNjLElBQTdCLENBRkYsQ0FERjtBQU1ELEdBUkQsQ0F4QkosRUFpQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLElBQUksSUFDSEUsUUFERCxJQUVDRixJQUFJLENBQ0RhLE1BREgsQ0FDVSxDQUFDWCxRQUFELENBRFYsRUFFR08sR0FGSCxDQUVPLFVBQUNLLEdBQUQ7QUFBQSxXQUNILE1BQUMscURBQUQ7QUFDRSxTQUFHLEVBQUVBLEdBRFA7QUFFRSxVQUFJLEVBQUVBLEdBRlI7QUFHRSxjQUFRLEVBQUViLFlBQVksQ0FBQ2MsUUFBYixDQUFzQkQsR0FBdEIsQ0FIWjtBQUlFLGFBQU8sRUFBRTtBQUFBLGVBQU1YLFdBQVcsQ0FBQ1csR0FBRCxDQUFqQjtBQUFBLE9BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURHO0FBQUEsR0FGUCxDQUhKLENBakNGLEVBK0NFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9DRixDQTdCRixDQURGO0FBaUZELENBdkdEOztNQUFNMUIsSTtBQXdHU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWNlMjUxMTg0YzM3NDQ0NzM1ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyBEaWZmaWN1bHR5LCBGaWx0ZXJUYWcsIFBpbiwgU2NoZWR1bGVUaXRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yQ2xhc3NGcm9tUm9vbU5hbWUgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG4vL2ltcG9ydCBcIi4uL3N0eWxpbmcvdGFsa1N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxpbmcvZ2xvYmFsU3R5bGVzLnNjc3NcIlxyXG5jb25zdCBGYXZvdXJpdGVUYWxrQnV0dG9uTm9TU1IgPSBkeW5hbWljKFxyXG4gICgpID0+IGltcG9ydChcIi4vRmF2b3VyaXRlVGFsa0J1dHRvblwiKSxcclxuICB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG4gIH1cclxuKTtcclxuXHJcbmludGVyZmFjZSBUYWxrUHJvcHMge1xyXG4gIGhpZGRlbjogYm9vbGVhbjtcclxuICBkYXk6IGFueTtcclxuICB0aW1lU3RhcnQ6IGFueTtcclxuICB0aW1lRW5kOiBhbnk7XHJcbiAgcm9vbTogYW55O1xyXG4gIG9uRmF2b3JpdGVDaGFuZ2U/OiAodmFsKSA9PiB2b2lkO1xyXG4gIGlkOiBhbnk7XHJcbiAgdHlwZTogYW55O1xyXG4gIHRpdGxlOiBhbnk7XHJcbiAgc3BlYWtlcjogYW55O1xyXG4gIGRlc2NyaXB0aW9uPzogYW55O1xyXG4gIHRhZ3M6IGFueTtcclxuICBzZWxlY3RlZFRhZ3M6IGFueTtcclxuICBsYW5ndWFnZTogYW55O1xyXG4gIG9uVG9nZ2xlVGFnOiBhbnk7XHJcbiAgaXNJblNjaGVkdWxlOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBUYWxrID0gKHtcclxuICBoaWRkZW4sXHJcbiAgZGF5LFxyXG4gIHRpbWVTdGFydCxcclxuICB0aW1lRW5kLFxyXG4gIHJvb20sXHJcbiAgb25GYXZvcml0ZUNoYW5nZSxcclxuICBpZCxcclxuICB0eXBlLFxyXG4gIHRpdGxlLFxyXG4gIHNwZWFrZXIsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgdGFncyxcclxuICBzZWxlY3RlZFRhZ3MsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgb25Ub2dnbGVUYWcsXHJcbiAgaXNJblNjaGVkdWxlLFxyXG59OiBUYWxrUHJvcHMpID0+IHtcclxuICBcclxuICAvLyBsaW5rIHRvIGZsYWcgaW1hZ2VzOiBodHRwczovL3d3dy5nb3NxdWFyZWQuY29tL3Jlc291cmNlcy9mbGFnLWljb25zL1xyXG4gIGNvbnN0IGZsYWdQYXRoID0gYC4uL3N0YXRpYy9pbWFnZXMvJHtsYW5ndWFnZX0tZmxhZy5wbmdgO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtgdGFsayAke2hpZGRlbiA/IFwidGFsay1oaWRkZW5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvY2xvY2suc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZS10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtdGV4dC1kYXlcIj5cclxuICAgICAgICAgICAgICB7ZGF5fVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIHt0aW1lU3RhcnQgJiYgdGltZVN0YXJ0LnRvU3RyaW5nKCl9IC17XCIgXCJ9XHJcbiAgICAgICAgICAgIHt0aW1lRW5kICYmIHRpbWVFbmQudG9TdHJpbmcoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb21cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8UGluIGNsYXNzTmFtZT17Y29sb3JDbGFzc0Zyb21Sb29tTmFtZShyb29tKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dCByb29tLW5hbWVcIj57cm9vbX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbGFnLWltYWdlXCIgc3JjPXtmbGFnUGF0aH0+PC9pbWc+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IGxhbmd1YWdlLXRleHRcIj5UYWxrIGxhbmd1YWdlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnRcIj5cclxuICAgICAgICAgIDxGYXZvdXJpdGVUYWxrQnV0dG9uTm9TU1IgdGFsa0lkPXtpZH0gb25DbGljaz17b25GYXZvcml0ZUNoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFsay1jb250ZW50XCI+XHJcbiAgICAgICAgPFNjaGVkdWxlVGl0bGUgaWQ9e2lkfSB0aXRsZT17dGl0bGV9IGlzSW5TY2hlZHVsZT17aXNJblNjaGVkdWxlfSAvPlxyXG4gICAgICAgIHshaXNJblNjaGVkdWxlICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRheS1hbmQtdGltZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXlcIj57ZGF5fTo8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpbWUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIHt0aW1lU3RhcnQgJiYgdGltZVN0YXJ0LnRvU3RyaW5nKCl9IC0ge3RpbWVFbmQgJiYgdGltZUVuZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAge2lzSW5TY2hlZHVsZSAmJlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGltZS1pbmZvXCI+XHJcbiAgICAgICAgICAgIHt0aW1lU3RhcnQgJiYgdGltZVN0YXJ0LnRvU3RyaW5nKCl9IC0ge3RpbWVFbmQgJiYgdGltZUVuZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0eXBlLWluZm9cIj5cclxuICAgICAgICAgIHt0eXBlfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cclxuICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICB7dGltZUVuZCAmJiB0aW1lU3RhcnQgJiYgdGltZVN0YXJ0LmRpZmYodGltZUVuZCl9IG1pbilcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwPntkZXNjcmlwdGlvbn08L3A+fVxyXG4gICAgICAgIHtzcGVha2VyICYmXHJcbiAgICAgICAgICBzcGVha2VyLm1hcCgoc3BlYWtlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy9MQUdUIFRJTCBJTkRFWCwgRkpFUk4gSU5ERVggSSBNQVAgSFZJUyBBTFQgVFJZTkVSXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwZWFrZXJcIj57c3BlYWtlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj57c3BlYWtlci5pbmZvfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAge3RhZ3MgJiZcclxuICAgICAgICAgICAgbGFuZ3VhZ2UgJiZcclxuICAgICAgICAgICAgdGFnc1xyXG4gICAgICAgICAgICAgIC5jb25jYXQoW2xhbmd1YWdlXSlcclxuICAgICAgICAgICAgICAubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJUYWdcclxuICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkVGFncy5pbmNsdWRlcyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZVRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwZXJhdG9yXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUYWxrOyJdLCJzb3VyY2VSb290IjoiIn0=