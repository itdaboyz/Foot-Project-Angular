function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"container-fluid px-0 main\">\r\n    <div class=\"row collapse show no-gutters d-flex h-100 position-relative\">\r\n\t\t<app-side class=\"p-0 h-100 text-white w-sidebar collapse d-none d-md-flex sidebar\"></app-side>\r\n        <div class=\"col\">\r\n            <app-main class=\"h-100\"></app-main>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid fixed-top bg-primary p-0\">\n    <div class=\"row collapse show no-gutters d-flex h-100 position-relative\">\n        <div class=\"px-3 w-sidebar navbar-collapse d-none d-md-flex country_top\">\n            <!-- spacer col -->\n            <span class=\"navbar-brand text-dark\">Pays</span>\n        </div>\n        <div class=\"col px-3 shadow py-3\">\n            <div class=\"d-flex\">\n                <!-- toggler -->\n                <a data-toggle=\"collapse\" href=\"#\" data-target=\".collapse\" role=\"button\" class=\"text-white\">\n                    <i class=\"fa fa-bars fa-lg\"></i>\n                </a>\n                <span *ngIf=\"leagueName\" class=\"league_name text-white\">{{leagueName}}</span>\n                <a href=\"#\" class=\"ml-auto text-white d-none\"><i class=\"fa fa-refresh\"></i></a>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"InfosLeague[id]\" class=\"m-3\">\n\t<div class=\"btn-group mr-3 btn-group-toggle\" data-toggle=\"buttons\">\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"filter==='all'\" (click)=\"setFilter('all')\">\n\t    <input type=\"radio\" name=\"options\" id=\"All\" autocomplete=\"off\">All\n\t  </label>\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"filter==='home'\" (click)=\"setFilter('home')\">\n\t    <input type=\"radio\" name=\"options\" id=\"Home\" autocomplete=\"off\">Home\n\t  </label>\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"filter==='away'\" (click)=\"setFilter('away')\">\n\t    <input type=\"radio\" name=\"options\" id=\"Away\" autocomplete=\"off\">Away\n\t  </label>\n\t</div>\n\t<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"type==='uo'\" (click)=\"setType('uo')\">\n\t    <input type=\"radio\" name=\"options\" id=\"UO\" autocomplete=\"off\"> UO\n\t  </label>\n\t  <label class=\"btn px-3 btn-outline-primary\" [class.active]=\"type==='bts'\" (click)=\"setType('bts')\">\n\t    <input type=\"radio\" name=\"options\" id=\"BTS\" autocomplete=\"off\">BTS\n\t  </label>\n\t</div>\n</div>\n<ng-container *ngIf=\"InfosLeague[id]\">\n\t<div id=\"table-container\" class=\"ml-3\">\n\t\t<ag-grid-angular \n\t\t\tstyle=\"width: 100%; height: 100%;\"\n\t\t    class=\"ag-theme-material\"\n\t\t    [rowData]=\"rowData\" \n\t\t    [columnDefs]=\"columnDefs\"\n\t\t    [rowHeight]=\"25\"\n\t\t    [getRowClass]=\"getRowClass\"\n\t\t    (rowDataChanged)=\"onFirstDataRendered($event)\"\n\t\t    (gridColumnsChanged)=\"onFirstDataRendered($event)\"\n\t\t    (gridSizeChanged)=\"onFirstDataRendered($event)\"\n\t\t    suppressCellSelection\n\t\t    >\n\t\t</ag-grid-angular>\n\t</div>\n<ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/side/side.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/side/side.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSideSideComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"position-fixed h-100 w-sidebar side\">\n    <ul class=\"nav flex-column flex-nowrap text-truncate\" id=\"accordion\">\n        <li class=\"nav-item\" *ngFor=\"let countries of countries; let i = index\">\n            <a class=\"nav-link\" href=\"#submenu{{ i }}\" data-toggle=\"collapse\" data-target=\"#submenu{{ i }}\" (click)=\"loadLeagues(countries.country)\"><img src=\"{{countries.flag}}\"  />\n\t        <span class=\"mdc-list-item__text\">{{countries.country}}</span></a>\n\t        <div class=\"collapse\" id=\"submenu{{ i }}\" data-parent=\"#accordion\" aria-expanded=\"false\">\n\t\t        <ul class=\"flex-column nav\">\n\t\t        \t<ng-container *ngFor=\"let leagues of leagues[countries.country]\">\n\t\t        \t\t<ng-container *ngIf=\"leagues.is_current==1 && leagues.type=='League'\" >\n\t\t        \t\t\t<li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" (click)=\"loadTeams(leagues.league_id, countries.country, leagues.name)\"><span class=\"mdc-list-item__text\" [className]=\"leagues.league_id==clicked ? 'mdc-list-item__text clicked' : 'mdc-list-item__text'\">{{leagues.name}}</span></a></li>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t            <!--<li class=\"nav-item\" *ngFor=\"let leagues of leagues[countries.country]\"><a class=\"nav-link\" href=\"#\" *ngIf=\"leagues.is_current==1 && leagues.type=='League'\" (click)=\"loadTeams(leagues.league_id)\"><span class=\"mdc-list-item__text text-white\">{{leagues.name}}</span></a></li>-->\n\t\t        </ul>\n\t\t    </div>\n        </li>\n    </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/api/api.service.ts":
  /*!************************************!*\
    !*** ./src/app/api/api.service.ts ***!
    \************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient; //baseUrl:string = "https://cors-anywhere.herokuapp.com/https://www.api-football.com/demo/api/v2/";

        this.baseUrl = "https://api-football-v1.p.rapidapi.com/v2/";
        this.apiKey = "bd4ca8229dmshe5e7c2079127c06p1d4bd4jsndc1798d63de4";
      }

      _createClass(ApiService, [{
        key: "getStats",
        value: function getStats(type) {
          var soustype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var soustypebis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
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
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'foot-project-angular';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _side_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./side/side.component */
    "./src/app/side/side.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _side_side_component__WEBPACK_IMPORTED_MODULE_6__["SideComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([])],
      providers: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/event-emitter.service.ts":
  /*!******************************************!*\
    !*** ./src/app/event-emitter.service.ts ***!
    \******************************************/

  /*! exports provided: EventEmitterService */

  /***/
  function srcAppEventEmitterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventEmitterService", function () {
      return EventEmitterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventEmitterService = /*#__PURE__*/function () {
      function EventEmitterService() {
        _classCallCheck(this, EventEmitterService);

        this.invokeTeams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.invokeLeagueName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EventEmitterService, [{
        key: "onLoadMiddleFrame",
        value: function onLoadMiddleFrame(id, leagueName) {
          this.invokeTeams.emit(id);
          this.invokeLeagueName.emit(leagueName);
        }
      }]);

      return EventEmitterService;
    }();

    EventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventEmitterService);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".league_name{font-size: 1.5rem;\r\n\tposition: absolute;\r\n\tmargin-left: 50px;\r\n\ttop: 10px;}\r\n\r\n.country_top{\r\n\tbackground-color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsaUJBQWlCO0NBQzdCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsU0FBUyxDQUFDOztBQUVYO0NBQ0Msc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWd1ZV9uYW1le2ZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRtYXJnaW4tbGVmdDogNTBweDtcclxuXHR0b3A6IDEwcHg7fVxyXG5cclxuLmNvdW50cnlfdG9we1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../event-emitter.service */
    "./src/app/event-emitter.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(eventEmitterService) {
        var _this = this;

        _classCallCheck(this, HeaderComponent);

        this.eventEmitterService = eventEmitterService;
        this.leagueName = "";

        if (this.eventEmitterService.subsVar2 == undefined) {
          this.eventEmitterService.subsVar2 = this.eventEmitterService.invokeLeagueName.subscribe(function (leagueName) {
            _this.leagueName = leagueName;
          });
        }
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/main/InfosTeam.ts":
  /*!***********************************!*\
    !*** ./src/app/main/InfosTeam.ts ***!
    \***********************************/

  /*! exports provided: InfosTeam */

  /***/
  function srcAppMainInfosTeamTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfosTeam", function () {
      return InfosTeam;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var InfosTeam = /*#__PURE__*/function () {
      function InfosTeam(team_id, team_name, team_logo, rank, fixtures) {
        _classCallCheck(this, InfosTeam);

        this.fixtures = [];
        this.team_id = team_id;
        this.team_name = team_name;
        this.team_logo = team_logo;
        this.fixtures = fixtures;
        this.sumO = {
          "all": 0,
          "home": 0,
          "away": 0
        };
        this.sumU = {
          "all": 0,
          "home": 0,
          "away": 0
        };
        this.sumY = {
          "all": 0,
          "home": 0,
          "away": 0
        };
        this.sumN = {
          "all": 0,
          "home": 0,
          "away": 0
        };
        this.sumG = {
          "all": 0,
          "home": 0,
          "away": 0
        };
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

      _createClass(InfosTeam, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "parseScore",
        value: function parseScore() {
          var _iterator = _createForOfIteratorHelper(this.fixtures),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var fixture = _step.value;
              var total = 0;
              var typeBTS = "N";
              var typeUO = "E";
              var place = void 0;

              if (fixture.homeTeam.team_id == this.team_id) {
                place = "home";
              } else {
                place = "away";
              }

              if (fixture.score.fulltime != null) {
                var score = fixture.score.fulltime.toString().split("-");

                if (Number(score[0]) > 0 && Number(score[1]) > 0) {
                  typeBTS = "Y";
                  this.sumY[place]++;
                }

                total = Number(score[0]) + Number(score[1]);
              } else {
                fixture.score.fulltime = "Erreur";
              }

              fixture.score.total = total;
              fixture.typeBTS = typeBTS;

              if (total > 2) {
                this.sumO[place]++;
                typeUO = "O";
              } else if (total <= 2) {
                this.sumU[place]++;
                typeUO = "U";
              }

              fixture.typeUO = typeUO;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }]);

      return InfosTeam;
    }();
    /***/

  },

  /***/
  "./src/app/main/main.component.css":
  /*!*****************************************!*\
    !*** ./src/app/main/main.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#table-container{height: calc(100% - 70px);}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHlCQUF5QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFibGUtY29udGFpbmVye2hlaWdodDogY2FsYygxMDAlIC0gNzBweCk7fVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../event-emitter.service */
    "./src/app/event-emitter.service.ts");
    /* harmony import */


    var _InfosTeam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./InfosTeam */
    "./src/app/main/InfosTeam.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(apiService, eventEmitterService) {
        var _this2 = this;

        _classCallCheck(this, MainComponent);

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
          this.eventEmitterService.subsVar = this.eventEmitterService.invokeTeams.subscribe(function (id) {
            _this2.filter = "all";
            _this2.type = "uo";
            _this2.id = id;
            _this2.InfosTeam = [];

            _this2.loadTeams(id);
          });
        }
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadTeams",
        value: function loadTeams(id) {
          var _this3 = this;

          if (!this.InfosLeague[id]) {
            this.apiService.getStats("teams", "league", id).subscribe(function (data) {
              _this3.teams[id] = data['api']['teams']; //console.log(data['api']);
            }, function (error) {
              console.log(error);
            }, function () {
              _this3.loadFixtures(id);
            });
          } else this.assignStandings(id);
        }
      }, {
        key: "loadFixtures",
        value: function loadFixtures(id) {
          var _this4 = this;

          this.apiService.getStats("fixtures", "league", id).subscribe(function (data) {
            _this4.fixtures[id] = data['api']['fixtures'].reverse(); //console.log(data['api']);
          }, function (error) {
            console.log(error);
          }, function () {
            _this4.loadStandings(id);
          });
        }
      }, {
        key: "loadStandings",
        value: function loadStandings(id) {
          var _this5 = this;

          this.apiService.getStats("leagueTable", id).subscribe(function (data) {
            _this5.standings[id] = data['api']; //console.log(data['api']);
          }, function (error) {
            console.log(error);
          }, function () {
            _this5.assignStandings(id);
          });
        }
      }, {
        key: "assignStandings",
        value: function assignStandings(id) {
          var i = 0;
          var rank;

          var _iterator2 = _createForOfIteratorHelper(this.teams[id]),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var team = _step2.value;
              this.assignFixtures(this.id, team.team_id, team.name, team.logo, i);
              i++;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.InfosLeague[id] = this.InfosTeam; //console.log(this.InfosLeague[id]);

          this.setTable();
        }
      }, {
        key: "assignFixtures",
        value: function assignFixtures(id, team_id, team_name, team_logo, index) {
          var rank = "";

          if (this.standings[id]["results"] == 1) {
            var _iterator3 = _createForOfIteratorHelper(this.standings[id]["standings"][0]),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var standing = _step3.value;

                if (standing.team_id == team_id) {
                  rank = standing.rank;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          var i = 0;
          this.infos = [];

          var _iterator4 = _createForOfIteratorHelper(this.fixtures[id]),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var fixture = _step4.value;

              //if(fixture.round.includes('Regular Season') || fixture.round.includes('Regular_Season')){
              if ((fixture.awayTeam.team_id == team_id || fixture.homeTeam.team_id == team_id) && fixture.statusShort == "FT") {
                var fixture_id = fixture.fixture_id;
                this.infos[i] = fixture;
                i++;
              } //}

            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (this.infos.length > 0) {
            this.InfosTeam[index] = new _InfosTeam__WEBPACK_IMPORTED_MODULE_4__["InfosTeam"](team_id, team_name, team_logo, rank, this.infos);
            this.InfosTeam[index].filter = this.filter;
            this.InfosTeam[index].type = this.type;
          }
        }
      }, {
        key: "setFilter",
        value: function setFilter(filter) {
          if (this.filter != filter) {
            this.filter = filter;

            var _iterator5 = _createForOfIteratorHelper(this.InfosLeague[this.id]),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var team = _step5.value;

                if (team) {
                  team.filter = filter;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this.setTable();
          }
        }
      }, {
        key: "setType",
        value: function setType(type) {
          if (this.type != type) {
            this.type = type;

            var _iterator6 = _createForOfIteratorHelper(this.InfosLeague[this.id]),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var team = _step6.value;

                if (team) {
                  team.type = type;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            this.setTable();
          }
        }
      }, {
        key: "setTable",
        value: function setTable() {
          if (this.type == "uo") {
            this.columnDefs = [{
              headerName: "#",
              field: 'rank',
              minWidth: 65,
              width: 70,
              maxWidth: 80,
              sortable: true,
              type: "numericColumn"
            }, {
              headerName: "Équipe",
              field: "team_name",
              minWidth: 180,
              maxWidth: 350,
              sortable: true,
              sort: "asc"
            }, {
              headerName: "G",
              field: "sumG",
              minWidth: 65,
              width: 70,
              maxWidth: 80,
              sortable: true,
              type: "numericColumn",
              valueGetter: this.sumGCellRenderer
            }, {
              headerName: "O",
              field: "sumO",
              minWidth: 65,
              width: 70,
              maxWidth: 80,
              sortable: true,
              type: "numericColumn",
              valueGetter: this.sumOCellRenderer
            }, {
              headerName: "U",
              field: "sumU",
              minWidth: 65,
              width: 70,
              maxWidth: 80,
              sortable: true,
              type: "numericColumn",
              valueGetter: this.sumUCellRenderer
            }, {
              headerName: "Résultats",
              field: "fixtures",
              minWidth: 800,
              cellRenderer: this.fixturesCellRenderer,
              cellRendererParams: {
                filter: this.filter,
                type: this.type
              }
            }];
          } else {
            this.columnDefs = [{
              headerName: "#",
              field: 'rank',
              minWidth: 65,
              width: 70,
              maxWidth: 80,
              sortable: true,
              type: "numericColumn"
            }, {
              headerName: "Équipe",
              field: "team_name",
              minWidth: 180,
              maxWidth: 350,
              sortable: true,
              sort: "asc"
            }, {
              headerName: "G",
              field: "sumG",
              minWidth: 65,
              width: 70,
              maxWidth: 80,
              sortable: true,
              type: "numericColumn",
              valueGetter: this.sumGCellRenderer
            }, {
              headerName: "Y",
              field: "sumY",
              minWidth: 65,
              width: 70,
              maxWidth: 80,
              sortable: true,
              type: "numericColumn",
              valueGetter: this.sumYCellRenderer
            }, {
              headerName: "N",
              field: "sumN",
              minWidth: 65,
              width: 70,
              maxWidth: 80,
              sortable: true,
              type: "numericColumn",
              valueGetter: this.sumNCellRenderer
            }, {
              headerName: "Résultats",
              field: "fixtures",
              minWidth: 800,
              cellRenderer: this.fixturesCellRenderer,
              cellRendererParams: {
                filter: this.filter,
                type: this.type
              }
            }];
          }

          this.rowData = this.InfosLeague[this.id];
        }
      }, {
        key: "sumGCellRenderer",
        value: function sumGCellRenderer(params) {
          return params.data.sumG[params.data.filter];
        }
      }, {
        key: "sumYCellRenderer",
        value: function sumYCellRenderer(params) {
          return params.data.sumY[params.data.filter];
        }
      }, {
        key: "sumNCellRenderer",
        value: function sumNCellRenderer(params) {
          return params.data.sumN[params.data.filter];
        }
      }, {
        key: "sumOCellRenderer",
        value: function sumOCellRenderer(params) {
          return params.data.sumO[params.data.filter];
        }
      }, {
        key: "sumUCellRenderer",
        value: function sumUCellRenderer(params) {
          return params.data.sumU[params.data.filter];
        }
      }, {
        key: "fixturesCellRenderer",
        value: function fixturesCellRenderer(params) {
          var fixtures = params.data.fixtures;
          var retour = "";
          var type;
          var filter;

          var _iterator7 = _createForOfIteratorHelper(fixtures),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var fixture = _step7.value;

              if (params.filter == "all" || params.filter == "home" && fixture.homeTeam.team_id == params.data.team_id || params.filter == "away" && fixture.awayTeam.team_id == params.data.team_id) {
                if (params.type == "uo") {
                  type = fixture.typeUO;
                } else {
                  type = fixture.typeBTS;
                }

                retour += '<div class="fixture ' + type + '" data-toggle="tooltip" data-placement="top" data-html="true" ';
                retour += 'data-original-title="<span class=\'date text-light\'>' + Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(fixture.event_date, 'dd/MM/yyyy - HH:mm', 'en-US') + '</span><span class=\'match\'>' + fixture.homeTeam.team_name + '-' + fixture.awayTeam.team_name + '</span> <span class=\'score\'>' + fixture.score.fulltime + '</span>" onmouseenter="$(this).tooltip(\'show\')">';
                retour += '<span>' + type + '</span>';
                retour += '</div>';
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          return retour;
        }
      }, {
        key: "onFirstDataRendered",
        value: function onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.css */
      "./src/app/main/main.component.css"))["default"]]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/side/side.component.css":
  /*!*****************************************!*\
    !*** ./src/app/side/side.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideSideComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".side{box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)}\r\n\r\n.nav-item img{\r\n\tmin-width: 20px;\r\n\tmax-width: 20px;\r\n\tmargin-right: 15px;\r\n}\r\n\r\n.nav-item{\r\n\tborder-bottom: 1px solid #f3f3f3;\r\n\ttext-transform: uppercase;\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-item a{\r\n\tcolor: #5d5c5d;\r\n\tpadding: 0.4rem 1rem;\r\n\tline-height: 0.9rem;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.nav-item .collapse, .nav-item .collapsing{\r\n\tborder-left: 1px solid #00838f;\r\n\tmargin-left: 2rem;\r\n}\r\n\r\n.nav-link[aria-expanded=\"true\"]{\r\n\tfont-weight: bold;\r\n}\r\n\r\n.collapse li{\r\n\tborder-bottom: 1px solid #f3f3f3;\r\n\tcolor: #5d5c5d;\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-link:hover{\r\n\tbackground:#f2f2f2;\r\n}\r\n\r\n.nav-link .clicked{\r\n\tcolor: #00838f;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS9zaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSw2Q0FBNkM7O0FBRW5EO0NBQ0MsZUFBZTtDQUNmLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUdBO0NBQ0MsZ0NBQWdDO0NBQ2hDLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2lkZS9zaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZXtib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSl9XHJcblxyXG4ubmF2LWl0ZW0gaW1ne1xyXG5cdG1pbi13aWR0aDogMjBweDtcclxuXHRtYXgtd2lkdGg6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubmF2LWl0ZW17XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhe1xyXG5cdGNvbG9yOiAjNWQ1YzVkO1xyXG5cdHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAwLjlyZW07XHJcblx0Zm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5uYXYtaXRlbSAuY29sbGFwc2UsIC5uYXYtaXRlbSAuY29sbGFwc2luZ3tcclxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDgzOGY7XHJcblx0bWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5uYXYtbGlua1thcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXXtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi5jb2xsYXBzZSBsaXtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcclxuXHRjb2xvcjogIzVkNWM1ZDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlcntcclxuXHRiYWNrZ3JvdW5kOiNmMmYyZjI7XHJcbn1cclxuLm5hdi1saW5rIC5jbGlja2Vke1xyXG5cdGNvbG9yOiAjMDA4MzhmO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/side/side.component.ts":
  /*!****************************************!*\
    !*** ./src/app/side/side.component.ts ***!
    \****************************************/

  /*! exports provided: SideComponent */

  /***/
  function srcAppSideSideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideComponent", function () {
      return SideComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../event-emitter.service */
    "./src/app/event-emitter.service.ts");

    var SideComponent = /*#__PURE__*/function () {
      function SideComponent(apiService, eventEmitterService) {
        _classCallCheck(this, SideComponent);

        this.apiService = apiService;
        this.eventEmitterService = eventEmitterService;
        this.leagues = [];
        this.wantedCountries = [{
          code: "DZ"
        }, {
          code: "DE"
        }, {
          code: "AR"
        }, {
          code: "GB"
        }, {
          code: "AU"
        }, {
          code: "AT"
        }, {
          code: "BE"
        }, {
          code: "BY"
        }, {
          code: "BR"
        }, {
          code: "BG"
        }, {
          code: "CL"
        }, {
          code: "CN"
        }, {
          code: "KR"
        }, {
          code: "HR"
        }, {
          code: "DK"
        }, {
          code: "ES"
        }, {
          code: "FI"
        }, {
          code: "FR"
        }, {
          code: "GR"
        }, {
          code: "HU"
        }, {
          code: "IE"
        }, {
          code: "IS"
        }, {
          code: "IT"
        }, {
          code: "JP"
        }, {
          code: "KZ"
        }, {
          code: "LT"
        }, {
          code: "MY"
        }, {
          code: "MA"
        }, {
          code: "ME"
        }, {
          code: "NO"
        }, {
          code: "NL"
        }, {
          code: "PL"
        }, {
          code: "PT"
        }, {
          code: "CZ"
        }, {
          code: "RO"
        }, {
          code: "RU"
        }, {
          code: "RS"
        }, {
          code: "SK"
        }, {
          code: "SI"
        }, {
          code: "SE"
        }, {
          code: "CH"
        }, {
          code: "TN"
        }, {
          code: "TR"
        }, {
          code: "UA"
        }, {
          code: "US"
        }];
        /*
        /* GB = England & Scotland & Wales */
      }

      _createClass(SideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.apiService.getStats("countries").subscribe(function (data) {
            _this6.countries = data['api']['countries'];
            _this6.countries = _this6.countries.filter(function (ar) {
              return _this6.wantedCountries.find(function (wc) {
                return wc.code === ar.code;
              });
            });
          });
        }
      }, {
        key: "loadLeagues",
        value: function loadLeagues(country) {
          var _this7 = this;

          if (!this.leagues[country]) {
            this.apiService.getStats("leagues", "country", country).subscribe(function (data) {
              _this7.leagues[country] = data['api']['leagues']; //console.log(this.leagues[country]);
            });
          }
        }
      }, {
        key: "loadTeams",
        value: function loadTeams(id, country, leagueName) {
          var name = country + " > " + leagueName;
          this.eventEmitterService.onLoadMiddleFrame(id, name);
          this.clicked = id;
        }
      }]);

      return SideComponent;
    }();

    SideComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]
      }];
    };

    SideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/side/side.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side.component.css */
      "./src/app/side/side.component.css"))["default"]]
    })], SideComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Cyril Fromont\OneDrive - VOCALCOM\Documents\Sites\project\foot-project-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map