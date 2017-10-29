webpackJsonp([8],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(138);
/*eslint-disable*/



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

function load(component) {
    return () => __webpack_require__(142)(`./${component}.vue`);
}

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    /*
     * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
     * it is only to be used only for websites.
     *
     * If you decide to go with "history" mode, please also open /config/index.js
     * and set "build.publicPath" to something other than an empty string.
     * Example: '/' instead of current ''
     *
     * If switching back to default "hash" mode, don't forget to set the
     * build publicPath back to '' so Cordova builds work again.
     */

    routes: [{ path: '/', component: load('Mainpage') }, // Default
    { path: '/ProjektAnlegen', component: load('ProjektAnlegen') }, { path: '/InfoAnsicht', component: load('Info_View') }, { path: '/Datenverwaltung', component: load('Datenverwaltung') }, { path: '/Algorithm', component: load('MRP_VIEW') }, { path: '*', component: load('Error404') // Not found
    }]
}));

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Module_MRP__ = __webpack_require__(129);
/*eslint-disable*/




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]); // Load fancy Vuex

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({

    modules: {
        a: __WEBPACK_IMPORTED_MODULE_2__Module_MRP__["a" /* default */]

    }

}));

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(131)

var Component = __webpack_require__(126)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(137),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configFile; });
/* unused harmony export FolderStructure */
/* eslint-disable  */
const configFile = {
    API: 'https://htwmrp.herokuapp.com/',
    STEPS: 'https://htwmrp.herokuapp.com/giffler',
    AlgStep: 'https://htwmrp.herokuapp.com/gifflerStep'

    // ProjectFolder structure
};const FolderStructure = { "data": [{ "id": "1008", "text": "Maschine10", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1", "text": "Zuschnitt", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1.1", "text": null, "start_date": "21-09-2017", "duration": 91, "parent": "1", "color": "#4f7044" }, { "id": "1.2", "text": null, "start_date": "21-12-2017", "duration": 85, "parent": "1", "color": "#99ff99" }, { "id": "1.3", "text": null, "start_date": "16-03-2018", "duration": 81, "parent": "1", "color": "#99ff99" }, { "id": "1.4", "text": null, "start_date": "05-06-2018", "duration": 46, "parent": "1", "color": "#99ff99" }, { "id": "1.5", "text": "1158", "start_date": "21-07-2018", "duration": 69, "parent": "1", "color": "#99ff99" }, { "id": "1.6", "text": "1155", "start_date": "28-09-2018", "duration": 2, "parent": "1", "color": "#99ff99" }, { "id": "1.7", "text": "1150", "start_date": "30-09-2018", "duration": 78, "parent": "1", "color": "#fffff" }, { "id": "1.8", "text": "1144", "start_date": "17-12-2018", "duration": 22, "parent": "1", "color": "#99ff99" }, { "id": "1.9", "text": "1147", "start_date": "08-01-2019", "duration": 46, "parent": "1", "color": "#99ff99" }, { "id": "1.10", "text": "1111", "start_date": "31-08-2019", "duration": 28, "parent": "1", "color": "#6ef442" }, { "id": "2", "text": "CNC-Bohren", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "2.1", "text": null, "start_date": "21-09-2017", "duration": 14, "parent": "2", "color": "#99ff99" }, { "id": "2.2", "text": null, "start_date": "05-10-2017", "duration": 31, "parent": "2", "color": "#99ff99" }, { "id": "2.3", "text": null, "start_date": "05-11-2017", "duration": 84, "parent": "2", "color": "#99ff99" }, { "id": "2.4", "text": "1151", "start_date": "28-01-2018", "duration": 90, "parent": "2", "color": "#6ef442" }, { "id": "2.5", "text": "1153", "start_date": "05-06-2018", "duration": 95, "parent": "2", "color": "#99ff99" }, { "id": "2.6", "text": "1140", "start_date": "17-12-2018", "duration": 9, "parent": "2", "color": "#fffff" }, { "id": "2.7", "text": "1149", "start_date": "26-12-2018", "duration": 61, "parent": "2", "color": "#99ff99" }, { "id": "2.8", "text": "1132", "start_date": "25-02-2019", "duration": 74, "parent": "2", "color": "#4f7044" }, { "id": "2.9", "text": "1136", "start_date": "10-05-2019", "duration": 13, "parent": "2", "color": "#99ff99" }, { "id": "2.10", "text": "1128", "start_date": "28-06-2019", "duration": 85, "parent": "2", "color": "#99ff99" }, { "id": "3", "text": "Montage", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "3.1", "text": "1142", "start_date": "18-05-2018", "duration": 39, "parent": "3", "color": "#4f7044" }, { "id": "3.2", "text": "1148", "start_date": "28-09-2018", "duration": 76, "parent": "3", "color": "#99ff99" }, { "id": "3.3", "text": "1146", "start_date": "13-12-2018", "duration": 61, "parent": "3", "color": "#99ff99" }, { "id": "3.4", "text": "1135", "start_date": "12-02-2019", "duration": 95, "parent": "3", "color": "#99ff99" }, { "id": "3.5", "text": "1130", "start_date": "18-05-2019", "duration": 36, "parent": "3", "color": "#fffff" }, { "id": "3.6", "text": "1121", "start_date": "23-06-2019", "duration": 69, "parent": "3", "color": "#6ef442" }, { "id": "3.7", "text": "1124", "start_date": "31-08-2019", "duration": 26, "parent": "3", "color": "#99ff99" }, { "id": "3.8", "text": "1099", "start_date": "01-05-2020", "duration": 52, "parent": "3", "color": "#99ff99" }, { "id": "3.9", "text": "1093", "start_date": "22-06-2020", "duration": 98, "parent": "3", "color": "#99ff99" }, { "id": "3.10", "text": "1077", "start_date": "25-03-2021", "duration": 79, "parent": "3", "color": "#99ff99" }, { "id": "1002", "text": "Maschine4", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1002.1", "text": "1141", "start_date": "28-04-2018", "duration": 75, "parent": "1002", "color": "#6ef442" }, { "id": "1002.2", "text": "1133", "start_date": "13-02-2019", "duration": 99, "parent": "1002", "color": "#99ff99" }, { "id": "1002.3", "text": "1120", "start_date": "23-06-2019", "duration": 49, "parent": "1002", "color": "#fffff" }, { "id": "1002.4", "text": "1127", "start_date": "11-08-2019", "duration": 32, "parent": "1002", "color": "#99ff99" }, { "id": "1002.5", "text": "1114", "start_date": "26-09-2019", "duration": 69, "parent": "1002", "color": "#99ff99" }, { "id": "1002.6", "text": "1088", "start_date": "12-10-2020", "duration": 26, "parent": "1002", "color": "#99ff99" }, { "id": "1002.7", "text": "1089", "start_date": "07-11-2020", "duration": 90, "parent": "1002", "color": "#99ff99" }, { "id": "1002.8", "text": "1085", "start_date": "05-02-2021", "duration": 6, "parent": "1002", "color": "#99ff99" }, { "id": "1002.9", "text": "1076", "start_date": "24-04-2021", "duration": 55, "parent": "1002", "color": "#99ff99" }, { "id": "1002.10", "text": "1072", "start_date": "18-06-2021", "duration": 33, "parent": "1002", "color": "#4f7044" }, { "id": "1003", "text": "Maschine5", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1003.1", "text": "1145", "start_date": "30-09-2018", "duration": 52, "parent": "1003", "color": "#99ff99" }, { "id": "1003.2", "text": "1137", "start_date": "23-02-2019", "duration": 74, "parent": "1003", "color": "#99ff99" }, { "id": "1003.3", "text": "1138", "start_date": "08-05-2019", "duration": 51, "parent": "1003", "color": "#99ff99" }, { "id": "1003.4", "text": "1134", "start_date": "28-06-2019", "duration": 61, "parent": "1003", "color": "#99ff99" }, { "id": "1003.5", "text": "1116", "start_date": "27-10-2019", "duration": 21, "parent": "1003", "color": "#99ff99" }, { "id": "1003.6", "text": "1110", "start_date": "17-11-2019", "duration": 11, "parent": "1003", "color": "#fffff" }, { "id": "1003.7", "text": "1112", "start_date": "28-11-2019", "duration": 10, "parent": "1003", "color": "#4f7044" }, { "id": "1003.8", "text": "1109", "start_date": "15-03-2020", "duration": 47, "parent": "1003", "color": "#99ff99" }, { "id": "1003.9", "text": "1091", "start_date": "01-05-2020", "duration": 46, "parent": "1003", "color": "#6ef442" }, { "id": "1003.10", "text": "1073", "start_date": "30-10-2020", "duration": 43, "parent": "1003", "color": "#99ff99" }, { "id": "1004", "text": "Maschine6", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1004.1", "text": "1139", "start_date": "25-02-2019", "duration": 7, "parent": "1004", "color": "#99ff99" }, { "id": "1004.2", "text": "1123", "start_date": "23-05-2019", "duration": 9, "parent": "1004", "color": "#99ff99" }, { "id": "1004.3", "text": "1117", "start_date": "12-09-2019", "duration": 88, "parent": "1004", "color": "#99ff99" }, { "id": "1004.4", "text": "1108", "start_date": "09-12-2019", "duration": 40, "parent": "1004", "color": "#99ff99" }, { "id": "1004.5", "text": "1101", "start_date": "18-01-2020", "duration": 46, "parent": "1004", "color": "#6ef442" }, { "id": "1004.6", "text": "1100", "start_date": "04-03-2020", "duration": 62, "parent": "1004", "color": "#fffff" }, { "id": "1004.7", "text": "1092", "start_date": "27-05-2020", "duration": 89, "parent": "1004", "color": "#4f7044" }, { "id": "1004.8", "text": "1095", "start_date": "24-08-2020", "duration": 65, "parent": "1004", "color": "#99ff99" }, { "id": "1004.9", "text": "1074", "start_date": "10-01-2021", "duration": 53, "parent": "1004", "color": "#99ff99" }, { "id": "1005", "text": "Maschine7", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1005.1", "text": "1103", "start_date": "20-02-2020", "duration": 85, "parent": "1005", "color": "#99ff99" }, { "id": "1005.2", "text": "1102", "start_date": "15-05-2020", "duration": 12, "parent": "1005", "color": "#4f7044" }, { "id": "1005.3", "text": "1094", "start_date": "27-05-2020", "duration": 49, "parent": "1005", "color": "#99ff99" }, { "id": "1005.4", "text": "1098", "start_date": "15-07-2020", "duration": 89, "parent": "1005", "color": "#99ff99" }, { "id": "1005.5", "text": "1090", "start_date": "12-10-2020", "duration": 56, "parent": "1005", "color": "#fffff" }, { "id": "1005.6", "text": "1081", "start_date": "07-12-2020", "duration": 72, "parent": "1005", "color": "#6ef442" }, { "id": "1005.7", "text": "1087", "start_date": "17-02-2021", "duration": 36, "parent": "1005", "color": "#99ff99" }, { "id": "1005.8", "text": "1086", "start_date": "25-03-2021", "duration": 30, "parent": "1005", "color": "#99ff99" }, { "id": "1005.9", "text": "1075", "start_date": "24-04-2021", "duration": 25, "parent": "1005", "color": "#99ff99" }, { "id": "1005.10", "text": "1079", "start_date": "19-05-2021", "duration": 45, "parent": "1005", "color": "#99ff99" }, { "id": "1006", "text": "Maschine8", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1006.1", "text": "1122", "start_date": "10-05-2019", "duration": 90, "parent": "1006", "color": "#4f7044" }, { "id": "1006.2", "text": "1125", "start_date": "08-08-2019", "duration": 48, "parent": "1006", "color": "#99ff99" }, { "id": "1006.3", "text": "1126", "start_date": "25-09-2019", "duration": 32, "parent": "1006", "color": "#99ff99" }, { "id": "1006.4", "text": "1129", "start_date": "27-10-2019", "duration": 64, "parent": "1006", "color": "#99ff99" }, { "id": "1006.5", "text": "1113", "start_date": "30-12-2019", "duration": 52, "parent": "1006", "color": "#99ff99" }, { "id": "1006.6", "text": "1107", "start_date": "20-02-2020", "duration": 19, "parent": "1006", "color": "#99ff99" }, { "id": "1006.7", "text": "1104", "start_date": "10-03-2020", "duration": 21, "parent": "1006", "color": "#99ff99" }, { "id": "1006.8", "text": "1096", "start_date": "27-06-2020", "duration": 89, "parent": "1006", "color": "#99ff99" }, { "id": "1006.9", "text": "1080", "start_date": "07-12-2020", "duration": 44, "parent": "1006", "color": "#fffff" }, { "id": "1006.10", "text": "1078", "start_date": "20-01-2021", "duration": 74, "parent": "1006", "color": "#99ff99" }, { "id": "1006.11", "text": "1071", "start_date": "04-04-2021", "duration": 30, "parent": "1006", "color": "#6ef442" }, { "id": "1007", "text": "Maschine9", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1007.1", "text": "1131", "start_date": "12-07-2018", "duration": 11, "parent": "1007", "color": "#6ef442" }, { "id": "1007.2", "text": "1118", "start_date": "21-09-2019", "duration": 11, "parent": "1007", "color": "#99ff99" }, { "id": "1007.3", "text": "1119", "start_date": "30-12-2019", "duration": 76, "parent": "1007", "color": "#99ff99" }, { "id": "1007.4", "text": "1115", "start_date": "15-03-2020", "duration": 72, "parent": "1007", "color": "#99ff99" }, { "id": "1007.5", "text": "1106", "start_date": "26-05-2020", "duration": 32, "parent": "1007", "color": "#99ff99" }, { "id": "1007.6", "text": "1097", "start_date": "27-06-2020", "duration": 48, "parent": "1007", "color": "#99ff99" }, { "id": "1007.7", "text": "1082", "start_date": "24-08-2020", "duration": 45, "parent": "1007", "color": "#4f7044" }, { "id": "1007.8", "text": "1083", "start_date": "08-10-2020", "duration": 22, "parent": "1007", "color": "#99ff99" }, { "id": "1007.9", "text": "1084", "start_date": "30-10-2020", "duration": 72, "parent": "1007", "color": "#99ff99" }, { "id": "1007.10", "text": "1070", "start_date": "20-01-2021", "duration": 21, "parent": "1007", "color": "#fffff" }, { "id": "1008", "text": "Maschine10", "start_date": null, "duration": 0, "parent": null, "color": null }, { "id": "1008.1", "text": null, "start_date": "21-09-2017", "duration": 43, "parent": "1008", "color": "#6ef442" }, { "id": "1008.2", "text": null, "start_date": "03-11-2017", "duration": 76, "parent": "1008", "color": "#99ff99" }, { "id": "1008.3", "text": null, "start_date": "18-01-2018", "duration": 29, "parent": "1008", "color": "#fffff" }, { "id": "1008.4", "text": "1154", "start_date": "16-02-2018", "duration": 6, "parent": "1008", "color": "#99ff99" }, { "id": "1008.5", "text": "1152", "start_date": "22-02-2018", "duration": 85, "parent": "1008", "color": "#4f7044" }, { "id": "1008.6", "text": "1156", "start_date": "21-07-2018", "duration": 37, "parent": "1008", "color": "#99ff99" }, { "id": "1008.7", "text": "1159", "start_date": "27-08-2018", "duration": 13, "parent": "1008", "color": "#99ff99" }, { "id": "1008.8", "text": "1157", "start_date": "09-09-2018", "duration": 86, "parent": "1008", "color": "#99ff99" }, { "id": "1008.9", "text": "1143", "start_date": "04-12-2018", "duration": 71, "parent": "1008", "color": "#99ff99" }, { "id": "1008.10", "text": "1105", "start_date": "26-05-2020", "duration": 47, "parent": "1008", "color": "#99ff99" }] };


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quasar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__(123);
// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
__webpack_require__(124);
// 2. or, use next line to activate DEFAULT QUASAR STYLE
/*eslint-disable*/
//require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_quasar___default.a); // Install Quasar Framework


__WEBPACK_IMPORTED_MODULE_1_quasar___default.a.start(() => {
    /* eslint-disable no-new */
    new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
        el: '#q-app',
        store: __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* default */],
        router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
        render: h => h(__webpack_require__(125))
    });
});

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_configFile__ = __webpack_require__(127);
/*eslint-disable*/


