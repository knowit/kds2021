webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./pages/components/Day.tsx":
/*!**********************************!*\
  !*** ./pages/components/Day.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _EventHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventHeader */ "./pages/components/EventHeader.tsx");
/* harmony import */ var _ScheduleEntry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ScheduleEntry */ "./pages/components/ScheduleEntry.tsx");






var _jsxFileName = "/Users/jobb/Projects/KDS/program.kds.knowit.no/pages/components/Day.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Day =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Day, _Component);

  function Day() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Day);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Day).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Day, [{
    key: "longestTrack",
    value: function longestTrack(slot) {
      return Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(slot.rooms && slot.rooms.map(function (room) {
        return room.talks && room.talks.filter(function (talk) {
          return !talk.hide;
        }).length;
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        className: "day",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.slots && this.props.slots.map(function (slot, i) {
        return __jsx("div", {
          key: i + "slot",
          className: "slot",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, __jsx(_EventHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: i + "slot",
          timeStart: slot.timeStart,
          timeEnd: slot.timeEnd,
          type: slot.type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }), slot.rooms && __jsx(_ScheduleEntry__WEBPACK_IMPORTED_MODULE_8__["default"], {
          day: _this.props.currDay.day,
          onToggleTag: _this.props.onToggleTag,
          tags: _this.props.tags,
          slot: slot,
          showRoomHeader: true,
          trackLength: _this.longestTrack(slot),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }));
      }));
    }
  }]);

  return Day;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Day);

/***/ })

})
//# sourceMappingURL=schedule.js.26aa904513469706fb8e.hot-update.js.map