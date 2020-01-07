webpackHotUpdate("static/development/pages/talksAndSpeakers.js",{

/***/ "./pages/talksAndSpeakers.tsx":
/*!************************************!*\
  !*** ./pages/talksAndSpeakers.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Layout */ "./pages/components/Layout.tsx");
/* harmony import */ var _components_Talk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Talk */ "./pages/components/Talk.tsx");
/* harmony import */ var _styling_talksAndSpeakersStyles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styling/talksAndSpeakersStyles.scss */ "./styling/talksAndSpeakersStyles.scss");
/* harmony import */ var _styling_talksAndSpeakersStyles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styling_talksAndSpeakersStyles_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _models_data_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/data.json */ "./models/data.json");
var _models_data_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../models/data.json */ "./models/data.json", 1);
/* harmony import */ var _helpers_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/time */ "./helpers/time.ts");
/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Filter */ "./pages/components/Filter.tsx");







var _jsxFileName = "/Users/jobb/Projects/KDS/program.kds.knowit.no/pages/talksAndSpeakers.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;








var TalksAndSpeakers =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TalksAndSpeakers, _React$Component);

  function TalksAndSpeakers(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TalksAndSpeakers);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TalksAndSpeakers).call(this, props));
    _this.state = {
      filteredProgram: JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_models_data_json__WEBPACK_IMPORTED_MODULE_11__["program"])),
      // Need a deep copy
      showOnlyFavorites: false,
      tags: []
    };
    _this.handleFilterChange = _this.handleFilterChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleFavoriteChange = _this.handleFavoriteChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TalksAndSpeakers, [{
    key: "handleFilterChange",
    value: function handleFilterChange(newVal) {
      this.setState({
        tags: newVal
      }, this.filterProgram);
    }
  }, {
    key: "handleFavoriteChange",
    value: function handleFavoriteChange(newVal) {
      this.setState({
        showOnlyFavorites: newVal
      }, this.filterProgram);
    }
  }, {
    key: "handleToggleTag",
    value: function handleToggleTag(tag) {
      this.setState(function (prev) {
        if (prev.tags.indexOf(tag) > -1) {
          return {
            tags: prev.tags.filter(function (t) {
              return t != tag;
            })
          };
        }

        return {
          tags: prev.tags.concat(tag)
        };
      }, this.filterProgram);
    }
  }, {
    key: "filterProgram",
    value: function filterProgram() {
      var _this2 = this;

      var filteredProgram = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_models_data_json__WEBPACK_IMPORTED_MODULE_11__["program"]));
      filteredProgram.days.forEach(function (day) {
        return day.slots.forEach(function (slot) {
          return slot.rooms && slot.rooms.forEach(function (room) {
            room.talks.forEach(function (talk) {
              var tags = talk.tags.concat([talk.language]);

              if (_this2.state.showOnlyFavorites && !localStorage.getItem(talk.talkId)) {
                talk.hide = true;
              } else if (_this2.state.tags.length > 0 && !tags.some(function (tag) {
                return _this2.state.tags.indexOf(tag) > -1;
              })) {
                talk.hide = true;
              } else {
                talk.hide = false;
              }
            });
          });
        });
      });
      this.setState({
        filteredProgram: filteredProgram
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        className: "talksAndSpeakers page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Talks & Speakers",
        filter: 'small',
        onTagChange: this.handleFilterChange,
        onFavoriteChange: this.handleFavoriteChange,
        selectedTags: this.state.tags,
        showOnlyFavorites: this.state.showOnlyFavorites,
        background: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("div", {
        className: "talks-container document",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("div", {
        className: "title-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(_components_Filter__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onFavoriteChange: this.handleFavoriteChange,
        onTagChange: this.handleFilterChange,
        selectedTags: this.state.tags,
        showOnlyFavorites: this.state.showOnlyFavorites,
        className: "hide-small talks-filter",
        type: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, " Talks & speakers")), __jsx("div", {
        className: "talks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.state.filteredProgram.days.map(function (day) {
        return day.slots.filter(function (slot) {
          return slot.rooms !== undefined;
        }).map(function (slot) {
          return slot.rooms.map(function (room) {
            var from = _helpers_time__WEBPACK_IMPORTED_MODULE_12__["Time"].fromNumber(slot.timeStart);
            return room.talks.map(function (talk, i) {
              return talk.speakers.map(function (speaker) {
                var to = from.copy().add(Object(_helpers_time__WEBPACK_IMPORTED_MODULE_12__["getDuration"])(talk));

                var talkEl = __jsx("div", {
                  className: "talk-container",
                  key: i,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  },
                  __self: this
                }, __jsx(_components_Talk__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  day: day.day,
                  timeStart: from,
                  timeEnd: to,
                  description: talk.description,
                  speakerInfo: speaker.info,
                  speaker: speaker,
                  title: talk.title,
                  type: talk.type,
                  id: talk.talkId,
                  room: room.name,
                  language: talk.language,
                  key: i,
                  difficulty: talk.difficulty,
                  tags: talk.tags,
                  selectedTags: _this3.state.tags,
                  onToggleTag: function onToggleTag(val) {
                    return _this3.handleToggleTag(val);
                  },
                  onFavoriteChange: function onFavoriteChange() {
                    return _this3.filterProgram();
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                }));

                from = to;
                return !talk.hide ? talkEl : '';
              });
            });
          });
        });
      })))));
    }
  }]);

  return TalksAndSpeakers;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TalksAndSpeakers);

/***/ })

})
//# sourceMappingURL=talksAndSpeakers.js.4eb472b964b7fb84a06a.hot-update.js.map