(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"container-fluid px-0 main\">\r\n    <div class=\"row collapse show no-gutters d-flex h-100 position-relative\">\r\n\t\t<app-side class=\"p-0 h-100 text-white w-sidebar collapse d-none d-md-flex sidebar\"></app-side>\r\n        <div class=\"col\">\r\n            <app-main class=\"h-100\"></app-main>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid fixed-top bg-primary p-0\">\n    <div class=\"row collapse show no-gutters d-flex h-100 position-relative\">\n        <div class=\"px-3 w-sidebar navbar-collapse d-none d-md-flex country_top\">\n            <!-- spacer col -->\n            <span class=\"navbar-brand text-dark\">Pays</span>\n        </div>\n        <div class=\"col px-3 shadow py-3\">\n            <div class=\"d-flex\">\n                <!-- toggler -->\n                <a data-toggle=\"collapse\" href=\"#\" data-target=\".collapse\" role=\"button\" class=\"text-white\">\n                    <i class=\"fa fa-bars fa-lg\"></i>\n                </a>\n                <span *ngIf=\"leagueName\" class=\"league_name text-white\">{{leagueName}}</span>\n                <a href=\"#\" class=\"ml-auto text-white d-none\"><i class=\"fa fa-refresh\"></i></a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"InfosLeague[id]\" class=\"m-3\">\n\t<div class=\"btn-group mr-3 btn-group-toggle\" data-toggle=\"buttons\">\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"filter==='all'\" (click)=\"setFilter('all')\">\n\t    <input type=\"radio\" name=\"options\" id=\"All\" autocomplete=\"off\">All\n\t  </label>\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"filter==='home'\" (click)=\"setFilter('home')\">\n\t    <input type=\"radio\" name=\"options\" id=\"Home\" autocomplete=\"off\">Home\n\t  </label>\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"filter==='away'\" (click)=\"setFilter('away')\">\n\t    <input type=\"radio\" name=\"options\" id=\"Away\" autocomplete=\"off\">Away\n\t  </label>\n\t</div>\n\t<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"type==='uo'\" (click)=\"setType('uo')\">\n\t    <input type=\"radio\" name=\"options\" id=\"UO\" autocomplete=\"off\"> UO\n\t  </label>\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"type==='bts'\" (click)=\"setType('bts')\">\n\t    <input type=\"radio\" name=\"options\" id=\"BTS\" autocomplete=\"off\">BTS\n\t  </label>\n\t</div>\n</div>\n<ng-container *ngIf=\"InfosLeague[id]\">\n\t<div id=\"table-container\" class=\"ml-3\">\n\t\t<ag-grid-angular \n\t\t\tstyle=\"width: 100%; height: 100%;\"\n\t\t    class=\"ag-theme-material\"\n\t\t    [rowData]=\"rowData\" \n\t\t    [columnDefs]=\"columnDefs\"\n\t\t    [rowHeight]=\"25\"\n\t\t    [getRowClass]=\"getRowClass\"\n\t\t    (rowDataChanged)=\"onFirstDataRendered($event)\"\n\t\t    (gridColumnsChanged)=\"onFirstDataRendered($event)\"\n\t\t    (gridSizeChanged)=\"onFirstDataRendered($event)\"\n\t\t    suppressCellSelection\n\t\t    >\n\t\t</ag-grid-angular>\n\t</div>\n<ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/side/side.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/side/side.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"position-fixed h-100 w-sidebar side\">\n    <ul class=\"nav flex-column flex-nowrap text-truncate\" id=\"accordion\">\n        <li class=\"nav-item\" *ngFor=\"let countries of countries; let i = index\">\n            <a class=\"nav-link\" href=\"#submenu{{ i }}\" data-toggle=\"collapse\" data-target=\"#submenu{{ i }}\" (click)=\"loadLeagues(countries.country)\"><img src=\"{{countries.flag}}\"  />\n\t        <span class=\"mdc-list-item__text\">{{countries.country}}</span></a>\n\t        <div class=\"collapse\" id=\"submenu{{ i }}\" data-parent=\"#accordion\" aria-expanded=\"false\">\n\t\t        <ul class=\"flex-column nav\">\n\t\t        \t<ng-container *ngFor=\"let leagues of leagues[countries.country]\">\n\t\t        \t\t<ng-container *ngIf=\"leagues.is_current==1 && leagues.type=='League'\" >\n\t\t        \t\t\t<li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" (click)=\"loadTeams(leagues.league_id, countries.country, leagues.name)\"><span class=\"mdc-list-item__text\" [className]=\"leagues.league_id==clicked ? 'mdc-list-item__text clicked' : 'mdc-list-item__text'\">{{leagues.name}}</span></a></li>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t            <!--<li class=\"nav-item\" *ngFor=\"let leagues of leagues[countries.country]\"><a class=\"nav-link\" href=\"#\" *ngIf=\"leagues.is_current==1 && leagues.type=='League'\" (click)=\"loadTeams(leagues.league_id)\"><span class=\"mdc-list-item__text text-white\">{{leagues.name}}</span></a></li>-->\n\t\t        </ul>\n\t\t    </div>\n        </li>\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/api/api.service.ts":
/*!************************************!*\
  !*** ./src/app/api/api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //baseUrl:string = "https://cors-anywhere.herokuapp.com/https://www.api-football.com/demo/api/v2/";
        this.baseUrl = "https://api-football-v1.p.rapidapi.com/v2/";
        this.apiKey = "bd4ca8229dmshe5e7c2079127c06p1d4bd4jsndc1798d63de4";
    }
    getStats(type, soustype = "", soustypebis = "") {
        type = type + "/";
        soustype = soustype + "/";
        soustypebis = soustypebis + "/";
        this.stats = this.httpClient.get(this.baseUrl + type + soustype + soustypebis, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': this.apiKey,
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
            })
        });
        return this.stats;
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'foot-project-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _side_side_component__WEBPACK_IMPORTED_MODULE_6__["SideComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([])
        ],
        providers: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/event-emitter.service.ts":
/*!******************************************!*\
  !*** ./src/app/event-emitter.service.ts ***!
  \******************************************/
/*! exports provided: EventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterService", function() { return EventEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventEmitterService = class EventEmitterService {
    constructor() {
        this.invokeTeams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.invokeLeagueName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onLoadMiddleFrame(id, leagueName) {
        this.invokeTeams.emit(id);
        this.invokeLeagueName.emit(leagueName);
    }
};
EventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventEmitterService);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".league_name{font-size: 1.5rem;\r\n\tposition: absolute;\r\n\tmargin-left: 50px;\r\n\ttop: 10px;}\r\n\r\n.country_top{\r\n\tbackground-color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsaUJBQWlCO0NBQzdCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsU0FBUyxDQUFDOztBQUVYO0NBQ0Msc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWd1ZV9uYW1le2ZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRtYXJnaW4tbGVmdDogNTBweDtcclxuXHR0b3A6IDEwcHg7fVxyXG5cclxuLmNvdW50cnlfdG9we1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-emitter.service */ "./src/app/event-emitter.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(eventEmitterService) {
        this.eventEmitterService = eventEmitterService;
        this.leagueName = "";
        if (this.eventEmitterService.subsVar2 == undefined) {
            this.eventEmitterService.subsVar2 = this.eventEmitterService.
                invokeLeagueName.subscribe((leagueName) => {
                this.leagueName = leagueName;
            });
        }
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/main/InfosTeam.ts":
/*!***********************************!*\
  !*** ./src/app/main/InfosTeam.ts ***!
  \***********************************/
/*! exports provided: InfosTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosTeam", function() { return InfosTeam; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class InfosTeam {
    constructor(team_id, team_name, team_logo, rank, fixtures) {
        this.fixtures = [];
        this.team_id = team_id;
        this.team_name = team_name;
        this.team_logo = team_logo;
        this.fixtures = fixtures;
        this.sumO = { "all": 0, "home": 0, "away": 0 };
        this.sumU = { "all": 0, "home": 0, "away": 0 };
        this.sumY = { "all": 0, "home": 0, "away": 0 };
        this.sumN = { "all": 0, "home": 0, "away": 0 };
        this.sumG = { "all": 0, "home": 0, "away": 0 };
        this.rank = rank;
        this.parseScore();
        this.sumY["all"] = this.sumY["home"] + this.sumY["away"];
        this.sumU["all"] = this.sumU["home"] + this.sumU["away"];
        this.sumO["all"] = this.sumO["home"] + this.sumO["away"];
        this.sumG["all"] = this.sumO["all"] + this.sumU["all"];
        this.sumG["home"] = this.sumO["home"] + this.sumU["home"];
        this.sumG["away"] = this.sumO["away"] + this.sumU["away"];
        this.sumN["all"] = this.sumG["all"] - this.sumY["all"];
        this.sumN["home"] = this.sumG["home"] - this.sumY["home"];
        this.sumN["away"] = this.sumG["away"] - this.sumY["away"];
    }
    ngOnInit() { }
    parseScore() {
        for (let fixture of this.fixtures) {
            let total = 0;
            let typeBTS = "N";
            let typeUO = "E";
            let place;
            if (fixture.homeTeam.team_id == this.team_id) {
                place = "home";
            }
            else {
                place = "away";
            }
            if (fixture.score.fulltime != null) {
                let score = fixture.score.fulltime.toString().split("-");
                if (Number(score[0]) > 0 && Number(score[1]) > 0) {
                    typeBTS = "Y";
                    this.sumY[place]++;
                }
                total = (Number(score[0]) + Number(score[1]));
            }
            else {
                fixture.score.fulltime = "Erreur";
            }
            fixture.score.total = total;
            fixture.typeBTS = typeBTS;
            if (total > 2) {
                this.sumO[place]++;
                typeUO = "O";
            }
            else if (total <= 2) {
                this.sumU[place]++;
                typeUO = "U";
            }
            fixture.typeUO = typeUO;
        }
    }
}


/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#table-container{height: calc(100% - 70px);}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHlCQUF5QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFibGUtY29udGFpbmVye2hlaWdodDogY2FsYygxMDAlIC0gNzBweCk7fVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-emitter.service */ "./src/app/event-emitter.service.ts");
/* harmony import */ var _InfosTeam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfosTeam */ "./src/app/main/InfosTeam.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let MainComponent = class MainComponent {
    constructor(apiService, eventEmitterService) {
        this.apiService = apiService;
        this.eventEmitterService = eventEmitterService;
        this.teams = [];
        this.rounds = [];
        this.standings = [];
        this.fixtures = [];
        this.infos = [];
        this.InfosTeam = [];
        this.InfosLeague = [];
        this.columnDefs = [];
        this.rowData = [];
        this.getRowClass = function (params) {
            /*let fixtures = params.data.fixtures;
            let counter = 0;
            let previousValueUO = "";
            let previousValueBTS = "";
            let style = "";
            let type;
            for(let fixture of fixtures){
                if(params.data.filter == "all" || (params.data.filter == "home" && fixture.homeTeam.team_id == params.data.team_id) || (params.data.filter == "away" && fixture.awayTeam.team_id == params.data.team_id)){
                    if(params.data.type == "uo" && (fixture.typeUO =="U" || fixture.typeUO == "O")){
                        if( fixture.typeUO == previousValueUO){
                            counter++;
                        }
                        else{
                            counter = 0;
                        }
                        previousValueUO = fixture.typeUO;
                    }
                    else if(params.data.type == "bts" && (fixture.typeBTS =="Y" || fixture.typeBTS == "N")){
                        if( fixture.typeBTS == previousValueBTS){
                            counter++;
                        }
                        else{
                            counter = 0;
                        }
                        previousValueBTS = fixture.typeBTS;
                    }
                    if(counter == 5){
                        style='sixInARow';
                    }
                    else if(counter == 6){
                        style='sevenInARow';
                    }
                    else if(counter >= 7){
                        style='eightInARow';
                    }
                }
            }
            return style;*/
        };
        if (this.eventEmitterService.subsVar == undefined) {
            this.eventEmitterService.subsVar = this.eventEmitterService.
                invokeTeams.subscribe((id) => {
                this.filter = "all";
                this.type = "uo";
                this.id = id;
                this.InfosTeam = [];
                this.loadTeams(id);
            });
        }
    }
    ngOnInit() { }
    loadTeams(id) {
        if (!this.InfosLeague[id]) {
            this.apiService.getStats("teams", "league", id).subscribe((data) => {
                this.teams[id] = data['api']['teams'];
                //console.log(data['api']);
            }, (error) => {
                console.log(error);
            }, () => {
                this.loadFixtures(id);
            });
        }
        else
            (this.assignStandings(id));
    }
    loadFixtures(id) {
        this.apiService.getStats("fixtures", "league", id).subscribe((data) => {
            this.fixtures[id] = data['api']['fixtures'].reverse();
            //console.log(data['api']);
        }, (error) => {
            console.log(error);
        }, () => { this.loadStandings(id); });
    }
    loadStandings(id) {
        this.apiService.getStats("leagueTable", id).subscribe((data) => {
            this.standings[id] = data['api'];
            //console.log(data['api']);
        }, (error) => {
            console.log(error);
        }, () => { this.assignStandings(id); });
    }
    assignStandings(id) {
        let i = 0;
        let rank;
        for (let team of this.teams[id]) {
            this.assignFixtures(this.id, team.team_id, team.name, team.logo, i);
            i++;
        }
        this.InfosLeague[id] = this.InfosTeam;
        //console.log(this.InfosLeague[id]);
        this.setTable();
    }
    assignFixtures(id, team_id, team_name, team_logo, index) {
        let rank = "";
        if (this.standings[id]["results"] == 1) {
            for (let standing of this.standings[id]["standings"][0]) {
                if (standing.team_id == team_id) {
                    rank = standing.rank;
                }
            }
        }
        let i = 0;
        this.infos = [];
        for (let fixture of this.fixtures[id]) {
            //if(fixture.round.includes('Regular Season') || fixture.round.includes('Regular_Season')){
            if ((fixture.awayTeam.team_id == team_id || fixture.homeTeam.team_id == team_id) && fixture.statusShort == "FT") {
                let fixture_id = fixture.fixture_id;
                this.infos[i] = fixture;
                i++;
            }
            //}
        }
        if (this.infos.length > 0) {
            this.InfosTeam[index] = new _InfosTeam__WEBPACK_IMPORTED_MODULE_4__["InfosTeam"](team_id, team_name, team_logo, rank, this.infos);
            this.InfosTeam[index].filter = this.filter;
            this.InfosTeam[index].type = this.type;
        }
    }
    setFilter(filter) {
        if (this.filter != filter) {
            this.filter = filter;
            for (let team of this.InfosLeague[this.id]) {
                if (team) {
                    team.filter = filter;
                }
            }
            this.setTable();
        }
    }
    setType(type) {
        if (this.type != type) {
            this.type = type;
            for (let team of this.InfosLeague[this.id]) {
                if (team) {
                    team.type = type;
                }
            }
            this.setTable();
        }
    }
    setTable() {
        if (this.type == "uo") {
            this.columnDefs = [
                {
                    headerName: "#",
                    field: 'rank',
                    minWidth: 65,
                    width: 70,
                    maxWidth: 80,
                    sortable: true,
                    type: "numericColumn"
                },
                {
                    headerName: "Équipe",
                    field: "team_name",
                    minWidth: 180,
                    maxWidth: 350,
                    sortable: true,
                    sort: "asc",
                },
                {
                    headerName: "G",
                    field: "sumG",
                    minWidth: 65,
                    width: 70,
                    maxWidth: 80,
                    sortable: true,
                    type: "numericColumn",
                    valueGetter: this.sumGCellRenderer
                },
                {
                    headerName: "O",
                    field: "sumO",
                    minWidth: 65,
                    width: 70,
                    maxWidth: 80,
                    sortable: true,
                    type: "numericColumn",
                    valueGetter: this.sumOCellRenderer
                },
                {
                    headerName: "U",
                    field: "sumU",
                    minWidth: 65,
                    width: 70,
                    maxWidth: 80,
                    sortable: true,
                    type: "numericColumn",
                    valueGetter: this.sumUCellRenderer
                },
                {
                    headerName: "Résultats",
                    field: "fixtures",
                    minWidth: 800,
                    cellRenderer: this.fixturesCellRenderer,
                    cellRendererParams: { filter: this.filter, type: this.type }
                }
            ];
        }
        else {
            this.columnDefs = [
                {
                    headerName: "#",
                    field: 'rank',
                    minWidth: 65,
                    width: 70,
                    maxWidth: 80,
                    sortable: true,
                    type: "numericColumn"
                },
                {
                    headerName: "Équipe",
                    field: "team_name",
                    minWidth: 180,
                    maxWidth: 350,
                    sortable: true,
                    sort: "asc"
                },
                {
                    headerName: "G",
                    field: "sumG",
                    minWidth: 65,
                    width: 70,
                    maxWidth: 80,
                    sortable: true,
                    type: "numericColumn",
                    valueGetter: this.sumGCellRenderer
                },
                {
                    headerName: "Y",
                    field: "sumY",
                    minWidth: 65,
                    width: 70,
                    maxWidth: 80,
                    sortable: true,
                    type: "numericColumn",
                    valueGetter: this.sumYCellRenderer
                },
                {
                    headerName: "N",
                    field: "sumN",
                    minWidth: 65,
                    width: 70,
                    maxWidth: 80,
                    sortable: true,
                    type: "numericColumn",
                    valueGetter: this.sumNCellRenderer
                },
                {
                    headerName: "Résultats",
                    field: "fixtures",
                    minWidth: 800,
                    cellRenderer: this.fixturesCellRenderer,
                    cellRendererParams: { filter: this.filter, type: this.type }
                }
            ];
        }
        this.rowData = this.InfosLeague[this.id];
    }
    sumGCellRenderer(params) {
        return params.data.sumG[params.data.filter];
    }
    sumYCellRenderer(params) {
        return params.data.sumY[params.data.filter];
    }
    sumNCellRenderer(params) {
        return params.data.sumN[params.data.filter];
    }
    sumOCellRenderer(params) {
        return params.data.sumO[params.data.filter];
    }
    sumUCellRenderer(params) {
        return params.data.sumU[params.data.filter];
    }
    fixturesCellRenderer(params) {
        let fixtures = params.data.fixtures;
        let retour = "";
        let type;
        let filter;
        for (let fixture of fixtures) {
            if (params.filter == "all" || (params.filter == "home" && fixture.homeTeam.team_id == params.data.team_id) || (params.filter == "away" && fixture.awayTeam.team_id == params.data.team_id)) {
                if (params.type == "uo") {
                    type = fixture.typeUO;
                }
                else {
                    type = fixture.typeBTS;
                }
                retour += '<div class="fixture ' + type + '" data-toggle="tooltip" data-placement="top" data-html="true" ';
                retour += 'data-original-title="<span class=\'date text-light\'>' + Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(fixture.event_date, 'dd/MM/yyyy - HH:mm', 'en-US') + '</span><span class=\'match\'>' + fixture.homeTeam.team_name + '-' + fixture.awayTeam.team_name + '</span> <span class=\'score\'>' + fixture.score.fulltime + '</span>" onmouseenter="$(this).tooltip(\'show\')">';
                retour += '<span>' + type + '</span>';
                retour += '</div>';
            }
        }
        return retour;
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
};
MainComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/side/side.component.css":
/*!*****************************************!*\
  !*** ./src/app/side/side.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side{box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)}\r\n\r\n.nav-item img{\r\n\tmin-width: 20px;\r\n\tmax-width: 20px;\r\n\tmargin-right: 15px;\r\n}\r\n\r\n.nav-item{\r\n\tborder-bottom: 1px solid #f3f3f3;\r\n\ttext-transform: uppercase;\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-item a{\r\n\tcolor: #5d5c5d;\r\n\tpadding: 0.4rem 1rem;\r\n\tline-height: 0.9rem;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.nav-item .collapse, .nav-item .collapsing{\r\n\tborder-left: 1px solid #00838f;\r\n\tmargin-left: 2rem;\r\n}\r\n\r\n.nav-link[aria-expanded=\"true\"]{\r\n\tfont-weight: bold;\r\n}\r\n\r\n.collapse li{\r\n\tborder-bottom: 1px solid #f3f3f3;\r\n\tcolor: #5d5c5d;\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-link:hover{\r\n\tbackground:#f2f2f2;\r\n}\r\n\r\n.nav-link .clicked{\r\n\tcolor: #00838f;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS9zaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSw2Q0FBNkM7O0FBRW5EO0NBQ0MsZUFBZTtDQUNmLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUdBO0NBQ0MsZ0NBQWdDO0NBQ2hDLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2lkZS9zaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZXtib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSl9XHJcblxyXG4ubmF2LWl0ZW0gaW1ne1xyXG5cdG1pbi13aWR0aDogMjBweDtcclxuXHRtYXgtd2lkdGg6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubmF2LWl0ZW17XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhe1xyXG5cdGNvbG9yOiAjNWQ1YzVkO1xyXG5cdHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAwLjlyZW07XHJcblx0Zm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5uYXYtaXRlbSAuY29sbGFwc2UsIC5uYXYtaXRlbSAuY29sbGFwc2luZ3tcclxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDgzOGY7XHJcblx0bWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5uYXYtbGlua1thcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXXtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi5jb2xsYXBzZSBsaXtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcclxuXHRjb2xvcjogIzVkNWM1ZDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlcntcclxuXHRiYWNrZ3JvdW5kOiNmMmYyZjI7XHJcbn1cclxuLm5hdi1saW5rIC5jbGlja2Vke1xyXG5cdGNvbG9yOiAjMDA4MzhmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/side/side.component.ts":
/*!****************************************!*\
  !*** ./src/app/side/side.component.ts ***!
  \****************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-emitter.service */ "./src/app/event-emitter.service.ts");




