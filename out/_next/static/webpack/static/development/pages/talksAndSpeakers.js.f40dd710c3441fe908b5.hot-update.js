webpackHotUpdate("static/development/pages/talksAndSpeakers.js",{

/***/ "./pages/components/Talk.tsx":
/*!***********************************!*\
  !*** ./pages/components/Talk.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _styling_talkStyles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styling/talkStyles.scss */ "./styling/talkStyles.scss");
/* harmony import */ var _styling_talkStyles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styling_talkStyles_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FilterTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterTag */ "./pages/components/FilterTag.tsx");
/* harmony import */ var _Difficulty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Difficulty */ "./pages/components/Difficulty.tsx");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Pin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pin */ "./pages/components/Pin.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/colors */ "./helpers/colors.ts");





var _jsxFileName = "/Users/jobb/Projects/KDS/program.kds.knowit.no/pages/components/Talk.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;







var FavouriteTalkButtonNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./FavouriteTalkButton */ "./pages/components/FavouriteTalkButton.tsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./FavouriteTalkButton */ "./pages/components/FavouriteTalkButton.tsx")];
    },
    modules: ["./FavouriteTalkButton"]
  }
});

var Talk =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Talk, _React$Component);

  function Talk() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Talk);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Talk).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Talk, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        className: "talk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("img", {
        src: "../../static/clock.svg",
        width: "24",
        height: "24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), __jsx("span", {
        className: "time-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("span", {
        className: "time-text-day",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.day, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), this.props.timeStart && this.props.timeStart.toString(), " - ", this.props.timeEnd && this.props.timeEnd.toString())), __jsx("div", {
        className: "room",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_Pin__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: Object(_helpers_colors__WEBPACK_IMPORTED_MODULE_11__["colorClassFromRoomName"])(this.props.room),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), __jsx("span", {
        className: "text room-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.room)), __jsx("div", {
        className: "diff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(_Difficulty__WEBPACK_IMPORTED_MODULE_7__["default"], {
        difficulty: this.props.difficulty,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), __jsx("span", {
        className: "text diff-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.props.difficulty)), __jsx("div", {
        className: "heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(FavouriteTalkButtonNoSSR, {
        talkId: this.props.id,
        onClick: this.props.onFavoriteChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))), __jsx("div", {
        className: "talk-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("p", {
        className: "day",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.props.day), __jsx("p", {
        className: "time-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.timeStart && this.props.timeStart.toString(), " - ", this.props.timeEnd && this.props.timeEnd.toString(), __jsx("span", {
        className: "duration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\xA0(", this.props.timeEnd && this.props.timeStart && this.props.timeStart.diff(this.props.timeEnd), " min)")), __jsx("p", {
        className: "type-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.props.type, __jsx("span", {
        className: "duration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\xA0(", this.props.timeEnd && this.props.timeStart && this.props.timeStart.diff(this.props.timeEnd), " min)")), __jsx("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.props.title), this.props, this.props.speaker && this.props.speaker.map(function (speaker) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx("p", {
          className: "speaker",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, speaker.name), __jsx("p", {
          className: "info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, speaker.info));
      }), __jsx("div", {
        className: "tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, this.props.tags && this.props.language && this.props.tags.concat([this.props.language]).map(function (tag) {
        return __jsx(_FilterTag__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: tag,
          name: tag,
          selected: _this.props.selectedTags.indexOf(tag) > -1,
          onClick: function onClick() {
            return _this.props.onToggleTag(tag);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        });
      })), __jsx("hr", {
        className: "seperator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })));
    }
  }]);

  return Talk;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Talk);

/***/ })

})
//# sourceMappingURL=talksAndSpeakers.js.f40dd710c3441fe908b5.hot-update.js.map