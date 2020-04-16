webpackHotUpdate("static/development/pages/faq/account/[slug].js",{

/***/ "./layouts/vote-form.js":
/*!******************************!*\
  !*** ./layouts/vote-form.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_icons_ui_arrow_r_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/ui/arrow-r.js */ "./assets/icons/ui/arrow-r.js");







var _jsxFileName = "/Users/kerry/ceaper/layouts/vote-form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var VoteForm = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(VoteForm, _React$Component);

  var _super = _createSuper(VoteForm);

  function VoteForm() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VoteForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      Component: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "selectYes", function () {
      return _this.setState({
        Component: VoteYes
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "selectNo", function () {
      return _this.setState({
        Component: VoteNo
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VoteForm, [{
    key: "render",
    value: function render() {
      var Component = this.state.Component;
      if (Component) return __jsx(Component, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 26
        }
      });
      return __jsx("div", {
        className: "contents",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }
      }, __jsx("div", {
        id: "vote-wrapper",
        className: "card card-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5
        }
      }, "\u3053\u306E\u56DE\u7B54\u306F\u304A\u5F79\u306B\u7ACB\u3061\u307E\u3057\u305F\u304B\uFF1F"), __jsx("div", {
        className: "button-choice-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/edit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }, __jsx("button", {
        className: "button button-black-ol button-choice-l ",
        onClick: this.selectYes,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, "\u306F\u3044")), __jsx("button", {
        className: "button  button-black-ol button-choice-r",
        onClick: this.selectNo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }
      }, "\u3044\u3044\u3048"))));
    }
  }]);

  return VoteForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (VoteForm);

function VoteYes() {
  return __jsx("div", {
    className: "contents",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx("div", {
    id: "vote-wrapper",
    className: "card card-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\uFF01")));
}

function VoteNo() {
  return __jsx("div", {
    className: "contents",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 8
    }
  }, __jsx("div", {
    id: "vote-wrapper",
    className: "card card-wrapper",
    style: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "\u3088\u308D\u3057\u3051\u308C\u3070\u3001\u7406\u7531\u3092\u6559\u3048\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F"), __jsx("label", {
    "class": "answer-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }
  }, __jsx("input", {
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 31
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 55
    }
  }, "\u5185\u5BB9\u304C\u7406\u89E3\u3067\u304D\u306A\u3044\u3001\u8AAD\u307F\u306B\u304F\u304B\u3063\u305F")), __jsx("label", {
    "class": "answer-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 57
    }
  }, "\u81EA\u5206\u306E\u8CEA\u554F\u306B\u5BFE\u3059\u308B\u56DE\u7B54\u304C\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F")), __jsx("label", {
    "class": "answer-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 61
    }
  }, "\u305D\u306E\u4ED6")), __jsx("div", {
    className: "form-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("textarea", {
    className: "feedback-area",
    placeholder: "\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u306B\u3064\u3044\u3066\u306E\u5834\u5408\uFF1ACeaper\u306E\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3057\u3066\u611F\u3058\u305F\u4E8B\u3001\u826F\u304B\u3063\u305F\u70B9\u307E\u305F\u306F\u3001\u6539\u5584\u70B9\u306A\u3069\u3082\u304A\u8A71\u3057\u304F\u3060\u3055\u3044\u3002\u3000\u30D0\u30B0\u30FB\u4E0D\u5177\u5408\u306B\u3064\u3044\u3066\u306E\u5834\u5408\uFF1A\u3069\u306E\u3088\u3046\u306A\u72B6\u6CC1\u30FB\u64CD\u4F5C\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u304B\uFF1F \u554F\u984C\u304C\u767A\u751F\u3057\u305F\u6642\u306E\u72B6\u6CC1\u3092\u8A73\u3057\u304F\u304A\u8A71\u3057\u304F\u3060\u3055\u3044\u3002\u5185\u5BB9\u306B\u5FDC\u3058\u3066\u65E9\u6025\u306B\u5BFE\u5FDC\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=[slug].js.c6f918955be7adddb5a6.hot-update.js.map