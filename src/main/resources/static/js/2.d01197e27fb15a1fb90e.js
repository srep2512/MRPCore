webpackJsonp([2],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(168)

var Component = __webpack_require__(126)(
  /* script */
  __webpack_require__(159),
  /* template */
  __webpack_require__(174),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 159:
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
      select: 'GESAMT',
      treeModel: [],
      selectOptions: [{
        label: '3dslicer',
        value: '3DSLICER'
      }, {
        label: 'MESHLAB',
        value: 'MESHLAB'
      }, {
        label: 'GESAMT',
        value: 'GESAMT'
      }]
    };
  },
  methods: {
    loadProject() {
      var temp = this.$store.getters.getCurrentStructure;
      console.log(temp);
      var obj = {
        currStr: temp,
        projectType: this.select
      };
      this.$store.dispatch("setProject", obj);
      this.treeModel = this.$store.getters.getProjectStructure;
    }
  },
  mounted() {
    this.$store.dispatch("loadData");
  }
});

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(143)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("a5c94212", content, true);

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('div', [_c('hr', {
    staticClass: "inset"
  }), _vm._v(" "), _c('p', [_vm._v("Wählen Sie ein Projekt das angelegt werden soll")]), _vm._v(" "), _c('small', [_vm._v("Name:")]), _vm._v(" "), _c('q-dialog-select', {
    attrs: {
      "type": "radio",
      "options": _vm.selectOptions,
      "ok-label": "OK",
      "cancel-label": "Abbrechen",
      "title": "Radios"
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "primary",
    on: {
      "click": _vm.loadProject
    }
  }, [_vm._v("\n                   Laden\n        ")])], 1)]), _vm._v(" "), _c('hr', {
    staticClass: "inset"
  }), _vm._v(" "), _c('p', [_vm._v("Hier sehen sie welche Dateistruktur erzeugt wird")]), _vm._v(" "), _c('button', {
    staticClass: "primary"
  }, [_vm._v("\n                   Speichern\n        ")]), _vm._v(" "), _c('q-tree', {
    attrs: {
      "model": _vm.treeModel,
      "contract-html": "<i>remove_circle</i>",
      "expand-html": "<i>add_circle</i>"
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-title"
  }, [_c('h3', [_vm._v("Projektverwaltung")])])
}]}

/***/ })

});