const moduleMRPStore = {

    state: {
        step: 0,
        Schritteverplant: { data: [] },
        AlgorithmusSchritte: [],
        AlgorithmusSchritteBis: [],
        Farbe: ["green", "green", "green", "green", "green", "green", "green", "green", "green", "green"]
    },
    getters: {
        displayedAuftraege: state => state.Produktionsauftrage,
        displayAlgorithmusSchritte: state => state.AlgorithmusSchritte,
        displayAlgorithmusSchritteBis: state => state.AlgorithmusSchritteBis,
        displaySchritteverplant: state => state.Schritteverplant,
        displayStep: state => state.step,
        getFarbe: state => state.Farbe
    },
    mutations: {

        LOAD_STEPS(state, steps) {
            //Gesamte Schritte speichern
            state.AlgorithmusSchritte = steps;
            state.Schritteverplant.data = [];
            //Maschinen laden
            steps.data.filter((x, i, arr) => {
                if (x.text.match("^M")) {
                    state.Schritteverplant.data.push(x);
                }
            });
        },
        CCOLOR(state, step) {
            state.Farbe = state.Farbe.map((x, i) => i == step ? x = "red" : x = "green");
        },
        ADDSTEP(state) {
            state.step++;
        },
        UPDATE(state, step) {
            state.Schritteverplant.data = step;
        },
        UPDATEBIS(state, step) {
            state.AlgorithmusSchritteBis = step;
        },
        RESET(state) {
            state.step = 0;
            state.Schritteverplant.data = [];
            state.AlgorithmusSchritteBis = [];
            state.AlgorithmusSchritte.data.filter((x, i, arr) => {
                if (x.text.match("^M")) {
                    state.Schritteverplant.data.push(x);
                }
            });
            state.Farbe = state.Farbe.map(x => x = "green");
        }
    },
    actions: {
        loadStepAlg({ commit }) {
            fetch(__WEBPACK_IMPORTED_MODULE_0__config_configFile__["a" /* configFile */].AlgStep, {
                method: "GET"
            }).then(function (response) {
                return response.json();
            }).then(function (aufs) {
                commit('LOAD_STEPS', aufs);
            });
        },
        changeColor({ commit }, id) {
            commit('CCOLOR', id);
        },
        update({ commit }, steps) {
            commit('UPDATE', steps);
        },
        incStep({ commit }) {
            commit('ADDSTEP');
        },
        reset({ commit }) {
            commit('RESET');
        },
        updateBIS({ commit }, steps) {
            commit('UPDATEBIS', steps);
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (moduleMRPStore);

/***/ }),

/***/ 130:
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

/*
 * Root component
 */
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 2,
	"./af.js": 2,
	"./ar": 9,
	"./ar-dz": 3,
	"./ar-dz.js": 3,
	"./ar-kw": 4,
	"./ar-kw.js": 4,
	"./ar-ly": 5,
	"./ar-ly.js": 5,
	"./ar-ma": 6,
	"./ar-ma.js": 6,
	"./ar-sa": 7,
	"./ar-sa.js": 7,
	"./ar-tn": 8,
	"./ar-tn.js": 8,
	"./ar.js": 9,
	"./az": 10,
	"./az.js": 10,
	"./be": 11,
	"./be.js": 11,
	"./bg": 12,
	"./bg.js": 12,
	"./bm": 13,
	"./bm.js": 13,
	"./bn": 14,
	"./bn.js": 14,
	"./bo": 15,
	"./bo.js": 15,
	"./br": 16,
	"./br.js": 16,
	"./bs": 17,
	"./bs.js": 17,
	"./ca": 18,
	"./ca.js": 18,
	"./cs": 19,
	"./cs.js": 19,
	"./cv": 20,
	"./cv.js": 20,
	"./cy": 21,
	"./cy.js": 21,
	"./da": 22,
	"./da.js": 22,
	"./de": 25,
	"./de-at": 23,
	"./de-at.js": 23,
	"./de-ch": 24,
	"./de-ch.js": 24,
	"./de.js": 25,
	"./dv": 26,
	"./dv.js": 26,
	"./el": 27,
	"./el.js": 27,
	"./en-au": 28,
	"./en-au.js": 28,
	"./en-ca": 29,
	"./en-ca.js": 29,
	"./en-gb": 30,
	"./en-gb.js": 30,
	"./en-ie": 31,
	"./en-ie.js": 31,
	"./en-nz": 32,
	"./en-nz.js": 32,
	"./eo": 33,
	"./eo.js": 33,
	"./es": 36,
	"./es-do": 34,
	"./es-do.js": 34,
	"./es-us": 35,
	"./es-us.js": 35,
	"./es.js": 36,
	"./et": 37,
	"./et.js": 37,
	"./eu": 38,
	"./eu.js": 38,
	"./fa": 39,
	"./fa.js": 39,
	"./fi": 40,
	"./fi.js": 40,
	"./fo": 41,
	"./fo.js": 41,
	"./fr": 44,
	"./fr-ca": 42,
	"./fr-ca.js": 42,
	"./fr-ch": 43,
	"./fr-ch.js": 43,
	"./fr.js": 44,
	"./fy": 45,
	"./fy.js": 45,
	"./gd": 46,
	"./gd.js": 46,
	"./gl": 47,
	"./gl.js": 47,
	"./gom-latn": 48,
	"./gom-latn.js": 48,
	"./gu": 49,
	"./gu.js": 49,
	"./he": 50,
	"./he.js": 50,
	"./hi": 51,
	"./hi.js": 51,
	"./hr": 52,
	"./hr.js": 52,
	"./hu": 53,
	"./hu.js": 53,
	"./hy-am": 54,
	"./hy-am.js": 54,
	"./id": 55,
	"./id.js": 55,
	"./is": 56,
	"./is.js": 56,
	"./it": 57,
	"./it.js": 57,
	"./ja": 58,
	"./ja.js": 58,
	"./jv": 59,
	"./jv.js": 59,
	"./ka": 60,
	"./ka.js": 60,
	"./kk": 61,
	"./kk.js": 61,
	"./km": 62,
	"./km.js": 62,
	"./kn": 63,
	"./kn.js": 63,
	"./ko": 64,
	"./ko.js": 64,
	"./ky": 65,
	"./ky.js": 65,
	"./lb": 66,
	"./lb.js": 66,
	"./lo": 67,
	"./lo.js": 67,
	"./lt": 68,
	"./lt.js": 68,
	"./lv": 69,
	"./lv.js": 69,
	"./me": 70,
	"./me.js": 70,
	"./mi": 71,
	"./mi.js": 71,
	"./mk": 72,
	"./mk.js": 72,
	"./ml": 73,
	"./ml.js": 73,
	"./mr": 74,
	"./mr.js": 74,
	"./ms": 76,
	"./ms-my": 75,
	"./ms-my.js": 75,
	"./ms.js": 76,
	"./my": 77,
	"./my.js": 77,
	"./nb": 78,
	"./nb.js": 78,
	"./ne": 79,
	"./ne.js": 79,
	"./nl": 81,
	"./nl-be": 80,
	"./nl-be.js": 80,
	"./nl.js": 81,
	"./nn": 82,
	"./nn.js": 82,
	"./pa-in": 83,
	"./pa-in.js": 83,
	"./pl": 84,
	"./pl.js": 84,
	"./pt": 86,
	"./pt-br": 85,
	"./pt-br.js": 85,
	"./pt.js": 86,
	"./ro": 87,
	"./ro.js": 87,
	"./ru": 88,
	"./ru.js": 88,
	"./sd": 89,
	"./sd.js": 89,
	"./se": 90,
	"./se.js": 90,
	"./si": 91,
	"./si.js": 91,
	"./sk": 92,
	"./sk.js": 92,
	"./sl": 93,
	"./sl.js": 93,
	"./sq": 94,
	"./sq.js": 94,
	"./sr": 96,
	"./sr-cyrl": 95,
	"./sr-cyrl.js": 95,
	"./sr.js": 96,
	"./ss": 97,
	"./ss.js": 97,
	"./sv": 98,
	"./sv.js": 98,
	"./sw": 99,
	"./sw.js": 99,
	"./ta": 100,
	"./ta.js": 100,
	"./te": 101,
	"./te.js": 101,
	"./tet": 102,
	"./tet.js": 102,
	"./th": 103,
	"./th.js": 103,
	"./tl-ph": 104,
	"./tl-ph.js": 104,
	"./tlh": 105,
	"./tlh.js": 105,
	"./tr": 106,
	"./tr.js": 106,
	"./tzl": 107,
	"./tzl.js": 107,
	"./tzm": 109,
	"./tzm-latn": 108,
	"./tzm-latn.js": 108,
	"./tzm.js": 109,
	"./uk": 110,
	"./uk.js": 110,
	"./ur": 111,
	"./ur.js": 111,
	"./uz": 113,
	"./uz-latn": 112,
	"./uz-latn.js": 112,
	"./uz.js": 113,
	"./vi": 114,
	"./vi.js": 114,
	"./x-pseudo": 115,
	"./x-pseudo.js": 115,
	"./yo": 116,
	"./yo.js": 116,
	"./zh-cn": 117,
	"./zh-cn.js": 117,
	"./zh-hk": 118,
	"./zh-hk.js": 118,
	"./zh-tw": 119,
	"./zh-tw.js": 119
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 133;

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('q-layout', [_c('div', {
    staticClass: "toolbar",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('button', {
    staticClass: "hide-on-drawer-visible",
    on: {
      "click": function($event) {
        _vm.$refs.leftDrawer.open()
      }
    }
  }, [_c('i', [_vm._v("menu")])]), _vm._v(" "), _c('q-toolbar-title', {
    attrs: {
      "padding": 1
    }
  }, [_vm._v("\n      MRP - Lauf in der Lehre        \n    ")])], 1), _vm._v(" "), _c('q-tabs', {
    attrs: {
      "slot": "navigation"
    },
    slot: "navigation"
  }, [_c('q-tab', {
    attrs: {
      "icon": "home",
      "route": "/",
      "exact": "",
      "replace": ""
    }
  }, [_vm._v("Startansicht")]), _vm._v(" "), _c('q-tab', {
    attrs: {
      "icon": "folder_shared",
      "route": "/Algorithm",
      "exact": "",
      "replace": ""
    }
  }, [_vm._v("Algorithmusansicht")]), _vm._v(" "), _c('q-tab', {
    attrs: {
      "icon": "help",
      "route": "/InfoAnsicht",
      "exact": "",
      "replace": ""
    }
  }, [_vm._v("Informationen")])], 1), _vm._v(" "), _c('router-view', {
    staticClass: "layout-view"
  }), _vm._v(" "), _c('div', {
    staticClass: "toolbar",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_vm._v("\n    © By HTW DRESDEN\n    \n  ")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Diagram/GanttDiagram.vue": [
		145,
		2
	],
	"./Diagram/giffler.vue": [
		146,
		6
	],
	"./Error404.vue": [
		147,
		5
	],
	"./Info_View.vue": [
		148,
		1
	],
	"./MRP_VIEW.vue": [
		149,
		0
	],
	"./Mainpage.vue": [
		150,
		4
	],
	"./Projektverwaltung.vue": [
		151,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 142;

/***/ })

},[128]);