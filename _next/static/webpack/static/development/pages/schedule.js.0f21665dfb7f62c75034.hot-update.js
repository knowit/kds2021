webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./pages/components/ScheduleEntry.tsx":
/*!********************************************!*\
  !*** ./pages/components/ScheduleEntry.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Talk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Talk */ "./pages/components/Talk.tsx");
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Room */ "./pages/components/Room.tsx");
/* harmony import */ var _helpers_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/time */ "./helpers/time.ts");





var _jsxFileName = "/Users/jobb/Projects/KDS/program.kds.knowit.no/pages/components/ScheduleEntry.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var ScheduleEntry =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ScheduleEntry, _Component);

  function ScheduleEntry(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScheduleEntry);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScheduleEntry).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScheduleEntry, [{
    key: "createRoom",
    value: function createRoom(room, index) {
      var _this = this;

      var from = _helpers_time__WEBPACK_IMPORTED_MODULE_8__["Time"].fromNumber(this.props.slot.timeStart);
      var trackIndex = 0;
      var talks = room.talks.map(function (talk, i) {
        var to = from.copy().add(Object(_helpers_time__WEBPACK_IMPORTED_MODULE_8__["getDuration"])(talk));
        var style = {
          // For ie support, ie support is far from good.. but this makes i maybe useable
          msGridRow: trackIndex + 2,
          msGridColumn: index + 1
        };

        var talkEl = __jsx("div", {
          className: "talk-container ".concat(trackIndex % 2 == 0 ? 'talk-even' : 'talk-odd', " ").concat(index % 2 == 0 ? 'room-even' : 'room-odd'),
          key: trackIndex,
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, __jsx(_Talk__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: talk.title,
          speaker: talk.speakers,
          room: room.name,
          type: talk.type,
          language: talk.language,
          difficulty: talk.difficulty,
          id: talk.talkId,
          key: trackIndex,
          day: _this.props.day,
          tags: talk.tags,
          timeStart: from,
          timeEnd: to,
          selectedTags: _this.props.tags,
          onToggleTag: _this.props.onToggleTag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }));

        from = to;

        if (!talk.hide) {
          trackIndex++;
        }

        return !talk.hide ? talkEl : '';
      });
      var numHidden = room.talks.filter(function (talk) {
        return !talk.hide;
      }).length;

      for (var i = 0; i < this.props.trackLength - numHidden; i++) {
        var talkIndex = trackIndex + i;
        talks.push(__jsx("div", {
          className: "talk-container empty ".concat(talkIndex % 2 == 0 ? 'talk-even' : 'talk-odd', " ").concat(index % 2 == 0 ? 'room-even' : 'room-odd'),
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }));
      }

      return talks;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length == 1) {
        var room = this.props.slot.rooms[0];
        return __jsx("div", {
          className: "rooms single-track",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, this.props.slot.rooms && __jsx(_Room__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: room.name,
          showRoomHeader: false,
          room: room,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, this.createRoom(room, 0)));
      } else {
        // Need to update dimensions of the grid
        var style = {
          gridTemplateColumns: "repeat(".concat(this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length, ", 1fr)"),
          gridTemplateRows: "60px ".concat(this.props.trackLength > 0 ? "repeat(".concat(this.props.trackLength, ", 1fr)") : ''),
          msGridRows: "60px  ".concat(this.props.trackLength > 0 ? "(1fr)[".concat(this.props.trackLength, "]") : ''),
          msGridColumns: "(1fr) [".concat(this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length, "]")
        };
        return __jsx("div", {
          className: "rooms multi-track",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, this.props.slot && this.props.slot.rooms && this.props.slot.rooms.map(function (r, i) {
          return __jsx(_Room__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: r.name,
            index: i,
            showRoomHeader: _this2.props.showRoomHeader,
            room: r.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, _this2.createRoom(r, i));
        }));
      }
    }
  }]);

  return ScheduleEntry;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (ScheduleEntry);

/***/ })

})
//# sourceMappingURL=schedule.js.0f21665dfb7f62c75034.hot-update.js.map