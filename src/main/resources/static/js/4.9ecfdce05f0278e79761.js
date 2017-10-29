webpackJsonp([4],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(175)

var Component = __webpack_require__(126)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(182),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 165:
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
//
//
//
//
//
//

/*eslint-disable*/
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {
    projects() {
      this.$router.push('/ProjektAnlegen');
    }
  }
});

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(143)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("67423861", content, true);

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "layout-padding"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-title bg-secondary text-white"
  }, [_c('h1', [_vm._v("MRP-Lauf")]), _vm._v(" "), _c('p', [_vm._v("© By HTW - Dresden 2017")])]), _vm._v(" "), _c('div', {
    staticClass: "card-content card-force-top-padding"
  }, [_vm._v("\n          Das Projekt wurde durch Prof. Munkelt initiiert und wird seitdem durch Studenten gepflegt.\n\t\t "), _c('br'), _c('br'), _vm._v("\n          Zur Projektseite geht es hier entlang:  "), _c('a', {
    attrs: {
      "href": "https://about.gitlab.com/"
    }
  }, [_c('button', {
    staticClass: "secondary"
  }, [_vm._v("GIT")])])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-title bg-secondary text-white"
  }, [_c('h1', [_vm._v("News")])]), _vm._v(" "), _c('div', {
    staticClass: "card-content card-force-top-padding"
  }, [_c('br'), _c('br'), _vm._v("\n            Die neue Version enthält einen Giffler-Thompson-Algorithmus. \n          ")])])])])
}]}

/***/ })

});