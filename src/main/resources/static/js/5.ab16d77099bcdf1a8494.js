webpackJsonp([5],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(177)

var Component = __webpack_require__(126)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(184),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*eslint-disable*/
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      canGoBack: window.history.length > 1
    };
  },
  methods: {
    goBack() {
      window.history.go(-1);
    }
  }
});

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(143)();
// imports


// module
exports.push([module.i, ".error-page .error-code{height:50vh;width:100%;padding-top:15vh;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.error-page .error-card{margin-top:-25px;width:90vw;max-width:600px;padding:50px}.error-page .error-card i{font-size:5rem}", ""]);

// exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("a8967ad4", content, true);

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout-padding"
  }, [_c('div', {
    staticClass: "error-page bg-light column items-center"
  }, [_c('div', {
    staticClass: "error-code bg-primary flex items-center justify-center"
  }, [_vm._v("\r\n      404\r\n    ")]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "error-card card bg-white column items-center justify-center"
  }, [_c('i', {
    staticClass: "text-grey-5"
  }, [_vm._v("error_outline")]), _vm._v(" "), _c('p', {
    staticClass: "caption text-center"
  }, [_vm._v("Oops. Nothing here...")]), _vm._v(" "), _c('p', {
    staticClass: "text-center group"
  }, [(_vm.canGoBack) ? _c('button', {
    staticClass: "grey push small",
    on: {
      "click": _vm.goBack
    }
  }, [_c('i', {
    staticClass: "on-left"
  }, [_vm._v("keyboard_arrow_left")]), _vm._v("\r\n            Go back\r\n          ")]) : _vm._e(), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('button', {
    staticClass: "grey push small"
  }, [_vm._v("\r\n              Go home\r\n              "), _c('i', {
    staticClass: "on-right"
  }, [_vm._v("home")])])])], 1)])])])])
},staticRenderFns: []}

/***/ })

});