let SideComponent = class SideComponent {
    constructor(apiService, eventEmitterService) {
        this.apiService = apiService;
        this.eventEmitterService = eventEmitterService;
        this.leagues = [];
        this.wantedCountries = [
            { code: "DZ" }, { code: "DE" }, { code: "AR" }, { code: "GB" }, { code: "AU" }, { code: "AT" }, { code: "BE" }, { code: "BY" }, { code: "BR" }, { code: "BG" }, { code: "CL" },
            { code: "CN" }, { code: "KR" }, { code: "HR" }, { code: "DK" }, { code: "ES" }, { code: "FI" }, { code: "FR" }, { code: "GR" },
            { code: "HU" }, { code: "IE" }, { code: "IS" }, { code: "IT" }, { code: "JP" }, { code: "KZ" }, { code: "LT" }, { code: "MY" }, { code: "MA" }, { code: "ME" }, { code: "NO" }, { code: "NL" }, { code: "PL" },
            { code: "PT" }, { code: "CZ" }, { code: "RO" }, { code: "RU" }, { code: "RS" }, { code: "SK" }, { code: "SI" }, { code: "SE" }, { code: "CH" }, { code: "TN" }, { code: "TR" }, { code: "UA" }, { code: "US" }
        ]; /*
        /* GB = England & Scotland & Wales */
    }
    ngOnInit() {
        this.apiService.getStats("countries").subscribe((data) => {
            this.countries = data['api']['countries'];
            this.countries = this.countries.filter(ar => this.wantedCountries.find(wc => (wc.code === ar.code)));
        });
    }
    loadLeagues(country) {
        if (!this.leagues[country]) {
            this.apiService.getStats("leagues", "country", country).subscribe((data) => {
                this.leagues[country] = data['api']['leagues'];
                //console.log(this.leagues[country]);
            });
        }
    }
    loadTeams(id, country, leagueName) {
        let name = country + " > " + leagueName;
        this.eventEmitterService.onLoadMiddleFrame(id, name);
        this.clicked = id;
    }
};
SideComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
];
SideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/side/side.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side.component.css */ "./src/app/side/side.component.css")).default]
    })
], SideComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cyril Fromont\OneDrive - VOCALCOM\Documents\Sites\project\foot-project-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map